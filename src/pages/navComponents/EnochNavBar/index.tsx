import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtNavBar } from 'taro-ui'
import Taro from '@tarojs/taro'

export default class Enochnavbar extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  handleClick (type: string) {
    switch (type) {
      case '3':
        Taro.navigateBack()
        break;
      case '2':
        Taro.showToast({title: '从右到左第二个'})
        break;
      case '1':
        Taro.showToast({title: '从右到左第一个'})
        break;
      default:
        Taro.showToast({title: '点击'})
        break;
    }
    
  }

  render () {
    return (
      <View className='EnochNavBar'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <AtNavBar
          onClickRgIconSt={this.handleClick.bind(this, '1')}
          onClickRgIconNd={this.handleClick.bind(this, '2')}
          onClickLeftIcon={this.handleClick.bind(this, '3')}
          color='#000'
          title='NavBar 导航栏示例'
          leftIconType={'chevron-left'}
          // leftText='返回'
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />
        <AtNavBar
          onClickRgIconSt={this.handleClick.bind(this, '1')}
          onClickRgIconNd={this.handleClick.bind(this, '2')}
          onClickLeftIcon={this.handleClick.bind(this, '3')}
          color='#000'
          title='NavBar 导航栏示例'
          leftIconType={'chevron-left'}
          leftText='返回'
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />
        <AtNavBar
          onClickRgIconSt={this.handleClick.bind(this, '1')}
          onClickRgIconNd={this.handleClick.bind(this, '2')}
          onClickLeftIcon={this.handleClick.bind(this, '3')}
          color='#000'
          title='NavBar 导航栏示例'
          leftText='返回'
          rightFirstIconType='bullet-list'
          // rightSecondIconType='user'
        />
      </View>
    )
  }
}
