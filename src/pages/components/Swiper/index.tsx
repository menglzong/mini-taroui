import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro, { getCurrentInstance } from '@tarojs/taro'

interface IProps {
  title?: string
}
export default class Swiper extends Component<IProps> {

  instance: IProps | undefined = getCurrentInstance().router?.params

  constructor(props) {
    super(props)
    Taro.setNavigationBarTitle({title: this.instance?.title ?? ''})
  }

  render () {
    return (
      <View className='Swiper'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
