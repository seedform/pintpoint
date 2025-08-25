import { Link } from "react-router"

import Beer from "../data/beer"
import beersAPI from "../data/beer-slice"
import store from "../data/store"
import "./demo-button.css"

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

function demo(event) {
  event.preventDefault()
  for (let beer of DEMO_BEERS) {
    store.dispatch(beersAPI.endpoints.addBeer.initiate({ ...beer }))
  }
}

export default function DemoButton() {
  return (
    <>
      <Link
        id="demo-add-btn"
        onClick={demo}
        className="button is-size-3 is-warning is-rounded"
      >
        demo
      </Link>
    </>
  )
}
