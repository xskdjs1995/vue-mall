import Vue from 'vue'
import Vuex from 'vuex'

import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: 'liu',
        categories: [],
        itemList: [{
            title: "默认数据",
            desc: "预订享50元优惠  ",
            imgsrc:
                "https://res0.vmallres.com/pimages//product/6941487207756/428_428_A6A30621B8088CBBAF2D831A44CA9E945FEB6E9B64A1E201mp.png",
            alt:
                "【订金预订】HUAWEI FreeBuds 4i 真无线耳机（陶瓷白）主动降噪 通话降噪 环境音透传 10小时连续播放 快充长续航 纯净音质",
            price: 499,
        }]
    },
    mutations,
    actions,
    getters
})