const testApi = async () => {
  const options = {
    method: 'GET',
  }
  const url = 'https://newsapi.org/v2/top-headlines?'
  + 'q=Russia&'
  + 'from=2022-03-02&'
  + 'sortBy=popularity&'
  + 'apiKey=f1a22ede52574494bd6efba4dc31cd2e'
  const response = await fetch(url, options)
  console.log('GET request sent')
  const json = await response.text()
  console.log('data retrieved')
  const obj = await JSON.parse(json)
  console.log('json parsed')
  return obj
}
export default testApi
