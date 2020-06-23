const api = "https://api-cookit.herokuapp.com";

const token = 'INSERT_TOKEN';
const headers = {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json', 
};

export const getKits = () =>
  fetch(`${api}/kits`, { headers })
    .then(res => res.json())
    .then(data => data)

    export const getRestaurants = () =>
  fetch(`${api}/restaurants`, { headers })
    .then(res => res.json())
    .then(data => data)
