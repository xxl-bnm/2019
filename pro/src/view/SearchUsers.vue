<template>
	<div>
		
		
		<div class="left">
		<el-input v-model="input" placeholder="请输入用户id"></el-input>
		</div>
		<div class="right">
			<el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
		</div>
		<br/>
		
<div class="form">		
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
	<el-form-item label="ID">
    <el-input v-model="formLabelAlign.id"></el-input>
  </el-form-item>
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.username"></el-input>
  </el-form-item>
  <el-form-item label="昵称">
    <el-input v-model="formLabelAlign.nickName"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.password"></el-input>
  </el-form-item>
  <el-form-item label="创建时间">
    <el-input v-model="formLabelAlign.createdAt"></el-input>
  </el-form-item>
</el-form>
		</div>
		
	</div>
	
</template>

<script>
	import * as api from "../api/getProlist.js"
	export default({
		name:"SearchUsers",
		data(){
			return{
					content: "查询用户",
				input:"",
				labelPosition: 'right',
        formLabelAlign: {
        	id:'',
          username: '',
          nickName: '',
          password: '',
          createdAt:''
          
        }
			}
		},
		methods:{
			search(){
				console.log(this.formLabelAlign.username)
				//console.log(this.input)
				api.getTokensearch(this.input,{},
					localStorage.getItem('token')	
				).then((data)=>{
					console.log(data.data.userName)
					this.formLabelAlign.id=data.data._id
					this.formLabelAlign.username=data.data.userName
					this.formLabelAlign.nickName=data.data.nickName
					this.formLabelAlign.password=data.data.password
					this.formLabelAlign.createdAt=data.data.createdAt
					
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
	margin-top: 20px;
	margin-left: 270px;
	margin-bottom: 30px;
	width: 400px;
	float: left;
}
.right{
	margin-bottom: 30px;
	margin-top: 20px;
	float: left;
	margin-left: 20px;
}
.form{
	
	margin-left: 180px;
	width: 600px;
	height: 500px;
}
</style>