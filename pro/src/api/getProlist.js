//获取产品列表接口把所有get或post文件都收过来给一个对象
import * as API from './index';
//暴露获取数据的方法·谁掉谁谁传参
export const getProlist=(params)=>{
    return API.GET('/api/productlist.php',params)
}
//详情接口
export const getDetail=(params)=>{
    return API.GET('/api/detail.php',params)
}
//添加购物车
export const getCar=(params)=>{
    return API.GET('/api/add-product.php',params)
}
//购物车列表
export const getCarlist=(params)=>{
    return API.GET('/api/cart-list.php',params)
}