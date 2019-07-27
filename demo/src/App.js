import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Result from "./components/Result";
import Keyboard from "./components/Keyboard";

const cleanInput = v =>
  v.replace(/([^0-9.]+)/g, "").replace(/\..*/, c => "." + c.replace(/\./g, ""));

function App() {
  const [value, setValue] = useState("");

  const setCleanValue = v => setValue(cleanInput(v));

  return (
    <div className="App">
      <div className="App-form">
        <Input value={value} onChange={e => setCleanValue(e.target.value)} />
        <Result value={value} />
        <Keyboard
          onDigitPress={d => setCleanValue(d === "CL" ? "" : value + d)}
        />
      </div>
    </div>
  );
}

export default App;
