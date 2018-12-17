export default class Scene {
  constructor(assets) {
    this.assets = assets || []
  }

  add(newAsset) {
    if (typeof newAsset === Array) {
      this.assets = this.assets + newAsset
    } else {
      this.assets[this.assets.length] = newAsset
    }
  }

  remove(asset) {
    let i = this.assets.indexOf(asset)
    this.assets.splice(i, 1)
  }
}
