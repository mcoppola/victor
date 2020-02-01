import Victor from '../../src/victor'
import Polygon from '../../src/polygon'
import { Box, Square } from '../../src/shapes'
import Scene from '../../src/scene'

window.onload = () => {
  let canvas = document.getElementsByTagName('canvas')[0]
  let ctx = canvas.getContext('2d')

  let w = window.outerWidth
  let h = window.outerHeight
  let wd = x => w / 1000 * x
  let hd = x => h / 1000 * x

  let gradient = ctx.createLinearGradient(0, 0, w, h)
  gradient.addColorStop('0', '#047247')
  gradient.addColorStop('0.5', '#ef918d')
  gradient.addColorStop('0.7', '#cac054')
  gradient.addColorStop('1.0', '#047247')

  canvas.style.background = gradient

  let cx = 20
  let squareSizeW = w/cx
  let squareSizeH = h/cx
  let squares = []

  // planes
  for (var i = 0; i < cx*1.5; i++) {
    for (var j = 0; j < cx; j+=1) {
      squares.push(
        new Square([w, squareSizeH, squareSizeH], {
          pos: [0, (squareSizeH * (j - 1)), squareSizeH * i],
          style: {
            fill: (j + (1 * (i % 2))) % 2 ? "#270809" : gradient
          }
        })
      )
    }
  }

  let sn = 13
  let sh = h / 2
  let spos = [w/2, 10, 800]
  let sw = (w - spos[0]) / sn
  let sd = 100

  let scene = new Scene(squares)
  let v = new Victor({ canvas, scene })
}
