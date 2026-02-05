// 豆瓣热门电影电视剧推荐功能

// =================== 图片缓存系统 ===================
// 使用 localStorage 缓存已搜索的图片URL，加快加载速度
const DOUBAN_IMAGE_CACHE_KEY = 'doubanImageCache';
const DOUBAN_CACHE_MAX_SIZE = 500; // 最多缓存500条记录
const DOUBAN_CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7天过期

function initImageCache() {
    try {
        const cache = localStorage.getItem(DOUBAN_IMAGE_CACHE_KEY);
        if (!cache) {
            localStorage.setItem(DOUBAN_IMAGE_CACHE_KEY, JSON.stringify({}));
        }
    } catch (e) {
        console.warn('初始化图片缓存失败:', e);
    }
}

function getCachedImage(title) {
    try {
        const cache = JSON.parse(localStorage.getItem(DOUBAN_IMAGE_CACHE_KEY) || '{}');
        const cached = cache[title];
        if (cached && cached.timestamp > Date.now() - DOUBAN_CACHE_EXPIRY) {
            return cached.url;
        }
        // 清理过期数据
        if (cached) {
            delete cache[title];
            localStorage.setItem(DOUBAN_IMAGE_CACHE_KEY, JSON.stringify(cache));
        }
    } catch (e) {
        console.warn('读取缓存失败:', e);
    }
    return null;
}

function setCachedImage(title, url) {
    try {
        const cache = JSON.parse(localStorage.getItem(DOUBAN_IMAGE_CACHE_KEY) || '{}');
        
        // 防止缓存过大，移除旧的条目
        const cacheSize = Object.keys(cache).length;
        if (cacheSize >= DOUBAN_CACHE_MAX_SIZE) {
            const oldestKey = Object.keys(cache).reduce((oldest, key) => {
                return cache[key].timestamp < cache[oldest].timestamp ? key : oldest;
            });
            delete cache[oldestKey];
        }
        
        cache[title] = {
            url: url,
            timestamp: Date.now()
        };
        localStorage.setItem(DOUBAN_IMAGE_CACHE_KEY, JSON.stringify(cache));
    } catch (e) {
        console.warn('保存缓存失败:', e);
    }
}

// 豆瓣标签列表 - 修改为默认标签
let defaultMovieTags = ['热门', '最新', '经典', '豆瓣高分', '冷门佳片', '华语', '欧美', '韩国', '日本', '动作', '喜剧', '日综', '爱情', '科幻', '悬疑', '恐怖', '治愈'];
let defaultTvTags = ['热门', '美剧', '英剧', '韩剧', '日剧', '国产剧', '港剧', '日本动画', '综艺', '纪录片'];

// 用户标签列表 - 存储用户实际使用的标签（包含保留的系统标签和用户添加的自定义标签）
let movieTags = [];
let tvTags = [];

// 加载用户标签
function loadUserTags() {
    try {
        // 尝试从本地存储加载用户保存的标签
        const savedMovieTags = localStorage.getItem('userMovieTags');
        const savedTvTags = localStorage.getItem('userTvTags');
        
        // 如果本地存储中有标签数据，则使用它
        if (savedMovieTags) {
            movieTags = JSON.parse(savedMovieTags);
        } else {
            // 否则使用默认标签
            movieTags = [...defaultMovieTags];
        }
        
        if (savedTvTags) {
            tvTags = JSON.parse(savedTvTags);
        } else {
            // 否则使用默认标签
            tvTags = [...defaultTvTags];
        }
    } catch (e) {
        console.error('加载标签失败：', e);
        // 初始化为默认值，防止错误
        movieTags = [...defaultMovieTags];
        tvTags = [...defaultTvTags];
    }
}

// 保存用户标签
function saveUserTags() {
    try {
        localStorage.setItem('userMovieTags', JSON.stringify(movieTags));
        localStorage.setItem('userTvTags', JSON.stringify(tvTags));
    } catch (e) {
        console.error('保存标签失败：', e);
        showToast('保存标签失败', 'error');
    }
}

let doubanMovieTvCurrentSwitch = 'movie';
let doubanCurrentTag = '热门';
let doubanPageStart = 0;
const doubanPageSize = 16; // 一次显示的项目数量

