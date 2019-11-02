import axios from 'axios';


let baseUrl=process.env.API_URL;


export const POST=(url,params)=>{
    return axios.post(`${baseUrl}${url}`,params).then(data=>data)
}


export const HeadPost = (url,params,token)=>{
	return axios({
		method:"post",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}

export const GET=(url,params)=>{
	return axios.get(`${baseUrl}${url}`,{params:params}).then((data)=>{return data})
}
//token
export const GETHead=(url,params,token)=>{
   return axios({
       method:'get',
       url:`${baseUrl}${url}`,
       data:params,
       headers:{authorization:'Bearer '+token}
   }).then(data=>data)
}


export const POSTHead=(url,params,token)=>{
    return axios({
        method:'post',
        url:`${baseUrl}${url}`,
        data:params,
        headers:{authorization:'Bearer '+token}
    }).then(data=>data)
}


export const HeadGet = (url,params,token)=>{
	return axios({
		method:"get",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}


// export const PUT=(url,params)=>{
// 	return axios.put(`${baseUrl}${url}`,{params:params}).then((data)=>{return data})
// }

//修改用户
export const HeadPut = (url,params,token)=>{
	return axios({
		method:"put",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}


//删除用户信息
export const HeadDelete = (url,params,token)=>{
	return axios({
		method:"delete",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}
//获取用户信息
export const HeadSearch = (url,params,token)=>{
	return axios({
		method:"get",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}
//修改用户密码
export const HeadPass = (url,params,token)=>{
	return axios({
		method:"put",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}

//获取订单列表
export const HeadOder = (url,params,token)=>{
	return axios({
		method:"get",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}
//修改订单信息
export const HeadOderupdate = (url,params,token)=>{
	return axios({
		method:"put",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}
//删除订单信息
export const HeadOderdel = (url,params,token)=>{
	return axios({
		method:"delete",
		url:`${baseUrl}${url}`,
		data:params,
		headers:{
			authorization:"Bearer "+token
		}
	}).then(data=>data)
}
//封装delete
export const DELETE=(url,params,token)=>{
    return axios({
        method:'delete',
        url:`${baseUrl}${url}`,
        data:params,
        headers:{authorization:'Bearer '+token}
    }).then(data=>data)
}
//封装put
export const PUT=(url,params,token)=>{
    return axios({
        method:'put',
        url:`${baseUrl}${url}`,
        data:params,
        headers:{authorization:'Bearer '+token}
    }).then(data=>data)
}
