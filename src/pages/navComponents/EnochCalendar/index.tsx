import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import { AtCalendar } from 'taro-ui'
import Taro from '@tarojs/taro'
export default class Enochcalendar extends Component {

  componentWillMount () { }

  componentDidMount () { }

  onDayLongClick (item) {
    Taro.showToast({
      title: '长按' + item.value
    })
  }

  onDayClick (item) {
    Taro.showToast({
      title: item.value
    })
  }

  render () {
    return (
      <View className='EnochCalendar'>
        <AtCalendar onDayClick={this.onDayClick.bind(this)} 
          onDayLongClick={this.onDayLongClick.bind(this)}
        />
      </View>
    )
  }
}
