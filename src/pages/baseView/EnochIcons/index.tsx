import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {
  AtGrid,
} from 'taro-ui'
import { AtGridItem } from 'taro-ui/types/grid'
import data from "./data.json"

export default class EnochIcons extends Component {

  mainDatas: AtGridItem[]

  constructor(props) {
    super(props)
    this.mainDatas = data.mainData.map((item) => {
      return {
        value: item,
        iconInfo: {
          value: item
        }
      }
    })
  }

  render () {
    return (
      <View className='tIcons'>
        <Text className='main'>主要</Text>
        <AtGrid hasBorder={false} data={this.mainDatas} columnNum={4}/>
      </View>
    )
  }
}
