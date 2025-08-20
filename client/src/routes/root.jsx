import { Outlet, useNavigate } from "react-router"

import "bulma/css/bulma.min.css"
import { useEffect } from "react"
import "./root.css"

export default function Root() {
  const navigate = useNavigate()

  useEffect(() => {
    console.debug("redirecting to /beers")
    navigate("./beers")
  }, [])

  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
