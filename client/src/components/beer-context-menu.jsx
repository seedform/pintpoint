import { useState } from "react"

import { useRemoveBeerMutation } from "../data/beer-slice"
import "./beer-context-menu.css"

export default function BeerContextMenu({ id }) {
  const [showMenu, setShowMenu] = useState(false)
  const [removeBeer] = useRemoveBeerMutation()

  const onRemove = () => {
    removeBeer(id)
    setShowMenu(false)
  }

  const onBlur = (e) => {
    if (e?.relatedTarget?.id !== `remove-${id}`) {
      setShowMenu(false)
    }
  }

  const menu = () => {
    return (
      <>
        <div className="dropdown is-active">
          <div className="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a
                id={`remove-${id}`}
                href="#"
                onClick={onRemove}
                className="dropdown-item"
              >
                Remove
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div
        className="icon"
        tabIndex={0}
        onClick={() => setShowMenu(!showMenu)}
        onBlur={onBlur}
      >
        <i
          className={showMenu ? "menu-icon menu-icon-active" : "menu-icon"}
        ></i>
      </div>
      {showMenu ? menu() : ""}
    </>
  )
}
