import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtLoadMore } from 'taro-ui'

interface IState {
  status: 'more' | 'loading' | 'noMore'
}
export default class Loadmore extends Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      status: 'more'
    }
  }

  handleClick() {
    this.setState({
      status: 'loading'
    })
    setTimeout(() => {
      this.setState({
        status: 'noMore'
      })
    }, 2000);
  }

  render () {
    return (
      <View className='LoadMore'>
        <View className={'content'}>
          <View className={'line'}></View>
          <Text className={'title'}>一般用法</Text>
        </View>
        <View>
          <AtLoadMore
            onClick={this.handleClick.bind(this)}
            status={this.state.status}
          />
        </View>
      </View>
    )
  }
}
