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
            <el-form-item label="库存">
                <el-input v-model="formLabelAlign.quantity"></el-input>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="formLabelAlign.price"></el-input>
            </el-form-item>
<!-- //上传图片            -->
           <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}">
                    <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url" alt=""
                    >
                    <span class="el-upload-list__item-actions">
                        <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                        >
                        <i class="el-icon-zoom-in"></i>
                        </span>
                        <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                        >
                        <i class="el-icon-download"></i>
                        </span>
                        <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                        >
                        <i class="el-icon-delete"></i>
                        </span>
                    </span>
                    </div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-form>
    <el-button type="primary" icon="el-icon-edit" circle style="margin-left:500px" @click="upbtn"></el-button>
    <el-button type="success" icon="el-icon-check" circle @click="btn"></el-button>
    </div>
</template>
<script>
import * as api from '../api/getProlist'
export default {
    name:'AddProlist',
    data() {
        return {
            src:'',
            content:'添加商品',
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: '',
                quantity:'',
                price:'',
                img:''
            },
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
        }
    },
    methods: {
         handleRemove(file) {//删除
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {//下载
            this.src =file.url
        },
        btn() {
           // console.log(this.src)
            api.getaddProlist({
                name:this.formLabelAlign.name,         
                descriptions :this.formLabelAlign.region,
                quantity :this.formLabelAlign.quantity,     
                price:this.formLabelAlign.price,
                coverImg :'images/201606/thumb_img/31_thumb_P_1464910917840.jpg',     
                productCategory:'images/201606/thumb_img/34_thumb_P_1464911224858.jpg' 
            },localStorage.getItem('token')
        ).then((data)=>{
               console.log(data);
            })
        },
        upbtn(){
            this.formLabelAlign.quantity='',
            this.formLabelAlign.name='',
            this.formLabelAlign.region='',
            this.formLabelAlign.price=''
        }
    },
    mounted() {
        this.$emit('toparent',this.content);
    },
}
</script>
<style scope="">
    
</style>