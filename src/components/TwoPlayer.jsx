"use client";

import {useGameContext} from "@/context/GameContext";

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

  console.log(playerNames);

  return (
    <>
      <p>This is a two player game! Total points needed to win: {gameScore}</p>

      <p>
        {playerNames[0]} {playerOneTotalScore}
      </p>
      <p>
        {playerNames[1]} {playerTwoTotalScore}
      </p>
      <button onClick={setUpdateRoundScores(true)}>Update Scores</button>
      {updateRoundScores === true && <p>THIS IS THE UPDATE SCORES FORM</p>}
    </>
  );
}
