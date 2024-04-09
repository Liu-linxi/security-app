import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		
	},
	
	getters: {},
	//相当于同步的操作
	mutations:{},
	//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	actions:{},
  modules: { }
})