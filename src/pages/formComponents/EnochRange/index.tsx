import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtRange } from 'taro-ui'
import Taro from '@tarojs/taro'

interface IState {
  value: [number, number]
}
export default class Enochrange extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      value: [5, 10]
    }
  }

  onChange(event) {
    this.setState({
      value: event
    })
  }

  onAfterChange(event) {
    Taro.showToast({
      title: event.toString()
    })
  }

  render () {
    return (
      <View className='Enochrange'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <View className={'padding'}>
          <AtRange
            blockSize={20}
            max={50}
            min={0}
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onAfterChange={this.onAfterChange.bind(this)}
          />
        </View>
      </View>
    )
  }
}
