import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { ICoffe } from "../../constants/dataCoffes.mock";
import { CoffeeContext, ICoffeeWithAmount } from "../../context/CoffeeContext";

import * as S from "./styles";

interface ICoffeeCardCatalogProps {
  data: ICoffe;
}

export const CoffeeCardCatalog = ({ data }: ICoffeeCardCatalogProps) => {
  const { incrementCoffee, decrementCoffee, addToCart } =
    useContext(CoffeeContext);

  const { desc, imageUrl, id, name, tags, value, amount } =
    data as ICoffeeWithAmount;

  return (
    <S.CoffeeCardContainer>
      <img
        src={imageUrl}
        alt={`imagem ilustrativa de uma xícara com ${name}`}
      />

      <S.TagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </S.TagsContainer>

      <S.CoffeeHeadingContent>
        <S.CoffeeName>{name}</S.CoffeeName>
        <S.CoffeeDescription>{desc}</S.CoffeeDescription>
      </S.CoffeeHeadingContent>

      <S.CoffeeCardFooter>
        <S.Price>
          <span>R$</span> {value}
        </S.Price>

        <S.CoffeeCardBuyWrapper>
          <S.Counter>
            <button type="button" onClick={() => decrementCoffee(id)}>
              <Minus size={14} color="#8047F8" weight="bold" />
            </button>
            <span>{amount || 0}</span>
            <button type="button" onClick={() => incrementCoffee(id)}>
              <Plus size={14} color="#8047F8" weight="bold" />
            </button>
          </S.Counter>
          <S.AddToCartButton type="button" onClick={() => addToCart(data)}>
            <ShoppingCart size={22} color="white" />
          </S.AddToCartButton>
        </S.CoffeeCardBuyWrapper>
      </S.CoffeeCardFooter>
    </S.CoffeeCardContainer>
  );
};
