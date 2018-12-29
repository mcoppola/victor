export default class Scene {
  constructor(assets) {
    this.assets = assets || []
    this.orderAssetsByDepth()
  }

  setView(view) {
    this.assets = this.assets.map(a =>
      Object.assign({ view, __proto__: a.__proto__ }, a)
    )
  }

  add(newAsset) {
    if (typeof newAsset === Array) {
      this.assets = this.assets + newAsset
    } else {
      this.assets[this.assets.length] = newAsset
    }
    this.orderAssetsByDepth()
  }

  remove(asset) {
    let i = this.assets.indexOf(asset)
    this.assets.splice(i, 1)
  }

  orderAssetsByDepth() {
    this.assets = this.assets.sort(
      (a, b) => (!!a.background ? 1 : b.pos[2] - a.pos[2])
    )
  }
}
