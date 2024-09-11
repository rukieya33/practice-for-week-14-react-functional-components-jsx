import "./index.css";

function Showcase() {
  let favPokemon = "Pikachu";
  let pokeCharacteristics = { type: "Electric", move: "Electric Tail Whip" };
  return (
    <div className="background">
      <h1>Showcase Component</h1>
      {favPokemon}'s
      <img src="./images/pikachu.png"></img>
      <span style={{ backgroundColor: "yellow", color: "blue" }}>
        <h2>Peekachu's type is{pokeCharacteristics.type}</h2>
      </span>
      <span style={{ backgroundColor: "blue", color: "yellow" }}>
        <h2>Peekachu's move is{pokeCharacteristics.move}</h2>
      </span>
    </div>
  );
}

export default Showcase;
