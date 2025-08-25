export function validateABV(value) {
  return value === "" || /^[1-9]?[0-9](\.[0-9])?$/.test(value)
}

export function notEmpty(value) {
  return value !== ""
}
