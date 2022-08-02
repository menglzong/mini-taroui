import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtTabBar } from 'taro-ui'

interface IState {
  current: number
}
export default class Enochtabbar extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  handleClick (index: number) { 
    this.setState({
      current: index
    })
  }

  render () {
    const { current } = this.state
    return (
      <View className='EnochTabBar'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <AtTabBar
          tabList={[
            { title: '待办事项', text: 'new' },
            { title: '拍照' },
            { title: '文件夹', text: '100', max: 99 }
          ]}
          onClick={this.handleClick.bind(this)}
          current={current}
        />
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>固定底部</Text>
        </View>
        <AtTabBar
          tabList={[
            { title: '待办事项', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
          ]}
          selectedColor={'red'}
          fixed={true}
          onClick={this.handleClick.bind(this)}
          current={current}
        />
      </View>
    )
  }
}
