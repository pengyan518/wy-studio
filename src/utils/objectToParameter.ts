const objectToParams = data =>
  typeof data === 'string'
    ? data
    : Object.keys(data)
        .map(k => {
          return `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`
        })
        .join('&')

export default objectToParams
