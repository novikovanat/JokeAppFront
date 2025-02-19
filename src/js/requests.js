import axios from "axios";

axios.defaults.baseURL = "https://jokeappback.onrender.com/api/joke/";

export const getAJoke = async () => {
  const result = await axios.get();
  return result.data.data;
};

export const postAJoke = async (id, vote) => {
  const result = await axios.post(`${id}`, vote);

  return result.data.data;
};
