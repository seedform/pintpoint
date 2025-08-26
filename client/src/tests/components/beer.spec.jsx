import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vitest } from "vitest"

import Beer from "../../components/beer"

describe("A beer card", async () => {
  vitest.mock("../../components/beer-context-menu", () => ({
    default: () => <></>,
  }))

  describe("given a standard beer", async () => {
    const BEER = {
      id: "test-id",
      brand: "Unit Test Brewery",
      product: "Unit Test Lager",
      style: "lager",
      abv: 10,
      origin: "Canada",
    }

    beforeEach(() => {
      render(<Beer beer={{ ...BEER }} id={BEER.id} />)
    })

    it("should show the product name", async () => {
      expect(screen.getByTitle("product")).toHaveTextContent(BEER.product)
    })

    it("should show the brand", async () => {
      expect(screen.getByTitle("brand")).toHaveTextContent(BEER.brand)
    })

    it("should show the beer style", async () => {
      expect(screen.getByTitle("style")).toHaveTextContent(BEER.style)
    })

    it("should show the country of origin", async () => {
      expect(screen.getByTitle("origin")).toHaveTextContent(BEER.origin)
    })

    it("should show the alcohol by volume", async () => {
      expect(screen.getByTitle("abv")).toHaveTextContent(`${BEER.abv}%`)
    })
  })

  describe("given a non-alcoholic beer", async () => {
    const BEER = {
      id: "test-id",
      brand: "Unit Test Brewery",
      product: "Unit Test Sober",
      style: "fruit beer",
      abv: 0,
      origin: "Canada",
    }

    beforeEach(() => {
      render(<Beer beer={{ ...BEER }} id={BEER.id} />)
    })

    it("should show the beer style", async () => {
      expect(screen.getByTitle("style")).toHaveTextContent(BEER.style)
    })

    it("should show the alcohol by volume as non-alcoholic", async () => {
      expect(screen.getByTitle("abv")).toHaveTextContent("non-alcoholic")
    })
  })

  describe("given a beer with minimal details", async () => {
    const BEER = {
      id: "test-id",
      brand: "Unit Test Brewery",
      product: "Unit Test Sober",
    }

    beforeEach(() => {
      render(<Beer beer={{ ...BEER }} id={BEER.id} />)
    })

    it("should not show the beer style", async () => {
      expect(screen.queryByTitle("style")).not.toBeInTheDocument()
    })

    it("should not show the country of origin", async () => {
      expect(screen.queryByTitle("origin")).not.toBeInTheDocument()
    })

    it("should not show the alcohol by volume", async () => {
      expect(screen.queryByTitle("abv")).not.toBeInTheDocument()
    })
  })
})
