import * as matchers from "@testing-library/jest-dom/matchers"
// import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { afterEach, expect } from "vitest"

// avoid globals and extend expect() with matchers from jest-dom
expect.extend(matchers)

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
