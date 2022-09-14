import * as S from "./styles";

export const CoffeeCardCatalog = () => {
  return (
    <S.CoffeeCardContainer>
      <img src="" alt="" />

      <S.TagsContainer>
        <span>Tradicional</span>
      </S.TagsContainer>

      <div>
        <h3>Nome do café</h3>
        <p>Descrição do café</p>
      </div>

      <footer>
        <p>R$ 9,90</p>
        <div>
          <button type="button">-</button>
          <span>1</span>
          <button type="button">+</button>
        </div>
        <button type="button">Adicionar ao carrinho</button>
      </footer>
    </S.CoffeeCardContainer>
  );
};
