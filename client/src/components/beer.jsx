import { useState } from "react"
import "./beer.css"
import { useRemoveBeerMutation } from "../data/beer-slice"

export default function BeerView({ beer, id }) {

  const [showMenu, setShowMenu] = useState(false)
  const [removeBeer, result] = useRemoveBeerMutation()

  const onRemove = (e) => {
    removeBeer(id)
    setShowMenu(false)
  }

  const onBlur = (e) => {
    if (e?.relatedTarget?.id !== `remove-${id}`) {
      setShowMenu(false)
    }
  }

  const menu = () => {
    return <>
      <div className="dropdown is-active">
        <div className="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a id={`remove-${id}`} href="#" onClick={onRemove} className="dropdown-item">Remove</a>
          </div>
        </div>
      </div>
    </>
  }


  return (
    <>
      <div className="column is-one-third" onBlur={onBlur}>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="/logo.svg" alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{beer.product}</p>
                <p className="subtitle is-6">by {beer.brand}</p>
              </div>
            </div>

            <div className="content">
              <div className="tags">
                <span className="tag">{beer.style}</span>
                <span className="tag">{beer.abv}%</span>
                <span className="tag">{beer.origin}</span>
              </div>
              <div 
                className="icon"
                tabIndex={0}
                onClick={() => setShowMenu(!showMenu)}>
                  <i className={showMenu ? "menu-icon menu-icon-active" : "menu-icon"}></i></div>
              {showMenu ? menu() : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
