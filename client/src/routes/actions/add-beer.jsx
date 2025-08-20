import { redirect } from "react-router"
import Beer from "../../data/beer"
import { addBeer } from "../../data/beer-collection-slice"
import store from "../../data/store"

export default async function action({ request }) {
  const formData = await request.formData()
  const beer = Object.fromEntries(formData)
  console.debug(`adding beer: ${JSON.stringify(beer)}`)

  // final validation
  const beerObj = new Beer({ ...beer })

  store.dispatch(addBeer({ ...beerObj }))
  return redirect(`/beers`)
}
