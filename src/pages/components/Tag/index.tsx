import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtTag } from 'taro-ui'

export default class Tag extends Component {

  handleChange() {

  }

  renderSmall() {
    return(<View>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>空心标签(小)</Text>
        </View>
        <View className={'content'}>
          <AtTag className={'title'} size={'small'} circle onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} size={'small'} onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} size={'small'} active circle onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} size={'small'} active onClick={this.handleChange.bind(this)}>标签</AtTag>
        </View>


        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>实心标签(小)</Text>
        </View>
        <View className={'content'}>
          <AtTag className={'title'} size={'small'} circle onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} size={'small'} onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} size={'small'} active circle type={'primary'} onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} size={'small'} active  type={'primary'} onClick={this.handleChange.bind(this)}>标签</AtTag>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>不可点击态(小)</Text>
        </View>
        <View className={'content'}>
          <AtTag className={'title'} size={'small'} circle disabled={true} onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} size={'small'} disabled onClick={this.handleChange.bind(this)}>标签</AtTag>
        </View>
    </View>)
  }

  render () {
    return (
      <View className='Tag'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>空心标签</Text>
        </View>
        <View className={'content'}>
          <AtTag className={'title'} circle onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} active circle onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} active onClick={this.handleChange.bind(this)}>标签</AtTag>
        </View>


        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>实心标签</Text>
        </View>
        <View className={'content'}>
          <AtTag className={'title'} circle onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} active circle type={'primary'} onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} active  type={'primary'} onClick={this.handleChange.bind(this)}>标签</AtTag>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>不可点击态</Text>
        </View>
        <View className={'content'}>
          <AtTag className={'title'} circle disabled={true} onClick={this.handleChange.bind(this)}>标签</AtTag>
          <AtTag className={'title'} disabled onClick={this.handleChange.bind(this)}>标签</AtTag>
        </View>

        {this.renderSmall()}

      </View>
    )
  }
}
