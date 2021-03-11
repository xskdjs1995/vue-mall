var Mock = require('mockjs');

var random = Mock.Random;
//++++++++++++++++++++++++//  实验
console.log(random.image('200x100', '#50B347', '#FFF', 'Mock.js'));
// var imgsrc =Mock.Random.dataImage('200x100', 'Hello Mock.js!')
//  实验
console.log(random.image('200x100', '#50B347', '#FFF', 'Mock.js'));

const mockdata = Mock.mock({
  "res|10": [{
    "id": "@guid",
    "name": "@cword(2,10)",
  }
  ]
})
//  ++++++++++++++++++++++实验

const categories = [
  {
    "value": "zhinan",
    "label": "指南",
    "children": [
      {
        "value": "shejiyuanze",
        "label": "设计原则",
        "children": [
          {
            "value": "cart",
            "label": "一致"
          },
          {
            "value": "cart",
            "label": "反馈"
          },
          {
            "value": "cart",
            "label": "效率"
          },
          {
            "value": "cart",
            "label": "可控"
          }
        ]
      },
      {
        "value": "daohang",
        "label": "导航",
        "children": [
          {
            "value": "cart",
            "label": "侧向导航"
          },
          {
            "value": "cart",
            "label": "顶部导航"
          }
        ]
      }
    ]
  },
  {
    "value": "zujian",
    "label": "组件",
    "children": [
      {
        "value": "basic",
        "label": "Basic",
        "children": [
          {
            "value": "layout",
            "label": "Layout 布局"
          },
          {
            "value": "color",
            "label": "Color 色彩"
          },
          {
            "value": "typography",
            "label": "Typography 字体"
          },
          {
            "value": "icon",
            "label": "Icon 图标"
          },
          {
            "value": "button",
            "label": "Button 按钮"
          }
        ]
      },
      {
        "value": "form",
        "label": "Form",
        "children": [
          {
            "value": "radio",
            "label": "Radio 单选框"
          },
          {
            "value": "checkbox",
            "label": "Checkbox 多选框"
          },
          {
            "value": "input",
            "label": "Input 输入框"
          },
          {
            "value": "input-number",
            "label": "InputNumber 计数器"
          },
          {
            "value": "select",
            "label": "Select 选择器"
          },
          {
            "value": "cascader",
            "label": "Cascader 级联选择器"
          },
          {
            "value": "switch",
            "label": "Switch 开关"
          },
          {
            "value": "slider",
            "label": "Slider 滑块"
          },
          {
            "value": "time-picker",
            "label": "TimePicker 时间选择器"
          },
          {
            "value": "date-picker",
            "label": "DatePicker 日期选择器"
          },
          {
            "value": "datetime-picker",
            "label": "DateTimePicker 日期时间选择器"
          },
          {
            "value": "upload",
            "label": "Upload 上传"
          },
          {
            "value": "rate",
            "label": "Rate 评分"
          },
          {
            "value": "form",
            "label": "Form 表单"
          }
        ]
      },
      {
        "value": "data",
        "label": "Data",
        "children": [
          {
            "value": "table",
            "label": "Table 表格"
          },
          {
            "value": "tag",
            "label": "Tag 标签"
          },
          {
            "value": "progress",
            "label": "Progress 进度条"
          },
          {
            "value": "tree",
            "label": "Tree 树形控件"
          },
          {
            "value": "pagination",
            "label": "Pagination 分页"
          },
          {
            "value": "badge",
            "label": "Badge 标记"
          }
        ]
      },
      {
        "value": "notice",
        "label": "Notice",
        "children": [
          {
            "value": "alert",
            "label": "Alert 警告"
          },
          {
            "value": "loading",
            "label": "Loading 加载"
          },
          {
            "value": "message",
            "label": "Message 消息提示"
          },
          {
            "value": "message-box",
            "label": "MessageBox 弹框"
          },
          {
            "value": "notification",
            "label": "Notification 通知"
          }
        ]
      },
      {
        "value": "navigation",
        "label": "Navigation",
        "children": [
          {
            "value": "menu",
            "label": "NavMenu 导航菜单"
          },
          {
            "value": "tabs",
            "label": "Tabs 标签页"
          },
          {
            "value": "breadcrumb",
            "label": "Breadcrumb 面包屑"
          },
          {
            "value": "dropdown",
            "label": "Dropdown 下拉菜单"
          },
          {
            "value": "steps",
            "label": "Steps 步骤条"
          }
        ]
      },
      {
        "value": "others",
        "label": "Others",
        "children": [
          {
            "value": "dialog",
            "label": "Dialog 对话框"
          },
          {
            "value": "tooltip",
            "label": "Tooltip 文字提示"
          },
          {
            "value": "popover",
            "label": "Popover 弹出框"
          },
          {
            "value": "card",
            "label": "Card 卡片"
          },
          {
            "value": "carousel",
            "label": "Carousel 走马灯"
          },
          {
            "value": "collapse",
            "label": "Collapse 折叠面板"
          }
        ]
      }
    ]
  },
  {
    "value": "ziyuan",
    "label": "资源",
    "children": [
      {
        "value": "cart",
        "label": "Axure Components"
      },
      {
        "value": "cart",
        "label": "Sketch Templates"
      },
      {
        "value": "cart",
        "label": "组件交互文档"
      }
    ]
  },
  {
    "value": "route",
    "label": "路由",
    "children": [
      {
        "value": "axure",
        "label": "Axure Components"
      },
      {
        "value": "sketch",
        "label": "Sketch Templates"
      },
      {
        "value": "jiaohu",
        "label": "组件交互文档"
      }
    ]
  },
  {
    "value": "optionitem",
    "label": "配件",
    "children": [
      {
        "value": "axure",
        "label": "Axure Components"
      },
      {
        "value": "sketch",
        "label": "Sketch Templates"
      },
      {
        "value": "jiaohu",
        "label": "组件交互文档"
      }
    ]
  },
  {
    "value": "pad",
    "label": "平板",
    "children": [
      {
        "value": "axure",
        "label": "Axure Components"
      },
      {
        "value": "sketch",
        "label": "Sketch Templates"
      },
      {
        "value": "jiaohu",
        "label": "组件交互文档"
      }
    ]
  },
  {
    "value": "phone",
    "label": "手机",
    "children": [
      {
        "value": "axure",
        "label": "Axure Components"
      },
      {
        "value": "sketch",
        "label": "Sketch Templates"
      },
      {
        "value": "jiaohu",
        "label": "组件交互文档"
      }
    ]
  },
  {
    "value": "liquor",
    "label": "美酒",
    "children": [
      {
        "value": "axure",
        "label": "Axure Components"
      },
      {
        "value": "sketch",
        "label": "Sketch Templates"
      },
      {
        "value": "jiaohu",
        "label": "组件交互文档"
      }
    ]
  },
  {
    "value": "earphone",
    "label": "耳机",
    "children": [
      {
        "value": "axure",
        "label": "Axure Components"
      },
      {
        "value": "sketch",
        "label": "Sketch Templates"
      },
      {
        "value": "jiaohu",
        "label": "组件交互文档"
      }
    ]
  }
]

