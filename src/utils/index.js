// 获取query参数
export const getQueryString = search => {
  const searchArr = search.slice(1).split('&');
  let resJson = {};
  searchArr.forEach(item => {
    const itemSearch = item.split('=');
    resJson[itemSearch[0]] = itemSearch[1];
  });
  return resJson;
};
