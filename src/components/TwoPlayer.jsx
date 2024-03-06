"use client";

import {useGameContext} from "@/context/GameContext";

export default function TwoPlayerGame() {
  const {playerNames, gameScore} = useGameContext();

  console.log(playerNames);

  return (
    <>
      <p>This is a two player game!</p>

      <p>{playerNames[0]}</p>
      <p>{playerNames[1]}</p>
    </>
  );
}