// 初始化豆瓣功能
function initDouban() {
    // 初始化图片缓存系统
    initImageCache();
    
    // 设置豆瓣开关的初始状态
    const doubanToggle = document.getElementById('doubanToggle');
    if (doubanToggle) {
        const isEnabled = localStorage.getItem('doubanEnabled') === 'true';
        doubanToggle.checked = isEnabled;
        
        // 设置开关外观
        const toggleBg = doubanToggle.nextElementSibling;
        const toggleDot = toggleBg.nextElementSibling;
        if (isEnabled) {
            toggleBg.classList.add('bg-pink-600');
            toggleDot.classList.add('translate-x-6');
        }
        
        // 添加事件监听
        doubanToggle.addEventListener('change', function(e) {
            const isChecked = e.target.checked;
            localStorage.setItem('doubanEnabled', isChecked);
            
            // 更新开关外观
            if (isChecked) {
                toggleBg.classList.add('bg-pink-600');
                toggleDot.classList.add('translate-x-6');
            } else {
                toggleBg.classList.remove('bg-pink-600');
                toggleDot.classList.remove('translate-x-6');
            }
            
            // 更新显示状态
            updateDoubanVisibility();
        });
        
        // 初始更新显示状态
        updateDoubanVisibility();

        // 滚动到页面顶部
        window.scrollTo(0, 0);
    }

    // 加载用户标签
    loadUserTags();

    // 渲染电影/电视剧切换
    renderDoubanMovieTvSwitch();
    
    // 渲染豆瓣标签
    renderDoubanTags();
    
    // 换一批按钮事件监听
    setupDoubanRefreshBtn();
    
    // 初始加载热门内容
    if (localStorage.getItem('doubanEnabled') === 'true') {
        renderRecommend(doubanCurrentTag, doubanPageSize, doubanPageStart);
    }
}

// 根据设置更新豆瓣区域的显示状态
function updateDoubanVisibility() {
    const doubanArea = document.getElementById('doubanArea');
    if (!doubanArea) return;
    
    const isEnabled = localStorage.getItem('doubanEnabled') === 'true';
    const isSearching = document.getElementById('resultsArea') && 
        !document.getElementById('resultsArea').classList.contains('hidden');
    
    // 只有在启用且没有搜索结果显示时才显示豆瓣区域
    if (isEnabled && !isSearching) {
        doubanArea.classList.remove('hidden');
        // 如果豆瓣结果为空，重新加载
        if (document.getElementById('douban-results').children.length === 0) {
            renderRecommend(doubanCurrentTag, doubanPageSize, doubanPageStart);
        }
    } else {
        doubanArea.classList.add('hidden');
    }
}

// 只填充搜索框，不执行搜索，让用户自主决定搜索时机
function fillSearchInput(title) {
    if (!title) return;
    
    // 安全处理标题，防止XSS
    const safeTitle = title
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    
    const input = document.getElementById('searchInput');
    if (input) {
        input.value = safeTitle;
        
        // 聚焦搜索框，便于用户立即使用键盘操作
        input.focus();
        
        // 显示一个提示，告知用户点击搜索按钮进行搜索
        showToast('已填充搜索内容，点击搜索按钮开始搜索', 'info');
    }
}

// 填充搜索框并执行搜索
function fillAndSearch(title) {
    if (!title) return;
    
    // 安全处理标题，防止XSS
    const safeTitle = title
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    
    const input = document.getElementById('searchInput');
    if (input) {
        input.value = safeTitle;
        search(); // 使用已有的search函数执行搜索
        
        // 同时更新浏览器URL，使其反映当前的搜索状态
        try {
            // 使用URI编码确保特殊字符能够正确显示
            const encodedQuery = encodeURIComponent(safeTitle);
            // 使用HTML5 History API更新URL，不刷新页面
            window.history.pushState(
                { search: safeTitle }, 
                `搜索: ${safeTitle} - LibreTV`, 
                `/s=${encodedQuery}`
            );
            // 更新页面标题
            document.title = `搜索: ${safeTitle} - LibreTV`;
        } catch (e) {
            console.error('更新浏览器历史失败:', e);
        }
    }
}

