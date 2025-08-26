import BeerContextMenu from "./beer-context-menu"

export default function BeerView({ beer, id }) {
  return (
    <>
      <div className="column is-one-third">
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
              <BeerContextMenu id={id} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
