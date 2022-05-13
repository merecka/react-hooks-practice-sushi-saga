import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";
import SushiContainer from "./SushiContainer";
import Table from "./Table";



function App() {
  const [sushis, setSushis] = useState([]);
  const [balance, setBalance] = useState(30);
  const [plates, setPlates] = useState([]);
  const API = "http://localhost:3001/sushis";


  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((sushis) => setSushis(sushis));
  }, []);

  function updateBalance(amount) {
    setBalance(balance - amount);
    setPlates([...plates, 1]);
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} updateBalance={updateBalance} balance={balance} />
      <Table balance={balance} plates={plates} />
    </div>
  );
}

export default App;
