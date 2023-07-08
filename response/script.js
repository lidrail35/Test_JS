const url = 'http://127.0.0.1:3000/garage';

function getResponse(url) {
  return fetch(url).then(response => {
    return response.json()
  })
}

getResponse(url).then(resp => console.log(resp));
