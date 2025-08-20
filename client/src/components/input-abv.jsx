import { useEffect } from "react"

export default function InputABV({
  value,
  setValue,
  valid,
  setValid,
  label,
  fieldName,
}) {
  useEffect(() => {
    const isValid = value === "" || /^[1-9]?[0-9](\.[0-9])?$/.test(value)
    console.debug(`ABV: ${isValid ? "valid" : "invalid"}`)
    setValid(isValid)
  }, [value, setValid])

  const onAbvChange = (event) => {
    const ev = event.target.value
    console.debug(`ABV: ${value} -> ${ev}`)
    setValue(ev)
  }

  // use input type text since non-numeric character events aren't propagated
  return (
    <>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            aria-label={label}
            name={fieldName}
            onChange={onAbvChange}
            value={value}
            className={`input ${valid ? "" : "is-warning"}`}
            type="text"
          />
        </div>
      </div>
    </>
  )
}
