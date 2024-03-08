"use client";

import {useGameContext} from "@/context/GameContext";
import UpdateScoresForm from "@/components/UpdateScoresForm.jsx";

export default function TwoPlayerGame() {
  const {
    playerNames,
    gameScore,
    playerOneTotalScore,
    playerTwoTotalScore,
    setPlayerOneScore,
    setPlayerTwoScore,
    playerOneRoundScore,
    playerTwoRoundScore,
    setUpdateRoundScores,
    updateRoundScores,
  } = useGameContext();

  console.log(updateRoundScores);

  return (
    <>
      <p>This is a two player game! Total points needed to win: {gameScore}</p>

      <p>
        {playerNames[0]} {playerOneTotalScore}
      </p>
      <p>
        {playerNames[1]} {playerTwoTotalScore}
      </p>
      <button
        onClick={() => {
          setUpdateRoundScores(true);
        }}>
        Update Scores
      </button>
      {updateRoundScores && <UpdateScoresForm />}
    </>
  );
}
