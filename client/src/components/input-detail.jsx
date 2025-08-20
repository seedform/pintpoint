import { useEffect } from "react"

export default function InputDetail({
  value,
  setValue,
  valid,
  setValid,
  label,
  fieldName,
}) {
  useEffect(() => {
    const isValid = value !== ""
    console.debug(`${label}: ${isValid ? "valid" : "invalid"}`)
    setValid(isValid)
  }, [value])

  const onChange = (event) => {
    const ev = event.target.value.trim()
    console.debug(`${label}: ${value} -> ${ev}`)
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
            className={`input ${valid ? "" : "is-warning"}`}
            type="text"
            placeholder=""
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </>
  )
}
