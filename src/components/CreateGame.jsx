"use client";

import {useFormStatus} from "react-dom";

import "@/app/styles/creategame.css";
import {useGameContext} from "@/context/GameContext";

export default function CreateGame() {
  const {
    playerNum,
    twoPlayerGame,
    threePlayerGame,
    fourPlayerGame,
    setGameCreated,
    gameCreated,
    setPlayerNames,
  } = useGameContext();

  // array of player names is populated from inputs in form upon submission //
  const playerNamesArr = [];

  // function to get player names from form and save to playerNames array //
  function getPlayerNames(formData) {
    for (let [key, value] of formData.entries()) {
      playerNamesArr.push(value);
    }
    // console.log(playerNames);
  }

  // Function to handle starting a game //
  function handleStartGame(formData) {
    getPlayerNames(formData);
    setGameCreated(true);
    setPlayerNames(playerNamesArr);
  }

  return (
    <div>
      <div className="flex justify-center m-2 ">
        <button
          onClick={twoPlayerGame}
          className="w-24 h-10 bg-transparent border-2 border-white m-2 rounded-md focus:bg-red-300 focus:border-black">
          2
        </button>
        <button
          onClick={threePlayerGame}
          className="w-24 h-10 bg-transparent border-2 border-white m-2 rounded-md focus:bg-red-300 focus:border-black">
          3
        </button>
        <button
          onClick={fourPlayerGame}
          className="w-24 h-10 bg-transparent border-2 border-white m-2 rounded-md focus:bg-red-300 focus:border-black">
          4
        </button>
      </div>
      <form className="flex items-center flex-col" action={handleStartGame}>
        {playerNum === 2 && (
          <div className="flex flex-col items-center">
            <input
              className="formInput"
              type="text"
              name="name"
              id="player1name"
              placeholder="Player 1 Name"
              required
            />
            <input
              className="formInput"
              type="text"
              name="name"
              id="player2name"
              placeholder="Player 2 Name"
              required
            />
          </div>
        )}
        {playerNum === 3 && (
          <div className="flex flex-col items-center">
            <input
              className="formInput"
              type="text"
              id="player1name"
              name="name"
              placeholder="Player 1 Name"
              required
            />
            <input
              className="formInput"
              type="text"
              name="name"
              id="player2name"
              placeholder="Player 2 Name"
              required
            />
            <input
              className="formInput"
              type="text"
              name="name"
              id="player3name"
              placeholder="Player 3 Name"
              required
            />
          </div>
        )}
        {playerNum === 4 && (
          <div className="flex flex-col items-center">
            <input
              className="formInput"
              type="text"
              name="name"
              id="player1name"
              placeholder="Player 1 Name"
              required
            />
            <input
              className="formInput"
              type="text"
              name="name"
              id="player2name"
              placeholder="Player 2 Name"
              required
            />
            <input
              className="formInput"
              type="text"
              name="name"
              id="player3name"
              placeholder="Player 3 Name"
              required
            />
            <input
              className="formInput"
              type="text"
              name="name"
              id="player4name"
              placeholder="Player 4 Name"
              required
            />
          </div>
        )}

        <button
          className="border-2 border-white p-1 rounded-md mt-2 "
          type="submit"
          disabled={useFormStatus.pending}>
          {useFormStatus.pending ? "Creating Game..." : "Create Game"}
        </button>
      </form>
    </div>
  );
}
