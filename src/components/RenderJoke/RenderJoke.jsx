import css from './RenderJoke.module.css'
const RenderJoke = ({
  joke: { question, answer, availableVotes },
  isVoted,
  onVote,
}) => {
  const submitHandler = (event) => {
    onVote(event.target.value);
    event.currentTarget.reset();
  };

  const emodjiList = availableVotes.map((emodj, index) => {
    return (
      <label key={index} className={css.smile}>
        <input className={css.none}
          type="radio"
          name="emodj"
          value={emodj}
          disabled={isVoted}
        ></input>
        {emodj}
      </label>
    );
  });
  return (
    <div>
      <div>
        <p className={css.jokeQuestion}>{question}</p>
        <p className={css.jokeAnswer}>{answer}</p>
      </div>
      <form onChange={submitHandler}>
        <fieldset className={css.votes}>{emodjiList}</fieldset>
      </form>
    </div>
  );
};

export default RenderJoke;
