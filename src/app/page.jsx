"use client";

import {useState} from "react";
import {useFormStatus} from "react-dom";

export default function App() {
  const [playerNum, setPlayerNum] = useState(0);

  //   console.log(playerNum);

  function handleStartGame() {
    console.log("Create game button clicked!");
  }

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
              name="player1"
              id="player1"
              placeholder="Player 1 Name"
            />
            <input
              type="text"
              name="player2"
              id="player2"
              placeholder="Player 2 Name"
            />
          </div>
        )}
        {playerNum === 3 && (
          <div className="flex flex-col">
            <input
              type="text"
              name="player1"
              id="player1"
              placeholder="Player 1 Name"
            />
            <input
              type="text"
              name="player2"
              id="player2"
              placeholder="Player 2 Name"
            />
            <input
              type="text"
              name="player3"
              id="player3"
              placeholder="Player 3 Name"
            />
          </div>
        )}
        {playerNum === 4 && (
          <div className="flex flex-col">
            <input
              type="text"
              name="player1"
              id="player1"
              placeholder="Player 1 Name"
            />
            <input
              type="text"
              name="player2"
              id="player2"
              placeholder="Player 2 Name"
            />
            <input
              type="text"
              name="player3"
              id="player3"
              placeholder="Player 3 Name"
            />
            <input
              type="text"
              name="player4"
              id="player4"
              placeholder="Player 4 Name"
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
