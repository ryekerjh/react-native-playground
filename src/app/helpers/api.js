const headers = {
  'Content-Type': 'application/json',
  'Accept':  'application/json'
}

export const apiCall = (method, url, data, optHeaders) => {
  fetch(url, {
    method: method,
    headers: optHeaders ? optHeaders : headers,
    body: data
  })
  .then(res => res.json())
  .then(todo => (todo))
}
