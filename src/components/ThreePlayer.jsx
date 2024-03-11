"use client";

import {useGameContext} from "@/context/GameContext";
import UpdateScoresForm from "@/components/UpdateScoresForm.jsx";
import GameOver from "@/components/GameOver.jsx";

export default function ThreePlayerGame() {
  const {
    playerNames,
    gameScore,
    playerOneTotalScore,
    playerTwoTotalScore,
    playerThreeTotalScore,
    setUpdateRoundScores,
    updateRoundScores,
    gameOver,
  } = useGameContext();
  return (
    <div className="flex flex-col content-center items-center">
      <p className="m-5">Total points needed to win: {gameScore}</p>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 justify-items-center border-white border-2 p-3 rounded-md m-5">
        <div>{playerNames[0]}</div>
        <div>{playerOneTotalScore}</div>
        <div>{playerNames[1]}</div>
        <div>{playerTwoTotalScore}</div>
        <div>{playerNames[2]}</div>
        <div>{playerThreeTotalScore}</div>
      </div>

      <button
        className="border-2 border-white p-1 rounded-md mt-5 w-32 m-5"
        onClick={() => {
          setUpdateRoundScores(true);
        }}>
        Update Scores
      </button>
      {updateRoundScores && <UpdateScoresForm />}
      {gameOver && <GameOver />}
    </div>
  );
}
