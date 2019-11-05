<template>
<div>
	<div class="left">
		<el-input v-model="input" placeholder="请输入用户id"></el-input>
	</div>
		<div class="right">
			<el-button type="primary" icon="el-icon-search" @click="getAddress()">搜索</el-button>
		</div>
		<br/>
		<br/><br/>
	
	
	
	


  <h3 class="address">该用户地址：</h3>
 <ul>
 	<li class="" v-for="item in list">{{item[i]}}</li>
 </ul>






<!---->
</div>
</template>

<script>
	
	import * as api from "../api/getProlist.js"
	
	export default({
		name:"Address",
		data(){
			return{
				input:'',
				content: "查询用户收货地址",
				//tableData: [],
				list:[]
			}
		},
		methods:{
			getAddress(){
				console.log(this.input)
				api.getTokenaddress(
					this.input,
					{per:10,
					page:1
					},
					localStorage.getItem('token')
				).then((data)=>{
					console.log(data)
					console.log(data.data.addresses)
					//this.tableData=data.data.addresses
					this.list=data.data.addresses
				})
			}
		},
		mounted(){
			this.$emit('toparent', this.content)
		}
	})
</script>

<style scoped="">
	.left{
	width: 200px;
	float: left;
}
.right{
	float: left;
	margin-left: 20px;
}
.address{
	
	font-size: 20px;
}
</style>