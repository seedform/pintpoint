import { configureStore } from "@reduxjs/toolkit"
import beerCollectionReducer from "./beer-collection-slice"

const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.debug("dispatching", action)
  let result = next(action)
  console.debug("next state", store.getState())
  console.groupEnd()
  return result
}

export default configureStore({
  reducer: {
    beerCollection: beerCollectionReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger)
  },
})
