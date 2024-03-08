"use client";

import {useGameContext} from "@/context/GameContext";
import UpdateScoresForm from "@/components/UpdateScoresForm.jsx";

export default function ThreePlayerGame() {
  const {
    playerNames,
    gameScore,
    playerOneTotalScore,
    playerTwoTotalScore,
    playerThreeTotalScore,
    setUpdateRoundScores,
    updateRoundScores,
  } = useGameContext();
  return (
    <>
      <p>
        This is a three player game! Total points needed to win: {gameScore}
      </p>

      <p>
        {playerNames[0]} {playerOneTotalScore}
      </p>
      <p>
        {playerNames[1]} {playerTwoTotalScore}
      </p>
      <p>
        {playerNames[2]} {playerThreeTotalScore}
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
