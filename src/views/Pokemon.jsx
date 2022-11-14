import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Chart from "react-apexcharts";

import CardPkmn from "../components/CardPkmn";

const Pokemon = () => {
  const { name } = useParams(); //captura el valor de la url del navegador
  const [pokemon, setPokemon] = useState({});
  const [loading, setloading] = useState(true);

  const [stats, setStats] = useState([]);
  const [statName, setStatName] = useState([]);
  const [statValue, setStatValue] = useState([]);

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPokemon(json);
        setStats(json.stats);
        console.log(json);
        setTimeout(() => {
          setloading(false);
        }, 2000);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setStatName(stats.map((item) => item.stat.name));
    setStatValue(stats.map((item) => item.base_stat));
  }, [loading]);

  const series = [
    //data on the y-axis
    {
      name: "",
      data: statValue,
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "radar-chart" },
    xaxis: {
      categories: statName,
    },
    colors: ["#0a94e9", "#000"],
  };

  return (
    <main className="pokemain">
      {loading ? (
        <img
          src="https://thumbs.gfycat.com/BitesizedJampackedDove-max-1mb.gif"
          alt=""
        />
      ) : (
        <div className="pokeresume">
          <CardPkmn pokemon={pokemon} />
          <Chart
            className="chart"
            options={options}
            series={series}
            type="radar"
            width="450px"
          />
        </div>
      )}

      <Link to="/">
        <button className="btn-backindex">Volver al home</button>
      </Link>
    </main>
  );
};

export default Pokemon;
