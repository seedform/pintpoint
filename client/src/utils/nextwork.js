export async function fakeNetworkDelay(delay) {
  return new Promise((res) => {
    delay = delay ? delay : Math.random() * 1000
    setTimeout(res, delay)
  })
}
