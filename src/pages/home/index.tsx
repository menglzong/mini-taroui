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
            {title: 'Fab 浮动按钮', page: '/pages/baseView/EnochFab/index'},
          ]
        },
        {
          title: '视图组件',
          open: false,
          items: [
            {title: 'Avatar 头像'},
            {title: 'Article 文章样式'},
            {title: 'Badge 徽标'},
            {title: 'Countdown 倒计时'},
            {title: 'Curtain 幕帘'},
            {title: 'LoadMore 页面提示'},
            {title: 'Noticebar 通告栏'},
            {title: 'Tag 标签'},
            {title: 'Timeline 时间轴'},
            {title: 'Swiper 滑动视图容器'},
            {title: 'Divider 分隔符'},
            {title: 'Steps 步骤条'},
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
    Taro.navigateTo({url: item.page})
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
