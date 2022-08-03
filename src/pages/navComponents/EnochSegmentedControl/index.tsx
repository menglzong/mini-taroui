import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtSegmentedControl }  from 'taro-ui'


interface IState {
  current: number
  vCurrent: number
}
export default class Enochsegmentedcontrol extends Component<{}, IState> {

  constructor (props) {
    super(props)
    this.state = {
      current: 0,
      vCurrent: 0
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

  handleVClick (index: number) {
    this.setState({
      vCurrent: index
    })
  }

  render () {
    return (
      <View className='EnochSegmentedControl'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>

        <AtSegmentedControl
          values={['标签页1', '标签页2', '标签页3']}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
        {
          this.state.current === 0
          ? <View className='tab-content'>标签1的内容</View>
          : null
        }
        {
          this.state.current === 1
          ? <View className='tab-content'>标签2的内容</View>
          : null
        }
        {
          this.state.current === 2
          ? <View className='tab-content'>标签3的内容</View>
          : null
        }

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义颜色、字体大小</Text>
        </View>

        <AtSegmentedControl
          values={['标签页1', '标签页2', '标签页3']}
          onClick={this.handleVClick.bind(this)}
          current={this.state.vCurrent}
          selectedColor={'#FF4949'}
          fontSize={30}
        />
        {
          this.state.vCurrent === 0
          ? <View className='tab-content'>标签1的内容</View>
          : null
        }
        {
          this.state.vCurrent === 1
          ? <View className='tab-content'>标签2的内容</View>
          : null
        }
        {
          this.state.vCurrent === 2
          ? <View className='tab-content'>标签3的内容</View>
          : null
        }
      </View>
    )
  }
}
