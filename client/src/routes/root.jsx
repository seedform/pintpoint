import "bulma/css/bulma.min.css"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router"

import "./root.css"

export default function Root() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("./beers")
  }, [navigate])

  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
