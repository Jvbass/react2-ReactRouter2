import Context from "../context/context.js";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const { data } = useContext(Context);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const verDetalle = () => {
    navigate(`/pokemones/${selected}`);
  };
  return (
    <main>
      <h1>Selecciona un Pokémon</h1>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option hidden value="0">
          Elige tu pokémon
        </option>
        {data.map((pkmn) => {
          return (
            <option value={pkmn.name} key={pkmn.name}>
              {pkmn.name}
            </option>
          );
        })}
      </select>
      <button
        className={`btn ${selected == "0" || !selected ? "disabled" : ""}`}
        onClick={() => verDetalle()}
      >
        {" "}
        Buscar
      </button>
    </main>
  );
};

export default Pokemones;
