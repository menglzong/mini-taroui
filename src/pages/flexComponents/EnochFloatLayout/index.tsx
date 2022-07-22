import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtFloatLayout, AtButton } from 'taro-ui'

interface IState {
  isOpened: boolean
}

export default class Enochfloatlayout extends Component<{}, IState> {

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

  onCancelClick() {
    this.setState({
      isOpened: false,
    })
  }

  render () {
    const { isOpened } = this.state
    return (
      <View className='Enochfloatlayout'>
        <AtFloatLayout title={'这是标题'} isOpened={isOpened} onClose={this.onCancelClick.bind(this)}>
                这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
          随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        </AtFloatLayout>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基本用法</Text>
        </View>
        <View className={'content'}>
          <AtButton type={'primary'} onClick={this.onClick.bind(this)}>打开FloatLayout</AtButton>
        </View>

      </View>
    )
  }
}
