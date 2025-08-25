import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider, createBrowserRouter } from "react-router"

import store from "./data/store"
import addBeerAction from "./routes/actions/add-beer"
import AddBeer from "./routes/add-beer"
import Beers from "./routes/beers"
import Root from "./routes/root"

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root className="container" />,
    children: [
      {
        path: "/beers",
        element: <Beers />,
      },
      {
        path: "/beers/add",
        element: <AddBeer />,
        action: addBeerAction,
      },
    ],
  },
])

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
