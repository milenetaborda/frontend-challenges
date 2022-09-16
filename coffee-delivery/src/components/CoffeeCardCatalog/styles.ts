import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 24px;

  img {
    position: absolute;
    top: -20px;
    left: calc(50% - 120px / 2);
  }
`;

export const TagsContainer = styled.div`
  margin-top: 92px;
`;

export const CoffeeHeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin: 16px 0 36px;
`;

export const CoffeeName = styled.h2`
  font-family: "Baloo 2";
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const CoffeeDescription = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  text-align: center;
  color: ${({ theme }) => theme["base-label"]};
`;

export const CoffeeCardFooter = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 23px;

  width: 100%;
`;

export const CoffeeCardBuyWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Price = styled.p`
  font-family: "Roboto";
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;

  text-align: right;
  color: ${({ theme }) => theme["base-text"]};

  display: flex;
  align-items: flex-end;

  span {
    font-weight: 400;
    font-size: 14px;
  }
`;

export const Counter = styled.div`
  background: ${({ theme }) => theme["base-button"]};
  border-radius: 6px;

  display: flex;
  align-items: center;
  padding: 8px;
  gap: 4px;

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-size: 16px;
    line-height: 130%;

    text-align: center;
    color: ${({ theme }) => theme["base-title"]};
  }
`;

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 38px;
  height: 38px;

  background: ${({ theme }) => theme["purple-dark"]};
  border-radius: 6px;

  cursor: pointer;
  border: none;
`;
