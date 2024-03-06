"use client";

import {useGameContext} from "@/context/GameContext";

export default function ThreePlayerGame() {
  const {
    playerNames,
    gameScore,
    playerOneScore,
    playerTwoScore,
    playerThreeScore,
  } = useGameContext();
  return (
    <>
      <p>This is a three player game!</p>

      <p>{playerNames[0]}</p>
      <p>{playerNames[1]}</p>
      <p>{playerNames[2]}</p>
    </>
  );
}
