"use client";

import {createContext, useContext, useState, useEffect} from "react";

const GameContext = createContext();

export default function GameProvider({children}) {
  // playerNum state updates when user clicks 2 / 3 / 4 buttons to set how many players there are in the CreateGame component. //
  const [playerNum, setPlayerNum] = useState(0);
  // This state games total score needed in a game to win depending on player size //
  const [gameScore, setGameScore] = useState(0);
  // This state controls whether or not the Create Game button has been clicked //
  const [gameCreated, setGameCreated] = useState(false);
  // State to control whether or not the end game component is triggered. //
  const [gameOver, setGameOver] = useState(false);
  // Array of player names //
  const [playerNames, setPlayerNames] = useState();
  // States for each players current score //
  const [playerOneTotalScore, setPlayerOneTotalScore] = useState(0);
  const [playerTwoTotalScore, setPlayerTwoTotalScore] = useState(0);
  const [playerThreeTotalScore, setPlayerThreeTotalScore] = useState(0);
  const [playerFourTotalScore, setPlayerFourTotalScore] = useState(0);
  // array of players total scores //
  let playerTotalScoresArr = [
    playerOneTotalScore,
    playerTwoTotalScore,
    playerThreeTotalScore,
    playerFourTotalScore,
  ];
  // State to handle form appearing to update scores at end of each round //
  const [updateRoundScores, setUpdateRoundScores] = useState(false);
  // Functions to player size and update, create game form & total game score respectively //
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
  // Function to update player scores at the end of each round //
  function setPlayerRoundScores(playerRoundScoresArr) {
    setPlayerOneTotalScore(playerOneTotalScore + playerRoundScoresArr[0]);
    setPlayerTwoTotalScore(playerTwoTotalScore + playerRoundScoresArr[1]);
    if (playerNum === 3) {
      setPlayerThreeTotalScore(playerThreeTotalScore + playerRoundScoresArr[2]);
    }
    if (playerNum === 4) {
      setPlayerThreeTotalScore(playerThreeTotalScore + playerRoundScoresArr[2]);
      setPlayerFourTotalScore(playerFourTotalScore + playerRoundScoresArr[3]);
    }
    console.log("1 - ", playerTotalScoresArr);
  }

  useEffect(() => {
    const hasWinner = playerTotalScoresArr.some((score) => score >= gameScore);
    setGameOver(hasWinner);
  }, [playerTotalScoresArr, gameScore]);

  // useEffect(() => {
  //   for (let i = 0; i < playerTotalScoresArr.length; i++) {
  //     if (playerTotalScoresArr[i] >= gameScore) {
  //       setGameOver(true);
  //     }
  //   }
  // }, [updateRoundScores, gameScore]);

  console.log("3 - ", playerTotalScoresArr);
  console.log("4 - ", gameOver);

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
        // checkGameOver,
        gameOver,
      }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
