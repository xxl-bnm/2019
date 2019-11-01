//获取产品列表接口把所有get或post文件都收过来给一个对象
import * as API from './index';
//
// export const getProlist=(params)=>{
//     return API.GET('/api/v1/users/manager_info',params)
// }
//不带token商品列表
export const getProlist=(params)=>{
    return API.GET('/api/v1/admin/products',params)
}
//带token验证的商品列表
export const getProList=(params,token)=>{
    return API.GETHead('/api/v1/admin/products',params,token)
}
//商品分类
export const getProlists=(params,token)=>{
    return API.GETHead('/api/v1/admin/product_categories',params,token)
}
//订单列表
export const getOrder=(params)=>{
    return API.GET('/api/v1/admin/orders',params)
}
//添加商铺
export const getProcat=(params,token)=>{
    return API.POSTHead('/api/v1/admin/product_categories',params,token)
}
//添加商品
export const getaddProlist=(params,token)=>{
    return API.POSTHead('/api/v1/admin/products',params,token)
}
//删除商品
export const getDelete=(id,params,token)=>{
    return API.DELETE('/api/v1/admin/products/'+id,params,token)
}
//删除分类商品
export const getDeleteCat=(id,params,token)=>{
    return API.DELETE('/api/v1/admin/product_categories/'+id,params,token)
}
//修改商品
export const getUpdate=(id,params,token)=>{
    return API.PUT('/api/v1/admin/products/'+id,params,token)
}
//修改分类商品
export const getUpdateCat=(id,params,token)=>{
    return API.PUT('/api/v1/admin/product_categories/'+id,params,token)
}
//查询
export const getSearch =(id,params,token)=>{
    return API.GETHead('/api/v1/admin/products/'+id,params,token)
} 
//查询类别
export const getSearchCat =(id,params,token)=>{
    return API.GETHead('/api/v1/admin/product_categories/'+id,params,token)
} 