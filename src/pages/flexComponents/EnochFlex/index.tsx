import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import 'taro-ui/dist/style/components/flex.scss'

export default class Enochflex extends Component {

  render () {
    return (
      <View className='EnochFlex'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <View className='at-row'>
          <View className='at-col a'>A</View>
          <View className='at-col b'>B</View>
          <View className='at-col c'>C</View>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>定义长度</Text>
        </View>
        <View className='at-row'>
          <View className='at-col at-col-3 a'>A</View>
          <View className='at-col at-col-6 b'>B</View>
          <View className='at-col at-col-2 c'>C</View>
          <View className='at-col at-col-1 a'>D</View>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>定义偏移</Text>
        </View>
        <View className='at-row'>
          <View className='at-col at-col__offset-2 a'>
            A
          </View>
          <View className='at-col at-col__offset-3 b'>
            B
          </View>
          <View className='at-col c'>C</View>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>超出换行</Text>
        </View>
        <View className='at-row at-row--wrap'>
          <View className='at-col at-col-4 a'>A</View>
          <View className='at-col at-col-4 b'>B</View>
          <View className='at-col at-col-4 c'>C</View>
          <View className='at-col at-col-4 a'>D</View>
          <View className='at-col at-col-4 b'>E</View>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>侧轴方向的对齐方式</Text>
        </View>
        <View className='at-row'>
          <View style='height:100px' className='at-col a'>A</View>
          <View className='at-col c'>默认对齐方式 -- stretch</View>
        </View>
        <View className='at-row at-row__align--start'>
          <View style='height:100px' className='at-col b'>B</View>
          <View className='at-col a'>顶部对齐 -- start</View>
        </View>
        <View className='at-row at-row__align--center'>
          <View style='height:100px' className='at-col c'>C</View>
          <View className='at-col b'>居中对齐 -- center</View>
        </View>
        <View className='at-row at-row__align--end'>
          <View style='height:100px' className='at-col a'>D</View>
          <View className='at-col c'>底部对齐 -- end</View>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>侧轴方向的对齐方式</Text>
        </View>
        <View className='at-row'>
          <View className='at-col at-col-5 a'>默认</View>
          <View className='at-col at-col-5 b'>Start</View>
        </View>
        <View className='at-row at-row__justify--end'>
          <View className='at-col at-col-5 a'>底部排列</View>
          <View className='at-col at-col-5 c'>End</View>
        </View>
        <View className='at-row at-row__justify--center'>
          <View className='at-col at-col-5 b'>居中排列</View>
          <View className='at-col at-col-5 c'>Center</View>
        </View>
        <View className='at-row at-row__justify--between'>
          <View className='at-col at-col-5 a'>左右排列</View>
          <View className='at-col at-col-5 b'>Between</View>
        </View>
        <View className='at-row at-row__justify--around'>
          <View className='at-col at-col-5 a'>平均排列</View>
          <View className='at-col at-col-5 c'>Around</View>
        </View>

      </View>
    )
  }
}
