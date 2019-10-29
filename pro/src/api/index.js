import axios from 'axios';
//配置路径在config中加入基路径;/bulid、webpack
let baseUrl=process.env.API_URL;
let baseurl=process.env.API_url;
//封装单个暴露
export const GET=(url,params)=>{
    return axios.get(`${baseUrl}${url}`,{params:params}).then((data)=>{return data})
}

export const get=(url,params)=>{
    return axios.get(`${baseurl}${url}`,{params:params}).then((data)=>{return data})
}
//封装post;直接是对象，课简写
export const POST=(url,params)=>{
    return axios.post(`${baseUrl}${url}`,params).then(data=>data)
}

export const post=(url,params)=>{
    return axios.post(`${baseurl}${url}`,params).then(data=>data)
}
