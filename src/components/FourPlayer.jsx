"use client";

import {useGameContext} from "@/context/GameContext";

export default function FourPlayerGame() {
  const {
    playerNames,
    gameScore,
    playerOneScore,
    playerTwoScore,
    playerThreeScore,
    playerFourScore,
  } = useGameContext();
  return (
    <>
      <p>This is a four player game!</p>

      <p>{playerNames[0]}</p>
      <p>{playerNames[1]}</p>
      <p>{playerNames[2]}</p>
      <p>{playerNames[3]}</p>
    </>
  );
}
