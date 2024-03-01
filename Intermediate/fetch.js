const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(err);
  });
