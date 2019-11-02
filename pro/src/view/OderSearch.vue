<template>
<div>
	<div class="left">
	<el-input v-model="input" placeholder="请输入用户id"></el-input>
	</div>
	<div class="rigth">
	<el-button type="primary" icon="el-icon-search" @click="getoder()">搜索</el-button>
	</div>
	 <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="下单日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.createdAt }}</span>
      </template>
    </el-table-column>
    <!---->
    
    <el-table-column
      label="订单号"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <!--<p>姓名: {{ scope.row.receiver }}</p>
          <p>商品价格: {{ scope.row.price }}</p>-->
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.no }}</el-tag>
          </div>
         
        </el-popover>
      </template>
    </el-table-column>
    
    
    <el-table-column
      label="用户ID"
      width="220">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <!--<p>姓名: {{ scope.row.receiver }}</p>
          <p>商品价格: {{ scope.row.price }}</p>-->
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row._id }}</el-tag>
          </div>
         
        </el-popover>
      </template>
    </el-table-column>
    
    
    
    
    <!---->
    <el-table-column
      label="收件人"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.receiver }}</p>
          <p>商品价格: {{ scope.row.price }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.receiver }}</el-tag>
          </div>
         
        </el-popover>
      </template>
    </el-table-column>
    <!---->
     <el-table-column
      label="收货地址"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.receiver }}</p>
          <p>订单日期: {{ scope.row.price }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.address }}</el-tag>
          </div>
          <!---->
          
          <!---->
        </el-popover>
      </template>
    </el-table-column>
    
    
    
    
    
    <!---->
    
  </el-table>
	
	
</div>
</template>

<script>
	import * as api from "../api/getProlist.js"
	export default({
		name:"OderSearch",
		data(){
			return{
				content: "用户订单查询",
				input:"",
				 tableData: []
				
			}
		},
		methods:{
			getoder(){
				console.log(this.input),
				api.getTokenoder(
					{per:10,
					page:1,
					no:"",
					user:""
					},
					localStorage.getItem('token')
				).then((data)=>{
					console.log(data)
					this.tableData=data.data.orders
				})
				
			},
			 handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
</style>