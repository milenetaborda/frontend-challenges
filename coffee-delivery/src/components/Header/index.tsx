import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CoffeeContext } from "../../context/CoffeeContext";

import logoURL from "../../assets/logo.svg";
import * as S from "./styles";

export const Header = () => {
  const { cart } = useContext(CoffeeContext);

  return (
    <S.HeaderContainer>
      <img
        src={logoURL}
        alt="do lado direito há um copo de café com desenho de um foguete, e ao lado está escrito coffee delivery"
      />

      <S.HeaderNavItems>
        <span>
          <MapPin /> Porto Alegre, RS
        </span>

        <NavLink to="/checkout" title="Checkout">
          <S.Card>
            {cart.length > 0 && <span>{cart.length}</span>}

            <ShoppingCart size={22} />
          </S.Card>
        </NavLink>
      </S.HeaderNavItems>
    </S.HeaderContainer>
  );
};
