import Vue from 'vue';
import Vuex from 'vuex';
import Users from './Module/Users.js';
import shop from './Module/Shop';
import shopDetail from './Module/ShopDetail';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    modules: {
        Users,
        shop,
        shopDetail,
    }
});
