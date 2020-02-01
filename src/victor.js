import { setCanvas, getAnimationFrame } from './util'
import View from './view'

export default class Victor {
  constructor(props) {
    setCanvas(window)
    this.canvas = props.canvas
    this.view = new View({ canvas: this.canvas })

    this.scene = props.scene
    this.scene.setView(this.view)
    this.init()
  }

  init() {
    getAnimationFrame()
    const drawFrame = (_ => {
      window.requestAnimationFrame(drawFrame, canvas)
      this.play()
    }).bind(this)
    drawFrame()
  }

  setScene(scene) {
    this.scene = scene
  }

  play() {
    this.view.play()
    this.scene.assets.forEach(a => a.draw())
  }
}