// 填充搜索框，确保豆瓣资源API被选中，然后执行搜索
async function fillAndSearchWithDouban(title) {
    if (!title) return;
    
    // 安全处理标题，防止XSS
    const safeTitle = title
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    
    // 确保豆瓣资源API被选中
    if (typeof selectedAPIs !== 'undefined' && !selectedAPIs.includes('dbzy')) {
        // 在设置中勾选豆瓣资源API复选框
        const doubanCheckbox = document.querySelector('input[id="api_dbzy"]');
        if (doubanCheckbox) {
            doubanCheckbox.checked = true;
            
            // 触发updateSelectedAPIs函数以更新状态
            if (typeof updateSelectedAPIs === 'function') {
                updateSelectedAPIs();
            } else {
                // 如果函数不可用，则手动添加到selectedAPIs
                selectedAPIs.push('dbzy');
                localStorage.setItem('selectedAPIs', JSON.stringify(selectedAPIs));
                
                // 更新选中API计数（如果有这个元素）
                const countEl = document.getElementById('selectedAPICount');
                if (countEl) {
                    countEl.textContent = selectedAPIs.length;
                }
            }
            
            showToast('已自动选择豆瓣资源API', 'info');
        }
    }
    
    // 填充搜索框并执行搜索
    const input = document.getElementById('searchInput');
    if (input) {
        input.value = safeTitle;
        await search(); // 使用已有的search函数执行搜索
        
        // 更新浏览器URL，使其反映当前的搜索状态
        try {
            // 使用URI编码确保特殊字符能够正确显示
            const encodedQuery = encodeURIComponent(safeTitle);
            // 使用HTML5 History API更新URL，不刷新页面
            window.history.pushState(
                { search: safeTitle }, 
                `搜索: ${safeTitle} - LibreTV`, 
                `/s=${encodedQuery}`
            );
            // 更新页面标题
            document.title = `搜索: ${safeTitle} - LibreTV`;
        } catch (e) {
            console.error('更新浏览器历史失败:', e);
        }

        if (window.innerWidth <= 768) {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
        }
    }
}

// 渲染电影/电视剧切换器
function renderDoubanMovieTvSwitch() {
    // 获取切换按钮元素
    const movieToggle = document.getElementById('douban-movie-toggle');
    const tvToggle = document.getElementById('douban-tv-toggle');

    if (!movieToggle ||!tvToggle) return;

    movieToggle.addEventListener('click', function() {
        if (doubanMovieTvCurrentSwitch !== 'movie') {
            // 更新按钮样式
            movieToggle.classList.add('bg-pink-600', 'text-white');
            movieToggle.classList.remove('text-gray-300');
            
            tvToggle.classList.remove('bg-pink-600', 'text-white');
            tvToggle.classList.add('text-gray-300');
            
            doubanMovieTvCurrentSwitch = 'movie';
            doubanCurrentTag = '热门';

            // 重新加载豆瓣内容
            renderDoubanTags(movieTags);

            // 换一批按钮事件监听
            setupDoubanRefreshBtn();
            
            // 初始加载热门内容
            if (localStorage.getItem('doubanEnabled') === 'true') {
                renderRecommend(doubanCurrentTag, doubanPageSize, doubanPageStart);
            }
        }
    });
    
    // 电视剧按钮点击事件
    tvToggle.addEventListener('click', function() {
        if (doubanMovieTvCurrentSwitch !== 'tv') {
            // 更新按钮样式
            tvToggle.classList.add('bg-pink-600', 'text-white');
            tvToggle.classList.remove('text-gray-300');
            
            movieToggle.classList.remove('bg-pink-600', 'text-white');
            movieToggle.classList.add('text-gray-300');
            
            doubanMovieTvCurrentSwitch = 'tv';
            doubanCurrentTag = '热门';

            // 重新加载豆瓣内容
            renderDoubanTags(tvTags);

            // 换一批按钮事件监听
            setupDoubanRefreshBtn();
            
            // 初始加载热门内容
            if (localStorage.getItem('doubanEnabled') === 'true') {
                renderRecommend(doubanCurrentTag, doubanPageSize, doubanPageStart);
            }
        }
    });
}

