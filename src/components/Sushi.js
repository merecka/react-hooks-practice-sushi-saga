import React from "react";
import { useState } from "react/cjs/react.development";

function Sushi({sushi, onEaten, balance}) {
  const [isEaten, setIsEaten] =  useState(false);

  function handleEaten() {
    if (balance - sushi.price > 0) {
      setIsEaten(!isEaten);
      onEaten(sushi);
    } else {
      return
    }

  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
