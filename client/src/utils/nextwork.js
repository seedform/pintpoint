export async function fakeNetworkDelay() {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800)
  })
}
