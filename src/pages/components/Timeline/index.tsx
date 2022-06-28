import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtTimeline } from 'taro-ui'
export default class Timeline extends Component {

  render () {
    return (
      <View className='Timeline'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <View className={'content'}>
          <AtTimeline className={'title'} items={[
            { title: '刷牙洗脸' }, 
            { title: '吃早餐' }, 
            { title: '上班' }, 
            { title: '睡觉' }
          ]}/>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义颜色</Text>
        </View>
        <View className={'content'}>
          <AtTimeline className={'title'} items={[
            { title: '刷牙洗脸' }, 
            { title: '吃早餐', color: 'green' }, 
            { title: '上班', color: 'red' }, 
            { title: '睡觉', color: 'yellow' }
          ]}/>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义图标</Text>
        </View>
        <View className={'content'}>
          <AtTimeline className={'title'} items={[
            { title: '刷牙洗脸', icon: 'check-circle' }, 
            { title: '吃早餐', icon: 'clock' }, 
            { title: '上班', icon: 'clock' }, 
            { title: '睡觉', icon: 'clock' }
          ]}/>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>幽灵节点</Text>
        </View>
        <View className={'content'}>
          <AtTimeline className={'title'} pending items={[
            { title: '刷牙洗脸', icon: 'check-circle' }, 
            { title: '吃早餐', icon: 'clock' }, 
            { title: '上班', icon: 'clock' }, 
            { title: '睡觉', icon: 'clock' }
          ]}/>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>丰富内容</Text>
        </View>
        <View className={'content'}>
          <AtTimeline className={'title'} items={[
            { title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' }, 
            { title: '吃早餐', content: ['牛奶+面包', '餐后记得吃药'], icon: 'clock' }, 
            { title: '上班', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock' }, 
            { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }
          ]}/>
        </View>

      </View>
    )
  }
}
