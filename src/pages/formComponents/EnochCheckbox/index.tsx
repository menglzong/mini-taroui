import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtCheckbox } from 'taro-ui'

interface IState {
  selectedList: number[]
}
export default class Enochcheckbox extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      selectedList: []
    }
  }

  onChange(event) {
   this.setState({
    selectedList: event
   })
  }

  render () {
    return (
      <View className='Enochcheckbox'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>基本用法</Text>
        </View>
        <View className={'padding'}>
          <AtCheckbox
            options={[
              { label: '单选项一', value: 'option1', desc: '单选项描述' },
              { label: '单选项二', value: 'option2' },
              { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
            ]}
            selectedList={this.state.selectedList}
            onChange={this.onChange.bind(this)}
          />
        </View>
      </View>
    )
  }
}
