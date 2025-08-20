import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addBeerPersist, getBeersPersist } from "./persistence"

export const getBeers = createAsyncThunk("beers/getBeers", async () => {
  // await fakeNetworkDelay();
  return await getBeersPersist()
})

export const addBeer = createAsyncThunk("beers/addBeer", async (beer) => {
  // await fakeNetworkDelay();
  await addBeerPersist(beer)
  return beer
})

export const beerCollectionSlice = createSlice({
  name: "beers",
  initialState: {
    status: "idle",
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBeers.pending, (state) => {
        state.status = "pending"
      })
      .addCase(getBeers.fulfilled, (state, action) => {
        state.status = "idle"
        state.list = action.payload
      })
      .addCase(addBeer.pending, (state) => {
        state.status = "pending"
      })
      .addCase(addBeer.fulfilled, (state, action) => {
        state.list.push(action.payload)
        state.status = "idle"
      })
  },
})

export default beerCollectionSlice.reducer
