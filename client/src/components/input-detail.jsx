export default function InputDetail({ name, label, state, handler }) {
  // use input type text since non-numeric character events aren't propagated
  return (
    <>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            aria-label={label}
            name={name}
            className={`input ${state.fields[name].valid ? "" : "is-warning"}`}
            type="text"
            placeholder=""
            onChange={handler}
            value={state.fields[name].value}
          />
        </div>
      </div>
    </>
  )
}
