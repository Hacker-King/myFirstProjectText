import axios from 'axios';

const Axios = axios.create({
    baseURL: "http://localhost:3003"
  });
  
// 登录接口
export const login = (param)=>{
    return Axios.post('./login',param)
}