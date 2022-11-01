import '../App.css';
import { useState } from "react";
import Pixel from './Pixel';

export default function App() {
  
  const [btnColor, setBtnColor] = useState("white");
  let grid = [];

  for (let i = 0; i < 900; i++) {
    grid.push(<Pixel/>)
  }

  return (
    <>
      <div className="centered">
        <h1>Pixel Artist</h1>
        <p>Click pixels to cycle through colours</p>
      </div>
      <div className="pixel-area">
        {grid}
      </div>
    </>
  );
}
