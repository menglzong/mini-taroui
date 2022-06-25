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
      datas: [{
        title: '基础组件',
        open: false,
        items: [
          {title: 'Icon 图标'},
          {title: 'Button 按钮'},
          {title: 'Fab 浮动按钮'},
        ]
      }]
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

  render () {
    const { datas } = this.state
    return (
      <View className='home'>
        <Text>Taro-UI</Text>
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
                    return <AtListItem title={listItem.title} arrow='right'/>
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
