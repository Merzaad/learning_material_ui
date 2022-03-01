const testApi = async () => {
  const headers = new Headers()
  headers.append('X-API-KEY', 'J9XcpgpfUZ6uP4BLRQr59boWnTnqPTtaD0j8fE39')
  const options = {
    method: 'GET',
    headers,
  }
  const response = await fetch('https://yfapi.net/v7/finance/options/AAPL', options)
  console.log('GET request sent')
  const json = await response.text()
  console.log('data retrieved')
  const obj = await JSON.parse(json)
  console.log('json parsed')
  console.log('optionChianPassed in testApi () => Promise<any> ')
  return obj.optionChain
}
export default testApi
