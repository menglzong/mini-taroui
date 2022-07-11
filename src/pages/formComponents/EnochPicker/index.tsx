import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { Picker } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'

interface IState {
  selector: string[][]
  selectorChecked: string
  selChecked: number[]
  timeSel: string
  dateSel: string
}
export default class Enochpicker extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      selector: [['美国', '中国', '巴西', '日本'], ['s', 'f', 'g']],
      selectorChecked: '美国',
      timeSel: '12:01',
      dateSel: '2018-04-22',
      selChecked: [0, 0]
    }
  }

  onChange(event) {
    const { selector } = this.state
    let array = event.detail.value
    let one = selector[0][array[0]]
    let two = selector[1][array[1]]
    this.setState({
      selChecked: array,
      selectorChecked: one + two
    })
  }

  onChangeTime(event) {
    this.setState({
      timeSel: event.detail.value
    })
  }

  onChangeDate(event) {
    this.setState({
      dateSel: event.detail.value
    })
  }

  render () {
    const { selector, selChecked, timeSel, dateSel } = this.state
    return (
      <View className='EnochPicker'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>多列选择器</Text>
        </View>
        <View className={'padding'}>
          <Picker mode={'multiSelector'} value={selChecked} range={selector} onChange={this.onChange.bind(this)}>
            <AtList>
                <AtListItem
                  title='国家地区'
                  extraText={this.state.selectorChecked}
                />
              </AtList>
          </Picker>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>时间选择器</Text>
        </View>
        <View className={'padding'}>
          <Picker mode={'time'} value={timeSel} onChange={this.onChangeTime.bind(this)}>
            <AtList>
                <AtListItem
                  title='时间'
                  extraText={timeSel}
                />
              </AtList>
          </Picker>
        </View>

        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>日期选择器</Text>
        </View>
        <View className={'padding'}>
          <Picker mode={'date'} value={dateSel} onChange={this.onChangeTime.bind(this)}>
            <AtList>
                <AtListItem
                  title='日期'
                  extraText={dateSel}
                />
              </AtList>
          </Picker>
        </View>

      </View>
    )
  }
}
