import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtInputNumber } from 'taro-ui'

interface IState {
  value: string
}

export default class Enochinputnumber extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      value: '0'
    }
  }

  onChange(event) {
    this.setState({
      value: event
    })
    return event
  }

  render () {
    const { value } = this.state
    return (
      <View className='EnochInputNumber'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基本用法</Text>
        </View>
        <View className={'padding'}>
          <AtInputNumber type={'number'} min={0} max={10} step={1} value={value} onChange={this.onChange.bind(this)}/>
        </View>
      </View>
    )
  }
}
