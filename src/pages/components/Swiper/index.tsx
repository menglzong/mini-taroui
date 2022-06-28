import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Swiper, SwiperItem } from '@tarojs/components'
import { AtForm, AtSwitch } from 'taro-ui'

interface IProps {
  title?: string
}

interface IState {
  showDots: boolean
}
export default class EnochSwiper extends Component<IProps, IState> {

  instance: IProps | undefined = getCurrentInstance().router?.params

  constructor(props) {
    super(props)
    this.state = {
      showDots: true
    }
    Taro.setNavigationBarTitle({title: this.instance?.title ?? ''})
  }

  onChangeShowDots(value) {
    this.setState({
      showDots: value
    })
  }

  render () {
    const { showDots } = this.state
    return (
      <View className='Swiper'>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots={showDots}
          autoplay>
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
        <AtForm>
          <AtSwitch title={'指示点'} checked={showDots} onChange={this.onChangeShowDots.bind(this)}></AtSwitch>
        </AtForm>
      </View>
    )
  }
}
