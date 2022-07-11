import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtTextarea } from 'taro-ui'

interface IState {
  value: string
}
export default class Enochtextarea extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  onChange(event) {
   this.setState({
    value: event
   })
  }

  render () {
    const { value } = this.state
    return (
      <View className='Enochtextarea'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基本用法</Text>
        </View>
        <View className={'padding'}>
          <AtTextarea
            value={value}
            maxLength={200}
            placeholder={'请输入文本'}
            onChange={this.onChange.bind(this)}
          />
        </View>
      </View>
    )
  }
}
