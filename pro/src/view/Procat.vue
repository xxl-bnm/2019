<template>
    <div>
       <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
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
            labelPosition: 'top',
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
               // console.log(data);
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