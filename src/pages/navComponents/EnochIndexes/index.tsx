import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtIndexes } from 'taro-ui'
export default class Enochindexes extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  onClick () { }

  render () {
    const list = [{
      title: 'A',
      key: 'A',
      items: [
        {
          'name': '阿坝'
          // 此处可加其他业务字段
        },
        {
          'name': '阿拉善'
        }]
      },
      {
        title: 'B',
        key: 'B',
        items: [
          {
            'name': '北京'
          },
          {
            'name': '保定'
          }]
      }
    ]
    return (
      <View className='EnochIndexes'>
        <AtIndexes
          list={list}
          onClick={this.onClick.bind(this)}
        >
          <View>自定义内容</View>
        </AtIndexes>
      </View>
    )
  }
}
