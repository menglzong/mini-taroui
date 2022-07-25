import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtList, AtListItem } from 'taro-ui'

export default class Enochlist extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  handleChange () { }

  handleClick () { }

  render () {
    return (
      <View className='EnochList'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <AtList className={'paddingTop'}>
          <AtListItem title='标题文字' onClick={this.handleClick.bind(this)} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
          <AtListItem title='标题文字' note='描述信息' />
          <AtListItem title='标题文字' note='描述信息' arrow='right' />
          <AtListItem
            arrow='right'
            note='描述信息'
            title='标题文字标题文字标题文字标题文字标题文字'
            extraText='详细信息详细信息详细信息详细信息'
          />
          <AtListItem
            title='标题文字'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='标题文字'
            note='描述信息'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='标题文字'
            note='描述信息'
            extraText='详细信息'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
          <AtListItem
            title='标题文字'
            note='描述信息'
            arrow='right'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
          />
          <AtListItem
            title='标题文字'
            note='描述信息'
            extraText='详细信息'
            arrow='right'
            iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
          />
          <AtListItem
            title='标题文字'
            isSwitch
            onSwitchChange={this.handleChange.bind(this)}
          />
        </AtList>
      </View>
    )
  }
}
