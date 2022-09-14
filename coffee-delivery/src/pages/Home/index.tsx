import { CoffeeCardCatalog } from "../../components/CoffeeCardCatalog";
import { IntroHeader } from "../../components/IntroHeader";

import * as S from "./styles";

export const Home = () => {
  return (
    <S.Homecontainer>
      <IntroHeader />

      <S.CoffeeListContainer>
        <S.CoffeeListTitle>Nossos cafés</S.CoffeeListTitle>

        <S.CoffeeList>
          {Array.from({ length: 10 }).map((_, index) => (
            <CoffeeCardCatalog />
          ))}
        </S.CoffeeList>
      </S.CoffeeListContainer>
    </S.Homecontainer>
  );
};
