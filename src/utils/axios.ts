import axios from "axios";
import moment from "moment";

const instance = axios.create({
  baseURL: "http://localhost:7001",
  timeout: 3000,
  withCredentials: true, // 表示跨域请求时是否需要使用凭证
  headers: { 'X-Custom-Timestrap': moment().format("YYYY-MM-DD hh:mm:ss") },
});

instance.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 重定向
    if (error.response.status === 301) {
      const redirect = error.response.data.data.redirect;
      return (window.location.href = redirect);
    }
    // 重新登录
    if (error.response.status === 401) {
      return (window.location.href = "http://localhost:8088/index.html");
    }
    return Promise.reject(error.response.data);
  }
);

export default instance;
