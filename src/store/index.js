import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      //设置访问端口全局变量，如果改端口不用所有前端页面都改
      globalhost:'http://localhost:8686/',
      //选中加入购物车的商品，将信息设置成数组
      selectedArray:[]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
