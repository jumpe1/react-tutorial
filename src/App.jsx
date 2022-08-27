import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("first");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);
  // []の場合は初回だけ行いたい

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか?" />
      {/* <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage> */}
      <ColorfulMessage color="red" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>😁</p>}
    </>
  );
};

export default App;
