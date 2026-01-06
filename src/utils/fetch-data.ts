async function fetchData(url: string, data?: {[x: string]: string | number | boolean} | undefined) {
  let _url
  const h = new Headers()
  if (data) {
    const params =
      typeof data === 'string'
        ? data
        : Object.keys(data)
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
            .join('&')
    _url = `${url}?${params}`
  } else {
    _url = `${url}`
  }

  const response = await fetch(
    new Request(_url, {
      method: 'GET',
      headers: h,
    })
  )

  // the server responds with confirmation and the image size
  const result = await response.json()
  return result
}

export async function fetchContent(url: string, data?: {[x: string]: string | number | boolean} | undefined) {
  let _url
  if (data) {
    const params =
      typeof data === 'string'
        ? data
        : Object.keys(data)
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
            .join('&')
    _url = `${url}?${params}`
  } else {
    _url = `${url}`
  }

  const h = new Headers()
  h.append('Accept', 'text/html')

  const response = await fetch(
    new Request(_url, {
      method: 'GET',
      headers: h,
    })
  )

  const result = await response.text()
  return result
}

export default fetchData
