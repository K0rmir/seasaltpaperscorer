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
    <div className="flex flex-col content-center justifiy-center">
      <p>Total points needed to win: {gameScore}</p>

      <p>
        {playerNames[0]} {playerOneTotalScore}
      </p>
      <p>
        {playerNames[1]} {playerTwoTotalScore}
      </p>
      <button
        className="border-2 border-white p-1 rounded-md mt-2 w-32"
        onClick={() => {
          setUpdateRoundScores(true);
        }}>
        Update Scores
      </button>
      {updateRoundScores && <UpdateScoresForm />}
    </div>
  );
}
