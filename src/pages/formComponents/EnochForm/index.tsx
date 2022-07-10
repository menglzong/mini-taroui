import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'

interface IState {
  name: string
  pwd: string
}
export default class Enochform extends Component<{}, IState> {

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
    const { name, pwd } = this.state
    return (
      <View className='EnochForm'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>表单提交与重置</Text>
        </View>
        <View className={'padding'}>
          <AtForm>
            <AtInput name={'name'} title={'文本'} placeholder={'请输入文本'} value={name} onChange={this.onChange.bind(this, 'name')}/>
            <AtInput name={'value'} title={'密码'} placeholder={'请输入密码'} value={pwd} onChange={this.onChange.bind(this, 'value')}/>
            <AtButton className={'padding'} onClick={this.handleClick.bind(this)}>提交</AtButton>
            <AtButton className={'padding'} onClick={this.handleResetClick.bind(this)}>重置</AtButton>
          </AtForm>
        </View>
      </View>
    )
  }
}
