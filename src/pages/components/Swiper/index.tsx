import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Swiper extends Component {

  constructor(props) {
    super(props)

  }

  render () {
    return (
      <View className='Swiper'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
