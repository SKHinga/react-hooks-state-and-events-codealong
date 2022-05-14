import React, { useState } from "react";

function Toggle() {
  const[turn, setTurn] = useState(false)

  function handleTurn(){
    setTurn(turn=>!turn)
  }

  const color = turn ? "red" : "white"

  return <button style={{background:color}} onClick={handleTurn}>{turn ? "On" : "Off"}</button>;
}

export default Toggle;
