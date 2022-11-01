import '../App.css';
import { useState } from "react";

export default function Pixel() {
  
  const [btnColor, setBtnColor] = useState("white");
  
  return (
    <button onClick={() => {
      //btnColor == "white" ? setBtnColor("black") : setBtnColor("white")
      if (btnColor === "white") {
        setBtnColor("black");
      } else if (btnColor === "black") {
        setBtnColor("red");
      } else if (btnColor === "red") {
        setBtnColor("orange");
      } else if (btnColor === "orange") {
        setBtnColor("yellow");
      } else if (btnColor === "yellow") {
        setBtnColor("green");
      } else if (btnColor === "green") {
        setBtnColor("blue");
      } else if (btnColor === "blue") {
        setBtnColor("purple");
      } else if (btnColor === "purple") {
        setBtnColor("pink");
      } else if (btnColor === "pink") {
        setBtnColor("gray");
      } else if (btnColor === "gray") {
        setBtnColor("white");
      }
    }} style={{ backgroundColor: btnColor }}></button>
  );

}