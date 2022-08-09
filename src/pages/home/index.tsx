import { Component } from 'react'
import { View, Text, Swiper, SwiperItem, Image, } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import pageData from './page.json'

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
      datas: pageData
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


  // onShareAppMessage () {
  //   return {
  //     title: 'Taro-UI',
  //     path: '/pages/home/index' 
  //   }
  // }

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
