import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Car extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='car'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
