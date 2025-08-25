import { Link } from "react-router"

import { useGetBeersQuery } from "../data/beer-slice"
import BeerView from "./beer"
import "./beer-list.css"
import DemoButton from "./demo-button"

export default function BeerList() {
  const { data: beers, isLoading, isFetching } = useGetBeersQuery()

  if (isFetching || isLoading) {
    return <h1>WAIT...</h1>
  }

  const view = Object.entries(beers).map(([k, v]) => (
    <BeerView key={k} id={k} beer={v} />
  ))

  return (
    <>
      <div className="columns is-multiline is-desktop">
        {view}
        <DemoButton />
        <Link
          id="add-beer-btn"
          to="/beers/add"
          className="button is-size-3 is-warning is-rounded"
        >
          +
        </Link>
      </div>
    </>
  )
}