// 渲染豆瓣标签选择器
function renderDoubanTags(tags) {
    const tagContainer = document.getElementById('douban-tags');
    if (!tagContainer) return;
    
    // 确定当前应该使用的标签列表
    const currentTags = doubanMovieTvCurrentSwitch === 'movie' ? movieTags : tvTags;
    
    // 清空标签容器
    tagContainer.innerHTML = '';

    // 先添加标签管理按钮
    const manageBtn = document.createElement('button');
    manageBtn.className = 'py-1.5 px-3.5 rounded text-sm font-medium transition-all duration-300 bg-[#1a1a1a] text-gray-300 hover:bg-pink-700 hover:text-white border border-[#333] hover:border-white';
    manageBtn.innerHTML = '<span class="flex items-center"><svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>管理标签</span>';
    manageBtn.onclick = function() {
        showTagManageModal();
    };
    tagContainer.appendChild(manageBtn);

    // 添加所有标签
    currentTags.forEach(tag => {
        const btn = document.createElement('button');
        
        // 设置样式
        let btnClass = 'py-1.5 px-3.5 rounded text-sm font-medium transition-all duration-300 border ';
        
        // 当前选中的标签使用高亮样式
        if (tag === doubanCurrentTag) {
            btnClass += 'bg-pink-600 text-white shadow-md border-white';
        } else {
            btnClass += 'bg-[#1a1a1a] text-gray-300 hover:bg-pink-700 hover:text-white border-[#333] hover:border-white';
        }
        
        btn.className = btnClass;
        btn.textContent = tag;
        
        btn.onclick = function() {
            if (doubanCurrentTag !== tag) {
                doubanCurrentTag = tag;
                doubanPageStart = 0;
                renderRecommend(doubanCurrentTag, doubanPageSize, doubanPageStart);
                renderDoubanTags();
            }
        };
        
        tagContainer.appendChild(btn);
    });
}

// 设置换一批按钮事件
function setupDoubanRefreshBtn() {
    // 修复ID，使用正确的ID douban-refresh 而不是 douban-refresh-btn
    const btn = document.getElementById('douban-refresh');
    if (!btn) return;
    
    btn.onclick = function() {
        doubanPageStart += doubanPageSize;
        if (doubanPageStart > 9 * doubanPageSize) {
            doubanPageStart = 0;
        }
        
        renderRecommend(doubanCurrentTag, doubanPageSize, doubanPageStart);
    };
}

function fetchDoubanTags() {
    const movieTagsTarget = `https://movie.douban.com/j/search_tags?type=movie`
    fetchDoubanData(movieTagsTarget)
        .then(data => {
            movieTags = data.tags;
            if (doubanMovieTvCurrentSwitch === 'movie') {
                renderDoubanTags(movieTags);
            }
        })
        .catch(error => {
            console.error("获取豆瓣热门电影标签失败：", error);
        });
    const tvTagsTarget = `https://movie.douban.com/j/search_tags?type=tv`
    fetchDoubanData(tvTagsTarget)
       .then(data => {
            tvTags = data.tags;
            if (doubanMovieTvCurrentSwitch === 'tv') {
                renderDoubanTags(tvTags);
            }
        })
       .catch(error => {
            console.error("获取豆瓣热门电视剧标签失败：", error);
        });
}

// 根据标题搜索获取第一个结果的图片
async function getImageFromSearch(title) {
    try {
        // 优先检查缓存
        const cachedUrl = getCachedImage(title);
        if (cachedUrl) {
            return cachedUrl;
        }

        // 获取已选中的API
        const builtInApiCheckboxes = document.querySelectorAll('#apiCheckboxes input:checked');
        const selectedApis = Array.from(builtInApiCheckboxes).map(input => input.dataset.api);
        
        // 如果没有API被选中，默认使用第一个
        if (selectedApis.length === 0) {
            const firstCheckbox = document.querySelector('#apiCheckboxes input[type="checkbox"]');
            if (firstCheckbox) {
                selectedApis.push(firstCheckbox.dataset.api);
            }
        }
        
        // 尝试每个已选API进行搜索，添加超时控制
        for (const apiId of selectedApis) {
            try {
                // 为每个搜索请求添加3秒超时控制
                const searchPromise = searchByAPIAndKeyWord(apiId, title);
                const timeoutPromise = new Promise((_, reject) => 
                    setTimeout(() => reject(new Error('search timeout')), 3000)
                );
                
                const results = await Promise.race([searchPromise, timeoutPromise]);
                if (results && results.length > 0 && results[0].vod_pic) {
                    const imageUrl = results[0].vod_pic;
                    // 缓存结果
                    setCachedImage(title, imageUrl);
                    return imageUrl;
                }
            } catch (error) {
                // 该API超时或失败，继续尝试下一个
                console.debug(`API ${apiId} 搜索超时或失败:`, title);
                continue;
            }
        }
        
        // 没有找到图片，缓存null以避免重复搜索
        setCachedImage(title, null);
        return null;
    } catch (error) {
        console.error('搜索图片失败:', title, error);
        return null;
    }
}

