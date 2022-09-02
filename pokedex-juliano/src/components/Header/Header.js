import React from "react";
import {
  HeaderContainer,
  BallContainer,
  LogoContainer,
  ButtonContainer,
} from "./style";
import PokemonLogo from "../../img/pokemon-logo.png";
import Pokeball from "../../img/pokeball.gif";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Back from "../../img/arrow.png";

const Header = () => {
  const history = useNavigate();

  const goBack = () => {
    history.goBack();
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoContainer src={PokemonLogo} alt="Logo Pokemon" />
      </Link>

      {history.location.pathname === "/pokedex" ? (
        <ButtonContainer>
          <img
            className="BackButton"
            onClick={goBack}
            src={Back}
            alt="voltar de pagina"
          />
        </ButtonContainer>
      ) : (
        <BallContainer>
          {" "}
          <Link to="/pokedex">
            <img src={Pokeball} alt="imagem pokebola" />
          </Link>{" "}
        </BallContainer>
      )}
    </HeaderContainer>
  );
};
export default Header;
