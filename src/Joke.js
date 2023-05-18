import React, { useState } from "react";
import "./Joke.css";

const Joke = ({ id, vote, votes, text }) => {
  const [localVote, setLocalVote] = useState(0);

  const likeVote = () => setLocalVote(localVote + 1);
  const dislikeVote = () => setLocalVote(localVote - 1);


  return (
    <div className="Joke">
      <div></div>
      <div className="Joke-votearea">
        <button onClick={likeVote}>
          <i className="fas fa-thumbs-up" />
        </button>
        <button onClick={dislikeVote}>
          <i className="fas fa-thumbs-down" />
        </button>
        <span>{votes + localVote}</span>
      </div>
      <div className="Joke-text">{text}</div>
    </div>
  );
};


export default Joke;
