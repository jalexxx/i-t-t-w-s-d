import React from "react";
import { Link } from "react-router-dom";

const QuizLanding = () => {
  return (
    <>
      <Link to="/quiz/create">Create a Game</Link>
      <Link to="/quiz/join">Join a Game</Link>
    </>
  );
};

export default QuizLanding;
