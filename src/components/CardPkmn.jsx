const CardPkmn = ({ pokemon }) => {
  return (
    <div className="pokeimage">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default CardPkmn;
