import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Result from "./components/Result";
import Keyboard from "./components/Keyboard";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <div className="App-form">
        <Input value={value} onChange={e => setValue(e.target.value)} />
        <Result value={value} />
        <Keyboard onDigitPress={d => setValue(d === "CL" ? "" : value + d)} />
      </div>
    </div>
  );
}

export default App;
