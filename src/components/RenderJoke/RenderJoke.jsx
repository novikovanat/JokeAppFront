const RenderJoke = ({
  joke: { question, answer, availableVotes },
  isVoted,
  onVote,
}) => {
  const submitHandler = (event) => {
    console.log(event.target.value);
    onVote(event.target.value);
    console.log(event.currentTarget);
    event.currentTarget.reset();
  };

  const emodjiList = availableVotes.map((emodj, index) => {
    return (
      <label key={index}>
        <input
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
        <p>{question}</p>
        <p>{answer}</p>
      </div>
      <form onChange={submitHandler}>
        <fieldset>{emodjiList}</fieldset>
      </form>
    </div>
  );
};

export default RenderJoke;
