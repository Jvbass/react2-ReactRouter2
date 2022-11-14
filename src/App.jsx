import { useState, useEffect } from "react";
import Context from "./context/context.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import views
import Home from "./views/Home.jsx";
import Pokemones from "./views/Pokemones.jsx";
import Pokemon from "./views/Pokemon.jsx";
import Notfound from "./views/NotFound.jsx";

// import components
import Navbar from "./components/Navbar.jsx";

import "./App.css";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const [data, setData] = useState([]);
  const globalState = { data };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pokemones" element={<Pokemones />}></Route>
            <Route path="/pokemones/:name" element={<Pokemon />}></Route>
            {/* definimos el parametro variable ":name" en la url para indicar que
            este valor debe ser capturado */}
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
