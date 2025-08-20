import localforage from "localforage"

export async function getBeersPersist() {
  console.debug("getting beers from local storage")
  let beers = await localforage.getItem("beerCollection")
  beers = beers ? beers : []
  return beers
}

export async function addBeerPersist(beer) {
  console.debug("adding beer to local storage:", beer)
  let beers = await getBeersPersist()
  await localforage.setItem("beerCollection", [beer].concat(beers))
}
