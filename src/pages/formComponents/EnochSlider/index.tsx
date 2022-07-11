import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtSlider } from 'taro-ui'
import Taro from '@tarojs/taro'

interface IState {
  value: number
}
export default class Enochslider extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      value: 20
    }
  }

  onChange(event) {
    Taro.showToast({
      title: event.toString()
    })
  }

  onChanging(event) {
    this.setState({
      value: event
    })
  }

  render () {
    return (
      <View className='Enochslider'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <View className={'padding'}>
          <AtSlider
            step={2}
            max={50}
            min={0}
            value={this.state.value}
            showValue
            onChange={this.onChange.bind(this)}
            onChanging={this.onChanging.bind(this)}
          />
        </View>
      </View>
    )
  }
}
