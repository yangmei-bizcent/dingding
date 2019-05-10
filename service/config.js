import { API_ROOT_URL } from './baseuri'
const app = getApp();

function _httpRequest(params) {
  return new Promise((resolve, reject) => {
    dd.httpRequest({
      url: API_ROOT_URL + params.url,
      method: params.method ? params.method : 'GET',
      data: params.data,
      dataType: 'json',
      success: function(res) {
        if(res.status == 200 && res.data.code == 200) {
          resolve(res);
          return;
        }else {
          dd.showToast({
            type: '',
            content: res.data.msg,
            duration: 2000,
          });
          reject(res)
        }
      },
      fail: function(res) {
        reject(res)
      },
    });
  });
}

export const httpRequest = params => {
  return _httpRequest(params);
}