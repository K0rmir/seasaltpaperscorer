"use client";

import CreateGame from "@/components/CreateGame.jsx";
import {useEffect} from "react";

export default function App() {
  // function to set background colour to one of 10 from SSP card colours at random //
  function setBackgroundColour() {
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

  setBackgroundColour();

  return (
    <div>
      <CreateGame></CreateGame>
    </div>
  );
}
