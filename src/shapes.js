import Polygon from './polygon'

export class Square extends Polygon {
  constructor(p, props) {
    let [x, y, z] = p

    super({
      geo: [
        [[0, y, 0], [0, y, z], p, [x, y, 0]]
      ],
      ...props
    })
  }
}


export class Box extends Polygon {
  constructor(p2, props) {
    let p1 = [0, 0, 0]
    let [x1, y1, z1] = p1
    let [x2, y2, z2] = p2

    super({
      geo: [
        // Bottom
        [[x2, y1, z2], [x2, y1, z1], p1, [x1, y1, z2]],
        // Back
        [p2, [x2, y1, z2], [x1, y1, z2], [x1, y2, z2]],
        // Left
        [p1, [x1, y2, z1], [x1, y2, z2], [x1, y1, z2]],
        // Right
        [p2, [x2, y1, z2], [x2, y1, z1], [x2, y2, z1]],
        // Top
        [[x1, y2, z1], [x1, y2, z2], p2, [x2, y2, z1]],
        // Front
        [p1, [x1, y2, z1], [x2, y2, z1], [x2, y1, z1]]
      ],
      ...props
    })
  }
}

