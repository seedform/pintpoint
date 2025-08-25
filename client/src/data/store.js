import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import beersAPI from "./beer-slice"

const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.debug("dispatching", action)
  let result = next(action)
  console.debug("next state", store.getState())
  console.groupEnd()
  return result
}

const store = configureStore({
  reducer: {
    [beersAPI.reducerPath]: beersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), logger, beersAPI.middleware]
  },
})

// required for refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)

export default store
