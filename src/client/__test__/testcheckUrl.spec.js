import 'babel-polyfill'
import { checkUrl } from '../js/checkURL'

describe("Testing function checkURL", () => {
  test("Making sure it is defined", () => {
    expect(checkUrl).toBeDefined()
  })

  test("Testing a valid url", () => {
    expect(checkUrl("https://github.com/Ahmed-Taksira/")).toBeTruthy()
  })

  test("Testing an invalid url should return false", () => {
    expect(checkUrl("wrong URL")).toBeFalsy()
  })
})