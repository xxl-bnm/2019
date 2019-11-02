<template>
  <div>
    <div class="right">
        <div class="head">
            <el-page-header @back="goBack()" :content="content"></el-page-header>
        </div>
        <router-view @toparent="getval"></router-view>
    </div>
    <!-- 导航列表 -->
    <div class="nav">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>商品管理
            </template>
            <el-menu-item-group>
              <template slot="title">分组1</template>
              <el-menu-item index="1-1-1">
                <router-link to='/prolists'>商品列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-1-2">
                <router-link to='/addprolist'>添加商品</router-link>
              </el-menu-item>
              <el-menu-item index="1-1-3">
                <router-link to='./search'>查询商品</router-link>
              </el-menu-item>
            </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>商品分类管理
            </template>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-1-1">
                <router-link to='/prolist'>商品分类列表</router-link>
              </el-menu-item>
              <el-menu-item index="2-2-2">
                <router-link to='/procat'>添加商铺</router-link>
              </el-menu-item>
              <el-menu-item index="2-2-3">
                 <router-link to='/searchs'>查询商品分类</router-link>
              </el-menu-item>
            </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>用户管理</template>
            <el-menu-item-group>
              <template slot="title">用户管理</template>
              <el-menu-item index="1-1-1"><router-link to="/Users" >用户列表</router-link></el-menu-item>
              <el-menu-item index="1-1-1"><router-link to="/AddUsers" >添加用户</router-link></el-menu-item>
               <el-menu-item index="1-1-3"><router-link to="/SearchUsers" >查询用户</router-link></el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="订单管理">
              <el-menu-item index="1-2-1"><router-link to="/Oder">订单列表</router-link></el-menu-item>
               <el-menu-item index="1-2-2"><router-link to="/OderSearch">订单查询</router-link></el-menu-item>
            </el-menu-item-group>
            </el-submenu>
        </el-menu>
      </el-aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
    	content:"首页"
    };
  },
  methods: {
    goBack() {
       this.$router.go(-1);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
   
    getval(msg){
    	this.content=msg
    }
 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
.nav {
  min-height: 650px;
  position: fixed;
  float: left;
  top:0;
}
.right{
  width: 84.6%;
  margin-left: 200px;
  min-height: 80px;
}
.head {
  height: 60px;
  background: #ccc;
  
}
</style>
