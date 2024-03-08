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
  // Array of player names //
  const [playerNames, setPlayerNames] = useState();
  // States for each players current score //
  const [playerOneTotalScore, setPlayerOneTotalScore] = useState(0);
  const [playerTwoTotalScore, setPlayerTwoTotalScore] = useState(0);
  const [playerThreeTotalScore, setPlayerThreeTotalScore] = useState(0);
  const [playerFourTotalScore, setPlayerFourTotalScore] = useState(0);
  // State to handle form appearing to update scores at end of each round //
  const [updateRoundScores, setUpdateRoundScores] = useState(false);

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

  // let playerOneRoundScore = 0;
  // let playerTwoRoundScore = 0;
  // let playerThreeRoundScore = 0;
  // let playerFourRoundScore = 0;

  function setPlayerRoundScores(playerRoundScoresArr) {
    console.log("Test hello");
    setPlayerOneTotalScore(playerOneTotalScore + playerRoundScoresArr[0]);
    setPlayerTwoTotalScore(playerTwoTotalScore + playerRoundScoresArr[1]);
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
        setPlayerOneTotalScore,
        setPlayerTwoTotalScore,
        setPlayerThreeTotalScore,
        setPlayerFourTotalScore,
        playerOneTotalScore,
        playerTwoTotalScore,
        playerThreeTotalScore,
        playerFourTotalScore,
        setUpdateRoundScores,
        updateRoundScores,
        setPlayerRoundScores,
      }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
