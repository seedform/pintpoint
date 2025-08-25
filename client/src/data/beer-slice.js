import { createApi } from "@reduxjs/toolkit/query/react"

import { fakeNetworkDelay } from "../utils/nextwork"
import {
  addBeerPersist,
  getBeersPersist,
  removeBeerPersist,
} from "./persistence"

async function getBeersQuery() {
  try {
    await fakeNetworkDelay(500)
    return { data: await getBeersPersist() }
  } catch (error) {
    return { error }
  }
}

async function addBeerMutation(beer) {
  try {
    await fakeNetworkDelay(500)
    return { data: await addBeerPersist(beer) }
  } catch (error) {
    return { error }
  }
}

async function removeBeerMutation(id) {
  try {
    await fakeNetworkDelay(500)
    return { data: await removeBeerPersist(id) }
  } catch (error) {
    return { error }
  }
}

const beersAPI = createApi({
  reducerPath: "beersApi",
  baseQuery: () => [],
  endpoints: (build) => ({
    getBeers: build.query({
      queryFn: getBeersQuery,
      providesTags: ["beer"],
    }),
    addBeer: build.mutation({
      queryFn: addBeerMutation,
      invalidatesTags: ["beer"],
    }),
    removeBeer: build.mutation({
      queryFn: removeBeerMutation,
      invalidatesTags: ["beer"],
    }),
  }),
})

// auto-generated hooks
export const { useGetBeersQuery, useAddBeerMutation, useRemoveBeerMutation } =
  beersAPI

export default beersAPI
