import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  gowave() {
    Taro.navigateTo({
      url: '/pages/projects/wave/wave'
    })
  }

  render () {
    return (
      <View className='main'>
        <View className='title'>鹅鹅鹅</View>
        <Button type='primary' onClick={this.gowave} >红掌拨清波</Button>
      </View>
    )
  }
}

