import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtRadio } from 'taro-ui'

interface IState {
  value: number
}
export default class Enochradio extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  onChange(event) {
   this.setState({
     value: event
   })
  }

  render () {
    return (
      <View className='EnochRadio'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基本用法</Text>
        </View>
        <View className={'padding'}>
          <AtRadio
            options={[
              { label: '单选项一', value: 'option1', desc: '单选项描述' },
              { label: '单选项二', value: 'option2' },
              { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
            ]}
            value={this.state.value}
            onClick={this.onChange.bind(this)}
          />
        </View>
      </View>
    )
  }
}
