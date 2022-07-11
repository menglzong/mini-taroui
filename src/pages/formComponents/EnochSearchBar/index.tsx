import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtSearchBar } from 'taro-ui'
import Taro from '@tarojs/taro'

interface IState {
  value: string
}
export default class Enochsearchbar extends Component<{}, IState> {

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

  onActionClick() {
    Taro.showToast({
      title: this.state.value
    })
  }

  render () {
    return (
      <View className='Enochsearchbar'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <View className={'padding'}>
          <AtSearchBar
            inputType={'text'}
            placeholder={'请输入文本'}
            actionName={'搜一下'}
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
        </View>
      </View>
    )
  }
}
