export default function Selector({
  name,
  label,
  options,
  state,
  placeholder,
  handler,
}) {
  return (
    <>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <div
            className={`select is-fullwidth ${state.fields[name].valid ? "" : "is-warning"}`}
          >
            <select
              aria-label={label}
              name={name}
              value={state.fields[name].value}
              onChange={handler}
            >
              <option value="">{placeholder}</option>
              {options.map((v) => (
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
