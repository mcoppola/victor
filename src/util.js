const resize = canvas => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const fullscreenify = canvas => {
  window.addEventListener('resize', _ => resize(canvas), false)
  resize(canvas)
}

export const setCanvas = id => {
  window.addEventListener(
    'load',
    _ => {
      let canvas = document.getElementsByTagName('canvas')[0]
      fullscreenify(canvas)
    },
    false
  )
  fullscreenify(canvas)
}

export const captureMouse = element => {
  var mouse = {
    x: window.outerWidth / 2,
    y: window.outerHeight / 2
  }

  element.addEventListener(
    'mousemove',
    function(event) {
      var x, y
      if (event.pageX || event.pageY) {
        x = event.pageX
        y = event.pageY
      } else {
        x =
          event.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft
        y =
          event.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop
      }
      x -= element.offsetLeft
      y -= element.offsetTop

      mouse.x = x
      mouse.y = y
    },
    false
  )

  return mouse
}

export const getAnimationFrame = () => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
  }
}
