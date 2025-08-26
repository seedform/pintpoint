import BeerContextMenu from "./beer-context-menu"

export default function Beer({ beer, id }) {
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
                <p title="product" className="title is-4">
                  {beer.product}
                </p>
                <p title="brand" className="subtitle is-6">
                  by {beer.brand}
                </p>
              </div>
            </div>

            <div className="content">
              <div className="tags">
                {beer.style && (
                  <span title="style" className="tag">
                    {beer.style}
                  </span>
                )}

                {(beer.abv || parseFloat(beer.abv) == 0) && (
                  <span title="abv" className="tag">
                    {beer.abv == 0 ? "non-alcoholic" : `${beer.abv}%`}
                  </span>
                )}

                {beer.origin && (
                  <span title="origin" className="tag">
                    {beer.origin}
                  </span>
                )}
              </div>
              <BeerContextMenu id={id} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
