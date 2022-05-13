import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis}) {
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(3);

  console.log(sushis.length);

  function showMoreSushi() {
    if (secondIndex+4 <= sushis.length-1) {
      setFirstIndex(firstIndex+4);
      console.log(firstIndex);
      setSecondIndex(secondIndex+4);
      console.log(secondIndex);
    } else {
      setFirstIndex(sushis.length-4);
      console.log(firstIndex);
      setSecondIndex(sushis.length-1);
      console.log(secondIndex);
    }
  }

  return (
    <div className="belt">
        {
        sushis.filter((element, index) => index >=firstIndex && index <= secondIndex).map((sushi) => {
          console.log(sushi);
            return <Sushi key={sushi.id} sushi={sushi} />
        })}
      <MoreButton showMoreSushi={showMoreSushi} />
    </div>
  );
}

export default SushiContainer;
