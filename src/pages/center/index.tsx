import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Center extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='center'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
