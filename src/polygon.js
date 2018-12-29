import Asset from './asset'
import { pipe } from 'ramda'

export default class Polygon extends Asset {
  draw() {
    let h = this.view.height
    // entity
    for (let i = 0; i < this.geo.length; i += 1) {
      // plane
      this.view.ctx.fillStyle = this.style.fill
      this.view.ctx.strokeStyle = this.style.stoke
      this.view.ctx.lineWidth = this.style.lineWidth || 1
      this.view.ctx.beginPath()
      for (let j = 0; j < this.geo[i].length; j += 1) {
        // point
        let p = pipe(
          this.setModelScale.bind(this),
          this.moveToScenePos.bind(this)
        )(this.geo[i][j])
        let [x, y] = this.pointTo3D(p, this.view)

        if (j === 0) {
          this.view.ctx.moveTo(x, -y + h)
        } else {
          this.view.ctx.lineTo(x, -y + h)
        }
      }
      this.view.ctx.closePath()
      this.style.fill && this.view.ctx.fill()
      this.style.stroke && this.view.ctx.stroke()
    }
  }
}
