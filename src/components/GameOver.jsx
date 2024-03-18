"use client";

import {useGameContext} from "@/context/GameContext";
import Confetti from "react-confetti";

export default function GameOver() {
  const {winningPlayerName} = useGameContext();

  return (
    <div>
      <Confetti run></Confetti>
      <p>GAME OVER</p>
      <p>{winningPlayerName} is the Winner! </p>
    </div>
  );
}
