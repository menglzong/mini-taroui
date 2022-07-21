export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/detail/index',
    //基础组件
    'pages/baseView/EnochIcons/index',
    'pages/baseView/EnochButton/index',
    //视图组件
    'pages/components/Article/index',
    'pages/components/Avatar/index',
    'pages/components/Badge/index',
    'pages/components/Countdown/index',
    'pages/components/Curtain/index',
    'pages/components/Divider/index',
    'pages/components/LoadMore/index',
    'pages/components/Noticebar/index',
    'pages/components/Steps/index',
    'pages/components/Swiper/index',
    'pages/components/Tag/index',
    'pages/components/Timeline/index',
    //操作反馈
    'pages/feedback/EnochActionSheet/index',
    'pages/feedback/EnochActivityIndicator/index',
    'pages/feedback/EnochMessage/index',
    'pages/feedback/EnochModal/index',
    'pages/feedback/EnochProgress/index',
    'pages/feedback/EnochSwipeAction/index',
    'pages/feedback/EnochToast/index',
    //表单组件
    'pages/formComponents/EnochForm/index',
    'pages/formComponents/EnochInput/index',
    'pages/formComponents/EnochInputNumber/index',
    'pages/formComponents/EnochRadio/index',
    'pages/formComponents/EnochCheckbox/index',
    'pages/formComponents/EnochRate/index',
    'pages/formComponents/EnochSwitch/index',
    'pages/formComponents/EnochTextarea/index',
    'pages/formComponents/EnochPicker/index',
    'pages/formComponents/EnochSearchBar/index',
    'pages/formComponents/EnochSlider/index',
    'pages/formComponents/EnochImagePicker/index',
    'pages/formComponents/EnochRange/index',
    //布局组件
    'pages/flexComponents/EnochFlex/index',
    'pages/flexComponents/EnochGrid/index',
    'pages/flexComponents/EnochList/index',
    'pages/flexComponents/EnochCard/index',
    'pages/flexComponents/EnochFloatLayout/index',
    'pages/flexComponents/EnochAccordion/index'
    //导航组件
    // 'pages/flexComponents/EnochSwitch/index',
    // 'pages/flexComponents/EnochTextarea/index',
    // 'pages/flexComponents/EnochPicker/index',
    // 'pages/flexComponents/EnochSearchBar/index',
    // 'pages/flexComponents/EnochSlider/index',
    // 'pages/flexComponents/EnochImagePicker/index',
    // 'pages/flexComponents/EnochRange/index'
  ],
  // tabBar: {
  //   list: [{
  //     'pagePath': 'pages/home/index',
  //     'text': '首页',
  //     'iconPath': './assets/images/tabbar/home.png',
  //     'selectedIconPath': './assets/images/tabbar/home_active.png'
  //   }, {
  //     'pagePath': 'pages/cart/index',
  //     'text': '购物车',
  //     'iconPath': './assets/images/tabbar/cart.png',
  //     'selectedIconPath': './assets/images/tabbar/cart_active.png'
  //   }, {
  //     'pagePath': 'pages/center/index',
  //     'text': '我的',
  //     'iconPath': './assets/images/tabbar/profile.png',
  //     'selectedIconPath': './assets/images/tabbar/profile_active.png'
  //   }],
  //   'color': '#000',
  //   'selectedColor': '#ff5777',
  //   'backgroundColor': '#fff',
  //   'borderStyle': 'black'
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
