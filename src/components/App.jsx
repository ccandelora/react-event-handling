import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [bgColor, setBgColor] = useState("white");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function mouseOver() {
    setBgColor("black");
  }

  function mouseOut() {
    setBgColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: `${bgColor}` }}
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
