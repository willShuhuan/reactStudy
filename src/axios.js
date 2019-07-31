import axios from 'axios';

//  "proxy": "http://testparty.api.xinhuaapp.com/Service"
//  "proxy": "http://ynparty.api.xinhuaapp.com:81/Service"
axios.interceptors.request.use(config => {
  // config.url = `http://testparty.api.xinhuaapp.com/Service${config.url}`;
  // config.headers.post["Access-Control-Allow-Headers"]="*";
  // config.headers.post["Access-Control-Allow-Methods"]="GET,POST";
  // config.headers.post["Access-Control-Allow-Credentials"]="true";
  // config.headers.post['Access-Control-Allow-Origin']="*";
  return config;
}, error => {
  alert('请求错误');
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response.data;
}, error => {
  // alert('服务器错误');
  return Promise.reject(error.response);
});

export default axios;
