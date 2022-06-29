import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtActivityIndicator, AtSwitch } from 'taro-ui'

interface IState {
  isShow: boolean
  showTitle: string
}
export default class Enochactivityindicator extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      isShow: true,
      showTitle: '开启中'
    }
  }

  onChange(value) {
    this.setState({
      isShow: value,
      showTitle: value ? '开启中' : '完成'
    })
  }

  render () {
    const { isShow, showTitle } = this.state
    return (
      <View className='EnochActivityIndicator'>
        <View className={'content'}>
          <AtActivityIndicator ></AtActivityIndicator>
          <AtActivityIndicator className={'marginLeft'} size={32} color={'red'}></AtActivityIndicator>
          <AtActivityIndicator className={'marginLeft'} size={64} color={'green'}></AtActivityIndicator>
        </View>

        <View className={'content load'}>
          <AtSwitch className={'switch'} title={showTitle} checked={isShow} onChange={this.onChange.bind(this)}></AtSwitch>
          <View  className={'switchC'}>
            <AtActivityIndicator mode={'center'} isOpened={isShow} size={64} color={'red'} content={'加载中'}></AtActivityIndicator>
          </View>
        </View>

      </View>
    )
  }
}
