import "./Showcase.css";
import "./index.css";

function Showcase() {
  let favPokemon = "Pikachu";
  let pokeCharacteristics = { type: "Electric", move: "Electric Tail Whip" };
  return (
    <div className="background">
      <div className="content">
        <h1>Showcase Component</h1>
        {favPokemon}'s
        <img
          style={{ width: 300, height: 300, borderRadius: "100px" }}
          src={require("./images/pikachu.png")}
          alt="pokemonCharacter"
        ></img>
        <span style={{ backgroundColor: "yellow", color: "blue" }}>
          <h2>Pikachu's type is{pokeCharacteristics.type}</h2>
        </span>
        <span style={{ backgroundColor: "blue", color: "yellow" }}>
          <h2>Pikachu's move is{pokeCharacteristics.move}</h2>
        </span>
      </div>
    </div>
  );
}

export default Showcase;
