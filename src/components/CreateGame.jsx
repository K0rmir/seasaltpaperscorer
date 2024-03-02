"use client";

import {useState} from "react";
import {useFormStatus} from "react-dom";
import {useRouter} from "next/navigation";

export default function App() {
  const [playerNum, setPlayerNum] = useState(0); // playerNum state updates when user clicks 2 / 3 / 4 buttons to set how many players there are //
  const playerNames = []; // array of player names is populated from inputs in form upon submission //

  const router = useRouter();

  // function to get player names from form and save to playerNames array //
  function getPlayerNames(formData) {
    for (let [key, value] of formData.entries()) {
      playerNames.push(value);
    }
    console.log(playerNames);
  }

  // Function to handle starting a game and redirecting to the correct game size //
  function handleStartGame(formData) {
    getPlayerNames(formData);
    if (playerNum === 2) {
      router.push("sea");
    } else if (playerNum === 3) {
      router.push("/salt");
    } else if (playerNum === 4) {
      router.push("/paper");
    }
  }

  console.log(playerNum);

  return (
    <div>
      <div className="flex justify-center m-2 ">
        <button
          onClick={() => setPlayerNum(2)}
          className="w-24 h-10 bg-slate-300 border-2 border-black m-2 rounded-md focus:bg-red-300">
          2
        </button>
        <button
          onClick={() => setPlayerNum(3)}
          className="w-24 h-10 bg-slate-300 border-2 border-black m-2 rounded-md focus:bg-red-300">
          3
        </button>
        <button
          onClick={() => setPlayerNum(4)}
          className="w-24 h-10 bg-slate-300 border-2 border-black m-2 rounded-md focus:bg-red-300">
          4
        </button>
      </div>
      <form action={handleStartGame}>
        {playerNum === 2 && (
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              id="player1name"
              placeholder="Player 1 Name"
              required
            />
            <input
              type="text"
              name="name"
              id="player1name"
              placeholder="Player 2 Name"
              required
            />
          </div>
        )}
        {playerNum === 3 && (
          <div className="flex flex-col">
            <input
              type="text"
              id="player1name"
              name="name"
              placeholder="Player 1 Name"
              required
            />
            <input
              type="text"
              name="name"
              id="player2name"
              placeholder="Player 2 Name"
              required
            />
            <input
              type="text"
              name="name"
              id="player3name"
              placeholder="Player 3 Name"
              required
            />
          </div>
        )}
        {playerNum === 4 && (
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              id="player1name"
              placeholder="Player 1 Name"
              required
            />
            <input
              type="text"
              name="name"
              id="player2name"
              placeholder="Player 2 Name"
              required
            />
            <input
              type="text"
              name="name"
              id="player3name"
              placeholder="Player 3 Name"
              required
            />
            <input
              type="text"
              name="name"
              id="player4name"
              placeholder="Player 4 Name"
              required
            />
          </div>
        )}

        <button type="submit" disabled={useFormStatus.pending}>
          {useFormStatus.pending ? "Creating Game..." : "Create Game"}
        </button>
      </form>
    </div>
  );
}
