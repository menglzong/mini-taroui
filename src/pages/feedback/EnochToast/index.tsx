import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtToast, AtButton } from 'taro-ui'

interface IState {
  isOpened: boolean
}
export default class Enochtoast extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      isOpened: false
    }
  }

  onClick() {
    this.setState({
      isOpened: true
    })
  }

  render () {
    const { isOpened } = this.state
    return (
      <View className='EnochToast'>
        <AtToast isOpened={isOpened} text={'这是toast内容'} status={'loading'}/>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基本案例</Text>
        </View>
        <View className={'padding'}>
          <AtButton onClick={this.onClick.bind(this)}>Toast</AtButton>
        </View>
      </View>
    )
  }
}
