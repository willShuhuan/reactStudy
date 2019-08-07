import axios from 'axios';

//  "proxy": "http://testparty.api.xinhuaapp.com/Service"
//  "proxy": "http://ynparty.api.xinhuaapp.com:81/Service"
//  "proxy": " http://testwmapp.xinhuaapp.com/server/"  新文明活动详情
axios.interceptors.request.use(config => {
  // config.url = `http://testparty.api.xinhuaapp.com/Service${config.url}`;
  // config.headers.post["Access-Control-Allow-Headers"]="*";
  // config.headers.post["Access-Control-Allow-Methods"]="GET,POST";
  // config.headers.post["Access-Control-Allow-Credentials"]="true";
  // config.headers.post['token']="7271e6befea95aae1b0059dbef794d5b7460738f8f75484ff0d3c7f24799c46c2617be8e30d7d86036dd9acf54a194050d1d8929b1b34220971a168719c88dff1564984809012";
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
