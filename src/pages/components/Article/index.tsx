import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Article extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='Article'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
