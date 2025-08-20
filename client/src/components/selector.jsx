import { useEffect } from "react"

export default function Selector({
  value,
  setValue,
  valid,
  setValid,
  values,
  placeholder,
  label,
  fieldName,
}) {
  const valueSet = new Set(values)

  useEffect(() => {
    const isValid = valueSet.has(value)
    console.debug(`${label}: ${isValid ? "valid" : "invalid"}`)
    setValid(isValid)
  }, [value])

  const onChange = (event) => {
    const eValue = event.target.value
    console.debug(`${label}: ${value} -> ${eValue}`)
    setValue(eValue)
  }

  return (
    <>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <div className={`select is-fullwidth ${valid ? "" : "is-warning"}`}>
            <select
              aria-label={label}
              name={fieldName}
              value={value}
              onChange={onChange}
            >
              <option value={placeholder}>{placeholder}</option>
              {values.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
