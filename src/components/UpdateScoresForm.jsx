"use client";

import {useGameContext} from "@/context/GameContext";

export default function UpdateScoresForm() {
  const {playerNames, playerNum, setPlayerRoundScores} = useGameContext();

  //   array of each player round score is populated from inputs in form upon submission //
  let playerRoundScoresArr = [];
  //  function to get player round scores from update scores form and save to playerRoundScoresArr //
  function getPlayerRoundScores(formData) {
    playerRoundScoresArr = [];
    for (let [key, value] of formData.entries()) {
      playerRoundScoresArr.push(parseInt(value));
    }
  }

  function handleUpdateRoundScores(formData) {
    getPlayerRoundScores(formData);
    setPlayerRoundScores(playerRoundScoresArr);
  }

  return (
    <>
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
          className="border-2 border-white p-1 rounded-md mt-2 "
          type="submit">
          Update
        </button>
      </form>
    </>
  );
}
