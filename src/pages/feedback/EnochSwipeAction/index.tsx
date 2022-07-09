import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import { AtList, AtListItem, AtSwipeAction } from "taro-ui"

export default class Enochswipeaction extends Component {

  onClick (item) {
    Taro.showToast({title: item.text})
  }

  onOpened () {
    Taro.showToast({title: '开启'})
  }

  onClosed () {
    Taro.showToast({title: '关闭'})
  }

  render () {
    return (
      <View className='EnochSwipeAction'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>一般用法</Text>
        </View>
        <View className={'padding'}>
          <AtSwipeAction onClick={this.onClick.bind(this)} maxDistance={160} areaWidth={Taro.getSystemInfoSync().screenWidth - 30} options={
            [
              {text: '备注', style: {backgroundColor: '#FF4949', width: '40px'}},
              {text: '删除', style: {backgroundColor: '#FF4949', width: '40px'}}
            ]}>
           <View className='normal'>AtSwipeAction 一般使用场景</View>
          </AtSwipeAction>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自动关闭</Text>
        </View>
        <View className={'padding'}>
          <AtSwipeAction autoClose onClick={this.onClick.bind(this)} maxDistance={160} areaWidth={Taro.getSystemInfoSync().screenWidth - 30} options={
            [
              {text: '备注', style: {backgroundColor: '#FF4949', width: '40px'}},
              {text: '删除', style: {backgroundColor: '#FF4949', width: '40px'}}
            ]}>
           <View className='normal'>AtSwipeAction 自动关闭</View>
          </AtSwipeAction>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自动和关闭事件</Text>
        </View>
        <View className={'padding'}>
          <AtSwipeAction autoClose onOpened={this.onOpened.bind(this)} onClosed={this.onClosed.bind(this)} onClick={this.onClick.bind(this)} maxDistance={160} areaWidth={Taro.getSystemInfoSync().screenWidth - 30} options={
            [
              {text: '备注', style: {backgroundColor: '#FF4949', width: '40px'}},
              {text: '删除', style: {backgroundColor: '#FF4949', width: '40px'}}
            ]}>
           <View className='normal'>AtSwipeAction 自动和关闭事件</View>
          </AtSwipeAction>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>与List组件使用</Text>
        </View>
        <View className={'padding'}>
          <AtList>
            <AtSwipeAction autoClose onClick={this.onClick.bind(this)} maxDistance={160} areaWidth={Taro.getSystemInfoSync().screenWidth - 30} options={
              [
                {text: '备注', style: {backgroundColor: '#FF4949', width: '40px'}},
                {text: '删除', style: {backgroundColor: '#FF4949', width: '40px'}}
              ]}>
            <AtListItem title={'AtSwipeAction item1'}></AtListItem>
            </AtSwipeAction>
            <AtSwipeAction autoClose onClick={this.onClick.bind(this)} maxDistance={160} areaWidth={Taro.getSystemInfoSync().screenWidth - 30} options={
              [
                {text: '备注', style: {backgroundColor: '#FF4949', width: '40px'}},
                {text: '删除', style: {backgroundColor: '#FF4949', width: '40px'}}
              ]}>
            <AtListItem title={'AtSwipeAction item2'}></AtListItem>
            </AtSwipeAction>
            <AtSwipeAction autoClose onClick={this.onClick.bind(this)} maxDistance={160} areaWidth={Taro.getSystemInfoSync().screenWidth - 30} options={
              [
                {text: '备注', style: {backgroundColor: '#FF4949', width: '40px'}},
                {text: '删除', style: {backgroundColor: '#FF4949', width: '40px'}}
              ]}>
            <AtListItem title={'AtSwipeAction item3'}></AtListItem>
            </AtSwipeAction>
          </AtList>
        </View>

      </View>
    )
  }
}
