import { v4 as uuidv4 } from "uuid"

import BEER_STYLES from "./beer-styles"

/**
 *
 */
export default class Beer {
  static STYLES = new Set(BEER_STYLES)

  /**
   *
   * @param {string} brand  name of brand/brewing company
   * @param {string} product  name of the product/beer
   * @param {string} style  beer style (e.g. )
   * @param {number} abv  % alcohol by volume [0, 99)
   * @param {string} origin  country of origin
   * @param {string} tastingNotes  notes
   * @param {number} count  number of units consumed
   */
  constructor({ brand, product, style, abv, origin, tastingNotes, count }) {
    style = style ? String(style).toLocaleLowerCase() : style
    count = count ? count : 0

    if (!brand || !product) {
      throw new TypeError("brand AND product name must be provided")
    } else if (!!style && !Beer.STYLES.has(style)) {
      throw new TypeError(`invalid beer style ("${style}")`)
    } else if (Number.isNaN(Number.parseFloat(abv)) || abv < 0 || abv >= 100) {
      throw new TypeError(
        `alcohol by volume % must be in range [0, 99) ("${abv}")`,
      )
    } else if (!Number.isInteger(count) || count < 0) {
      throw new TypeError(
        `count must be in range [0, ${Number.MAX_VALUE}] ("${count}")`,
      )
    }

    this.id = uuidv4()
    this.brand = brand
    this.product = product
    this.style = style
    this.abv = abv
    this.origin = origin
    this.tastingNotes = tastingNotes
    this.count = count
  }
}
