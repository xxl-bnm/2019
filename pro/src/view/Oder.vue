<template>
<div>
	
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
          <p>姓名: {{ scope.row.receiver }}</p>
          <p>商品价格: {{ scope.row.price }}</p>
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
         <p>姓名: {{ scope.row.receiver }}</p>
          <p>商品价格: {{ scope.row.price }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row._id }}</el-tag>
          </div>
         
        </el-popover>
      </template>
    </el-table-column>
    
    
    
    
    <!---->
    <el-table-column
      label="收件人"
      width="120">
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
          
        </el-popover>
      </template>
    </el-table-column>
     <el-table-column
      label="是否支付"
      width="80">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
         <p>姓名: {{ scope.row.receiver }}</p>
          <p>商品价格: {{ scope.row.price }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.isPayed }}</el-tag>
          </div>
         
        </el-popover>
      </template>
    </el-table-column>
    
    
    <!---->
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          v-on:click="dialogFormVisible = true; handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <!--弹框-->
          <el-dialog title="修改订单信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="是否支付" :label-width="formLabelWidth">
      <el-input v-model="isPayed" autocomplete="off"></el-input>
    </el-form-item>
   
   
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" v-on:click="dialogFormVisible = false;submit()">确 定</el-button>
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
	export default({
		name:"Oder",
		inject:['reload'],
		data(){
			return{
				content: "订单列表",
				input:"",
				 tableData: [],
				 dialogTableVisible: false,
        		dialogFormVisible: false,
				

				isPayed:'',
         		id:'',
         
        form: {},
        formLabelWidth: '120px'
				
			}
		},
		methods:{
			getoder(){
				console.log(this.input)
			},
	handleEdit(index, row) {
		
      console.log(index, row);
   	console.log(row.isPayed)
   	console.log(typeof(row.isPayed))
      this.id=row._id

		this.isPayed=String(row.isPayed)
    
   },
      handleDelete(index, row) {
        console.log(index, row);
        api.getTokenoderdel(row._id,{},
      		localStorage.getItem('token')
      	).then((data)=>{
      		console.log(data)
      		if(data.data!=null){
      			alert("数据删除成功！！")
      			this.reload();
      		}
      	})
      },
      submit(){
      	
      	api.getTokenoderupdate(this.id,
      	{isPayed:this.isPayed},
      	localStorage.getItem('token')
      	).then((data)=>{
      		console.log(data)
      		if(data.data!=null){
      			alert("数据修改成功！！")
      			this.reload();
      		}
      	})
      }
//    del(){
//    	console.log(this.id)
////    	api.getTokenoderdel(this.id,{},
////    		localStorage.getItem('token')
////    	).then((data)=>{
////    		console.log(data)
////    	})
////    	
//    }
		},
	mounted(){
		this.$emit('toparent', this.content),
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
		}
	})
</script>

<style scoped="">
	
</style>