// 生成随机颜色用于卡片背景
function generateColorFromTitle(title) {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = ((hash << 5) - hash) + title.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
    }
    const hue = Math.abs(hash) % 360;
    const saturation = 60 + (Math.abs(hash) % 20);
    const lightness = 35 + (Math.abs(hash) % 15);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// 渲染热门推荐内容
function renderRecommend(tag, pageLimit, pageStart) {
    const container = document.getElementById("douban-results");
    if (!container) return;

    const loadingOverlayHTML = `
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10">
            <div class="flex items-center justify-center">
                <div class="w-6 h-6 border-2 border-pink-500 border-t-transparent rounded-full animate-spin inline-block"></div>
                <span class="text-pink-500 ml-4">加载中...</span>
            </div>
        </div>
    `;

    container.classList.add("relative");
    container.insertAdjacentHTML('beforeend', loadingOverlayHTML);
    
    const target = `https://movie.douban.com/j/search_subjects?type=${doubanMovieTvCurrentSwitch}&tag=${tag}&sort=recommend&page_limit=${pageLimit}&page_start=${pageStart}`;
    
    // 使用通用请求函数
    fetchDoubanData(target)
        .then(async (data) => {
            await renderDoubanCards(data, container);
        })
        .catch(error => {
            console.error("获取豆瓣数据失败：", error);
            container.innerHTML = `
                <div class="col-span-full text-center py-8">
                    <div class="text-red-400">❌ 获取豆瓣数据失败，请稍后重试</div>
                    <div class="text-gray-500 text-sm mt-2">提示：使用VPN可能有助于解决此问题</div>
                </div>
            `;
        });
}

async function fetchDoubanData(url) {
    // 添加超时控制
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时
    
    // 设置请求选项，包括信号和头部
    const fetchOptions = {
        signal: controller.signal,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            'Referer': 'https://movie.douban.com/',
            'Accept': 'application/json, text/plain, */*',
        }
    };

    try {
        // 添加鉴权参数到代理URL
        const proxiedUrl = await window.ProxyAuth?.addAuthToProxyUrl ? 
            await window.ProxyAuth.addAuthToProxyUrl(PROXY_URL + encodeURIComponent(url)) :
            PROXY_URL + encodeURIComponent(url);
            
        // 尝试直接访问（豆瓣API可能允许部分CORS请求）
        const response = await fetch(proxiedUrl, fetchOptions);
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
    } catch (err) {
        console.error("豆瓣 API 请求失败（直接代理）：", err);
        
        // 失败后尝试备用方法：作为备选
        const fallbackUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        
        try {
            const fallbackResponse = await fetch(fallbackUrl);
            
            if (!fallbackResponse.ok) {
                throw new Error(`备用API请求失败! 状态: ${fallbackResponse.status}`);
            }
            
            const data = await fallbackResponse.json();
            
            // 解析原始内容
            if (data && data.contents) {
                return JSON.parse(data.contents);
            } else {
                throw new Error("无法获取有效数据");
            }
        } catch (fallbackErr) {
            console.error("豆瓣 API 备用请求也失败：", fallbackErr);
            throw fallbackErr; // 向上抛出错误，让调用者处理
        }
    }
}

