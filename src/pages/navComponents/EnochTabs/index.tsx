import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtTabs, AtTabsPane } from 'taro-ui'

interface IState {
  current: number
  vCurrent: number
}
export default class Enochtabs extends Component<{}, IState> {

  constructor(props) { 
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
      <View className='EnochTabs'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <AtTabs
          current={this.state.current}
          scroll
          tabList={[
            { title: '标签页1' },
            { title: '标签页2' },
            { title: '标签页3' },
            { title: '标签页4' },
            { title: '标签页5' },
            { title: '标签页6' }
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
          </AtTabsPane>
        </AtTabs>


        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>垂直用法</Text>
        </View>
        <AtTabs
          current={this.state.vCurrent}
          scroll
          tabDirection={'vertical'}
          height={'150'}
          tabList={[
            { title: '标签页1' },
            { title: '标签页2' },
            { title: '标签页3' },
            { title: '标签页4' },
            { title: '标签页5' },
            { title: '标签页6' }
          ]}
          onClick={this.handleVClick.bind(this)}>
          <AtTabsPane tabDirection='vertical' current={this.state.vCurrent} index={0}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.vCurrent} index={1}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.vCurrent} index={2}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.vCurrent} index={3}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.vCurrent} index={4}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.vCurrent} index={5}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
