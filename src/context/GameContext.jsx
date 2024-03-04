"use client";

import {createContext, useContext, useState} from "react";

const GameContext = createContext();

export default function GameProvider({children}) {
  const [playerNum, setPlayerNum] = useState(0); // playerNum state updates when user clicks 2 / 3 / 4 buttons to set how many players there are //

  function twoPlayerGame() {
    setPlayerNum(2);
  }
  function threePlayerGame() {
    setPlayerNum(3);
  }
  function fourPlayerGame() {
    setPlayerNum(4);
  }

  return (
    <GameContext.Provider
      value={{playerNum, twoPlayerGame, threePlayerGame, fourPlayerGame}}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
