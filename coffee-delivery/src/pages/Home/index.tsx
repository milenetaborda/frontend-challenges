import { useContext } from "react";
import { CoffeeCardCatalog } from "../../components/CoffeeCardCatalog";
import { IntroHeader } from "../../components/IntroHeader";
import { CoffeeContext } from "../../context/CoffeeContext";

import * as S from "./styles";

export const Home = () => {
  const { coffees } = useContext(CoffeeContext);

  return (
    <S.Homecontainer>
      <IntroHeader />

      <S.CoffeeListContainer>
        <S.CoffeeListTitle>Nossos cafés</S.CoffeeListTitle>

        <S.CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCardCatalog key={coffee.id} data={coffee} />
          ))}
        </S.CoffeeList>
      </S.CoffeeListContainer>
    </S.Homecontainer>
  );
};
