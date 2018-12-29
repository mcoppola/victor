export default class Asset {
  constructor(props) {
    this.geo = props.geo || []
    this.pos = props.pos || [0, 0, 0]
    this.background = props.background || false
    this.scale = props.scale || 1
    this.style = props.style || { fill: '#000' }
  }

  setModelScale(p) {
    return [p[0] * this.scale, p[1] * this.scale, p[2] * this.scale]
  }

  moveToScenePos(p) {
    return [this.pos[0] + p[0], this.pos[1] + p[1], this.pos[2] + p[2]]
  }

  // Vanishing Point Perspective convertion
  pointTo3D(p) {
    let { height: h, width: w, depth: d, shiftX: dX, shiftY: dY } = this.view

    let x = p[0] + p[2] / d * (w * dX / 2 - p[0])
    let y = p[1] + p[2] / d * (h * dY / 2 - p[1])
    return [x, y]
  }
}
