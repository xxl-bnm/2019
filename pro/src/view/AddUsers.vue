<template>
	<div class="wrap">
	<el-radio-group v-model="labelPosition" size="small">
  <el-radio-button label="left">左对齐</el-radio-button>
  <el-radio-button label="right">右对齐</el-radio-button>
  <el-radio-button label="top">顶部对齐</el-radio-button>
</el-radio-group>
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="昵称">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
   <el-form-item label="头像">
    <el-input v-model="formLabelAlign.tou"></el-input>
  </el-form-item>
</el-form>
		
		  <el-button type="primary" @click="addusers()">添加</el-button>
  <el-button type="success" @click="reset()">重置</el-button>
		
		
	<!--<button @click="addusers()">点击</button>	-->	
		
	</div>
</template>

<script>
	import * as api from "../api/getProlist.js"
	export default({
		name:"AddUsers",
		data() {
      return {
      	content: "添加用户",
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
          tou:''
        }
      };
   },
		methods:{
			addusers(){
				api.getTokenp({
				userName:this.formLabelAlign.name,
				password:this.formLabelAlign.region,
				nickName:this.formLabelAlign.type,
				avatar:this.formLabelAlign.tou
				
				
			},
				localStorage.getItem('token')
			).then((data)=>{
				console.log(data)
				console.log(data.data.code)
				if(data.data.code=="error"){
					alert("用户名信息已存在")
				}else{
					this.$router.push('/Users')
				}
				
			})
			},
			reset(){
				 formLabelAlign: {
         		 this.formLabelAlign.name='',
        		this.formLabelAlign.region='',
         		 this.formLabelAlign.type='',
         		 this.formLabelAlign.tou=''
        }
			}
			
		},
		mounted(){
			this.$emit('toparent', this.content)
		}
		
	})
</script>

<style scoped="scoped">
	.wrap{
		width: 600px;
		height: 400px;
		margin: 100px auto;
		
	}
</style>