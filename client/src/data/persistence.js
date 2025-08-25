import { Mutex } from "async-mutex"
import localforage from "localforage"
import { v4 as uuidv4 } from "uuid"

const LOCK = new Mutex()
const KEY = "beers"

export async function getBeersPersist() {
  console.debug("getting beers from local storage")
  let beers = await localforage.getItem(KEY)
  beers = beers || {}
  return beers
}

export async function addBeerPersist(beer) {
  const release = await LOCK.acquire()
  console.debug("adding beer to local storage:", beer)
  let beers = await getBeersPersist()
  beers[uuidv4()] = beer
  await localforage.setItem(KEY, beers)
  release()
  return beer
}

export async function removeBeerPersist(id) {
  console.debug("removing beer from local storage:", id)
  let beers = await getBeersPersist()
  if (beers[id]) {
    delete beers[id]
    await localforage.setItem(KEY, beers)
    return id
  } else {
    throw new Error(`beer with id ${id} not found`)
  }
}

export async function dropDB() {
  const release = await LOCK.acquire()
  console.warn("dropping database")
  await localforage.setItem(KEY, {})
  release()
}
