import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtImagePicker } from 'taro-ui'

interface IState {
  files: any[]
}

export default class Enochimagepicker extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      files:[]
    }
  }

  onChange(event) {
    console.log(event)
    this.setState({
      files: event
    })
    return event
  }

  render () {
    const { files } = this.state
    return (
      <View className='Enochimagepicker'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基本用法</Text>
        </View>
        <View className={'padding'}>
          <AtImagePicker files={files} onChange={this.onChange.bind(this)}/>
        </View>
      </View>
    )
  }
}
