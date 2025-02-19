import { useEffect, useState } from "react";
import "./App.css";
import fetchAJoke from "../../js/fetchAJoke";
import RenderJoke from "../RenderJoke/RenderJoke";
import Button from "../Button/Button";

function App() {
  const [joke, setJoke] = useState({
    question: null,
    answer: null,
    votes: [],
    availableVotes: [],
    _id: null,
  });

  const [vote, setVote] = useState("");

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
    setVote("");
  }

  return (
    <>
      <h1>Why so serious?</h1>
      {joke.question && (
        <RenderJoke joke={joke} isVoted={vote} onVote={setVote} />
      )}
      <Button onNext={getAJoke} />
    </>
  );
}

export default App;
