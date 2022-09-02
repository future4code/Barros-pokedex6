import React from "react";
import Header from "../../components/Header/Header";
import EachPokemon from "../../components/EachPokemon/EachPokemon";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {
  PokedexContainer,
  Container,
  Title,
  PokeImage,
  BattleContainer,
} from "./style";
import { Snackbar } from "@material-ui/core";
import { useState } from "react";

function Pokedex() {
  const { pokedex } = useContext(GlobalStateContext);
  const [power, setPower] = useState([]);
  const [winner, setWinner] = useState(-1);

  const comparePowerOfBattle = (totalPower, name, photo) => {
    if (power.length === 0) {
      setPower([{ totalPower, name, photo }]);
    } else {
      setPower([...power, { totalPower, name, photo }]);
      if (power[0].name === name) {
        alert("Choose a different Pokemon");
      } else if (power[0].totalPower > totalPower) {
        setWinner(0);
      } else if (power[0].totalPower < totalPower) {
        setWinner(1);
      } else {
        setWinner(2);
      }
      setTimeout(() => {
        setWinner(-1);
        setPower([]);
      }, 3000);
    }
  };

  const listPokedex =
    pokedex &&
    pokedex.map((poke) => {
      return (
        <EachPokemon poke={poke} comparePowerOfBattle={comparePowerOfBattle} />
      );
    });

  return (
    <PokedexContainer>
      <Header />
      <Title>pokedex</Title>
      <Container>{listPokedex}</Container>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={power.length > 0}
        //  onClose={handleClose}
        message={
          <BattleContainer>
            <div>
              {power.length > 0 && (
                <div>
                  <PokeImage src={power[0].photo} alt="pokemon selected" />
                  <h2>{power[0].name}</h2>
                </div>
              )}
              <h1>Vs</h1>
              {power.length > 1 && (
                <div>
                  <PokeImage src={power[1].photo} alt="pokemon selected" />
                  <h2>{power[1].name}</h2>
                </div>
              )}
            </div>
            <div id={"winner"}>
              {(winner === 0 || winner === 1) && (
                <p>{power[winner].name} WON!!</p>
              )}
              {winner === 2 && <p>TIED!!</p>}
            </div>
          </BattleContainer>
        }
      />
    </PokedexContainer>
  );
}
export default Pokedex;
