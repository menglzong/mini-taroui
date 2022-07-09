import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import { AtMessage, AtButton } from 'taro-ui'
export default class Enochmessage extends Component {

  handleClick (type) {
    Taro.atMessage({
      'message': '消息通知' + (typeof(type) == 'object' ? '' : type),
      'type': type,
    })
  }

  render () {
    return (
      <View className='EnochMessage'>
        <AtMessage/>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基本案例</Text>
        </View>
        <View className={'padding'}>
          <AtButton className={'padding'} onClick={this.handleClick.bind(this)}>普通消息</AtButton>
          <AtButton className={'padding'} onClick={this.handleClick.bind(this, 'success')}>成功消息</AtButton>
          <AtButton className={'padding'} onClick={this.handleClick.bind(this, 'error')}>错误消息</AtButton>
          <AtButton className={'padding'} onClick={this.handleClick.bind(this, 'warning')}>警告消息</AtButton>
          <AtButton className={'padding'} onClick={this.handleClick.bind(this, 'info')}>提示消息</AtButton>
        </View>
      </View>
    )
  }
}
