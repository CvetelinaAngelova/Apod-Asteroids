import axios from "axios";

const api_key = process.env.API_KEY;
console.log(api_key, "test");
//The Idea is to have Unic APIcalls file
// TODO: api testes

export const fetchAPOD = async (date) => {
  return axios
    .request({
      method: "get",
      url: `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api_key}`,
    })
    .then((response) => response.data);
};

export const fetchAsteroids = async (date) => {
  return axios
    .request({
      method: "get",
      url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=${api_key}&detailed=true`,
    })
    .then((asteroidData) => response.data);
};
