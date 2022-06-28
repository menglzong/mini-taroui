import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtDivider, AtIcon } from 'taro-ui'

export default class Divider extends Component {

  render () {
    return (
      <View className='Divider'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>一般用法</Text>
        </View>
        <AtDivider content={'分割线'}/>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义颜色</Text>
        </View>
        <AtDivider content={'分割线'} fontColor={'#ed3f14'} lineColor={'#ed3f14'}/>
        <AtDivider content={'分割线'} fontColor={'red'} lineColor={'block'}/>
        <AtDivider content={'分割线'} fontColor={'blue'} lineColor={'green'}/>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义内容</Text>
        </View>
        <AtDivider>
          <AtIcon value='check-circle'></AtIcon>
        </AtDivider>

      </View>
    )
  }
}
