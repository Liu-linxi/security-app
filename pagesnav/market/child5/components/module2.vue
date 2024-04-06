<template>
	<view class="module2">
		<view class="" v-for="(item,index) in list">
			<view class="">
				<view class="d-flex a-center j-sb py-2 mx-2 border-bottom" @click="item.bool=!item.bool">
					<view class="d-flex a-center">
						<u-icon :name="item.bool?'arrow-down':'arrow-right'" class="mr-1" color="#c2c2c2" size="12"></u-icon>
						{{item.name}}
					</view>
					<view class="" v-if="item.bool" @click.stop="showMore">
						更多 <uni-icons type="right" size="12" class="ml-2" color="#c2c2c2"></uni-icons>
					</view>
				</view>
				<view class="grid3 p-1" v-if="item.bool">
					<view class="item pb-2 text-center overflow-hidden" v-for="li in 3">
						<view class="truncate">
							洒家扩大哈萨洒家扩大哈萨
						</view>
						<view class="red line-h-md">
							2.34%
						</view>
						<view class="gray">
							啊速度和
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{ name: "行业板块", bool: false }, { name: "概念版块", bool: false }, ]
			}
		},
		methods: {
			showMore() {
				uni.showToast({
					icon: "none",
					title: "更多点击"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.module2 {
		background-color: #FFFFFF;
	}
</style>