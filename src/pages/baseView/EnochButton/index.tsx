import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton } from 'taro-ui'

export default class EnochButton extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className={'button'}>
        <Text className={'title'}>主操作</Text>
        <AtButton className={'btn'} type={'primary'}>主操作按钮</AtButton>
        <AtButton className={'btn'} loading={true} type={'primary'}>Loading</AtButton>
        <AtButton className={'btn'} type={'primary'} disabled={true}>不可操作</AtButton>

        <Text className={'title'}>次要操作</Text>
        <AtButton className={'btn'} type={'secondary'}>主操作按钮</AtButton>
        <AtButton className={'btn'} loading={true} type={'secondary'}>Loading</AtButton>
        <AtButton className={'btn'} type={'secondary'} disabled={true}>不可操作</AtButton>

        <Text className={'title'}>次次要操作</Text>
        <AtButton className={'btn'}>主操作按钮</AtButton>
        <AtButton className={'btn'} loading={true}>Loading</AtButton>
        <AtButton className={'btn'}  disabled={true}>不可操作</AtButton>

        <Text className={'title'}>通栏按钮</Text>
        <AtButton className={'fullBtn'} type={'primary'} full={true}>主操作按钮</AtButton>
        <AtButton className={'fullBtn'} type={'secondary'} full={true}>次要操作</AtButton>
        <AtButton className={'fullBtn'} full={true}>次次要操作</AtButton>
        <AtButton className={'fullBtn'} type={'secondary'} full={true} disabled={true}>不可操作</AtButton>
        
        <Text className={'title'}>小按钮</Text>
        <View className={'smallBtn'}>
          <AtButton type={'primary'} size={'small'}>按钮</AtButton>
          <AtButton type={'secondary'} size={'small'}>按钮</AtButton>
          <AtButton size={'small'}>按钮</AtButton>
        </View>

        <View className={'smallBtn'}>
          <AtButton type={'primary'} size={'small'} loading></AtButton>
          <AtButton type={'secondary'} size={'small'} loading></AtButton>
          <AtButton size={'small'} loading></AtButton>
        </View>

      </View>
    )
  }
}
