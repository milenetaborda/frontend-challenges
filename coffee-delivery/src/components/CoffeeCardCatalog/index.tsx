import { Minus, Plus, ShoppingCart } from "phosphor-react";

import coffeImage from "./images/Coffee.png";
import * as S from "./styles";

export const CoffeeCardCatalog = () => {
  return (
    <S.CoffeeCardContainer>
      <img src={coffeImage} alt="" />

      <S.TagsContainer>
        <span>Tradicional</span>
      </S.TagsContainer>

      <S.CoffeeHeadingContent>
        <S.CoffeeName>Nome do café</S.CoffeeName>
        <S.CoffeeDescription>
          O tradicional café feito com água quente e grãos moídos
        </S.CoffeeDescription>
      </S.CoffeeHeadingContent>

      <S.CoffeeCardFooter>
        <S.Price>
          <span>R$</span> 10,00
        </S.Price>

        <S.CoffeeCardBuyWrapper>
          <S.Counter>
            <button type="button">
              <Minus size={14} color="#8047F8" weight="bold" />
            </button>
            <span>1</span>
            <button type="button">
              <Plus size={14} color="#8047F8" weight="bold" />
            </button>
          </S.Counter>
          <S.AddToCartButton type="button">
            <ShoppingCart size={22} color="white" />
          </S.AddToCartButton>
        </S.CoffeeCardBuyWrapper>
      </S.CoffeeCardFooter>
    </S.CoffeeCardContainer>
  );
};