// 抽取渲染豆瓣卡片的逻辑到单独函数
// 采用分批加载策略，先显示卡片框架，再异步加载图片
async function renderDoubanCards(data, container) {
    // 创建文档片段以提高性能
    const fragment = document.createDocumentFragment();
    
    // 如果没有数据
    if (!data.subjects || data.subjects.length === 0) {
        const emptyEl = document.createElement("div");
        emptyEl.className = "col-span-full text-center py-8";
        emptyEl.innerHTML = `
            <div class="text-pink-500">❌ 暂无数据，请尝试其他分类或刷新</div>
        `;
        fragment.appendChild(emptyEl);
        container.innerHTML = "";
        container.appendChild(fragment);
        return;
    }
    
    // 快速创建卡片框架（不等待图片加载）
    data.subjects.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "bg-[#111] hover:bg-[#222] transition-all duration-300 rounded-lg overflow-hidden flex flex-col transform hover:scale-105 shadow-md hover:shadow-lg";
        card.id = `douban-card-${index}`;
        
        // 生成卡片内容，确保安全显示（防止XSS）
        const safeTitle = item.title
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
        
        const safeRate = (item.rate || "暂无")
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        
        const bgColor = generateColorFromTitle(item.title);
        
        // 初始显示使用背景色和加载指示
        const contentHtml = `
            <div class="relative w-full aspect-[2/3] overflow-hidden cursor-pointer flex items-end justify-start p-3" 
                 style="background: linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%);"
                 onclick="fillAndSearchWithDouban('${safeTitle}')"
                 data-card-index="${index}">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-4 h-4 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                
                <div class="relative z-10 w-full">
                    <div class="text-white font-bold text-sm line-clamp-2 mb-2">${safeTitle}</div>
                    <div class="flex justify-between items-end">
                        <div class="bg-black/60 text-white text-xs px-2 py-1 rounded-sm">
                            <span class="text-yellow-400">★</span> ${safeRate}
                        </div>
                        <div class="bg-black/60 text-white text-xs px-2 py-1 rounded-sm hover:bg-pink-600 transition-colors">
                            <a href="${item.url}" target="_blank" rel="noopener noreferrer" title="在豆瓣查看" onclick="event.stopPropagation();">
                                🔗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // 整合卡片内容
        card.innerHTML = contentHtml + `
            <div class="p-2 text-center bg-[#111]">
                <button onclick="fillAndSearchWithDouban('${safeTitle}')" 
                        class="text-sm font-medium text-white truncate w-full hover:text-pink-400 transition"
                        title="${safeTitle}">
                    ${safeTitle}
                </button>
            </div>
        `;
        
        fragment.appendChild(card);
    });
    
    // 清空并添加所有新元素
    container.innerHTML = "";
    container.appendChild(fragment);
    
    // 后台分批加载图片，更新卡片
    loadDoubanImagesInBatches(data.subjects, container);
}

// 分批加载豆瓣图片，每批3个以平衡速度和网络负载
async function loadDoubanImagesInBatches(subjects, container, batchSize = 3) {
    const BATCH_DELAY = 100; // 批次间延迟100ms，避免突发并发太高
    
    for (let i = 0; i < subjects.length; i += batchSize) {
        const batch = subjects.slice(i, i + batchSize);
        
        // 并行加载本批次的图片
        await Promise.allSettled(
            batch.map(async (item, batchIndex) => {
                const globalIndex = i + batchIndex;
                const imageUrl = await getImageFromSearch(item.title);
                
                // 更新对应的卡片
                if (imageUrl) {
                    updateDoubanCardWithImage(globalIndex, imageUrl, item);
                }
            })
        );
        
        // 批次之间稍微延迟，避免过度并发
        if (i + batchSize < subjects.length) {
            await new Promise(resolve => setTimeout(resolve, BATCH_DELAY));
        }
    }
}

// 使用图片更新卡片内容
function updateDoubanCardWithImage(index, imageUrl, item) {
    const card = document.getElementById(`douban-card-${index}`);
    if (!card) return;
    
    const safeTitle = item.title
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    
    const safeRate = (item.rate || "暂无")
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    
    // 更新卡片的图片部分
    const imageHtml = `
        <div class="relative w-full aspect-[2/3] overflow-hidden cursor-pointer" onclick="fillAndSearchWithDouban('${safeTitle}')">
            <img src="${imageUrl}" alt="${safeTitle}" 
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
                onerror="this.parentElement.style.display='none'; this.parentElement.nextElementSibling.style.display='flex';">
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div class="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-sm">
                <span class="text-yellow-400">★</span> ${safeRate}
            </div>
            <div class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-sm hover:bg-[#333] transition-colors">
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" title="在豆瓣查看" onclick="event.stopPropagation();">
                    🔗
                </a>
            </div>
        </div>
    `;
    
    const bgColor = generateColorFromTitle(item.title);
    const fallbackHtml = `
        <div class="relative w-full aspect-[2/3] overflow-hidden cursor-pointer flex items-end justify-start p-3" 
             style="background: linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%); display: none;"
             onclick="fillAndSearchWithDouban('${safeTitle}')">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            
            <div class="relative z-10 w-full">
                <div class="text-white font-bold text-sm line-clamp-2 mb-2">${safeTitle}</div>
                <div class="flex justify-between items-end">
                    <div class="bg-black/60 text-white text-xs px-2 py-1 rounded-sm">
                        <span class="text-yellow-400">★</span> ${safeRate}
                    </div>
                    <div class="bg-black/60 text-white text-xs px-2 py-1 rounded-sm hover:bg-pink-600 transition-colors">
                        <a href="${item.url}" target="_blank" rel="noopener noreferrer" title="在豆瓣查看" onclick="event.stopPropagation();">
                            🔗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 只替换图片部分，保留下面的标题区域
    card.innerHTML = imageHtml + fallbackHtml + `
        <div class="p-2 text-center bg-[#111]">
            <button onclick="fillAndSearchWithDouban('${safeTitle}')" 
                    class="text-sm font-medium text-white truncate w-full hover:text-pink-400 transition"
                    title="${safeTitle}">
                ${safeTitle}
            </button>
        </div>
    `;
}

// 重置到首页
function resetToHome() {
    resetSearchArea();
    updateDoubanVisibility();
}

// 加载豆瓣首页内容
document.addEventListener('DOMContentLoaded', initDouban);

// 显示标签管理模态框
function showTagManageModal() {
    // 确保模态框在页面上只有一个实例
    let modal = document.getElementById('tagManageModal');
    if (modal) {
        document.body.removeChild(modal);
    }
    
    // 创建模态框元素
    modal = document.createElement('div');
    modal.id = 'tagManageModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40';
    
    // 当前使用的标签类型和默认标签
    const isMovie = doubanMovieTvCurrentSwitch === 'movie';
    const currentTags = isMovie ? movieTags : tvTags;
    const defaultTags = isMovie ? defaultMovieTags : defaultTvTags;
    
    // 模态框内容
    modal.innerHTML = `
        <div class="bg-[#191919] rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            <button id="closeTagModal" class="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">&times;</button>
            
            <h3 class="text-xl font-bold text-white mb-4">标签管理 (${isMovie ? '电影' : '电视剧'})</h3>
            
            <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                    <h4 class="text-lg font-medium text-gray-300">标签列表</h4>
                    <button id="resetTagsBtn" class="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded">
                        恢复默认标签
                    </button>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4" id="tagsGrid">
                    ${currentTags.length ? currentTags.map(tag => {
                        // "热门"标签不能删除
                        const canDelete = tag !== '热门';
                        return `
                            <div class="bg-[#1a1a1a] text-gray-300 py-1.5 px-3 rounded text-sm font-medium flex justify-between items-center group">
                                <span>${tag}</span>
                                ${canDelete ? 
                                    `<button class="delete-tag-btn text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" 
                                        data-tag="${tag}">✕</button>` : 
                                    `<span class="text-gray-500 text-xs italic opacity-0 group-hover:opacity-100">必需</span>`
                                }
                            </div>
                        `;
                    }).join('') : 
                    `<div class="col-span-full text-center py-4 text-gray-500">无标签，请添加或恢复默认</div>`}
                </div>
            </div>
            
            <div class="border-t border-gray-700 pt-4">
                <h4 class="text-lg font-medium text-gray-300 mb-3">添加新标签</h4>
                <form id="addTagForm" class="flex items-center">
                    <input type="text" id="newTagInput" placeholder="输入标签名称..." 
                           class="flex-1 bg-[#222] text-white border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-pink-500">
                    <button type="submit" class="ml-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded">添加</button>
                </form>
                <p class="text-xs text-gray-500 mt-2">提示：标签名称不能为空，不能重复，不能包含特殊字符</p>
            </div>
        </div>
    `;
    
    // 添加模态框到页面
    document.body.appendChild(modal);
    
    // 焦点放在输入框上
    setTimeout(() => {
        document.getElementById('newTagInput').focus();
    }, 100);
    
    // 添加事件监听器 - 关闭按钮
    document.getElementById('closeTagModal').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // 添加事件监听器 - 点击模态框外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // 添加事件监听器 - 恢复默认标签按钮
    document.getElementById('resetTagsBtn').addEventListener('click', function() {
        resetTagsToDefault();
        showTagManageModal(); // 重新加载模态框
    });
    
    // 添加事件监听器 - 删除标签按钮
    const deleteButtons = document.querySelectorAll('.delete-tag-btn');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tagToDelete = this.getAttribute('data-tag');
            deleteTag(tagToDelete);
            showTagManageModal(); // 重新加载模态框
        });
    });
    
    // 添加事件监听器 - 表单提交
    document.getElementById('addTagForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const input = document.getElementById('newTagInput');
        const newTag = input.value.trim();
        
        if (newTag) {
            addTag(newTag);
            input.value = '';
            showTagManageModal(); // 重新加载模态框
        }
    });
}

