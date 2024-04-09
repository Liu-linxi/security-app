export default {
	state: {
		text: "我是module模块下state.text的值",
		dataList: {},
	},
	getters: {

	},
	mutations: {
		changeTEXT(state, data) {
			state.text = data;
		},
		changeTEXT2(state) {
			state.text = "我是修改后的文本module"
		},
		changeDataList(state, data) {
			state.dataList = data;
		},
	},
	actions: {
		async initList({commit}) {
			// 这里使用了官方的内容进行解构使用，根据自己的封装请求来调整
			const ress = await new Promise(async (resolve, reject) => {
				const [err, res] =await uni.request({
					url: "http://119.8.51.211/api/stock"
				})
				if(err){
					reject(err)
				}
				resolve(res.data)
			})
			commit("changeDataList",ress.data)
			
			console.log(ress.data);
		}	
	}
}