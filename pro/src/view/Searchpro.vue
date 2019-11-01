<template>
    <div class="con">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="商品id">
                <el-input v-model="formInline.id" placeholder="请输入商品id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-form  label-width="80px" :model="formLabelAlign" style="width:800px;" id="demo">
            <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="formLabelAlign.price"></el-input>
            </el-form-item>
            <el-form-item label="商品信息">
                <el-input v-model="formLabelAlign.desc"></el-input>
            </el-form-item>
              <el-form-item label="上架时间">
                <el-input v-model="formLabelAlign.createdAt"></el-input>
            </el-form-item>
            <el-form-item label="最新时间">
                <el-input v-model="formLabelAlign.updatedAt"></el-input>
            </el-form-item>
            <el-form-item label="库存">
                <el-input v-model="formLabelAlign.quantity"></el-input>
            </el-form-item>
        </el-form>
        <img :src="src" alt="" style="width: 150px;">
    </div>
</template>
<script>
import * as api from '../api/getProlist'
export default {
    name:'Searchpro',
     data() {
      return {
          src:'',
        formInline: {
          id: '',
        },
        formLabelAlign: {
          name: '',
          price: '',
          desc: '',
          createdAt:'',
          updatedAt:'',
          quantity:''
        }
      }
    },
    methods: {
      onSubmit() {
        //console.log(this.formInline.id);
        api.getSearch(
            this.formInline.id,
            {},
            localStorage.getItem('token')
        ).then((data)=>{
            console.log(data);
            this.formLabelAlign.name=data.data.name;
            this.formLabelAlign.price=data.data.price;
            this.formLabelAlign.desc=data.data.descriptions;
            this.formLabelAlign.createdAt=data.data.createdAt;
            this.formLabelAlign.updatedAt=data.data.updatedAt;
            this.formLabelAlign.quantity=data.data.quantity;
            this.src=data.data.coverImg
        })
      }
    }
}
</script>
<style scope="">
    .con{
        overflow: hidden;
    }
    .demo-form-inline{
        position: absolute;
        left: 40%;
        margin-top: 50px;
    }
    #demo{
        position: absolute;
        margin-top: 120px;
        left: 20%;
    }
   
</style>