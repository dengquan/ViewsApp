import axios from 'axios';
const Api = {
  base: 'http://localhost:8080/account',
};
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    config.url = Api.base + config.url;
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 根据返回值做一些处理
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);
export default axios;
