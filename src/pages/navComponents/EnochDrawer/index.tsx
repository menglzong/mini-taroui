import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtDrawer, AtButton, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'


interface IState {
  showLeft: boolean
  showRight: boolean
  showCustom: boolean
}

export default class Enochdrawer extends Component<{}, IState> {

  constructor (props) {
    super(props)
    this.state = {
      showLeft: false,
      showRight: false,
      showCustom: false
    }
  }

  componentDidMount () { }

  onShow () {
    this.setState({
      showCustom: true
    })
  }

  onClose () {
    this.setState({
      showLeft: false,
      showRight: false,
      showCustom: false
    })
  }

  onLeftClick () { 
    this.setState({
      showLeft: true
    })
  }

  onRightClick () { 
    this.setState({
      showRight: true
    })
  }

  render () {
    return (
      <View className='EnochDrawer'>

        <AtDrawer 
          show={this.state.showLeft} 
          mask 
          onClose={this.onClose.bind(this)} 
          items={['菜单1', '菜单2']}
          onItemClick={(index)=>{
            Taro.showToast({
              title: '选择' + (index + 1)
            })
          }}
        ></AtDrawer>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>左侧滑出</Text>
        </View>
        <AtButton onClick={this.onLeftClick.bind(this)}>显示Drawer 抽屉</AtButton>


        <AtDrawer 
          right
          show={this.state.showRight} 
          mask 
          onClose={this.onClose.bind(this)} 
          items={['菜单1', '菜单2']}
          onItemClick={(index)=>{
            Taro.showToast({
              title: '选择' + (index + 1)
            })
          }}
        ></AtDrawer>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>右侧滑出</Text>
        </View>
        <AtButton onClick={this.onLeftClick.bind(this)}>显示Drawer 抽屉</AtButton>

        <AtDrawer 
          right
          show={this.state.showCustom} 
          mask 
          onClose={this.onClose.bind(this)} 
          onItemClick={(index)=>{
            Taro.showToast({
              title: '选择' + (index + 1)
            })
          }}
        >
          <View className='drawer-item'>优先展示items里的数据</View>
          <View className='drawer-item'>如果items没有数据就会展示children</View>
          <View className='drawer-item'>这是自定义内容 <AtIcon value='home' size='20' /></View>
          <View className='drawer-item'>这是自定义内容</View>
        </AtDrawer>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>右侧滑出自定义内容</Text>
        </View>
        <AtButton onClick={this.onShow.bind(this)}>显示Drawer 抽屉</AtButton>

      </View>
    )
  }
}
