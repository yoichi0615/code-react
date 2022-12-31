import React, { useEffect, useState } from "react";
import { Reducer } from "./components/hooks/useReducer/Reducer"
import { Parent } from "./components/hooks/useContext/Parent"
import { UseEffect } from "./components/hooks/useEffect/UseEffect";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false)

  const onClickCountUp = () => {
    setNum(num + 1)
  }

  const switchFaceShowFlg = () => {
    setFaceShowFlag(!faceShowFlag)
    console.log(faceShowFlag)
  }

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true)
      } else {
        faceShowFlag && setFaceShowFlag(false)
      }
    }
  }, [num])

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMessage color="blue">
        お元気ですか？？
      </ColorfulMessage>
      <ColorfulMessage color="pink" message="元気です！" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={switchFaceShowFlg}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>🙄</p>}
      <div>--------------<b>Reducer</b>-------------</div>
      <Reducer />
      <div>--------------<b>Context</b>-------------</div>
      <Parent />
      <UseEffect />
    </>
  );
}

export default App;