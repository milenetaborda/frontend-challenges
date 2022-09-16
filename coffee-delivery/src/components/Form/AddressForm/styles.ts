import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input<{ width?: string }>`
  background: ${({ theme }) => theme["base-input"]};
  width: ${({ width }) => width || "100%"};

  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 4px;
  padding: 12px;

  ::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-size: 14px;
    line-height: 130%;

    color: ${({ theme }) => theme["base-label"]};
  }
`;

export const FormContent = styled.div`
  display: flex;
  gap: 12px;
`;
