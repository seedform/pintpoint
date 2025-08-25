import { Outlet, useNavigate } from "react-router"

import "bulma/css/bulma.min.css"
import { useEffect } from "react"
import "./root.css"

export default function Root() {
  const navigate = useNavigate()

  useEffect(() => {
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
