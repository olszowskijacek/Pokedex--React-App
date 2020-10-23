import React, { useState, useEffect } from "react";

function PokeList() {
  const [pokes, setPokes] = useState(null);

  useEffect(() => {
    for (let i = 1; i < 7; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => setPokes(data))
        .catch((error) => console.log("error:", error));
    }
  }, []);

  return (
    <div>
      {pokes ? (
        Object.keys(pokes).map((key) => {
          console.log(pokes.id)
          if (typeof pokes[key] === "string") {
            return (
              <img
                src={pokes[key='sprites'].front_default}
                alt={`poke-${pokes.id}-${key}`}
                key={`poke-${pokes.id}-${key}`}
              />
            );
          } else {
            return null;
          }
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default PokeList;