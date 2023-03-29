import styled from "styled-components";

export const Button = styled.button<{ isCurrent?: boolean }>`
  background: ${({ isCurrent }) => (isCurrent ? "blue" : "transparent")};
  color: ${({ isCurrent }) => (isCurrent ? "white" : "black")};
  padding: 0.3rem 0.5rem;

  & + & {
    margin-left: 0.3rem;
  }
`;
