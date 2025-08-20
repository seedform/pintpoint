import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router"

import addBeerAction from "./routes/actions/add-beer"
import AddBeer from "./routes/add-beer"
import Beers from "./routes/beers"
import Root from "./routes/root"

import store from "./data/store"

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
