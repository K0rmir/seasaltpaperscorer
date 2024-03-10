"use client";

import CreateGame from "@/components/CreateGame.jsx";
import TwoPlayer from "@/components/TwoPlayer.jsx";
import ThreePlayer from "@/components/ThreePlayer.jsx";
import FourPlayer from "@/components/FourPlayer.jsx";
import {useGameContext} from "@/context/GameContext";
import {useEffect} from "react";

export default function App() {
  const {gameCreated, playerNum} = useGameContext();

  // function to set background colour to one of 10 from SSP card colours at random //
  function SetBackgroundColour() {
    useEffect(() => {
      const bgColours = [
        "#255C9B",
        "#43B4C8",
        "#EEB609",
        "#8FC782",
        "#BFBDD1",
        "#A895C9",
        "#888C8D",
        "#EFB076",
        "#E98FA9",
        "#E27C3C",
      ];
      let randomColour =
        bgColours[Math.floor(Math.random() * bgColours.length)];
      document.body.style.background = randomColour;
    }, []);
  }

  SetBackgroundColour();

  return (
    <div>
      {!gameCreated && <CreateGame></CreateGame>}
      {gameCreated && playerNum === 2 && <TwoPlayer></TwoPlayer>}
      {gameCreated && playerNum === 3 && <ThreePlayer></ThreePlayer>}
      {gameCreated && playerNum === 4 && <FourPlayer></FourPlayer>}
    </div>
  );
}
