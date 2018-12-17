import { captureMouse, getAnimationFrame } from './util'

export default class View {
  constructor(props) {
    this.canvas = props.canvas
    this.ctx = this.canvas.getContext('2d')
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.depth = (this.width + this.height) / 1.5
    this.frame = [this.width, this.height, this.depth]
    this.shiftX = 1
    this.shiftY = 1
    this.mouse = captureMouse(this.canvas)
    this.mouseFactor = 0.002
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  // Vanishing Point Perspective convertion
  pointTo3D(p) {
    var x = p[0] + p[2] / this.depth * (this.width * this.shiftX / 2 - p[0])
    var y = p[1] + p[2] / this.depth * (this.height * this.shiftY / 2 - p[1])
    return [x, y]
  }

  // doModelAnimation(point, asset) {
  //   for (var i = 0; i < asset.modelAttributes.length; i += 1) {
  //     point = asset.modelAttributes[i].processPoint(this.frame, point, asset)
  //   }
  //   return point
  // }

  // charToSize(z) {
  //   if (z < this.depth) {
  //     var fontSize = this.fontMax * ((this.depth - z) / this.depth)
  //     var fontString = Math.round(fontSize).toString() + 'px '
  //     return [this.fontStyle + fontString + this.font]
  //   } else {
  //     return [this.fontStyle + '0px' + this.font]
  //   }
  // }

  mouseCheck() {
    if (!this.mouse) return
    if (!this.mouseLastPos) {
      this.mouseLastPos = {
        x: window.outerWidth / 2,
        y: window.outerHeight / 2
      }
      return
    }
    if (
      this.mouse.x == this.mouseLastPos.x &&
      this.mouse.y == this.mouseLastPos.y
    ) {
      return
    }

    if (this.mouse.x > this.mouseLastPos.x) {
      this.shiftX += this.mouseFactor * (this.mouse.x - this.mouseLastPos.x)
    } else if (this.mouse.x < this.mouseLastPos.x) {
      this.shiftX -= this.mouseFactor * (this.mouseLastPos.x - this.mouse.x)
    }

    if (this.mouse.y > this.mouseLastPos.y) {
      this.shiftY += this.mouseFactor * (this.mouse.y - this.mouseLastPos.y)
    } else if (this.mouse.y < this.mouseLastPos.y) {
      this.shiftY -= this.mouseFactor * (this.mouseLastPos.y - this.mouse.y)
    }

    this.mouseLastPos = { x: this.mouse.x, y: this.mouse.y }
  }
}
