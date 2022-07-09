import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import { AtModal, AtModalAction, AtModalHeader, AtModalContent, AtButton } from 'taro-ui'

interface IState {
  showModalOne: boolean
  showModalTwo: boolean
  showModalThree: boolean
  showModalFour: boolean
}
export default class Enochmodal extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      showModalOne: false,
      showModalTwo: false,
      showModalThree: false,
      showModalFour: false
    }
  }

  onClick(index: number) {
    this.setState({
      showModalOne: index == 1,
      showModalTwo: index == 2,
      showModalThree: index == 3,
      showModalFour: index == 4
    })
  }

  cancelClick() {
    Taro.showToast({title: '取消'})
    this.setState({
      showModalOne: false,
      showModalTwo: false,
      showModalThree: false,
      showModalFour: false
    })
  }

  onConfirm() {
    Taro.showToast({title: '确定'})
    this.setState({
      showModalOne: false,
      showModalTwo: false,
      showModalThree: false,
      showModalFour: false
    })
  }

  render () {
    const { showModalOne, showModalTwo, showModalThree, showModalFour } = this.state
    return (
      <View className='EnochModal'>
        <AtModal 
          isOpened={showModalOne}
          title={'标题'}
          content={'内容'}
          cancelText={'取消'}
          onCancel={this.cancelClick.bind(this)}
          confirmText={'确定'}
          onConfirm={this.onConfirm.bind(this)}
        />

        <AtModal 
          isOpened={showModalTwo}
          title={'单个按钮'}
          content={'内容'}
          confirmText={'确定'}
          onConfirm={this.onConfirm.bind(this)}
        />

        <AtModal 
          isOpened={showModalThree}
          content={'内容'}
          cancelText={'取消'}
          confirmText={'确定'}
          onCancel={this.cancelClick.bind(this)}
          onConfirm={this.onConfirm.bind(this)}
        />


        <AtModal isOpened={showModalFour}>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>内容内容</AtModalContent>
          <AtModalAction>
            <Button onClick={this.cancelClick.bind(this)}>取消</Button>
            <Button onClick={this.onConfirm.bind(this)}>确定</Button>
            <Button onClick={this.onConfirm.bind(this)}>确定</Button>
          </AtModalAction>
        </AtModal>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础模态框</Text>
        </View>
        <View className={'content'}>
          <AtButton type={'primary'} onClick={this.onClick.bind(this, 1)}>打开基础模态框</AtButton>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>单个按钮</Text>
        </View>
        <View className={'content'}>
          <AtButton type={'primary'} onClick={this.onClick.bind(this, 2)}>打开单个按钮</AtButton>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>无标题</Text>
        </View>
        <View className={'content'}>
          <AtButton type={'primary'} onClick={this.onClick.bind(this, 3)}>打开无标题模态框</AtButton>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>简化使用</Text>
        </View>
        <View className={'content'}>
          <AtButton type={'primary'} onClick={this.onClick.bind(this, 4)}>打开简化使用模态框</AtButton>
        </View>

      </View>
    )
  }
}
