import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtActionSheet, AtActionSheetItem, AtButton } from 'taro-ui'

interface IState {
  isOpened: boolean
  isShow: boolean
}

export default class Enochactionsheet extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
      isShow: false
    }
  }

  onClick() {
    this.setState({
      isOpened: true
    })
  }

  onCustomClick() {
    this.setState({
      isShow: true
    })
  }

  onCancelClick() {
    this.setState({
      isOpened: false,
      isShow: false
    })
  }

  render () {
    const { isOpened, isShow } = this.state
    return (
      <View className='EnochActionSheet'>
        <AtActionSheet title={'有无标题'} isOpened={isOpened}>
          <AtActionSheetItem onClick={this.onCancelClick.bind(this)}>
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem onClick={this.onCancelClick.bind(this)}>
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>


        <AtActionSheet title={'自定义内容'} isOpened={isShow} cancelText={'自带取消'}>
          <AtActionSheetItem onClick={this.onCancelClick.bind(this)}>
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem onClick={this.onCancelClick.bind(this)}>
            按钮二
          </AtActionSheetItem>
          <AtActionSheetItem onClick={this.onCancelClick.bind(this)}>
            <Text className={'custom'}>自定义按钮</Text>
          </AtActionSheetItem>
        </AtActionSheet>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>有无标题</Text>
        </View>
        <View className={'content'}>
          <AtButton type={'primary'} onClick={this.onClick.bind(this)}>打开ActionSheet</AtButton>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义内容</Text>
        </View>
        <View className={'content'}>
          <AtButton type={'primary'} onClick={this.onCustomClick.bind(this)}>打开ActionSheet</AtButton>
        </View>

      </View>
    )
  }
}
