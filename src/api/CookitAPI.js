const api = 'https://api-cookit.herokuapp.com';

let apiKey;

if (process.env.NODE_ENV !== 'production') {
  apiKey = process.env.REACT_APP_HEROKU_BEARER_TOKEN;
} else {
  apiKey = process.env.HEROKU_BEARER_TOKEN;
}

const headers = {
  Authorization: `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
};

export const getKits = () =>
  fetch(`${api}/kits`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getRestaurants = () =>
  fetch(`${api}/restaurants`, { headers })
    .then((res) => res.json())
    .then((data) => data);
