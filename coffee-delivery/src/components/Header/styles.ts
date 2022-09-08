import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 32px 160px;
  height: 104px;
  max-height: 104px;
`;

export const HeaderNavItems = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 143px;
    height: 38px;

    font-size: 14px;
    line-height: 130%;
    color: ${({ theme }) => theme["purple-dark"]};

    background: ${({ theme }) => theme["purple-light"]};
    border-radius: 6px;

    svg {
      color: ${({ theme }) => theme["purple-dark"]};
    }
  }
`;

export const Card = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  width: 38px;
  height: 38px;
  background: ${({ theme }) => theme["yellow-light"]};
  border-radius: 6px;

  border: none;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme["yellow-dark"]};
  }
`;
