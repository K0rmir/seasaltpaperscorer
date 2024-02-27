"use client";

import {useState} from "react";

export default function App() {
  const [playerNum, setPlayerNum] = useState(2);

  //   console.log(playerNum);

  function handleStartGame() {
    console.log(
      "If you see this, it means the start game function works on create game button click!"
    );
  }

  return (
    <div>
      <button onClick={() => setPlayerNum(2)}>2</button>
      <button onClick={() => setPlayerNum(3)}>3</button>
      <button onClick={() => setPlayerNum(4)}>4</button>
      <form action={handleStartGame}>
        {playerNum === 2 && (
          <div>
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
          <div>
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
          <div>
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

        <button type="submit">Create Game</button>
      </form>
    </div>
  );
}
