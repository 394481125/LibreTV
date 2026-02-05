const CUSTOMER_SITES = {
  // --- 热门/综合资源 ---
  qiqi: {
    api: 'https://www.qiqidys.com/api.php/provide/vod',
    name: '七七资源',
  },
  hongniu: {
    api: 'https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8/',
    name: '紅牛資源',
  },
  hongniu_vod: {
    api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
    name: '红牛|点播',
  },
  liangzi: {
    api: 'https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8/',
    name: '量子資源',
  },
  liangzi_vod: {
    api: 'https://cj.lziapi.com/api.php/provide/vod/',
    name: '量子|点播',
  },
  opendemo: {
    api: 'https://vod-demo.onrender.com/pubdovod.php',
    name: '開放電影',
  },
  youzhi: {
    api: 'https://api.1080zyku.com/inc/api.php/provide/vod/',
    name: '优质资源库',
  },
  sanjiu: {
    api: 'https://www.39kan.com/api.php/provide/vod/',
    name: '39影視',
  },
  tiantang: {
    api: 'http://vipmv.cc/api.php/provide/vod/',
    name: '天堂资源',
  },
  lehuo: {
    api: 'https://lehootv.com/api.php/provide/vod/',
    name: '乐活影视',
  },
  tangrenjie: {
    api: 'https://www.tangrenjie.tv/api.php/provide/vod/',
    name: '唐人街',
  },
  tangrenjie_xm: {
    api: 'http://tangrenjie.tv/api.php/provide/vod/at/xm',
    name: '唐人街|XM',
  },
  kudian: {
    api: 'https://api.kuapi.cc/api.php/provide/vod/',
    name: '酷点资源',
  },
  kudian_v10: {
    api: 'http://kudian10.com/api.php/provide/vod',
    name: '酷点资源V10',
  },
  wolong: {
    api: 'https://collect.wolongzyw.com/api.php/provide/vod/',
    name: '卧龙资源',
  },
  senlin: {
    api: 'https://slapibf.com/api.php/provide/vod/',
    name: '森林资源',
  },
  yingku: {
    api: 'https://api.ykapi.net/api.php/provide/vod/',
    name: '影库资源网',
  },
  kuaiche: {
    api: 'https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8/',
    name: '快车资源',
  },
  tantan: {
    api: 'https://apittzy.com/api.php/provide/vod/',
    name: '探探资源',
  },
  shandian: {
    api: 'https://sdzyapi.com/api.php/provide/vod/from/sdm3u8/',
    name: '閃電資源',
  },
  shandian_vod: {
    api: 'http://sdzyapi.com/api.php/provide/vod/',
    name: '闪电|点播',
  },
  jinying: {
    api: 'https://jyzyapi.com/provide/vod/from/jinyingm3u8/',
    name: '金鹰资源',
  },
  guangsu: {
    api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8/',
    name: '光速资源',
  },
  aosika: {
    api: 'https://aosikazy.com/api.php/provide/vod/',
    name: '奥斯卡资源网',
  },
  laoya: {
    api: 'https://api.apilyzy.com/api.php/provide/vod/',
    name: '老鸭资源采集',
  },
  uku: {
    api: 'https://api.ukuapi.com/api.php/provide/vod/',
    name: 'U酷资源',
  },
  beidouxing: {
    api: 'https://m3u8.bdxzyapi.com/api.php/provide/vod/',
    name: '北斗星资源',
  },
  yinghua: {
    api: 'https://m3u8.apiyhzy.com/api.php/provide/vod/',
    name: '樱花资源网',
  },
  feisu: {
    api: 'https://www.feisuzy.com/api.php/provide/vod/',
    name: '飞速资源',
  },
  feisu_vod: {
    api: 'https://www.feisuzyapi.com/api.php/provide/vod/',
    name: '飞速|点播',
  },
  kuaibo: {
    api: 'http://www.kuaibozy.com/api.php/provide/vod/',
    name: '快播资源',
  },
  baidu: {
    api: 'https://api.apibdzy.com/api.php/provide/vod/',
    name: '百度资源',
  },
  aidan: {
    api: 'https://lovedan.net/api.php/provide/vod/',
    name: '艾旦影视',
  },
  piaohua: {
    api: 'http://www.zzrhgg.com/api.php/provide/vod/',
    name: '飘花电影',
  },
  piaohua_json: {
    api: 'http://www.ahjiuman.com/api.php/provide/vod/at/json',
    name: '飘花|点播JSON',
  },
  wangmin: {
    api: 'https://www.prinevillesda.org/api.php/provide/vod/',
    name: '网民电影',
  },
  siwa: {
    api: 'https://siwazyw.cc/api.php/provide/vod/',
    name: '丝袜资源',
  },
  tiankong: {
    api: 'https://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8/',
    name: '天空資源',
  },
  haiwaikan: {
    api: 'https://haiwaikan.com/api.php/provide/vod/',
    name: '海外看資源',
  },
  sanliuling: {
    api: 'https://360zy.com/api.php/provide/vod/',
    name: '360|点播',
  },
  heimuer: {
    api: 'https://www.heimuer.tv/api.php/provide/vod',
    name: '黑木耳|点播',
  },
  citong: {
    api: 'http://ys9.cttv.vip/api.php/provide/vod/',
    name: '刺桐|点播',
  },
  guanwang: {
    api: 'http://gwcms.cttv.vip/api.php/provide/vod/',
    name: '官网|点播',
  },
  yeyu: {
    api: 'https://yyff.540734621.xyz/api.php/provide/vod/',
    name: '业余|点播',
  },
  huaweiba: {
    api: 'https://hw8.live/api.php/provide/vod/',
    name: '华为吧|点播',
  },
  xiaohuangren: {
    api: 'https://iqyi.xiaohuangrentv.com/api.php/provide/vod/',
    name: '小黄人|点播',
  },
  niuniu: {
    api: 'https://api.niuniuzy.me/api.php/provide/vod/',
    name: '牛牛|点播',
  },
  yaya: {
    api: 'https://cj.yayazy.net/api.php/provide/vod/',
    name: '丫丫|点播',
  },
  haohua: {
    api: 'https://hhzyapi.com/api.php/provide/vod/',
    name: '豪华|点播',
  },
  jisu: {
    api: 'https://jszyapi.com/api.php/provide/vod',
    name: '极速|点播',
  },
  jisu_tv: {
    api: 'https://jszy.tv/api.php/provide/vod/',
    name: '极速资源TV',
  },
  sijiu: {
    api: 'https://49zyw.com/api.php/provide/vod/',
    name: '四九|点播',
  },
  suoni: {
    api: 'https://suoniapi.com/api.php/provide/vod/',
    name: '索尼|点播',
  },
  ikun: {
    api: 'https://ikunzyapi.com/api.php/provide/vod/',
    name: 'ikun|点播',
  },
  feifan: {
    api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
    name: '非凡|点播',
  },
  baofeng: {
    api: 'https://bfzyapi.com/api.php/provide/vod/',
    name: '暴风|点播',
  },
  kuaiikan: {
    api: 'https://www.kuaikan-api.com/api.php/provide/vod/',
    name: '快看|点播',
  },
  xiongzhang: {
    api: 'https://xzcjz.com/api.php/provide/vod/',
    name: '熊掌|点播',
  },
  tianyi: {
    api: 'https://www.911ysw.top/tianyi.php/provide/vod/',
    name: '天翼|点播',
  },
  huya: {
    api: 'https://www.huyaapi.com/api.php/provide/vod/',
    name: '虎牙|点播',
  },
  piaoling: {
    api: 'https://p2100.net/api.php/provide/vod/',
    name: '飘零|点播',
  },
  wujin: {
    api: 'https://api.wujinapi.com/api.php/provide/vod/',
    name: '无尽|点播',
  },
  wujin_new: {
    api: 'https://api.wujinapi.net/api.php/provide/vod/',
    name: '无尽资源(Net)',
  },
  subo: {
    api: 'https://subocaiji.com/api.php/provide/vod/',
    name: '速博|点播',
  },
  modu: {
    api: 'https://caiji.moduapi.cc/api.php/provide/vod/',
    name: '魔都|点播',
  },
  modu_new: {
    api: 'https://www.moduzy.com/api.php/provide/vod/',
    name: '魔都资源',
  },
  zuida: {
    api: 'http://zuidazy.me/api.php/provide/vod/',
    name: '最大|点播',
  },
  zuidapi: {
    api: 'https://api.zuidapi.com/api.php/provide/vod/from/zuidam3u8/',
    name: '最大资源New',
  },
  qihu: {
    api: 'https://caiji.qhzyapi.com/api.php/provide/vod/',
    name: '奇虎|点播',
  },
  xinlang: {
    api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/',
    name: '新浪|点播',
  },
  kuaiyun: {
    api: 'https://www.kuaiyunzy.com/api.php/provide/vod/',
    name: '快云|点播',
  },
  huangguan: {
    api: 'https://hghhh.com/api.php/provide/vod/',
    name: '皇冠',
  },
  yimeng: {
    api: 'http://anltv.cn/api.php/provide/vod/',
    name: '忆梦',
  },
  m3u8tv: {
    api: 'https://www.zycaiji.net:7788/api.php/provide/vod/',
    name: 'M3U8TV',
  },
  xinma: {
    api: 'https://movie.gsl99.com/api.php/provide/vod/',
    name: '新马影视',
  },
  aliys: {
    api: 'http://aliys.cn:90/api.php/provide/vod/',
    name: '阿里影视',
  },
  dav88: {
    api: 'https://www.888dav.com/api.php/provide/vod/',
    name: '88dav',
  },
  shuimitao: {
    api: 'http://51smt4.xyz/api.php/provide/vod/',
    name: '水蜜桃',
  },
  keke: {
    api: 'https://caiji.kekezyapi.com/api.php/provide/vod/',
    name: '可可资源',
  },
  fox: {
    api: 'https://api.foxzyapi.com/api.php/provide/vod/',
    name: 'FOX资源',
  },
  ziyuan88: {
    api: 'http://99zy.pw/api.php/provide/vod/at/json/',
    name: '88资源',
  },
  yule: {
    api: 'https://api.ylzy1.com/api.php/provide/vod/',
    name: '鱼乐资源',
  },
  mifeng: {
    api: 'https://www.beeyao.com/api.php/provide/vod/',
    name: '蜜蜂影视',
  },
  senanguo: {
    api: 'https://api.sexnguon.com/api.php/provide/vod/',
    name: '色南国',
  },
  dadi: {
    api: 'https://dadiapi.com/api.php/provide/vod/at/json',
    name: '大地',
  },
  sewo: {
    api: 'https://sewozyapi.com/api.php/provide/vod/',
    name: '色窝',
  },
  ys243: {
    api: 'https://www.knyu.net/api.php/provide/vod/',
    name: '243影视',
  },
  kkxiezhen: {
    api: 'https://kkzy.me/api.php/provide/vod/',
    name: 'KK写真',
  },
  guose: {
    api: 'https://api.guosezy.com/api.php/provide/vod/',
    name: '国色',
  },
  lebo: {
    api: 'https://lebcj.com/api.php/provide/vod/',
    name: '乐博资源',
  },
  lebo_v2: {
    api: 'https://lbapi9.com/api.php/provide/vod/at/json',
    name: '乐博资源V2',
  },
  aiku: {
    api: 'https://cj1.apiabzy.com/api.php/provide/vod/',
    name: '爱酷影视',
  },
  reba: {
    api: 'http://reba.aishunxs.com/api.php/provide/vod/',
    name: '热巴',
  },
  kudou: {
    api: 'https://api.kdapi.info/api.php/provide/vod/',
    name: '酷豆',
  },
  kudou_new: {
    api: 'https://kudouzy.com/api.php/provide/vod/',
    name: '酷豆资源New',
  },
  huajiao: {
    api: 'https://apihjzy.com/api.php/provide/vod/',
    name: '花椒',
  },
  jinlian: {
    api: 'https://111kkkkk.com/api.php/provide/vod/',
    name: '金莲',
  },
  md91: {
    api: 'https://91md.me/api.php/provide/vod/from/mdm3u8/',
    name: '91md',
  },
  md91_cc: {
    api: 'https://md91.cc/api.php/provide/vod/',
    name: '91麻豆CC',
  },
  langyou: {
    api: 'https://www.langyouzy.com/api.php/provide/vod/',
    name: '狼友',
  },
  yinwo: {
    api: 'https://api.yinwoapi.com/api.php/provide/vod/',
    name: '淫窝',
  },
  yingmi: {
    api: 'https://www.inmi.app/api.php/provide/vod/',
    name: '映迷',
  },
  xiaomaomi: {
    api: 'http://zy.rryy.tv/api.php/provide/vod/',
    name: '小猫咪2',
  },
  asmr: {
    api: 'http://www.asmr19.in/api.php/provide/vod/',
    name: 'ASMR资源',
  },
  ckzy: {
    api: 'https://ckzy.me/api.php/provide/vod/',
    name: 'CK资源',
  },
  feifei: {
    api: 'http://www.feifei67.com/api.php/provide/vod/',
    name: 'CK资源2',
  },
  jav: {
    api: 'http://mygzycj.com/api.php',
    name: 'JAV名优',
  },
  semao: {
    api: 'https://api.maozyapi.com/inc/apijson_vod.php',
    name: '色猫资源',
  },
  putao: {
    api: 'https://api.putaozy.net/inc/apijson_vod.php',
    name: '葡萄资源',
  },
  damm: {
    api: 'https://www.dmmapi.com/home/cjapi/asd2c7/mc10/vod/json',
    name: '大MM资源',
  },
  naicha: {
    api: 'https://caiji.naichaapi.com/inc/apijson_vod.php',
    name: '奶茶资源',
  },
  meishaonv: {
    api: 'https://www.msnii.com/api/json.php',
    name: '美少女资源',
  },
  yinshuiji: {
    api: 'https://www.xrbsp.com/api/json.php',
    name: '淫水机资源',
  },
  xiangnaier: {
    api: 'https://www.gdlsp.com/api/json.php',
    name: '香奶儿资源',
  },
  baipiao: {
    api: 'https://www.kxgav.com/api/json.php',
    name: '白嫖资源',
  },
  huanya: {
    api: 'http://wmcj8.com/inc/sapi.php',
    name: '环亚资源',
  },
  huangav: {
    api: 'https://www.pgxdy.com/api/json.php',
    name: '黄AV资源',
  },
  sese: {
    api: 'http://secj8.com/inc/sapi.php',
    name: '色色资源',
  },
  jiujiu: {
    api: 'http://99zywcj.com/inc/sapi.php',
    name: '玖玖资源',
  },
  langshaonian: {
    api: 'http://cjmygzy.com/inc/sapi.php',
    name: '狼少年',
  },
  jiali: {
    api: 'http://www.jializyzapi.com/api.php/provide/vod/',
    name: '佳丽资源',
  },
  fanhao: {
    api: 'http://fhapi9.com/api.php/provide/vod/',
    name: '番号资源',
  },
  shayu: {
    api: 'https://shayuapi.com/api.php/provide/vod/',
    name: '鲨鱼资源',
  },
  ggmm: {
    api: 'http://www.ggmmzy.com:9999/inc/json',
    name: '哥哥妹妹',
  },
  mangguo: {
    api: 'https://mgzyz1.com/api.php/provide/vod/',
    name: '芒果资源',
  },
  mangguo_av: {
    api: 'https://www.mgav1.cc/api.php/provide/vod/at/xml/',
    name: '芒果AV',
  },
  yikan: {
    api: 'https://api.yikanapi.com/api.php/provide/vod/',
    name: '易看资源-伦理',
  },
  jianghu: {
    api: 'http://119.29.1.173/api.php/provide/vod/',
    name: '江湖官采',
  },
  u6zy: {
    api: 'http://www.6uzy.cc/inc/apijson_vod.php',
    name: '6U资源',
  },
  bajie: {
    api: 'https://www.bajiezy.xyz/api.php/provide/vod/',
    name: '八戒官采',
  },
  tugou2345: {
    api: 'http://2345.tgzy.cc/api.php/provide/vod/',
    name: '土狗2345',
  },
  tugou360: {
    api: 'http://360.tgzy.cc/api.php/provide/vod/',
    name: '土狗360',
  },
  nxflv: {
    api: 'http://caiji.nxflv.com/api.php/provide/vod/',
    name: '诺讯资源',
  },
  aike: {
    api: 'https://ikcss.cn/api.php/provide/vod/',
    name: '艾克资源',
  },
  devclh: {
    api: 'http://zl.devclh.top/api.php/provide/vod/',
    name: 'devclh资源',
  },
  jihu: {
    api: 'http://82.156.186.35:5678/api.php/provide/vod/',
    name: '极狐官采',
  },
  muzi: {
    api: 'https://mzkj.maccms.cf/api.php/provide/vod/',
    name: '木子看剧',
  },
  jueying: {
    api: 'https://106.12.153.187/api.php/provide/vod/',
    name: '绝影',
  },
  ayuan: {
    api: 'https://www.cjzy.xyz:8888/api.php/provide/vod/',
    name: '阿远采集',
  },
  jisubt: {
    api: 'https://api.jisubt.com/videos',
    name: '极速BT资源',
  },
  yparse: {
    api: 'https://api.yparse.com/api/json',
    name: '步步高资源',
  },
  lantian: {
    api: 'https://api.ltzyapi.com/api.php/provide/vod/',
    name: '蓝天资源',
  },
  jike: {
    api: 'https://jkzy1.com/api.php/provide/vod/from/zkzym3u8/',
    name: '极客资源',
  },
  xinghai: {
    api: 'https://www.xhzy01.com/api.php/provide/vod/',
    name: '星海资源',
  },
  guanjun: {
    api: 'https://www.cmpzy.com/api.php/provide/vod/',
    name: '冠军资源',
  },
  tom: {
    api: 'https://api.tomcaiji.com/api.php/provide/vod/',
    name: 'TOM资源',
  },
  songshu: {
    api: 'https://m3u8.songshuzy.com/api.php/provide/vod/',
    name: '松鼠资源',
  },
  duoduo: {
    api: 'https://www.ddzyz1.com/api.php/provide/vod/',
    name: '多多资源',
  },
  okcj: {
    api: 'https://www.okcj.site/api/provide/vod/',
    name: 'OK资源',
  },
  fqzy: {
    api: 'http://api.fqzy.cc/api.php/provide/vod/',
    name: '番茄资源',
  },
  sugeng: {
    api: 'https://sugengzy.cn/api.php/provide/vod/',
    name: '速更资源',
  },
  hanju: {
    api: 'http://www.hanjuzy.com/inc/apijson_vod.php',
    name: '韩剧资源',
  },
  hanju77: {
    api: 'https://www.77hanju.com/api.php/provide/vod/',
    name: '77韩剧',
  },
  leduo: {
    api: 'http://cj.leduocaiji.com/inc/api.php',
    name: '乐多资源',
  },
  ff9: {
    api: 'https://www.ff9.top/api.php/provide/vod/',
    name: 'FF9资源',
  },
  nguon: {
    api: 'http://api.nguonphim.tv/api.php/provide/vod/',
    name: '南国影源',
  },
  hikan: {
    api: 'https://zy.hikan.xyz/api.php/provide/vod/',
    name: '看看资源',
  },
  taopian: {
    api: 'https://taopianapi.com/home/cjapi/as/mc10/vod/json',
    name: '淘片资源',
  },
  rrvip: {
    api: 'https://www.rrvipw.com/api.php/provide/vod/',
    name: '789盘',
  },
  zhanlang: {
    api: 'https://www.zhanlangbu.com/api.php/provide/vod/',
    name: '战狼资源',
  },
  ssxmall: {
    api: 'http://appimg.ssxmall.cn/api.php/provide/vod/',
    name: '旋风云',
  },
  longteng: {
    api: 'http://175.178.7.35:2020/api.php/provide/vod/',
    name: '龙腾资源',
  },
  netflixmi: {
    api: 'https://app.netflixmi.com/api.php/provide/vod/',
    name: '奈菲迷',
  },
  yanaifei: {
    api: 'http://newtv.yanaifei.cn/api.php/provide/vod/',
    name: '鸭奈飞',
  },
  naifeiyun: {
    api: 'http://45.125.46.41:4433/api.php/provide/vod/',
    name: '奈飞云',
  },
  muxvip: {
    api: 'https://muxnb.muxvip.com/api.php/provide/vod/',
    name: 'Mux切片',
  },
  tujutv: {
    api: 'http://tujutv.top/api.php/provide/vod/',
    name: '土剧TV',
  },
  xyui: {
    api: 'http://jx4.xyui.top:7001/api.php/provide/vod/',
    name: 'XYUI',
  },
  omofun: {
    api: 'https://app.omofun.net/api.php/provide/vod/',
    name: 'OmoFun',
  },
  ikaola: {
    api: 'https://ikaola.tv/api.php/provide/vod/',
    name: '考拉TV',
  },
  tvzy: {
    api: 'http://eh.tvzy.cc/api.php/provide/vod/',
    name: '盒子视界',
  },
  kanju51: {
    api: 'http://www.51kanju.cn/api.php/provide/vod/',
    name: '51看剧',
  },
  xxhhsc: {
    api: 'http://xxhhsc.top/api.php/provide/vod/',
    name: '波比影视',
  },
  siguyy: {
    api: 'https://www.siguyy.com/api.php/provide/vod/',
    name: '思古影院',
  },
  reboju: {
    api: 'http://app.reboju.net/api.php/provide/vod/',
    name: '畅视影视',
  },
  okmedcos: {
    api: 'https://app.okmedcos.com/api.php/provide/vod/',
    name: '影视大全',
  },
  yss6080: {
    api: 'http://luobu.yss6080.com/api.php/provide/vod/',
    name: '益达影院',
  },
  vodimg: {
    api: 'https://cj.vodimg.top/api.php/provide/vod/',
    name: '影图',
  },
  id190: {
    api: 'http://id190.tpddns.cn:81/mogai_api.php/provide/vod/',
    name: '爱兜视频',
  },
  tcspvip: {
    api: 'http://tcspvip.cn/api.php/provide/vod/',
    name: '天诚影视',
  },
  en7: {
    api: 'http://app.7en7.com/api.php/provide/vod/',
    name: '瞬间影视',
  },
  h1080p: {
    api: 'http://www.h1080p.com/api.php/provide/vod/',
    name: '氢视频',
  },
  baozi66: {
    api: 'http://cj.baozi66.top:66/api.php/provide/vod/',
    name: '雨哥哥影视',
  },
  pankk: {
    api: 'http://tvcaiji.pankk.cn/api.php/provide/vod/',
    name: '盘看看',
  },
  d8bi: {
    api: 'https://www.d8bi.cn/api.php/provide/vod/',
    name: '迪吧',
  },
  cccvvv: {
    api: 'https://www.cccvvv.top/api.php/provide/vod/',
    name: 'CV影视',
  },
  dian30: {
    api: 'https://www.30dian.cn/api.php/provide/vod/',
    name: '创艺影视',
  },
  rcz168: {
    api: 'http://tv.rcz168.com/api.php/provide/vod/',
    name: '日诚影院',
  },
  xgvod: {
    api: 'http://v.xgvod.top/api.php/provide/vod/',
    name: '香瓜影视',
  },
  top204240: {
    api: 'http://204240.top:8899/api.php/provide/vod/',
    name: '私人影视',
  },
  rctv: {
    api: 'http://rctv.top/api.php/provide/vod/',
    name: 'MX影院',
  },
  dog4k: {
    api: 'http://4kdog.tk/api.php/provide/vod/',
    name: '4K狗',
  },
  mytvhome: {
    api: 'http://mytvhome.xyz/api.php/provide/vod/',
    name: '电视家',
  },
  gbxy: {
    api: 'http://lb.gbxy.net.cn/api.php/provide/vod/',
    name: '九狐影视',
  },
  vip857: {
    api: 'http://vip857.top/api.php/provide/vod/',
    name: '幻风影视',
  },
  qq120: {
    api: 'http://yingshi.qq120.top/api.php/provide/vod/',
    name: '白嫖影视',
  },
  xixi2yy: {
    api: 'https://xc.xixi2yy.xyz/api.php/provide/vod/',
    name: '影视大全2',
  },
  baicai: {
    api: 'http://xydm.baicai.buzz/api.php/provide/vod/',
    name: '小鸟动漫',
  },
  woniu: {
    api: 'http://woniudm.woniu.cyou:20000/api.php/provide/vod/',
    name: '蜗牛动漫',
  },
  subolg: {
    api: 'http://www.subolg.com/api.php/provide/vod/',
    name: '速博影院',
  },
  pgy1: {
    api: 'http://www.pgy1.top/api.php/provide/vod/',
    name: '蒲公英视频',
  },
  lz0716: {
    api: 'http://lz0716.com/api.php/provide/vod/',
    name: '铭轩影视',
  },
  hykjtv: {
    api: 'http://tv2.hykjtv.cn/api.php/provide/vod/',
    name: '海玉影视',
  },
  ledu8: {
    api: 'http://i.ledu8.cn/api.php/provide/vod/',
    name: '黄河影视',
  },
  ys58g8: {
    api: 'http://ys.58g8.com/api.php/provide/vod/',
    name: '百淘影视',
  },
  xhdj: {
    api: 'http://web.xhdj.vip/api.php/provide/vod/',
    name: '醉璃笙TV',
  },
  vipdytv: {
    api: 'http://vipdytv.com/api.php/provide/vod/',
    name: '贵宾影院',
  },
  shdmv: {
    api: 'http://shdmv.com/api.php/provide/vod/',
    name: '超高清影视',
  },
  aitee: {
    api: 'https://www.aitee.cc/api.php/provide/vod/',
    name: '艾思影院',
  },
  zitv: {
    api: 'https://cj.zitv.cc/api.php/provide/vod/',
    name: '橘猫影视',
  },
  hzy0h: {
    api: 'http://0hzy.cn:9990/api.php/provide/vod/',
    name: '比邻影院',
  },
  dqyhg: {
    api: 'http://wy.dqyhg.cn/api.php/provide/vod/',
    name: '千寻时光',
  },
  vp1127: {
    api: 'https://www.vp1127.com/api.php/provide/vod/',
    name: '快看客栈',
  },
  pangmao: {
    api: 'https://www.pangmaotv.com/api.php/provide/vod/',
    name: '胖猫影视',
  },
  kdy2001: {
    api: 'https://www.200121.com/api.php/provide/vod/',
    name: '海外电影',
  },
  suoni_m3u8: {
    api: 'https://suoniapi.com/api.php/provide/vod/from/snm3u8/',
    name: '🚄索尼M3U8',
  },
  kuaifan: {
    api: 'https://api.kuaifan.tv/api.php/provide/vod',
    name: '⛵快帆',
  },
  wogg: {
    api: 'https://mv.wogg.link/mv/vod',
    name: '🎛️明星',
  },
  bukazyw: {
    api: 'https://www.bukazyw.com/api.php/provide/vod/',
    name: 'R影[不卡]',
  },
  caoliu: {
    api: 'https://www.caoliuzyw.com/api.php/provide/vod/at/json/',
    name: 'R影[小草]',
  },
  apilj: {
    api: 'https://apilj.com/api.php/provide/vod/at/json/',
    name: 'R影[辣椒]',
  },
  jpzy: {
    api: 'https://jpzy.me/api.php/provide/vod/',
    name: 'R影[极品]',
  },
  jpzy_xml: {
    api: 'https://www.jpysvip.net/api.php/provide/vod/at/xml/',
    name: '极品资源XML',
  },
  md214: {
    api: 'https://ys.md214.cn/api.php/provide/vod/at/json',
    name: '官方[明帝]',
  },
  zhisheng: {
    api: 'http://82.156.40.118:1234/api.php/provide/vod/at/json',
    name: '官方[至圣]',
  },
  qiqi_so: {
    api: 'http://www.csykkj.club/api.php/provide/vod/',
    name: '官搜[琪琪]',
  },
  sijiuzy: {
    api: 'https://49zyw.com/api.php/provide/vod/at/json',
    name: '影视[四九]',
  },
  kuake: {
    api: 'http://kuakezy1.com/api.php/provide/vod/at/json',
    name: '影视[夸克]',
  },
  qhzy_json: {
    api: 'https://caiji.qhzyapi.com/api.php/provide/vod/at/json',
    name: '影视[奇虎]JSON',
  },
  wandou: {
    api: 'https://ks.wandouzy.cc/api.php/provide/vod/at/json',
    name: '影视[豌豆]',
  },
  jiguang: {
    api: 'https://jiguang.la/api.php/provide/vod/at/json',
    name: '影视[极光]',
  },
  hw8_json: {
    api: 'https://hw8.live/api.php/provide/vod/at/json',
    name: '影视[华为]JSON',
  },
  xzcjz_json: {
    api: 'https://xzcjz.com/api.php/provide/vod/at/json',
    name: '影视[熊掌]JSON',
  },
  xkanzy: {
    api: 'https://xkanzy10.com/api.php/provide/vod/at/json',
    name: '影视[享看]',
  },
  hhzy_json: {
    api: 'https://hhzyapi.com/api.php/provide/vod/at/json',
    name: '影视[豪华]JSON',
  },
  kuaikan_json: {
    api: 'https://kuaikan-api.com/api.php/provide/vod/at/json',
    name: '影视[快看]JSON',
  },
  kuaiyun_json: {
    api: 'https://www.kuaiyunzy.com/api.php/provide/vod/at/json',
    name: '影视[快云]JSON',
  },
  jszyapi_json: {
    api: 'https://jszyapi.com/api.php/provide/vod/at/json',
    name: '影视[极速]JSON',
  },
  sier: {
    api: 'https://www.42.la/api.php/provide/vod/from/42m3u8/at/json',
    name: '影视[四二]',
  },
  fenwe: {
    api: 'https://pg.fenwe078.cf/api.php/provide/vod/at/json',
    name: '影视[四圈]',
  },
  haowywz: {
    api: 'http://haowywz.com/api.php/provide/vod/at/json',
    name: '影视[小小]',
  },
  lyhapi: {
    api: 'https://api.lyhapi.com/api.php/provide/vod/',
    name: 'R影[狼友]',
  },
  zy018: {
    api: 'https://www.zy018.com/api.php/provide/vod/at/json',
    name: 'R影[十八]',
  },
  zy018_av: {
    api: 'https://www.zy018.com/api.php/provide/vod/',
    name: '黄瓜资源|AV',
  },
  jingpin: {
    api: 'https://www.jingpinx.com/api.php/provide/vod/',
    name: 'R影[精品]',
  },
  kuaiav: {
    api: 'http://kuaiavzy.com/api.php/provide/vod/at/json',
    name: 'R影[快爱]',
  },
  kok: {
    api: 'https://api.vodkok2.com/api.php/provide/vod/at/json',
    name: 'R影[KOK]',
  },
  ddapi: {
    api: 'https://api.ddapi.cc/api.php/provide/vod/at/json',
    name: 'R影[滴滴]',
  },
  xbapi: {
    api: 'https://api.xbapi.cc/api.php/provide/vod/at/json',
    name: 'R影[️雪豹]',
  },
  yiren: {
    api: 'https://api.yirenziyuan.com/api.php/provide/vod/at/json',
    name: 'R影[伊人]',
  },
  kaiyun: {
    api: 'https://kaiyunzy5.com/inc/apijson_vod.php',
    name: 'R影[开云]',
  },
  seyavod: {
    api: 'https://api.seyavod.com/api.php/provide/vod/at/json',
    name: 'R影[色鸭]',
  },
  jizhi: {
    api: 'https://jizhiapi.com/api.php/provide/vod/at/json',
    name: 'R影[极致]',
  },
  timizy: {
    api: 'https://timizy10.cc/api.php/provide/vod/at/json',
    name: 'R影[甜蜜]',
  },
  naixx: {
    api: 'https://naixxzy.com/api.php/provide/vod/at/json',
    name: 'R影[奶香]',
  },
  sexnguon: {
    api: 'http://api.sexnguon.com/api.php/provide/vod/',
    name: 'R影[色棍]',
  },
  tianmei: {
    api: 'http://www.tianmei.pw/api.php/provide/vod/from/m3u8/',
    name: 'R影[美天]',
  },
  g14o: {
    api: 'https://api.g14o.cc/api.php/provide/vod/at/json',
    name: 'R影[萝莉]',
  },
  bomin: {
    api: 'https://www.bominzy.com/api.php/provide/vod/at/json',
    name: 'R影[博民]',
  },
  yutu: {
    api: 'https://apiyutu.com/api.php/provide/vod/at/json',
    name: 'R影[玉兔]',
  },
  yutu_av: {
    api: 'https://apiyutu.com/api.php/provide/vod/',
    name: '玉兔资源|AV',
  },
  mtav: {
    api: 'https://mtav.art/api.php/provide/vod/at/json',
    name: 'R影[桃桃]',
  },
  day8: {
    api: 'https://8day.icu/api.php/provide/vod/at/json',
    name: 'R影[七天]',
  },
  av91: {
    api: 'https://91av.cyou/api.php/provide/vod/at/json',
    name: 'R影[九一]',
  },
  free92: {
    api: 'http://92free.icu/api.php/provide/vod/at/json',
    name: 'R影[久爱]',
  },
  tmav: {
    api: 'https://tmav.art/api.php/provide/vod/at/json',
    name: 'R影[美亚]',
  },
  sezy: {
    api: 'https://sezy.website/api.php/provide/vod/at/json',
    name: 'R影[色网]',
  },
  xxavs: {
    api: 'https://xxavs.com/api.php/provide/vod/at/json',
    name: 'R影[湿园]',
  },
  qqcm: {
    api: 'https://qqcm.sbs/api.php/provide/vod/at/json',
    name: 'R影[传媒]',
  },
  uezy: {
    api: 'https://a.uezy.pw/api.php/provide/vod/at/json',
    name: 'R影[优异]',
  },
  hongxiu: {
    api: 'https://hongxiuzy.com/api.php/provide/vod/',
    name: 'R影[红袖]',
  },
  lsbzy: {
    api: 'https://apilsbzy1.com/api.php/provide/vod/at/json',
    name: 'R影[色逼]',
  },
  hszy: {
    api: 'http://hszy.me/api.php/provide/vod/at/json',
    name: 'R影[黄色]',
  },
  haopian: {
    api: 'https://haopianapi.com/api.php/provide/vod/at/json',
    name: 'R影[好片]',
  },
  skm3u8: {
    api: 'https://ziyuan.skm3u8.com/api.php/provide/vod/at/json',
    name: 'R影[速看]',
  },
  jkunzy: {
    api: 'https://jkunzyapi.com/api.php/provide/vod/at/json',
    name: 'R影[鸡坤]',
  },
  dadou: {
    api: 'https://www.dadou.cm/api.php/provide/vod/',
    name: '🔍[大豆]',
  },
  huaqi: {
    api: 'https://seacms.huaqi.live/zyapi.php',
    name: '🔍[花旗]',
  },
  api155: {
    api: 'https://155api.com/api.php/provide/vod/?ac=list',
    name: '🔍®️十五',
  },
  avre00: {
    api: 'https://www.avre00.com/api.php/provide/vod/?ac=list',
    name: '🔍®️黄瓜',
  },
  f2dcj: {
    api: 'http://f2dcj6.com/sapi?ac=videolist',
    name: '🔍®️番二',
  },
  huakui: {
    api: 'https://caiji.huakuiapi.com/inc/apijson_vod.php',
    name: '🔍®️花魁',
  },
  afasu: {
    api: 'https://www.afasu.com/api/json.php',
    name: '🔍®️湿妹',
  },
  jiuyao: {
    api: 'http://99zy.pw/api.php/provide/vod/',
    name: '*99资源',
  },
  kankanju: {
    api: 'http://www.kkkanju.com/api.php/provide/vod/at/xml',
    name: 'KK看剧',
  },
  fantuan: {
    api: 'https://fantuan.wkfile.com/api.php/provide/vod/at/xml',
    name: '饭团资源',
  },
  leqiyi: {
    api: 'https://www.lqiyi.co/api.php/provide/vod/at/xml',
    name: '乐奇艺',
  },
  umao: {
    api: 'http://umao.ml/api.php/provide/vod/at/xml',
    name: 'u猫',
  },
  kuaiboyun: {
    api: 'http://www.kuaibozy.com/api.php/provide/vod/at/xml/',
    name: '快播云',
  },
  ks39: {
    api: 'https://www.39kan.com/api.php/provide/vod/at/xml',
    name: '39影视XML',
  },
  anyi: {
    api: 'http://dy.51isu.com:11801/api.php/provide/vod/at/xml',
    name: '安逸影院',
  },
  wujin_xml: {
    api: 'https://api.wujinapi.com/api.php/provide/vod/from/wjm3u8/at/xml/',
    name: '无尽资源XML',
  },
  kongbuya: {
    api: 'https://kongbuya.com/api.php/provide/vod/at/xml/',
    name: '恐怖鸭资源',
  },
  zhentan: {
    api: 'http://ys.huangguay.com/api.php/provide/vod/at/xml/',
    name: '侦探APP',
  },
  mengguo: {
    api: 'http://api.appearoo.top/api.php/provide/vod/at/xml/',
    name: '萌果资源',
  },
  susou: {
    api: 'http://www.susouzy.com/api.php/provide/vod/at/xml',
    name: '速搜资源',
  },
  dianyingn: {
    api: 'https://www.dianyingn.com/api.php/provide/vod/at/xml/',
    name: '电影牛',
  },
  haohao: {
    api: 'http://haohaozy.com/api.php/provide/vod/at/xml/',
    name: '好好资源',
  },
  aivin: {
    api: 'http://lbapiby.com/api.php/provide/vod/at/json',
    name: 'AIvin|AV',
  },
  lajiao: {
    api: 'https://apilj.com/api.php/provide/vod/',
    name: '辣椒资源|AV',
  },
  naixiangxiang: {
    api: 'https://Naixxzy.com/api.php/provide/vod/',
    name: '奶香香|AV',
  },
  caoliu_av: {
    api: 'https://www.caoliuzyw.com/api.php/prodao/vod/',
    name: '草榴资源|AV',
  },
  laosebi: {
    api: 'https://apilsbzy1.com/api.php/provide/vod/',
    name: '老色逼资源|AV',
  },
  didi_av: {
    api: 'https://api.ddapi.cc/api.php/provide/vod/',
    name: '滴滴资源|AV',
  },
  batian: {
    api: 'https://8day.icu/api.php/provide/vod/',
    name: '八天影视|AV',
  },
  shiyuan: {
    api: 'https://xxavs.com/api.php/provide/vod/',
    name: '湿园影视|AV',
  },
  youyou: {
    api: 'https://a.uezy.pw/api.php/provide/vod/',
    name: '优异影视|AV',
  },
  yiyiwu: {
    api: 'https://155api.com/api.php/provide/vod/',
    name: '155资源|AV',
  },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}