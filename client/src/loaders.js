import store from "./store"

export async function beerListLoader() {
  return { beers: store.beers }
}
