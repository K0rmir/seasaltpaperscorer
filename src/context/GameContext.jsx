"use client";

import {createContext, useContext, useState} from "react";

const GameContext = createContext();

export default function GameProvider({children}) {
  // playerNum state updates when user clicks 2 / 3 / 4 buttons to set how many players there are in the CreateGame component. //
  const [playerNum, setPlayerNum] = useState(0);
  // This state games total score needed in a game to win depending on player size //
  const [gameScore, setGameScore] = useState(0);
  // This state controls whether or not the Create Game button has been clicked //
  const [gameCreated, setGameCreated] = useState(false);

  const [playerNames, setPlayerNames] = useState();

  function twoPlayerGame() {
    setPlayerNum(2);
    setGameScore(40);
  }
  function threePlayerGame() {
    setPlayerNum(3);
    setGameScore(35);
  }
  function fourPlayerGame() {
    setPlayerNum(4);
    setGameScore(30);
  }

  return (
    <GameContext.Provider
      value={{
        playerNum,
        twoPlayerGame,
        threePlayerGame,
        fourPlayerGame,
        gameScore,
        setGameCreated,
        gameCreated,
        setPlayerNames,
        playerNames,
      }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
