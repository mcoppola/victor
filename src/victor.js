import { setCanvas, getAnimationFrame } from './util'
import View from './view'

export default class Victor {
  constructor(props) {
    setCanvas(window)
    this.canvas = props.canvas
    this.scene = props.scene
    this.view = new View({ canvas: this.canvas })

    this.init()
  }

  init() {
    getAnimationFrame()
    function drawFrame() {
      window.requestAnimationFrame(drawFrame, canvas)
      this.play()
    }
    drawFrame = drawFrame.bind(this)
    drawFrame()
  }

  setScene(scene) {
    this.scene = scene
  }

  play() {
    // update persective from key presses and scrolling
    // this.view.keyCheck()
    // this.envi.scrollCheck();

    // draw all assets in scene
    this.view.mouseCheck()
    this.view.clear()

    for (let i = 0; i < this.scene.assets.length; i += 1) {
      this.scene.assets[i].draw(this.view)
    }
  }
}
