import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtSteps } from 'taro-ui'


interface IState {
  current: number
  current1: number
  current2: number
}
export default class Steps extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      current1: 0,
      current2: 0
    }
  }

  onChange (current) {
    this.setState({
      current
    })
  }

  onChange1 (current) {
    this.setState({
      current1: current
    })
  }

  onChange2 (current) {
    this.setState({
      current2: current
    })
  }

  render () {
    const { current, current1, current2 } = this.state
    const items = [
      { title: '步骤一', desc: '这里是额外的信息，最多两行' },
      { title: '步骤二', desc: '这里是额外的信息，最多两行' },
      { title: '步骤三', desc: '这里是额外的信息，最多两行' }
    ]
    const items1 = [
      { title: '步骤一', desc: '这里是额外的信息，最多两行', icon: {
        value: 'sound',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14',
      }},
      { title: '步骤二', desc: '这里是额外的信息，最多两行', icon: {
        value: 'shopping-cart',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14',
      }},
      { title: '步骤三', desc: '这里是额外的信息，最多两行', icon: {
        value: 'camera',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14',
      }}
    ]
    const items2 = [
      { title: '步骤一', desc: '这里是额外的信息，最多两行', status: 'success' },
      { title: '步骤二', desc: '这里是额外的信息，最多两行' },
      { title: '步骤三', desc: '这里是额外的信息，最多两行', status: 'error' }
    ]
    return (
      <View className='Steps'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>一般用法</Text>
        </View>
        <AtSteps items={items} current={current} onChange={this.onChange.bind(this)}/>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义图标</Text>
        </View>
        <AtSteps items={items1} current={current1} onChange={this.onChange1.bind(this)}/>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>状态步骤条</Text>
        </View>
        <AtSteps items={items2} current={current2} onChange={this.onChange2.bind(this)}/>

      </View>
    )
  }
}
