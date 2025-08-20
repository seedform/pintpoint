import Beer from "../data/beer"
import { addBeer } from "../data/beer-collection-slice"
import store from "../data/store"
import { fakeNetworkDelay } from "./nextwork"

const DEMO_BEERS = [
  new Beer({
    brand: "Collective Arts",
    product: "Life in the Clouds",
    style: "India Pale Ale",
    abv: 6.1,
    origin: "Canada",
    tastingNotes: "Fruity",
  }),
  new Beer({
    brand: "Molson",
    product: "Molson Dry",
    style: "Lager",
    abv: 5.5,
    origin: "Canada",
    tastingNotes: "Dry",
  }),
  new Beer({
    brand: "Corona",
    product: "Corona Extra",
    style: "Lager",
    abv: 4.6,
    origin: "Canada",
    tastingNotes: "Light",
  }),
  new Beer({
    brand: "Lost Craft Brewery",
    product: "Creamsicle Sour",
    style: "Sour",
    abv: 4.5,
    origin: "Canada",
    tastingNotes: "Flavoured",
  }),
]

export default async function () {
  for (let beer of DEMO_BEERS) {
    await fakeNetworkDelay()
    console.log("adding demo beer:", beer)
    store.dispatch(addBeer({ ...beer }))
  }
}
