import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Button extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='button'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
