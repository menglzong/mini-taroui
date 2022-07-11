import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtSwitch } from 'taro-ui'

interface IState {
  value: boolean
}
export default class Enochswitch extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      value: false
    }
  }

  onChange(event) {
   this.setState({
    value: event
   })
  }

  render () {
    const { value } = this.state
    let title = '状态:' + (value ? '开' : '关')
    return (
      <View className='EnochSwitch'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基本用法</Text>
        </View>
        <View className={'padding'}>
          <AtSwitch
            title={title}
            checked={value}
            onChange={this.onChange.bind(this)}
          />
        </View>
      </View>
    )
  }
}
