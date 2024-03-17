"use client";

import {useGameContext} from "@/context/GameContext";

export default function GameOver() {
  const {winningPlayerName} = useGameContext();

  return (
    <div>
      <p>GAME OVER</p>
      <p>{winningPlayerName} is the Winner! </p>
    </div>
  );
}
