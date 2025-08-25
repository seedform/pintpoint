export default function InputABV({ name, label, state, handler }) {
  // use input type text since non-numeric character events aren't propagated
  return (
    <>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            aria-label={label}
            name={name}
            onChange={handler}
            value={state.fields[name].value}
            className={`input ${state.fields[name].valid ? "" : "is-warning"}`}
            type="text"
          />
        </div>
      </div>
    </>
  )
}
