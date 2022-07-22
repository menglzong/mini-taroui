import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtCard } from 'taro-ui'

export default class Enochcard extends Component {

  render () {
    return (
      <View className='EnochCard'>
          <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
          这也是内容区 可以随意定义功能
        </AtCard>
      </View>
    )
  }
}
