<template>
    <div>
        <el-table
            :data="tableData"
            height="460"
            border
            style="width: 100%">
            <el-table-column
            fixed
            prop="createdAt"
            label="上架时间"
            width="150">
            </el-table-column>
            <el-table-column
            prop="name"
            label="商品名称"
            width="120">
            </el-table-column>
            <el-table-column
            prop="descriptions"
            label="商品描述">
            </el-table-column>
            <el-table-column
            prop="updatedAt"
            label="最新时间">
            </el-table-column>
            <el-table-column
            prop="_id"
            label="商品编号"
            width="180">
            </el-table-column>
            <el-table-column
            prop="quantity"
            label="库存"
            width="120">
            </el-table-column>
            <el-table-column
            prop="price"
            label="价格"
            width="120">
            </el-table-column>
            <!-- <el-table-column
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" v-on:click='dialogFormVisible = true;upbtn(scope.row)'>编辑</el-button>

                    <el-dialog title="商品信息" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="商品名称" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="商品价格" :label-width="formLabelWidth">
                            <el-input v-model="form.price" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="商品信息" :label-width="formLabelWidth">
                            <el-input v-model="form.desc" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="库存" :label-width="formLabelWidth">
                            <el-input v-model="form.quantity" autocomplete="off"></el-input>
                        </el-form-item>
                         <img :src="src" alt="" style="width: 150px;margin:auto">
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" v-on:click='dialogFormVisible = false;sure(scope.row)'>确 定</el-button>
                    </div>
                    </el-dialog>
            </template>
            </el-table-column> -->
              <el-table-column
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" v-on:click='dialogFormVisible = true;upbtn(scope.row)'>编辑</el-button>

                    <el-dialog title="商品信息" :visible.sync="dialogFormVisible">
                     <el-form :model="form">
                        <el-form-item label="商品名称" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="商品价格" :label-width="formLabelWidth">
                            <el-input v-model="form.price" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="商品信息" :label-width="formLabelWidth">
                            <el-input v-model="form.desc" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="库存" :label-width="formLabelWidth">
                            <el-input v-model="form.quantity" autocomplete="off"></el-input>
                        </el-form-item>
                         <img :src="src" alt="" style="width: 150px;margin:auto">
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" v-on:click='dialogFormVisible = false;sure(scope.row)'>确 定</el-button>
                    </div>
                    </el-dialog>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import * as api from '../api/getProlist'
export default {
    name:'Prolists',
    inject: ['reload'],
    data() {
        return {
            src:'',
            content:'商品列表',
            page:'',
            tableData:[],
            id:'',
            pid:'',
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: '',
                price:'',
                desc:'',
                quantity:'',
                delivery: false,
            },
            formLabelWidth: '120px'
            
        }
    },
    methods: {
          handleClick(row) {
           //console.log(row._id);
            this.id=row._id;
            api.getDelete(
                this.id,
                {},
                localStorage.getItem('token')
            ).then((data)=>{
                if(data.status == 200){
                     this.reload()
                }
            })
         },
         upbtn(row){
             console.log(row)
             this.pid=row._id;
             console.log(row);
             this.form.name=row.name;
             this.form.desc=row.descriptions;
             this.form.quantity=row.quantity;
             this.form.price=row.price;
             this.src=row.coverImg
         },
         sure(row){
            api.getUpdate(
                this.pid,
                {
                    name:this.form.name,
                    descriptions:this.form.desc,
                    quantity:this.form.quantity,
                    price:this.form.price
                },localStorage.getItem('token')
            ).then((data)=>{
                if(data.status == 200){
                     this.reload()
                }
            })
         }
    },
    mounted() {
        this.$emit('toparent',this.content);
         api.getProList({
               per:10,
               page:10,
               name:'',
            },localStorage.getItem('token')
        ).then((data)=>{
            //console.log(data);
            this.tableData=data.data.products;
            this.page=data.data.totalCount;
        })
    },
}
</script>
<style scope="">
    
</style>