// 添加标签
function addTag(tag) {
    // 安全处理标签名，防止XSS
    const safeTag = tag
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    
    // 确定当前使用的是电影还是电视剧标签
    const isMovie = doubanMovieTvCurrentSwitch === 'movie';
    const currentTags = isMovie ? movieTags : tvTags;
    
    // 检查是否已存在（忽略大小写）
    const exists = currentTags.some(
        existingTag => existingTag.toLowerCase() === safeTag.toLowerCase()
    );
    
    if (exists) {
        showToast('标签已存在', 'warning');
        return;
    }
    
    // 添加到对应的标签数组
    if (isMovie) {
        movieTags.push(safeTag);
    } else {
        tvTags.push(safeTag);
    }
    
    // 保存到本地存储
    saveUserTags();
    
    // 重新渲染标签
    renderDoubanTags();
    
    showToast('标签添加成功', 'success');
}

// 删除标签
function deleteTag(tag) {
    // 热门标签不能删除
    if (tag === '热门') {
        showToast('热门标签不能删除', 'warning');
        return;
    }
    
    // 确定当前使用的是电影还是电视剧标签
    const isMovie = doubanMovieTvCurrentSwitch === 'movie';
    const currentTags = isMovie ? movieTags : tvTags;
    
    // 寻找标签索引
    const index = currentTags.indexOf(tag);
    
    // 如果找到标签，则删除
    if (index !== -1) {
        currentTags.splice(index, 1);
        
        // 保存到本地存储
        saveUserTags();
        
        // 如果当前选中的是被删除的标签，则重置为"热门"
        if (doubanCurrentTag === tag) {
            doubanCurrentTag = '热门';
            doubanPageStart = 0;
            renderRecommend(doubanCurrentTag, doubanPageSize, doubanPageStart);
        }
        
        // 重新渲染标签
        renderDoubanTags();
        
        showToast('标签删除成功', 'success');
    }
}

// 重置为默认标签
function resetTagsToDefault() {
    // 确定当前使用的是电影还是电视剧
    const isMovie = doubanMovieTvCurrentSwitch === 'movie';
    
    // 重置为默认标签
    if (isMovie) {
        movieTags = [...defaultMovieTags];
    } else {
        tvTags = [...defaultTvTags];
    }
    
    // 设置当前标签为热门
    doubanCurrentTag = '热门';
    doubanPageStart = 0;
    
    // 保存到本地存储
    saveUserTags();
    
    // 重新渲染标签和内容
    renderDoubanTags();
    renderRecommend(doubanCurrentTag, doubanPageSize, doubanPageStart);
    
    showToast('已恢复默认标签', 'success');
}