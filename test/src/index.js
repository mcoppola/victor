import Victor from '../../src/victor'
import Polygon from '../../src/polygon'
import Scene from '../../src/scene'

window.onload = () => {
  let canvas = document.getElementsByTagName('canvas')[0]

  let w = window.outerWidth
  let h = window.height

  let floor = new Polygon({
    geo: [[[0, 0, 0], [0, 0, 1000], [0, 0, 1000], [w, 0, 1000], [w, 0, 0]]],
    pos: [0, 0, 0],
    background: true,
    style: { fill: 'rgba(80,80,80, 0.8)' },
    scale: 1
  })

  let rectA = new Polygon({
    geo: [[[0, 0, 0], [0, 5, 0], [5, 5, 0], [5, 0, 0]]],
    pos: [0, 0, 500],
    style: { fill: 'rgba(255,0,0,0.5)', stroke: '#000', lineWidth: 5 },
    scale: 100
  })

  let rectB = new Polygon({
    geo: [[[0, 0, 0], [0, 10, 0], [5, 5, 0], [5, 0, 0]]],
    pos: [0, 0, 1200],
    style: { fill: '#4d88eb', stroke: '#000' },
    scale: 100
  })

  let scene = new Scene([floor, rectA, rectB])
  let v = new Victor({ canvas, scene })
}
