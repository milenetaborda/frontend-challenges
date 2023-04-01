import styled, { css } from "styled-components";

export const PetDetailsContainer = styled.div`
  background-color: #fdeced;
  padding: 50px 32px;
  overflow-y: scroll;
`;

export const Content = styled.div`
  max-width: 704px;
  height: 100%;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 auto;
  color: #0d3b66;

  section {
    padding: 0 72px;
  }
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0 70px;
  gap: 16px;
`;

export const ImageSelected = styled.img`
  width: 100%;
  height: 336px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
`;

export const PetImage = styled.img<{
  selected?: boolean;
}>`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  opacity: 0.3;

  ${({ selected }) =>
    selected &&
    css`
      border: 4px solid #0d3b66;
      opacity: 1;
    `}
`;

export const PetName = styled.h1`
  font-weight: 800;
  font-size: 54px;
  line-height: 90%;
  letter-spacing: -0.02em;
`;

export const PetDescription = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin: 26px 0 43px;
`;

export const PetInfo = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  li {
    display: flex;
    flex-direction: column;

    opacity: 0.1;
    border: 2px solid #0d3b66;
    border-radius: 20px;

    p {
      color: #0d3b66;
    }
  }
`;
