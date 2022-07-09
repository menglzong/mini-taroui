import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtProgress } from 'taro-ui'
export default class Enochprogress extends Component {

  render () {
    return (
      <View className='EnochProgress'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础进度条</Text>
        </View>
        <View className={'padding'}>
          <AtProgress percent={25}/>
          <AtProgress percent={50}/>
          <AtProgress percent={75}/>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>隐藏进度文案</Text>
        </View>
        <View className={'padding'}>
          <AtProgress percent={25} isHidePercent/>
          <View className={'padding'}></View>
          <AtProgress percent={50} isHidePercent/>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义进度条线宽</Text>
        </View>
        <View className={'padding'}>
          <AtProgress percent={25} strokeWidth={5}/>
          <AtProgress percent={50} strokeWidth={10}/>
          <AtProgress percent={75} strokeWidth={15}/>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义颜色</Text>
        </View>
        <View className={'padding'}>
          <AtProgress percent={25} color={'#FF4949'}/>
          <AtProgress percent={50} color={'#13CE66'}/>
          <AtProgress percent={75} color={'#FFC82C'}/>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>不同的状态</Text>
        </View>
        <View className={'padding'}>
          <AtProgress percent={25} color={'#FF4949'} status={'error'}/>
          <AtProgress percent={50} color={'#13CE66'} status={'progress'}/>
          <AtProgress percent={75} color={'#FFC82C'} status={'success'}/>
        </View>

      </View>
    )
  }
}
