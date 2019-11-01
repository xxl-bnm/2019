import axios from 'axios';
//配置路径在config中加入基路径;/bulid、webpack
let baseUrl=process.env.API_URL;
//封装get
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

//封装post;
export const POST=(url,params)=>{
    return axios.post(`${baseUrl}${url}`,params).then(data=>data)
}
export const POSTHead=(url,params,token)=>{
    return axios({
        method:'post',
        url:`${baseUrl}${url}`,
        data:params,
        headers:{authorization:'Bearer '+token}
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

