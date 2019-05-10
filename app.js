import { httpRequest } from './service/config'
App({
  globalData: {
    userInfo: {}
  },
  onLaunch(options) {
    console.log('App Launch', options);
    console.log('getSystemInfoSync', dd.getSystemInfoSync());
    console.log('SDKVersion', dd.SDKVersion);
    console.info('小程序启动了');
    let self = this;
    dd.getAuthCode({
      success: function(res) {
        console.log('获取code成功', res);
        if(res.authCode) {
          // 通过authCode调取后台接口，获取用户信息
          httpRequest({
            url: '/ding/getUser/' + res.authCode,
            method: 'GET',
            data: {},
          }).then((res) => {
            console.log(res.data.data);
            dd.alert({
              content: res.data.data
            });
          });
        }
      },
      fail: function(err) {

      }
    });
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
});
