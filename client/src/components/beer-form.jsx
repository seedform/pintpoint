import { useEffect, useState } from "react"
import { Form, useNavigate } from "react-router"
import BEER_STYLES from "../data/beer-styles"
import COUNTRIES from "../data/countries"
import InputABV from "./input-abv"
import InputDetail from "./input-detail"
import Selector from "./selector"

export default function BeerForm() {
  const navigate = useNavigate()

  const [brand, setBrand] = useState("")
  const [brandValid, setbrandValid] = useState(true)

  const [product, setProduct] = useState("")
  const [productValid, setProductValid] = useState(true)

  const [beerStyle, setBeerStyle] = useState("")
  const [beerStyleValid, setBeerStyleValid] = useState(true)

  const [origin, setOrigin] = useState("")
  const [originValid, setOriginValid] = useState(true)

  const [abv, setAbv] = useState(0)
  const [abvValid, setAbvValid] = useState(true)

  const [notes, setNotes] = useState("")

  const [formValid, setFormValid] = useState(false)

  const validations = [
    brandValid,
    productValid,
    beerStyleValid,
    originValid,
    abvValid,
  ]

  useEffect(() => {
    const formValidity = validations.every(Boolean)
    console.debug(`form: ${formValidity ? "valid" : "invalid"}`)
    setFormValid(formValidity)
  }, [...validations])

  return (
    <>
      <div className="card">
        <div className="card-content">
          <Form method="post" id="beer-form">
            <div className="columns is-multiline">
              <div className="column is-half">
                <InputDetail
                  label="Beer Name"
                  fieldName="product"
                  value={product}
                  setValue={setProduct}
                  valid={productValid}
                  setValid={setProductValid}
                />
              </div>
              <div className="column is-half">
                <InputDetail
                  label="Brand"
                  fieldName="brand"
                  value={brand}
                  setValue={setBrand}
                  valid={brandValid}
                  setValid={setbrandValid}
                />
              </div>
            </div>

            <div className="columns is-multiline">
              <div className="column is-one-third">
                <Selector
                  label="Beer Style"
                  fieldName="style"
                  placeholder="Choose a Style..."
                  values={BEER_STYLES}
                  value={beerStyle}
                  setValue={setBeerStyle}
                  valid={beerStyleValid}
                  setValid={setBeerStyleValid}
                />
              </div>
              <div className="column is-one-third">
                <Selector
                  label="Origin"
                  fieldName="origin"
                  placeholder="Select a country..."
                  values={COUNTRIES}
                  value={origin}
                  setValue={setOrigin}
                  valid={originValid}
                  setValid={setOriginValid}
                />
              </div>
              <div className="column is-one-third">
                <InputABV
                  label="Alcohol by Volume (%)"
                  fieldName="abv"
                  value={abv}
                  setValue={setAbv}
                  valid={abvValid}
                  setValid={setAbvValid}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Tasting Notes</label>
              <div className="control">
                <textarea
                  aria-label="Tasting Notes"
                  name="notes"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  className="textarea"
                  placeholder="Notes..."
                />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button
                  type="submit"
                  className={`button is-link ${formValid ? "is-warning" : "is-danger"}`}
                  disabled={!formValid}
                >
                  Add
                </button>
              </div>
              <div className="control">
                <button
                  type="button"
                  className="button is-link is-light"
                  onClick={() => navigate("/beers")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}
