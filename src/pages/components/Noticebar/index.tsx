import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtNoticebar } from 'taro-ui'
import Taro from '@tarojs/taro'

export default class Noticebar extends Component {

  onGotoMore() { 
    Taro.showToast({
      title: '展示更多'
    })
  }

  render () {
    return (
      <View className='Noticebar'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>文字</Text>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar single={true}>[单行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar>[多行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>跑马灯</Text>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar marquee>[单行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar marquee speed={80} icon={'volume-plus'}>[多行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar marquee speed={50}>[多行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>查看更多</Text>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar showMore single={true} onGotoMore={this.onGotoMore.bind(this)}>[单行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar showMore icon={'volume-plus'} single={true} onGotoMore={this.onGotoMore.bind(this)}>[单行行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar showMore>[多行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>关闭按钮</Text>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar close={true} single={true}>[单行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar close={true} showMore single={true} onGotoMore={this.onGotoMore.bind(this)}>[单行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar close={true} showMore icon={'volume-plus'} single={true} onGotoMore={this.onGotoMore.bind(this)}>[单行行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>
        <View style={'margin-top: 10px'}>
          <AtNoticebar close={true} showMore>[多行]这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏</AtNoticebar>
        </View>
      </View>
    )
  }
}
