import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"

import demoAddBeers from "../utils/demo"

import BeerView from "./beer"

import { useEffect } from "react"
import { getBeers } from "../data/beer-collection-slice"
import "./beer-list.css"

export default function BeerList() {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.beerCollection.status)
  const beers = useSelector((state) => state.beerCollection.list)

  useEffect(() => {
    // if (status === "idle") {
    dispatch(getBeers())
    // }
  }, [])

  let view = beers.map((beer) => <BeerView key={beer.id} beer={beer} />)

  if (status === "pending") {
    return <h1>WAIT...</h1>
  }

  const demo = (e) => {
    e.preventDefault()
    demoAddBeers()
  }

  return (
    <>
      <div className="columns is-multiline is-desktop">
        {view}
        <Link
          id="demo-add-btn"
          onClick={demo}
          className="button is-size-3 is-warning is-rounded"
        >
          demo
        </Link>
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
