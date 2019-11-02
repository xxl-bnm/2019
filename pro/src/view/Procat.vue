<template>
    <div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="图片展示">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
        </el-form>
    <el-button type="primary" icon="el-icon-edit" circle style="margin-left:500px" @click="upbtn"></el-button>
    <el-button type="success" icon="el-icon-check" circle @click="btn"></el-button>
    </div>
</template>
<script>
import * as api from '../api/getProlist'
export default {
    name:'Procat',
    data() {
        return {
            content:'添加商铺',
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    },
    methods: {
        btn(){
            api.getProcat({
                name:this.formLabelAlign.name,  
                descriptions:this.formLabelAlign.region,
                coverImg:this.formLabelAlign.type
            },localStorage.getItem('token')
            ).then((data)=>{
               alert('添加成功')
            })
        },
        upbtn(){
            this.formLabelAlign.name='',
            this.formLabelAlign.region='',
            this.formLabelAlign.type=''
        }
    },
    mounted() {
         this.$emit('toparent',this.content);
    },
}
</script>
<style scope="">
    
</style>