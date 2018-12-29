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
    // update persective from key presses and scrolling
    // this.view.keyCheck()
    // this.envi.scrollCheck();

    this.view.play()

    for (let i = 0; i < this.scene.assets.length; i += 1) {
      this.scene.assets[i].draw()
    }
  }
}
