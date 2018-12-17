import Victor from '../../src/victor'
import Asset from '../../src/asset'
import Scene from '../../src/scene'

window.onload = () => {
  let canvas = document.getElementsByTagName('canvas')[0]

  let rectA = new Asset({
    geo: [[[0, 0, 0], [0, 5, 0], [5, 5, 0], [5, 0, 0]]],
    pos: [100, 300, 250],
    style: '#000',
    scale: 100
  })

  let rectB = new Asset({
    geo: [[[0, 0, 0], [0, 10, 0], [5, 5, 0], [5, 0, 0]]],
    pos: [1400, 500, 1000],
    style: '#4d88eb',
    scale: 20
  })

  let scene = new Scene([rectA, rectB])
  let v = new Victor({ canvas, scene })
}
