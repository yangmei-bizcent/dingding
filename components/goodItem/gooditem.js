Component({
  mixins: [],
  data: {
    username: '',
    good: {},
  },
  props: {
    name: '',
    goodInfo: {
      type: Object
    }
  },
  didMount() {
    let self = this;
    this.setData({
      username: this.props.name
    });
    this.setData({
      good: this.props.goodInfo
    });
  },
  didUpdate() {
    console.log('商品信息', this.data.good);
  },
  didUnmount() {

  },
  methods: {
    // 组件自定义方法
  },
})