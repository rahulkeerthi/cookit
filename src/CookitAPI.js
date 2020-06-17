const api = "https://api-cookit.herokuapp.com";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1fQ.Zqphmh3IaPRjT13RMMpeyN4tBVssqtTKmCFs28yC_Ls';
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