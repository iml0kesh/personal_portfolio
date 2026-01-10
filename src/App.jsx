import { useState } from "react";
import "./App.css";
import { Homepage } from "./components/Homepage";
import { Professional } from "./components/Professional";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage />
      <Professional />
    </>
  );
}

export default App;
