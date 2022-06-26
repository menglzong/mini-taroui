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
  fileData: AtGridItem[]
  textData: AtGridItem[]
  arrowData: AtGridItem[]
  mediaControlData: AtGridItem[]
  mediaData: AtGridItem[]
  logoData: AtGridItem[]

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
    this.fileData = data.fileData
    this.textData = data.textData
    this.arrowData = data.arrowData
    this.mediaControlData = data.mediaControlData
    this.mediaData = data.mediaData
    this.logoData = data.logoData
  }

  render () {
    return (
      <View className='tIcons'>
        <Text className='main'>主要</Text>
        <AtGrid hasBorder={false} data={this.mainDatas} columnNum={4}/>

        <Text className='main'>文件</Text>
        <AtGrid hasBorder={false} data={this.fileData} columnNum={4}/>

        <Text className='main'>文本</Text>
        <AtGrid hasBorder={false} data={this.textData} columnNum={4}/>

        <Text className='main'>箭头</Text>
        <AtGrid hasBorder={false} data={this.arrowData} columnNum={4}/>

        <Text className='main'>媒体控制</Text>
        <AtGrid hasBorder={false} data={this.mediaControlData} columnNum={4}/>

        <Text className='main'>多媒体</Text>
        <AtGrid hasBorder={false} data={this.mediaData} columnNum={4}/>

        <Text className='main'>Logo</Text>
        <AtGrid hasBorder={false} data={this.logoData} columnNum={4}/>
      </View>
    )
  }
}
