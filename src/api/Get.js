import axios from "axios";

const movies = (type) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${type}?api_key=7b432620cc189c7f826d489c81d47265`
  );
};

export default { movies };
