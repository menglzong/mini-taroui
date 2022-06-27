import { Component } from 'react'
import { View, Text, Swiper, SwiperItem, Image, } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import {
  AtList,
  AtListItem,
  AtAccordion
} from 'taro-ui'

interface IState {
  datas?: any[]
}

export default class Home extends Component<{},IState> {

  constructor(props) {
    super(props)
    this.state = {
      datas: [
        {
          title: '基础组件',
          open: false,
          items: [
            {title: 'Icon 图标', page: '/pages/baseView/EnochIcons/index'},
            {title: 'Button 按钮', page: '/pages/baseView/EnochButton/index'},
            {title: 'Fab 浮动按钮', page: '/pages/baseView/EnochButton/index'},
          ]
        },
        {
          title: '视图组件',
          open: false,
          items: [
            {title: 'Avatar 头像', page: '/pages/components/Avatar/index'},
            {title: 'Article 文章样式', page: '/pages/components/Article/index'},
            {title: 'Badge 徽标', page: '/pages/components/Badge/index'},
            {title: 'Countdown 倒计时', page: '/pages/components/Countdown/index'},
            {title: 'Curtain 幕帘', page: '/pages/components/Curtain/index'},
            {title: 'LoadMore 页面提示', page: '/pages/components/LoadMore/index'},
            {title: 'Noticebar 通告栏', page: '/pages/components/Noticebar/index'},
            {title: 'Tag 标签', page: '/pages/components/Tag/index'},
            {title: 'Timeline 时间轴', page: '/pages/components/Timeline/index'},
            {title: 'Swiper 滑动视图容器', page: '/pages/components/Swiper/index'},
            {title: 'Divider 分隔符', page: '/pages/components/Divider/index'},
            {title: 'Steps 步骤条', page: '/pages/components/Steps/index'}
          ]
        },
        // {
        //   title: '操作反馈',
        //   open: false,
        //   items: [
        //     {title: 'Icon 图标'},
        //     {title: 'Button 按钮'},
        //     {title: 'Fab 浮动按钮'},
        //   ]
        // },
        // {
        //   title: '表单组件',
        //   open: false,
        //   items: [
        //     {title: 'Icon 图标'},
        //     {title: 'Button 按钮'},
        //     {title: 'Fab 浮动按钮'},
        //   ]
        // },
        // {
        //   title: '布局组件',
        //   open: false,
        //   items: [
        //     {title: 'Icon 图标'},
        //     {title: 'Button 按钮'},
        //     {title: 'Fab 浮动按钮'},
        //   ]
        // }
      ]
    }
  }

  swiperClick(index) {
    console.log(`object`, index)
    Taro.navigateTo({url: '/pages/detail/index?index=' + index})
  }

  accordionClick(item) {
    item.open = !item.open
    this.forceUpdate()
  }

  listItemClick(item) {
    Taro.navigateTo({url: item.page + '?title=' + item.title})
  }

  render () {
    const { datas } = this.state
    return (
      <View className='home'>
        {
          datas && datas.map((item, index) => {
            return <AtAccordion 
              key={item.title}
              title={item.title}
              open={item.open}
              isAnimation={false}
              onClick={this.accordionClick.bind(this, item, index)}
            >
              <AtList>
                {
                  item.items.map((listItem) => {
                    return <AtListItem iconInfo={{value: 'file-generic', size: 20}} title={listItem.title} arrow='right' onClick={this.listItemClick.bind(this, listItem)}/>
                  })
                }
              </AtList>
            </AtAccordion>
          })
        }
      </View>
    )
  }
}
