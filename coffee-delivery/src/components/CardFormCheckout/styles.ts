import styled from "styled-components";

export const CardFormCheckoutContainer = styled.div`
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
  margin: 15px 0 12px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const CardFormHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  div {
    font-family: "Roboto";
    font-style: normal;
    line-height: 130%;

    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;

export const Title = styled.h2`
  font-size: 16px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
`;
