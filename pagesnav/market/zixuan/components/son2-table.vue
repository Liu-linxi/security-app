<template>
	<view class="son2-table">
		<!-- https://ext.dcloud.net.cn/plugin?id=7511 -->
		<zb-table :show-header="true" :columns="column" :stripe="false" :fit="true" @rowClick="rowClick" :border="false" :data="data"></zb-table :show-summary="true">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				column: [
					{ name: 'name', label: '编辑', fixed: false, width: 80 },
					{ name: 'age', label: '年纪', sorter: true, align: 'center', },
					{ name: 'sex', label: '性别', filters: { 0: '男', 1: '女' }, align: 'center' },
					{ name: 'img', label: '图片', type: "img", align: 'center' },
					{ name: 'address', label: '地址', align: 'center' },
					{ name: 'date', label: '日期', sorter: true, align: 'center' },
					{ name: 'province', label: '省份', align: 'center' },
					{ name: 'city', label: '城市', align: 'center' },
					{ name: 'zip', label: '邮编', align: 'center' },
				],
				data: [{
						date: '2016-05-02',
						name: '王小虎1',
						province: '上海',
						sex: '0',
						age: '18',
						img: "https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '王小虎2',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},
					{
						date: '2016-05-03',
						name: '王小虎3',
						province: '上海',
						sex: '男',
						age: '123',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '王小虎4',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					},{
						date: '2016-05-02',
						name: '王小虎5',
						province: '上海',
						sex: '男',
						age: '18',
						city: '普陀区',
						address: '上海市普',
						zip: 200333
					}
				]
			}
		},
		methods: {
			rowClick(row) {
				console.log(row);
			}
		}
	}
</script>

<style scoped lang="scss">
	.son2-table {
	}
</style>