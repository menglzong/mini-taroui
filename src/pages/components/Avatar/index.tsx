import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtAvatar } from 'taro-ui'

const img = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aa33.com%2Fuploads%2F21%2F39%2Farticle%2Fdianshangzixun%2F0601%2F60b5f15c2fbf9.png&refer=http%3A%2F%2Fimg.aa33.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658888905&t=90f3e90b1ce3ed75166ea00b375eccb7'

export default class Avatar extends Component {

  render () {
    return (
      <View className='Avatar'>
        <Text className={'title'}>圆形头像</Text>
        <View className={'smallBtn'}>
          <AtAvatar className={'avatar'} size={'small'} image={img} circle/>
          <AtAvatar className={'avatar'} size={'normal'} image={img} circle/>
          <AtAvatar className={'avatar'} size={'large'} image={img} circle/>
        </View>

        <Text className={'title'}>圆角矩形头像</Text>
        <View className={'smallBtn'}>
          <AtAvatar className={'avatar'} size={'small'} image={img}/>
          <AtAvatar className={'avatar'} size={'normal'} image={img}/>
          <AtAvatar className={'avatar'} size={'large'} image={img}/>
        </View>

        <Text className={'title'}>圆形头像（支持文字）</Text>
        <View className={'smallBtn'}>
          <AtAvatar className={'avatar'} size={'small'} text={'凹'} circle/>
          <AtAvatar className={'avatar'} size={'normal'} text={'凹'} circle/>
          <AtAvatar className={'avatar'} size={'large'} text={'凹'} circle/>
        </View>

        <Text className={'title'}>圆角矩形头像（支持文字）</Text>
        <View className={'smallBtn'}>
          <AtAvatar className={'avatar'} size={'small'} text={'凹'}/>
          <AtAvatar className={'avatar'} size={'normal'} text={'凹'}/>
          <AtAvatar className={'avatar'} size={'large'} text={'凹'}/>
        </View>

      </View>
    )
  }
}
