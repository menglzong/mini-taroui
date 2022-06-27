import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtCountdown } from 'taro-ui'
export default class Countdown extends Component {

  onTimeUp () {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
    })
  }

  render () {
    return (
      <View className='Countdown'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>一般用法</Text>
        </View>
        <View className={'content'}>
          <AtCountdown
            format={{ hours: '时', minutes: '分', seconds: '秒' }}
            seconds={20}
            onTimeUp={this.onTimeUp.bind(this)}/>
        </View>
        <View className={'content'}>
          <AtCountdown
            format={{ hours: '时', minutes: '分', seconds: '秒' }}
            seconds={3000}
            onTimeUp={this.onTimeUp.bind(this)}/>
        </View>
        <View className={'content'}>
          <AtCountdown
            day={2}
            isShowDay={true}
            format={{ day:'天', hours: '时', minutes: '分', seconds: '秒' }}
            seconds={3000}
            onTimeUp={this.onTimeUp.bind(this)}/>
        </View>
        <View className={'content'}>
          <AtCountdown
            isShowHour={false}
            format={{ hours: '', minutes: '分', seconds: '秒' }}
            seconds={100}
            onTimeUp={this.onTimeUp.bind(this)}/>
        </View>


        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义格式</Text>
        </View>
        <View className={'content'}>
          <AtCountdown
            format={{ hours: ':', minutes: ':', seconds: '' }}
            seconds={100}
            onTimeUp={this.onTimeUp.bind(this)}/>
        </View>


        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>卡片式</Text>
        </View>
        <View className={'content'}>
          <AtCountdown
            isCard={true}
            format={{ hours: '时', minutes: '分', seconds: '秒' }}
            seconds={10}
            hours={3}
            onTimeUp={this.onTimeUp.bind(this)}/>
        </View>
        <View className={'content'}>
          <AtCountdown
            isShowDay={true}
            isCard={true}
            format={{ day:'天', hours: ':', minutes: ':', seconds: '' }}
            day={2}
            seconds={10}
            hours={3}
            onTimeUp={this.onTimeUp.bind(this)}/>
        </View>


        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义倒计时回调</Text>
        </View>
        <View className={'content'}>
          <AtCountdown
            isCard={true}
            format={{ hours: '时', minutes: '分', seconds: '秒' }}
            hours={30}
            onTimeUp={this.onTimeUp.bind(this)}/>
        </View>
      </View>
    )
  }
}
