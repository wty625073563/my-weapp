import Taro, { Component } from '@tarojs/taro'
import { View, Canvas } from '@tarojs/components'
import './wave.scss'

const { windowWidth: w, windowHeight: h } = Taro.getSystemInfoSync()

export default class Wave extends Component {

  config = {}

  componentDidMount() {
    this.ctx = Taro.createCanvasContext('canvas')
    this.loop()
  }

  step = 0

  lines = [
    "rgba(0,222,255, 0.2)",
    "rgba(157,192,249, 0.2)",
    "rgba(0,168,255, 0.2)"
  ]

  loop() {
    let ctx = this.ctx

    // ctx.clearRect(0, 0, windowWidth, h)
    this.step++
    //画3个不同颜色的矩形
    for (let j = this.lines.length - 1; j >= 0; j--) {
      ctx.setFillStyle(this.lines[j])
      // 保存默认的填充样式
      ctx.save()
      // 恢复到以前保存的状态
      ctx.restore()
      //每个矩形的角度都不同，每个之间相差45度
      let angle = ((this.step + j * 45) * Math.PI) / 180,
       deltaHeight = Math.sin(angle) * 50,
       deltaHeightRight = Math.cos(angle) * 50

      ctx.beginPath()
      ctx.moveTo(0, h / 2 + deltaHeight)
      ctx.bezierCurveTo(
        w / 2.5,
        h / 2 + deltaHeight - 50,
        w / 2.5,
        h / 2 + deltaHeightRight - 30,
        w,
        h / 2 + deltaHeightRight
      )
      ctx.lineTo(w, h)
      ctx.lineTo(0, h)
      ctx.lineTo(0, h / 2 + deltaHeight)
      ctx.closePath()
      ctx.fill()
    }
    ctx.draw()
    requestAnimationFrame(this.loop.bind(this))
  }

  render() {
    return  (
      <View>
        <View className='title' >波</View>
        <Canvas className='canvas' canvasId='canvas' ></Canvas>
      </View>
    )
  }
}