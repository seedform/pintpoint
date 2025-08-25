import { redirect } from "react-router"
import beersAPI from "../../data/beer-slice"
import store from "../../data/store"

export default async function action({ request }) {
  const formData = await request.formData()
  const beer = Object.fromEntries(formData)
  console.debug(`adding beer: ${JSON.stringify(beer)}`)
  store.dispatch(beersAPI.endpoints.addBeer.initiate(beer))
  return redirect(`/beers`)
}
