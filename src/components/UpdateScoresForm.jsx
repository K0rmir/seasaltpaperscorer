"use client";

import {useGameContext} from "@/context/GameContext";
import {useFormStatus} from "react-dom";

export default function UpdateScoresForm() {
  const {
    playerNames,
    playerNum,
    setPlayerRoundScores,
    setUpdateRoundScores,
    checkGameOver,
  } = useGameContext();

  //   array of each players round score that is populated from inputs in form upon submission //
  let playerRoundScoresArr = [];
  //  function to get player round scores from update scores form and save to playerRoundScoresArr //
  function getPlayerRoundScores(formData) {
    playerRoundScoresArr = [];
    for (let [key, value] of formData.entries()) {
      playerRoundScoresArr.push(parseInt(value));
    }
  }
  // function to update player scores and end of each round and reset update scores form //
  function handleUpdateRoundScores(formData) {
    getPlayerRoundScores(formData);
    setPlayerRoundScores(playerRoundScoresArr);
    setUpdateRoundScores(false);
    // checkGameOver();
  }

  return (
    <div className="flex flex-col border-white border-2 m-5 p-5 rounded-md items-center justify-items-center items-center">
      <form action={handleUpdateRoundScores}>
        <input
          className="formInput"
          type="number"
          name="roundScore"
          id="player1RoundScore"
          required
          placeholder={playerNames[0]}
        />
        <input
          className="formInput"
          type="number"
          name="roundScore"
          id="player2RoundScore"
          required
          placeholder={playerNames[1]}
        />
        {playerNum === 3 && (
          <input
            className="formInput"
            type="number"
            name="roundScore"
            id="player3RoundScore"
            required
            placeholder={playerNames[2]}
          />
        )}
        {playerNum === 4 && (
          <input
            className="formInput"
            type="number"
            name="roundScore"
            id="player3RoundScore"
            required
            placeholder={playerNames[2]}
          />
        )}
        {playerNum === 4 && (
          <input
            className="formInput"
            type="number"
            name="roundScore"
            id="player4RoundScore"
            required
            placeholder={playerNames[3]}
          />
        )}
        <button
          className="border-2 border-white p-1 rounded-md mt-2 self-center"
          type="submit"
          disabled={useFormStatus.pending}>
          {useFormStatus.pending ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
}
