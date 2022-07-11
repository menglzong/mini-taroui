import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtForm, AtInput, AtButton, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'

interface IState {
  name: string
  pwd: string
}
export default class Enochinput extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      pwd: ''
    }
  }

  handleClick() {
    const { name, pwd } = this.state
    Taro.showToast({
      title: '文本：' + name + '密码：' + pwd
    })
  }

  handleResetClick() {
    this.setState({
      name: '',
      pwd: ''
    })
  }

  onChange(type, event) {
    this.setState({
      name: type === 'name' ? event : this.state.name,
      pwd: type === 'value' ? event : this.state.pwd,
    })
  }

  render () {
    return (
      <View className='Enochinput'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基础用法</Text>
        </View>
        <View className={'padding'}>
          <AtForm>
            <AtInput name={'name'} title={'文本'} placeholder={'请输入文本'}/>
            <AtInput name={'value'} placeholder={'无标题'}/>
          </AtForm>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>输入框类型</Text>
        </View>
        <View className={'padding'}>
          <AtForm>
            <AtInput name={'text'} title={'文本'} placeholder={'请输入文本'}/>
            <AtInput name={'num'} title={'数字'} type={'number'} placeholder={'请输入数字'}/>
            <AtInput name={'pwd'} title={'密码'} type={'password'} placeholder={'请输入密码'}/>
            <AtInput name={'idcard'} title={'身份证'} type={'idcard'} placeholder={'请输入身份证号'}/>
            <AtInput name={'digit'} title={'小数'} type={'digit'} placeholder={'请输入小数'}/>
            <AtInput name={'phone'} title={'手机号'} type={'phone'} placeholder={'请输入手机号'}/>
          </AtForm>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>状态</Text>
        </View>
        <View className={'padding'}>
          <AtForm>
            <AtInput name={'text'} title={'禁用'} disabled placeholder={'请输入文本'}/>
            <AtInput name={'num'} title={'数字'} type={'number'} error placeholder={'请输入数字'}/>
            <AtInput name={'pwd'} title={'密码'} type={'password'} editable={false} placeholder={'请输入密码'}/>
            <AtInput name={'idcard'} title={'身份证'} type={'idcard'} clear placeholder={'请输入身份证号'}/>
            <AtInput name={'phone'} title={'手机号'} type={'phone'} required placeholder={'请输入手机号'}/>
          </AtForm>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>自定义右边栏</Text>
        </View>
        <View className={'padding'}>
          <AtForm>
            <AtInput name={'text'} title={'禁用'} disabled placeholder={'请输入文本'}>
              <AtIcon value={'mail'}/>
            </AtInput>
          </AtForm>
        </View>
      </View>
    )
  }
}
