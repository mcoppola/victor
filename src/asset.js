import { pipe }

export default class Asset {
  constructor(props) {
    this.geo = props.geo || []
    this.pos = props.pos || [0, 0, 0]
    this.scale = props.scale || 10
    this.style = props.style
  }

  setModelScale(p) {
    return [p[0] * this.scale, p[1] * this.scale, p[2] * this.scale]
  }

  moveToScenePos(p) {
    return [this.pos[0] + p[0], this.pos[1] + p[1], this.pos[2] + p[2]]
  }

  // Vanishing Point Perspective convertion
  pointTo3D(p, view) {
    var x = p[0] + p[2] / view.depth * (view.width * view.shiftX / 2 - p[0])
    var y = p[1] + p[2] / view.depth * (view.height * view.shiftY / 2 - p[1])
    return [x, y]
  }

  draw(view) {
    // asset
    for (let i = 0; i < this.geo.length; i += 1) {
      // entity
      // plane
      view.ctx.fillStyle = this.style
      view.ctx.beginPath()
      for (let j = 0; j < this.geo[i].length; j += 1) {
        // point
        let p = this.moveToScenePos(this.setModelScale(this.geo[i][j]))
        let [x, y] = this.pointTo3D(p, view)

        if (j === 0) {
          view.ctx.moveTo(x, y)
        } else {
          view.ctx.lineTo(x, y)
        }
      }
      view.ctx.closePath()
      view.ctx.fill()
    }
  }
}
