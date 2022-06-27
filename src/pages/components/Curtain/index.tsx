import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Curtain extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='Curtain'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
