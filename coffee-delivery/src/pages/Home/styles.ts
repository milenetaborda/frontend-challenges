import styled from "styled-components";

export const Homecontainer = styled.main`
  max-width: 1120px;
`;

export const CoffeeListContainer = styled.div`
  padding: 32px 0;
`;

export const CoffeeListTitle = styled.h2`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;

  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const CoffeeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;
