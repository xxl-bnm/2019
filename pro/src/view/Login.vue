<template>
	<div >
		<div class="outer">
		<h1 class="outer-top">青葱时代后台管理系统</h1>
		<div class="outer-bottom">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="pass" >
    <el-input type="text" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="Login">登录</el-button>
    <el-button @click="Register" >注册</el-button>
  </el-form-item>
</el-form>
</div>
</div>
	</div>
</template>

<script>
	//import axios from 'axios';
	import * as api from "../api/getProlist.js"
	
	export default{
		name:"Login",
		 data() {
		 	

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: ''
         
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]

        }
      };
      
      
      
      
    },
    methods: {

		Login(){
				
			api.getProlist({
				userName:"admin",
				password:"admin@12138"
			}).then((data) => {
				console.log(data);
				console.log(data.data.token)
				localStorage.setItem("token",data.data.token)
				if(data.data.code=="success"){
					this.$router.push('../HelloWord')
				}
				
			})

//			axios.post('http://api.cat-shop.penkuoer.com/api/v1/auth/manager_login',{
//				userName:"admin001",
//				password:"admin@12138"
//			})
//			.then((res)=>{
//				console.log(res)
//			})



		},
      Register(){
      	this.$router.push('/Register')
      }
      
    }
		
		
		
		
	}
	
</script>

<style scoped="">
	
	.outer{
		width: 400px;
		height: 300px;
		background: pink;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -200px;
		margin-top: -150px;
	}
	.outer-top{
		font-size: 30px;
		height: 60px;
		color: #fff;
		text-align: center;
		line-height: 60px;
	}
	.outer-bottom{
		
		width: 340px;
		height: 250px;
		margin: 10 auto;
		
	}
</style>