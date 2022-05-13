import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";
import SushiContainer from "./SushiContainer";
import Table from "./Table";



function App() {
  const [sushis, setSushis] = useState([]);
  const API = "http://localhost:3001/sushis";


  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((sushis) => setSushis(sushis));
  }, []);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} />
      <Table />
    </div>
  );
}

export default App;
