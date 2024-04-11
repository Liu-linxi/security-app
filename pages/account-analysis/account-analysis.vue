<template>
	<view>
		<row1 />
		<u-sticky bgColor="#fff">
			<view class="border-bottom text-nowrap mt-2">
				<u-tabs :list="list1" @click="clickCahnge" :current="current" lineColor="#d4322c" lineWidth="30"></u-tabs>
			</view>
			<view class="py-2" v-show="current==5">
				<uni-datetime-picker type="daterange" v-model="single">
					<view class="d-flex j-sb" style="margin: 0 100rpx;">
						<view class="bg-light-secondary px-2 py-1 mr-2">
							{{single[0]}}
						</view>
						至
						<view class="bg-light-secondary px-2 py-1 ml-2">
							{{single[1]}}
						</view>
					</view>
				</uni-datetime-picker>
			</view>
		</u-sticky>
		<row2 :name="list1[current].name" />
		<row3 />
		<row4 :name="list1[current].name" />
		<row5 />
	</view>
</template>

<script>
	import row1 from './components/row1.vue';
	import row2 from './components/row2.vue';
	import row3 from './components/row3.vue';
	import row4 from './components/row4.vue';
	import row5 from './components/row5.vue';
	export default {
		components: {
			row1,
			row2,
			row3,
			row4,
			row5
		},
		data() {
			return {
				list1: [{
					name: '近一月',
				}, {
					name: '近三月',
				}, {
					name: '近半年'
				}, {
					name: '近一年'
				}, {
					name: '今年'
				}, {
					name: '自定义'
				}],
				current: 0,
				single: [uni.$u.date(Date.now() - (7 * 24 * 60 * 60 * 1000)), uni.$u.date(Date.now())]
			}
		},
		methods: {
			clickCahnge({ index }) {
				this.current = index
			}
		}
	}
</script>

<style>

</style>