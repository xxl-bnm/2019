
import * as API from './index';


//不带token商品列表
// export const getProlist=(params)=>{
//     return API.GET('/api/v1/admin/products',params)
// }
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
//post
export const getProlist=(params)=>{
    return API.POST('/api/v1/auth/manager_login',params)
}


export const getTokenp=(params,token)=>{
    return API.HeadPost('/api/v1/admin/users',params,token)
}




//get
export const getUserslist=(params)=>{
    return API.GET('/api/v1/admin/users',params)
}

export const getTokeng=(params,token)=>{
    return API.HeadGet('/api/v1/admin/users',params,token)
}

//put

export const upUserinfo=(params)=>{
    return API.PUT('/api/v1/admin/users/5c6e953a224d199e15f12b9d',params)
}

//修改用户信息
export const getTokenput=(id,params,token)=>{
 return API.HeadPut('/api/v1/admin/users/'+id,params,token)
}

//删除用户信息
export const getTokendelete=(id,params,token)=>{
 return API.HeadDelete('/api/v1/admin/users/'+id,params,token)
}
//搜索指定用户信息
export const getTokensearch=(id,params,token)=>{
 return API.HeadSearch('/api/v1/admin/users/'+id,params,token)
}
//修改用户密码
export const getTokenpass=(id,params,token)=>{
 return API.HeadPass('/api/v1/admin/users/reset_pwd/'+id,params,token)
}


//获取订单列表
export const getTokenoder=(params,token)=>{
 return API.HeadOder('/api/v1/admin/orders',params,token)
}
//更改订单信息
export const getTokenoderupdate=(id,params,token)=>{
 return API.HeadOderupdate('/api/v1/admin/orders/'+id,params,token)
}
//删除订单信息
export const getTokenoderdel=(id,params,token)=>{
 return API.HeadOderdel('/api/v1/admin/orders/'+id,params,token)
}




