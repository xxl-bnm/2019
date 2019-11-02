<template>
	<div>
		
		
		<!--table-->
		<el-table :data="tableData" style="width: 100%">
			<el-table-column label="注册日期" width="300" >
				<template slot-scope="scope">
					<i class="el-icon-time"></i>
					<span style="margin-left: 10px">{{ scope.row.createdAt }}</span>
				</template>
			</el-table-column>
			<el-table-column label="用户名" width="300">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<p>姓名: {{ scope.row.userName }}</p>
						<p>昵称: {{ scope.row.nickName }}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row.userName }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<!---->
			<el-table-column label="ID" width="300">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<p>姓名: {{ scope.row.userName }}</p>
						<p>昵称: {{ scope.row.nickName }}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row._id }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<!---->
			<el-table-column label="操作">
				<template slot-scope="scope">
					
					<el-button size="mini" v-on:click="dialogFormVisible = true; handleEdit(scope.$index, scope.row) ">编辑</el-button>

					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			<!--弹出框-->
					<el-dialog title="修改信息" :visible.sync="dialogFormVisible">
						<el-form :model="form">
							<el-form-item label="ID" :label-width="formLabelWidth">
								<el-input v-model="id" auto-complete="off"></el-input>
							</el-form-item>
							
							
							
							<el-form-item label="用户名" :label-width="formLabelWidth">
								<el-input v-model="userName" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="密码" :label-width="formLabelWidth">
								<el-input v-model="password" auto-complete="off"></el-input>
							</el-form-item>
							<el-form-item label="昵称" :label-width="formLabelWidth">
								<el-input v-model="nickName" auto-complete="off"></el-input>
							</el-form-item>
							

						</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">取 消</el-button>
							<el-button type="primary" v-on:click="dialogFormVisible = false; submit(scope.row)">确定
							</el-button>
						</div>
					</el-dialog>
					
					<!---->

				</template>

			</el-table-column>

		</el-table>

	</div>

</template>

<script>
	import * as api from "../api/getProlist.js"

	export default {
		name: "Users",
		inject:['reload'],
		
		data() {
			return {

				tableData: [],
				content: "用户列表",
				dialogTableVisible: false,
				dialogFormVisible: false,
				
				
				userName: "",
				password: "",
				nickName: "",
				
				
				id:"",
				form: {},
				formLabelWidth: '120px',
				
				input:""

			}

		},

		mounted() {
			this.$emit('toparent', this.content)

			//获取用户信息
			api.getTokeng({
					per: 10,
					page: 3,
					userName: "admin001",
					nickName: "超级管理员"
				},
				localStorage.getItem('token')
			).then((data) => {
				console.log(data.data.users)
				this.tableData = data.data.users
			})
		},

		methods: {

			handleEdit(index, row) {
				//this.$router.push('/EditUsersinfo')
				console.log(index, row);
				console.log(row.userName)
				console.log(row._id)
				this.userName=row.userName
				this.password=row.password
				this.nickName=row.nickName
				this.nickName=row.nickName
				this.id=row._id;
				
				

			},

			submit(row) {
				console.log(this.id)
				//console.log(this.userName)
				console.log(this.password)
				
				
				//修改用户信息
				api.getTokenput(this.id,{
						userName:this.userName,
						nickName:this.nickName ,
						avatar: ""

					},
					localStorage.getItem('token')
				).then((data) => {
					console.log(data)
					this.reload();
					//console.log(data.data)
				})
				
				//修改密码
				api.getTokenpass(
					this.id,
					{password:this.password},
					localStorage.getItem('token')
				).then((data=>{
					console.log(data)
				}))
				
				
				
			},

			handleDelete(index, row) {
				console.log(index, row);
				this.delid=row._id
				api.getTokendelete(this.delid,{},
					localStorage.getItem('token')
				).then((data) => {
					console.log(data)
					console.log(data.data)
					if(data.data!=null){
						alert("删除成功！！")
						//this.$router.push('/Users')
						//redirect:"/Users"
						this.reload();
					}
					
				})
					//console.log(this.delid)

			}
		
			
			
			


		}
	}
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
</style>