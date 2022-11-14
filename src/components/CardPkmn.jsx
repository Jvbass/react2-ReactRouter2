const CardPkmn = ({ pokemon }) => {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
    </div>
  );
};

export default CardPkmn;
