import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtBadge, AtButton } from 'taro-ui'

export default class Badge extends Component {

  render () {
    return (
      <View className={'badge'}>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>数字</Text>
        </View>
        <View className={'content'}>
          <AtBadge className={'title'} value={10} maxValue={99}>
            <AtButton size='small' circle>按钮</AtButton>
          </AtBadge>  
          <AtBadge className={'title'} value={100} maxValue={99}>
            <AtButton size='small'>按钮</AtButton>
          </AtBadge> 
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>小红点</Text>
        </View>
        <View className={'content'}>
          <AtBadge className={'title'} dot>
            <AtButton size='small' circle>按钮</AtButton>
          </AtBadge>  
          <AtBadge className={'title'} dot>
            <AtButton size='small'>按钮</AtButton>
          </AtBadge> 
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>文本</Text>
        </View>
        <View className={'content'}>
          <AtBadge className={'title'} value='New'>
            <AtButton size='small' circle>按钮</AtButton>
          </AtBadge>  
          <AtBadge className={'title'} value='New'>
            <AtButton size='small'>按钮</AtButton>
          </AtBadge> 
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>省略号</Text>
        </View>
        <View className={'content'}>
          <AtBadge className={'title'} value='···'>
            <AtButton size='small' circle>按钮</AtButton>
          </AtBadge>  
          <AtBadge className={'title'} value='···'>
            <AtButton size='small'>按钮</AtButton>
          </AtBadge> 
        </View>
      </View>
    )
  }
}
