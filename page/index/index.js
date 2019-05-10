var app = getApp();
Page({
  data: {
    modalOpened: false,
    name: '张三',
    goods: [{
      id: '1',
      name: '红烧茄子'
    },{
      id: '2',
      name: '青椒炒蛋'
    },{
      id: '3',
      name: '青椒炒蛋'
    },{
      id: '4',
      name: '青椒炒蛋'
    },{
      id: '5',
      name: '青椒炒蛋'
    },{
      id: '6',
      name: '青椒炒蛋'
    }],
  },
  onLoad() {

  },
  onReady(options) {
    
  },
  onShow(options) {

  },
  // 自定义事件
  // 打开弹框
  openModal() {
    this.setData({
      modalOpened: true
    });
  },
  onModalClick() {
    this.setData({
      modalOpened: false
    });
  },
  // 弹框关闭
  onModalClose() {
    this.setData({
      modalOpened: false
    });
  },
  // 商品点击
  onGoodClick(e) {
    dd.showToast({
      type: '',
      content: e.target.dataset.good.name,
      duration: 1000,
      success: () => {
      },
    });
  },
})