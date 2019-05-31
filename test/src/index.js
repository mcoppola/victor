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

  let gradient = ctx.createLinearGradient(0, 0, 1000, 1000)
  gradient.addColorStop('0', 'magenta')
  gradient.addColorStop('0.5', 'blue')
  gradient.addColorStop('1.0', 'red')

  // canvas.style.background = 'rgb(116, 154, 166)'
  canvas.style.background = gradient


  let wallFill = ctx.createLinearGradient(0, 0, w / 2, h / 2)
  wallFill.addColorStop('0', 'rgba(80,80,80, 0.1)')
  wallFill.addColorStop('0.1', 'rgba(0,0,0, 1)')
  wallFill.addColorStop('1', 'rgba(80,80,80, 0.1)')

  let cx = 15
  let squareSizeW = w/cx
  let squareSizeH = h/cx
  let squares = []

  // bottom
  for (var i = 0; i < cx; i++) {
    for (var j = 0; j < cx; j++) {
      squares.push(
        new Square([squareSizeW, 0, squareSizeW], {
          pos: [(squareSizeW * j), 0, squareSizeW * i],
          style: {
            fill: (j + (1 * (i % 2))) % 2 ? "#212AFF" : "rgba(255, 255, 255, 0)"
          }
        })
      )
    }
  }

  // top
  for (var i = 0; i < cx; i++) {
    for (var j = 0; j < cx; j++) {
      squares.push(
        new Square([squareSizeW, h/2, squareSizeW], {
          pos: [(squareSizeW * j), h/2, squareSizeW * i],
          style: {
            fill: (j + (1 * (i % 2))) % 2 ? "#212AFF" : "rgba(255, 255, 255, 0)"
          }
        })
      )
    }
  }

  // left
  for (var i = 0; i < cx; i++) {
    for (var j = 0; j < cx; j++) {
      squares.push(
        new Square([w, squareSizeH, squareSizeH], {
          pos: [0, (squareSizeH * j), squareSizeH * i],
          style: {
            fill: (j + (1 * (i % 2))) % 2 ? "#212AFF" : "rgba(255, 255, 255, 0)"
          }
        })
      )
    }
  }

  //  // right
  // for (var i = 0; i < cx; i++) {
  //   for (var j = 0; j < cx; j++) {
  //     squares.push(
  //       new Square([w - 100, squareSizeH, squareSizeH], {
  //         pos: [w - 100, (squareSizeH * j), squareSizeH * i],
  //         style: {
  //           fill: (j + (1 * (i % 2))) % 2 ? "rgb(0,0,0)" : "rgba(255, 255, 255, 0)"
  //         }
  //       })
  //     )
  //   }
  // }

  let sn = 13
  let sh = h / 2
  let spos = [w/2, 10, 800]
  let sw = (w - spos[0]) / sn
  let sd = 100


  let scene = new Scene(squares)
  let v = new Victor({ canvas, scene })
}
