import Victor from '../../src/victor'
import Polygon from '../../src/polygon'
import { Box } from '../../src/shapes'
import Scene from '../../src/scene'

window.onload = () => {
  let canvas = document.getElementsByTagName('canvas')[0]
  let ctx = canvas.getContext('2d')

  let w = window.outerWidth
  let h = window.outerHeight

  let gradient = ctx.createLinearGradient(0, 0, 1000, 1000)
  gradient.addColorStop('0', 'magenta')
  gradient.addColorStop('0.5', 'blue')
  gradient.addColorStop('1.0', 'red')

  let wallFill = ctx.createLinearGradient(0, 0, w / 2, h / 2)
  wallFill.addColorStop('0', 'rgba(80,80,80, 0.1)')
  wallFill.addColorStop('0.1', 'rgba(0,0,0, 1)')
  wallFill.addColorStop('1', 'rgba(80,80,80, 0.1)')

  let wallStyle = {
    fill: 'rgba(40,40,40, 0.0)',
    stroke: gradient,
    lineWidth: 8
  }

  let floor = new Polygon({
    geo: [[[0, 0, 0], [0, 0, 1500], [w, 0, 1500], [w, 0, 0]]],
    background: true,
    style: {
      ...wallStyle,
      fill: 'rgba(200,0,0,0.1)'
    }
  })

  let leftWall = new Polygon({
    geo: [[[0, 0, 0], [0, h, 0], [0, h, 1500], [0, 0, 1500]]],
    background: true,
    style: wallStyle
  })

  let rightWall = new Polygon({
    geo: [[[w, 0, 0], [w, h, 0], [w, h, 1500], [w, 0, 1500]]],
    background: true,
    style: wallStyle
  })

  let ciel = new Polygon({
    geo: [[[0, h, 0], [0, h, 1500], [w, h, 1500], [w, h, 0]]],
    background: true,
    style: {
      ...wallStyle,
      fill: 'rgba(0,0,200,0.1)'
    }
  })

  let box = new Box([10, 10, 5], {
    pos: [300, 0, 800],
    style: {
      fill: 'rgba(255,0,0,1)',
      stroke: 'rgba(0,0,255, 1)',
      lineWidth: 5
    },
    scale: 50
  })

  let box2 = new Box([5, 2, 1], {
    pos: [1300, 0, 1200],
    style: {
      fill: 'rgba(255,0,0,1)',
      stroke: 'rgba(0,0,255, 1)',
      lineWidth: 5
    },
    scale: 50
  })

  let scene = new Scene([floor, leftWall, rightWall, ciel, box, box2])
  let v = new Victor({ canvas, scene })
}
