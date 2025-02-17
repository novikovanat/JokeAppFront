import axios from "axios";

axios.defaults.baseURL = "https://jokeappback.onrender.com/api/joke/";

export default async function fetchAJoke() {
  const result = await axios.get();
  return result.data.data;
}
