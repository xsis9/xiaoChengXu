Page({
  data: {
    currentSpot: {},
    allSpots: [
      // 这里的数据结构应与主页相同，但包含更多详情信息
      {
        id: 1,
        name: "蜂蜜",
        type: "food",
        images: ["cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/11.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/12.png"],
        content: [
          {title: "槐花蜜",  intro: "槐花蜜透明度高，色质白，有浓郁芳香。有安神降燥、润肠通便、降血压等功效。其中的果糖和多种维生素有助于促进肠蠕动，改善血液循环，长期适量饮用有益健康。"},
          {title: "枣花蜜",  intro: "枣花蜜富含多种抗氧化活性的酶和维生素，具有美容养颜、补充能量、润肠通便的功效。它特别适合女性食用，能补血安神、改善睡眠，并有助于抗菌消炎，促进组织再生。"},
          {title: "百花蜜",  intro: "百花蜜则因采集多种花蜜而具有更丰富的营养成分，包括抗氧化剂、维生素和矿物质等。它能增强免疫力、促进消化、美容养颜，并有助于缓解疲劳和改善睡眠。百花蜜的多种功效使其成为日常养生的佳品。"},
          {title: "价格",    intro: "枣花蜜20/斤 百花蜜20/斤 槐花蜜25/斤"},
          {title: "联系方式",intro: "产品产地：临河镇二道沟村秀临金岸家庭农场 \n联系人：任彦荣 \n联系方式：13469682011"},
        ],
      },
      {
        id: 2,
        name: "三花鹅",
        type: "food",
        images: ["cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/三花鹅1.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/三花鹅2.png"],
        content: [
          {title: "简介",  intro: "炎热的夏季即将过去\n 在那绿油油的果树园里\n 白色的三花鹅散落期间\n 经过半年时间的饲养,1500余只三花鹅即将在9月底上市 \n三花鹅日常以果园杂草、玉米、豆粕等杂粮为主食鹅肉质鲜嫩，饱满，相当有嚼劲 \n单只毛重10斤左右"},
          {title: "价格",    intro: "150元/只"},
          {title: "联系方式",intro: "甜水河村     孙  治     13995385838\n 二道沟村     任学锋     18109501515"},
        ],
      },
      {
        id: 3,
        name: "渔悦湾-鱼虾多多农家乐",
        type: "attraction",
        images: ["cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/鱼虾多多1.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/鱼虾多多2.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/鱼虾多多3.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/鱼虾多多4.png"],
        content: [
          {title: "内容",  intro: "临河鲤鱼、红焖滩羊、清炖、土鸡、垂钓"},
          {title: "美食",  intro: "这里有利用黄河水养殖的鲤鱼，肉质肥厚、细嫩鲜美且营养丰富。据《本草纲目》所述，此鱼还可入药，具有养肝补肾功能，治疗孕妇水肿、月经不调、中耳炎、赤眼病等。这里还能品尝到现烹制的红焖滩羊肉，选自当地纯饲草养殖的滩羊，肉质细嫩，无膻腥味，脂肪分布均匀，含脂率低，营养丰富。"},
          {title: "休闲",  intro: "鱼虾多多是二道沟村依托鱼悦湾打造集休闲、旅游、养殖为一体的农家乐园,这里配有垂钓池，在闲暇之余可自行垂钓，观落日美景。"},
          {title: "联系方式",intro: "地点：二道沟\n联系人：高瑞芬\n联系方式：15121977555"},
        ],
      },
      {
        id: 4,
        name: "枣园溜达鸡",
        type: "food",
        images: ["cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/枣园溜达鸡1.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/枣园溜达鸡2.png"],
        content: [
          {title: "简介",  intro: "绿色无公害食品常以粉碎的玉米 糠麸 豆粕 青草 野菜作为主要饲料安全 营养 无公害 在饲养过程中 已散养溜达为主 “溜达鸡”肉细嫩多汁 肥而不腻 瘦而不柴。"},
          {title: "产地",  intro: "二道沟村"},
          {title: "价格",  intro: "120元/只"},
          {title: "联系方式",intro: "联系人：任学锋\n联系方式：18109501515"},
        ],
      },
      {
        id: 5,
        name: "灵武市河东驿栈民宿旅店",
        type: "attraction",
        images: ["cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店1.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店2.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店3.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店4.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店5.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店6.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店7.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店8.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店9.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店10.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店11.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店12.png"],
        content: [
          {title: "品类",  intro: "住宿、餐饮"},
          {title: "地点",  intro: "临河村亲水雅苑小区6幢1号（派出所东边向南50米处）"},
          {title: "具体服务内容", intro: "承接游客住宿、餐饮服务、机场接送机服务"},
          {title: "简介",  intro: "“日图三餐，夜图一宿。”临河村打造的精品河东驿栈民宿，将当地特色美食、乡村文化融入其中，营造人情味浓厚的乡村氛围，让游客在舒适的环境中体验乡愁和乡村生活，满足游客高品质的出游体验，实现从观光到度假体验的转变。民宿投入60万元进行打造，是壮大村集体经济项目，交由村民自主经营，整体风格为田园休闲风，民宿坐落于紧临黄河的亲水雅苑小区，隔绝城市喧嚣，打造一派静谧雅致的舒适空间，能容纳6-8人住宿游玩。窗外是绿意盎然的景色，窗内是静谧雅致的舒适空间，小院里开满鲜花，在这里感受，花开花落、云来云往，余味无尽、万般惬意。同时，能够给游客提供临河大鲤鱼、干崩羊肉、临河枣香鸡等临河特色美食。"},
          {title: "联系方式",intro: "联系人：徐彦梅\n联系方式：15809689268"},
        ],
      },
      {
        id: 6,
        name: "落日湾(黄河边打卡点)",
        type: "attraction",
        images: ["cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/落日湾1.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/落日湾2.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/落日湾3.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/落日湾4.png", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/落日湾5.png"],
        content: [
          {title: "品类",  intro: "旅游"},
          {title: "地点",  intro: "临河镇滨河大道向北50米(河东空港酒店向北50米处)"},
          {title: "具体服务内容", intro: "拍照打卡、钓鱼、露营烧烤"},
          {title: "简介",  intro: "临河村倾心打造的黄河文化新地标，邀您共赴一场穿越古今的浪漫之旅。这里，黄河之水悠悠流淌，承载着千年的故事与梦想。深挖黄河渡口文化精髓，将自然风光与人文情怀完美融合，打造了一处集打卡拍照、露营烧烤、悠闲垂钓于一体的乡村旅游胜地。漫步河畔，每一处景致都是拍照留念的绝佳背景。夕阳西下，金辉洒满河面，与亲朋好友在此搭起帐篷，享受一场星空下的烧烤盛宴，让味蕾与心灵同时得到满足。而对于垂钓爱好者而言，这里更是不可多得的宝地，静坐河畔，静待鱼儿上钩，享受一份难得的宁静与惬意。落日湾黄河打卡点，不仅是一次简单的旅行，更是一场关于黄河文化的深度体验。我们诚邀您来此，感受黄河的壮阔，品味乡村的宁静，让心灵在旅途中得到真正的放松与回归。"},
          {title: "联系方式",intro: "联系人:范瑞\n联系方式:18795010333"},
        ],
      },
      {
        id: 7,
        name: "上桥村生态康养小院",
        type: "attraction",
        images: ["cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/09d813c28ae4f7901ef3785ef70cc2d.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/10a9692a740a3caedc25b64a5b9147f.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/115ac659b5935ed7a6af60cee83f9bf.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/1d4c11acf0de9b51fffd64078f5d5ad.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/26a82cc663f7c7f85f70a5a563f1e19.jpg",
        "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/4b739f24351b2d92959a039f27c07e0.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/5cbc7cf0ddeb0f70b25369fc39e0ad2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/647292d7b1ae256383a6a342887561a.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/8097e9762941b53a9ffb7b8ff009cde.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/8d1a649da634ba45404495e33fc9cd6.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/b32d3958839c70f1d9cd45ecba481f9.jpg",
        "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/c25a54d00fdefa2047e28abc61d0b81.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/c4e72e32b2df16ef295ee7a69158e6d.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/c7cd9bfca1fa9b6a22b7ad776ff4bc2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/d12fca94a78925e2a30fe2dbdd97b11.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/d1cd82c40345a6d285fb540cea578e2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/封面.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/微信图片_20240603112029.jpg",
        "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/微信图片_20240603112244.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/微信图片_20240603112253.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/微信图片_20240603112307.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/微信图片_20240611110056.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/微信图片_20240611110141.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/微信图片_20250603102747.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/微信图片_20250603103354.jpg"],
        content: [
          {title: "品类",  intro: "旅游"},
          {title: "地点",  intro: "宁夏银川市灵武市临河镇上桥村长枣交易市场"},
          {title: "简介",  intro: "这里，枣花飘香、绿树成荫，阳光洒落在彩虹步道上，仿佛为乡村铺就了一条通往幸福的康庄之路。上桥村康养小院，以自然为底色，以人文为笔触，将生态康养、田园生活与文艺气息巧妙交织，打造了一个集休闲养生、亲子共融、文化体验于一体的理想栖息地。\n在上桥，康养小院独门独栋坐落在枣林中，这里既有“推窗见绿、出门入园”的田园风光，又有“春种蔬果、夏听蝉鸣、秋摘长枣、冬品雪景”的四季体验，让大家暂别喧嚣，在泥土芬芳中重拾生活本真。 烧烤区炉火升腾，香气四溢，亲朋好友围炉而坐，一边品尝亲手烤制的美味，一边畅谈人生百味，欢声笑语回荡在星空之下。节假日，上桥的文化演出精彩纷呈，民谣、诗歌、舞蹈等多元文化在此交汇，让每一个夜晚都充满诗意与温度。每逢周末，市集如约而至，村民们将自家种植的有机蔬菜、手工制作的农特产品、独具匠心的手工艺品摆上摊位，成为连接城乡、互通有无的情感纽带。\n未来，这里不仅承载着游客的短暂逃离，更孕育着乡村的无限可能。我们诚挚邀请您来这里，走一走彩虹步道，尝一尝烟火烧烤，听一场乡村民谣，逛一逛周末集市，在自然与文化的滋养中，开启一段疗愈身心、连接土地的旅程。"},
          {title: "联系方式",intro: "联系人：谢艳茹\n联系电话15909600451"},
        ],
      },
      {
        id: 8,
        name: "水洞沟",
        type: "attraction",
        images: ["cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/封面.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序10沙漠冲浪车1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序11红山湖码头1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序11红山湖码头3.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序11红山湖码头4.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序12红山湖.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序12红山湖2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序13沙枣弯1.jpg",
      "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序13沙枣弯2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序13沙枣弯3.JPG", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序13沙枣弯滑索项目.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序13沙枣弯萌宠乐园2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序14红柳滩1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序14红柳滩2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序15红柳滩马车1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序17鸵鸟园驼车.jpg",
    "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序18互市1.JPG", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序19藏兵洞1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序19藏兵洞2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序19藏兵洞3.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序19长城博物馆1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序1景区大门口1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序1景区大门口2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序1景区大门口3.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序20长城博物馆2.jpg",
  "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序20长城博物馆红山堡.JPG", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序21特色交通工具拖拉机.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序2水洞沟遗址博物院内1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序2水洞沟遗址博物院内2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序2水洞沟遗址博物院内3.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序2水洞沟遗址博物院内4.jpg",
"cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序2水洞沟遗址博物院外景1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序2水洞沟遗址博物院外景2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序3张三小店1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序3张三小店2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序3张三小店3.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序3张三小店4.JPG", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序4水洞沟遗址标志碑1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序4水洞沟遗址标志碑2.JPG", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序5考古家园1.JPG",
"cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序6点将台1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序6长城1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序6长城2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序6长城3.JPG", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序6长城4.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序7芦花谷1.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序7芦花谷2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序7芦花谷3.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序7芦花谷4.JPG", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序8蒙古人家1.PNG",
"cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序8蒙古人家2.PNG", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序8蒙古人家3.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序9骑骆驼2.jpg", "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/顺序9骑骆驼3.png"],
        content: [
          {title: "品类",  intro: "旅游"},
          {title: "地点",  intro: "宁夏灵武市临河镇，西距银川市19公里，距河东机场11公里，地处银川河东旅游带的核心部位，北与内蒙古鄂尔多斯市相接，是连接宁蒙旅游的纽带，占地面积14.4平方公里。"},
          {title: "简介",  intro: "    水洞沟是中国最早发掘的旧石器时代文化遗址，被誉为“中国史前考古的发祥地”、“中西方文化交流的历史见证”。是全国重点文物保护单位，国家AAAAA级旅游景区，国家地质公园。被国家列为全国文物保护的100处大遗址之一、“最具中华文明意义的百项考古发现”之一。荣获“中国最值得外国人去的50个地方”银奖。\n    水洞沟遗址记录了远古人类繁衍生息，同大自然搏斗的历史见证，蕴藏着丰富而珍贵的史前资料。它向人们展示了距今四万年前古人类的生存画卷，是迄今为止我国在黄河地区唯一经过正式发掘的旧石器时代遗址。水洞沟遗址经过六次考古发掘，出土了三万多件石器和67件古动物化石。其中构成水洞沟文化基础的一些石制品、工具及石器制作修理技术，可以和欧洲、西亚、北非的莫斯特、奥瑞纳时期人类栖居地的石器相媲美。\n    水洞沟地区又是我国北方明代古长城、烽燧、城堡、沟堑、墩台等军事防御建筑大观园。蜿蜒东去的长城、高台耸立的墩堠、古朴神秘的城堡、曲折幽深的沟堑令人目不暇接。\n    水洞沟地处鄂尔多斯台地南缘，经历了千万年的风沙雕蚀造就的雅丹地貌，使这里充满了雄浑、奇特的荒谷神韵，这里集中了卧驼岭、摩天崖、断云谷等二十多处土林奇绝景观，使人望而生奇，大有地老天荒、旷古玄远之叹。\n    在宁夏长城军事防御大观园中，最令人称奇的莫过于水洞沟的“藏兵洞”。奇特的藏兵洞，高出沟底10多米，蜿蜒曲折于悬壁之中，上下相通，左右相连，洞中分叉颇多有如迷宫，久久不见尽头。洞内辟有居室、粮食储藏室、水井、灶房、兵器库，火药库、炮台、陷阱、暗器孔道等设施。置身其间，可立时领略到古地道在设计上的出人意料、功能上的灵巧隐蔽、结构上的悬妙复杂，古人的聪明才智，在这里体现得淋漓尽致，令人叹为观止。"},
          {title: "联系方式",intro: "咨询电话：17795175422"},
        ],
      },
      {
        id: 9,
        name: "灵武长枣",
        type: "food",
        images: ["cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/灵武长枣1.png"],
        content: [
          {title: "上市时间", intro: "每年9-10月"},
          {title: "简介",  intro: "灵武长枣是国家质检总局地理标志产品，是宁夏独有的枣类品种。灵武长枣果皮紫红色，鲜艳靓丽，肉厚、质脆，酸甜适口，富含各种矿物质和维生素，尤其维C含量最高，是中华猕猴桃的10倍以上，被誉为“百果之王”。灵武长枣在医学上也有广泛的医疗功效，能润心肺、止咳、补五脏、对高血压、动脉硬化等病有良好疗效，常食长枣，能强身健体，美容养颜。灵武长枣是在灵武特定的地理环境及优越的光热水土资源条件下，经长期自然选择和人工筛选培育形成的极具地方特色的优良鲜食品种，果实成熟期在9月下旬至10月上旬。临河镇种植的灵武长枣，以黄河水灌溉为主，施有机肥料，平均单果重18.1克，最大单果重达40克，果实口感脆甜汁多，酸甜适度皮薄，口感绝佳。"},
          {title: "联系方式",intro: "联系人:\n二道沟村 任学锋 18109501515\n上桥村 谢燕茹 15909600451\n石坝村 纪学文 13995398859"},
        ],
      },
    ]
  },

  onLoad(options) {
    const id = parseInt(options.id);
    const spot = this.data.allSpots.find(item => item.id === id);
    if (spot) {
      this.setData({ currentSpot: spot });
      wx.setNavigationBarTitle({ title: spot.name });
    }
  },

  navigateBack() {
    wx.navigateBack();
  }
})