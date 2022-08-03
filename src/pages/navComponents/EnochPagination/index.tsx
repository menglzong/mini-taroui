import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtPagination } from 'taro-ui'
import Taro from '@tarojs/taro'
import { PageChangeData } from 'taro-ui/types/pagination'
export default class Enochpagination extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  onPageChange (data: PageChangeData) {
    Taro.showToast({
      title: data.type + '-----'+ data.current
    })
  }

  render () {
    return (
      <View className='EnochPagination'>
          <View className={'content'}>
            <View className={'line'}></View>
            <Text className={'title'}>基础用法</Text>
          </View>
          <AtPagination 
            total={50} 
            pageSize={1}
            current={1}
            onPageChange={this.onPageChange.bind(this)}
          >
          </AtPagination>

          <View className={'content'}>
            <View className={'line'}></View>
            <Text className={'title'}>图标用法</Text>
          </View>
          <AtPagination 
            icon
            total={50} 
            pageSize={1}
            current={1}
            onPageChange={this.onPageChange.bind(this)}
          >
          </AtPagination>
      </View>
    )
  }
}
