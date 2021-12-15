import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001',
  timeout: 10000,
});

instance.interceptors.request.use(function(request) {
  return request;
}, function(error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  if (response.status === 401) {
    return window.location.href = '/'
  }
  return response;
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance;