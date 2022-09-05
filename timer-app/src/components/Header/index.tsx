import { NavLink } from "react-router-dom";

import { Scroll, Timer } from "phosphor-react";
import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={logoImg} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  );
};
