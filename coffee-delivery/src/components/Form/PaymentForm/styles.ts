import styled, { css } from "styled-components";

export const PaymentMethodWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
`;

export const PaymentMethodButton = styled.button<{ isSelected?: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;

  width: 178.67px;

  padding: 16px;
  background: ${({ theme }) => theme["base-button"]};
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  font-family: "Roboto";
  font-style: normal;
  font-size: 12px;
  line-height: 160%;

  text-transform: uppercase;
  color: ${({ theme }) => theme["base-text"]};

  transition: background 0.2s;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${({ theme }) => theme["purple-light"]};
      border: 1px solid ${({ theme }) => theme["purple"]};
    `}
`;
