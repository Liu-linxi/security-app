import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
import mockData from './modules/mockData.js';


export default new Vuex.Store({
	state:{
		text: "我是主入口的值"
	},
	
	getters: {
		timeString(){
			return new Date()
		}
	},
	//相当于同步的操作
	mutations:{
		change(state){
			state.text="我是主入口修改的值"
		}
	},
	//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	actions:{},
  modules: { 
		mockData
	}
})