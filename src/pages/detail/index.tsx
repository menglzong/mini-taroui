import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { getCurrentInstance } from '@tarojs/taro'

export default class Detail extends Component {

  instance = getCurrentInstance()

  constructor(props) {
    super(props)
    
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(`object`, this.instance)
    return (
      <View className='detail'>
        <Text>Hello world! {this.instance.router?.params.index} </Text>
      </View>
    )
  }
}
