<template>
	<view>
		{{text}}
		<button @click="changeTEXT('修改成这种参数')">传参数修改模块中mockData的数据值</button>
		<button @click="changeTEXT2">不传参数修改模块mockData中的数据值</button>
		{{textzhurukou}}
		<button @click="change">主入口修改模块mockData中的数据值</button>
		<view class="">
			我是计算属性值——{{timeString}}
		</view>
		<u-divider text="下面是模拟请求"></u-divider>
		<view v-for="(item,index) in dataList.stock" :key="index">
			{{item.name}}
		</view>
		<view class="">
			子组件
		</view>
		<son />
	</view>
</template>

<script>
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

	import son from './son.vue';
	export default {
		components: {
			son
		},
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				text: state => state.mockData.text,
				dataList: state => state.mockData.dataList,
				textzhurukou: state => state.text,
			}),
			...mapGetters([
				'timeString'
			])
		},
		onLoad() {
			console.log(this.$store); //全局store值
			console.log(this.$store.state.mockData); //模块store内容
			this.initList();//方法1
		},
		methods: {
			...mapMutations(['changeTEXT', "changeTEXT2", "change",]),
			...mapActions(['initList']),
		}
	}
</script>

<style>

</style>