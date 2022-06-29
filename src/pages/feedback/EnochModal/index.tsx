import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtActionSheet, AtActionSheetItem, AtButton } from 'taro-ui'

export default class Enochmodal extends Component {

  onClick() {

  }

  render () {
    return (
      <View className='EnochModal'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>有无标题</Text>
        </View>
        <View className={'content'}>
          <AtButton type={'primary'} onClick={this.onClick.bind(this)}>打开ActionSheet</AtButton>
        </View>
      </View>
    )
  }
}
