import { useEffect, useState } from "react"
import { Form, useNavigate } from "react-router"

import BEER_STYLES from "../data/beer-styles"
import COUNTRIES from "../data/countries"
import { notEmpty, validateABV } from "../utils/validators"
import InputABV from "./input-abv"
import InputDetail from "./input-detail"
import Selector from "./selector"

const BASE_FORM_STATE = {
  fields: {
    brand: { value: "", valid: false },
    product: { value: "", valid: false },
    style: { value: "", valid: true },
    origin: { value: "", valid: true },
    abv: { value: "", valid: true },
    notes: { value: "", valid: true },
  },
  valid: false,
}

const VALIDATORS = {
  brand: notEmpty,
  product: notEmpty,
  style: (v) => new Set(BEER_STYLES).has(v) || v == "",
  origin: (v) => new Set(COUNTRIES).has(v) || v == "",
  abv: validateABV,
  notes: (v) => v.length <= 1000,
}

export default function BeerForm() {
  // TODO: bugfix -> form values not reset when opened again

  const navigate = useNavigate()

  const [formState, setFormState] = useState(BASE_FORM_STATE)

  useEffect(() => {
    setFormState(BASE_FORM_STATE)
  }, [])

  const handler = (event) => {
    const newState = { ...formState }
    const { name, value } = event.target
    const valid = VALIDATORS[name](value)
    console.debug(
      `${name}:`,
      formState.fields[name].value,
      "->",
      value,
      `[${valid ? "valid" : "invalid"}]`,
    )
    newState.fields[name] = { value, valid }
    newState.valid = Object.values(formState.fields)
      .map((field) => field.valid)
      .every(Boolean)
    setFormState(newState)
  }

  return (
    <>
      <div className="card">
        <div className="card-content">
          <Form method="post" id="beer-form">
            <div className="columns is-multiline">
              <div className="column is-half">
                <InputDetail
                  name="product"
                  label="Beer Name"
                  state={formState}
                  handler={handler}
                />
              </div>
              <div className="column is-half">
                <InputDetail
                  name="brand"
                  label="Brand"
                  state={formState}
                  handler={handler}
                />
              </div>
            </div>

            <div className="columns is-multiline">
              <div className="column is-one-third">
                <Selector
                  name="style"
                  label="Beer Style"
                  options={BEER_STYLES}
                  placeholder="Choose a Style..."
                  state={formState}
                  handler={handler}
                />
              </div>
              <div className="column is-one-third">
                <Selector
                  name="origin"
                  label="Origin"
                  options={COUNTRIES}
                  state={formState}
                  placeholder="Select a country..."
                  handler={handler}
                />
              </div>
              <div className="column is-one-third">
                <InputABV
                  name="abv"
                  label="Alcohol by Volume (%)"
                  state={formState}
                  handler={handler}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Tasting Notes</label>
              <div className="control">
                <textarea
                  aria-label="Tasting Notes"
                  name="notes"
                  value={formState.fields.notes.value}
                  onChange={handler}
                  className="textarea"
                  placeholder="Notes..."
                />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button
                  type="submit"
                  className={`button is-link ${formState.valid ? "is-warning" : "is-danger"}`}
                  disabled={!formState.valid}
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
