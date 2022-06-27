import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

const img = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aa33.com%2Fuploads%2F21%2F39%2Farticle%2Fdianshangzixun%2F0601%2F60b5f15c2fbf9.png&refer=http%3A%2F%2Fimg.aa33.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658888905&t=90f3e90b1ce3ed75166ea00b375eccb7'
export default class Article extends Component {

  render () {
    return (
      <View className={'article'}>
        <View className={'at-article__h1'}>
          这是一级标题这是一级标题
        </View>
        <View className={'at-article__info'}>
          2017-05-07&nbsp;&nbsp;&nbsp;这是作者
        </View>
        <View className={'at-article__content'}>
          <View className={'at-article__section'}>
            <View className={'at-article__h2'}>这是二级标题</View>
            <View className={'at-article__h3'}>这是三级标题</View>
            <View className={'at-article__p'}>
              这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </View>
            <View className={'at-article__p'}>
              这是文本段落。这是文本段落。
            </View>
            <Image 
              className={'at-article__img'}
              src={img} 
              mode={'widthFix'} />
          </View>

          <View className={'at-article__section'}>
            <View className={'at-article__h2'}>这是二级标题</View>
            <View className={'at-article__h3'}>这是三级标题</View>
            <View className={'at-article__p'}>
              这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </View>
            <View className={'at-article__p'}>
              这是文本段落。这是文本段落。
            </View>
            <Image 
              className={'at-article__img'}
              src={img} 
              mode={'widthFix'} />
            <Image className={'at-article__img'} src={img}></Image>
          </View>
        </View>
      </View>
    )
  }
}
