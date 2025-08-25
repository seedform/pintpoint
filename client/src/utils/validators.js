export function validateABV(value) {
  return value === "" || /^[1-9]?\d(\.\d)?$/.test(value)
}

export function notEmpty(value) {
  return value !== ""
}
