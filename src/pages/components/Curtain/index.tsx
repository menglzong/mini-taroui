import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { AtCurtain, AtButton }from 'taro-ui'
import bargainBg from '../../../assets/images/bargainBg.png'

interface IState {
  isOpened: boolean
}
export default class Curtain extends Component<{}, IState> {

  constructor (props) {
    super(props)
    this.state = {
      isOpened: false,
    }
  }

  handleChange () {
    this.setState({
      isOpened: true
    })
  }

  onClose () {
    this.setState({
      isOpened: false
    })
  }

  render () {
    const { isOpened } = this.state
    return (
      <View className='Curtain'>
        <AtCurtain onClose={this.onClose.bind(this)} isOpened={isOpened} closeBtnPosition={'top'}>
          <Image className={'img'} src={bargainBg}></Image>
        </AtCurtain>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>顶部关闭</Text>
        </View>
        <View className={'content'}>
          <AtButton
            onClick={this.handleChange.bind(this)}>
            顶关闭幕帘
          </AtButton>
        </View>
      </View>
    )
  }
}
