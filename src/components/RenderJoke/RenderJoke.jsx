const RenderJoke = ({
  joke: { question, answer, votes, availableVotes, _id },
}) => {
  console.log("joke", question, answer, votes, availableVotes, _id);
  return (
    <div>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
};

export default RenderJoke;
