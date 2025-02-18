import { useEffect, useState } from "react";
import "./App.css";
import fetchAJoke from "../../js/fetchAJoke";
import RenderJoke from "../RenderJoke/RenderJoke";

function App() {
  const [joke, setJoke] = useState({
    question: null,
    answer: null,
    votes: [],
    availableVotes: [],
    _id: null,
  });

  useEffect(() => {
    try {
      getAJoke();
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function getAJoke() {
    const response = await fetchAJoke();
    setJoke(response);
  }
  return (
    <>
      <h1>Why so serious?</h1>
      {joke.question && <RenderJoke joke={joke} />}
      <button onClick={() => getAJoke()}>Next</button>
    </>
  );
}

export default App;
