import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardPkmn from "../components/CardPkmn";

const Pokemon = () => {
  const { name } = useParams(); //captura el valor de la url del navegador
  const [pokemon, setPokemon] = useState({});
  const [loading, setloading] = useState(true);
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPokemon(json);
        console.log(json);
        setTimeout(() => {
          setloading(false);
        }, 2000);
      })
      .catch((e) => console.log(e));
  }, []);


  return (
    <main>
      {loading ? (
        <img
          src="https://thumbs.gfycat.com/BitesizedJampackedDove-max-1mb.gif"
          alt=""
        />
      ) : (
        <CardPkmn pokemon={pokemon} />
      )}
    </main>
  );
};

export default Pokemon;
