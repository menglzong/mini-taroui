import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtRate } from 'taro-ui'

interface IState {
  value: number
}
export default class Enochrate extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      value: 2
    }
  }

  onChange(event) {
   this.setState({
    value: event
   })
  }

  render () {
    return (
      <View className='Enochrate'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基本用法</Text>
        </View>
        <View className={'padding'}>
          <AtRate
            value={this.state.value}
            max={10}
            onChange={this.onChange.bind(this)}
          />
        </View>
      </View>
    )
  }
}
