import { useEffect, useState } from "react";
import "./App.css";
import { getAJoke, postAJoke } from "../../js/requests";
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
      fetchAJoke();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (!vote) {
      return;
    }
    try {
      voteForAJoke(joke._id, vote);
    } catch (err) {
      console.log(err);
    }
  }, [vote, joke._id]);

  async function fetchAJoke() {
    const response = await getAJoke();
    setJoke(response);
    setVote("");
  }

  async function voteForAJoke(id, emodj) {
    const response = await postAJoke(id, emodj);
    setJoke(response);
  }

  return (
    <>
      <h1>Why so serious?</h1>
      {joke.question && (
        <RenderJoke joke={joke} isVoted={vote} onVote={setVote} />
      )}
      <Button onNext={fetchAJoke} />
    </>
  );
}

export default App;