const itemList = [
  {
    "title": "亚瑟士 第十代跑步机 ",
    "desc": "预订享50元优惠 ",
    "imgsrc": "https://res0.vmallres.com/pimages//product/6941487207756/428_428_A6A30621B8088CBBAF2D831A44CA9E945FEB6E9B64A1E201mp.png",
    "alt": "UAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通【订机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
    "price": "499",
    "id": '820000200104258216',
    "classId": `1`
  },
  {
    "title": "耐克专业运动耳机",
    "desc": "预订享10元优惠 ",
    "imgsrc": "https://res0.vmallres.com/pimages//product/6941487211210/428_428_FAD19670648EDFCF959E7322E54A1A758BE0CD66A83455C6mp.png",
    "alt": "【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
    "price": "499",
    "id": '820000200104258215',
    "classId": `2`
  },
  {
    "title": "阿根廷唐克里斯将军红酒",
    "desc": "预订享50元优惠 ",
    "imgsrc": "https://res0.vmallres.com/pimages//product/7798078004213/428_428_D574ABBEA5D58BBF7E4E06D853D85B1A0A85E6F542F1A58Emp.png",
    "alt": "【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
    "price": "499",
    "id": '820000200104258214',
    "classId": `3`
  },
  {
    "title": "HUAWEI WATCH FIT",
    "desc": "预订享50元优惠 ",
    "imgsrc": "https://res0.vmallres.com/pimages//product/6972453167255/428_428_5A0F299CEB8FD02EC475984195F40859A18690A29D3F4641mp.png",
    "alt": "【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
    "price": "499",
    "id": '820000200104258213',
    "classId": `4`
  },
  {
    "title": "京瓷陶瓷保温杯",
    "desc": "预订享50元优惠 ",
    "imgsrc": "https://res0.vmallres.com/pimages//product/6941487210978/428_428_9B6917F54FD19C85873D683A0118C9EE61CF70B260CE761Bmp.png",
    "alt": "【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
    "price": "499",
    "id": '820000200104258211',
    "classId": `1`
  },
  {
    "title": "HUAWEI Mate 30E Pro 5G",
    "desc": "预订享50元优惠 ",
    "imgsrc": "https://res0.vmallres.com/pimages//product/4960664844470/428_428_3DEF6182F6A206E4C8966FD1AE9CB52A8D712B1F3EDFB5DDmp.png",
    "alt": "【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
    "price": "499",
    "id": '920000230104258217',
    "classId": `2`
  },
  {
    "title": "苹果 MAX 4i 真无线耳机",
    "desc": "预订享50元优惠 ",
    "imgsrc": "https://res0.vmallres.com/pimages//product/6941487210305/428_428_75FA66A821D5CADED8F21F1F417E9E8AC3E42FFCFCBAD775mp.png",
    "alt": "【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
    "price": "499",
    "id": '922002200104258217',
    "classId": `3`
  },
  {
    "title": "小米 为发烧 4i 真无线耳机",
    "desc": "预订享50元优惠 ",
    "imgsrc": "https://res0.vmallres.com/pimages//product/6927819503451/428_428_1BF03DFFDA537B9EC251DB7555CA8910CA1926323AB53E85mp.png",
    "alt": "【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
    "price": "499",
    "id": '920002200104258218',
    "classId": `4`
  },

]
const mockItem = Mock.mock({
  "item|10": [{
    "title": '@cword("阿根廷唐克里斯托瓦庄园将军红葡萄酒 750ml HUAWEI nova 5G 耳机 点 话  Pro",10,15)',
    "desc": ` @ctitle(7, 10)`,
    "imgsrc": random.image('400x400', '#fff', '#777', 'Mock.商品'),
    "alt": '@cword("【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质", 20, 27)',
    "price|1-500": 100,
    "id": '@id()',
    "classId": `@character("1")`
  }]
})
const allItem = [...itemList, ...mockItem.item];

const orders = [
  {
    id:100001,
    userId: 100001,
    orderInfoList: [
      {
        id: "820000200104258216",
        imgsrc:
          "https://res0.vmallres.com/pimages//product/6941487207756/428_428_A6A30621B8088CBBAF2D831A44CA9E945FEB6E9B64A1E201mp.png",
        alt:
          "UAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通【订机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
        price: "499",
        title: "亚瑟士 第十代跑步机 ",
        num: 1,
      },
      
    ]
  },
  {
    id:100002,
    userId: 100002,
    orderInfoList: [
      {
        id: "820000200104258217",
        imgsrc:
          "https://res0.vmallres.com/pimages//product/6941487207756/428_428_A6A30621B8088CBBAF2D831A44CA9E945FEB6E9B64A1E201mp.png",
        alt:
          "UAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通【订机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
        price: "499",
        title: "亚瑟士 第十代跑步机 ",
        num: 1,
      },
      
    ]
  },
]



const API = () => ({
  'categories': categories,
  'itemlist': allItem,
  'orders':orders,
  'mock': allItem
});
module.exports = API;