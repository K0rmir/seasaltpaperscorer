"use client";
import {useRouter} from "next/navigation";

export default function TwoPlayerGame({props}) {
  console.log(props);
  const router = useRouter();
  // const {data} = router.query;
  // const playerNames = JSON.parse(data);

  const playerNames = JSON.parse(props.router.query.data);

  console.log(playerNames);
  return (
    <>
      <p>This is a two player game!</p>

      {/* <p>{playerNames[0]}</p>
      <p>{playerNames[1]}</p> */}
    </>
  );
}
