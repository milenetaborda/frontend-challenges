import styled, { css } from "styled-components";

export const PetDetailsContainer = styled.div`
  background-color: #fdeced;
  padding: 50px 32px;

  h5 {
    border: 1px solid #d3e2e6;
  }
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
    height: 106px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 2px solid rgb(13, 59, 102, 0.1);
    border-radius: 20px;

    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 100%;
      color: #0d3b66;
    }
  }
`;

export const MapWrapper = styled.div`
  height: 291px;
  max-width: 560px;
  margin: 70px auto 40px;

  background: #0d3b66;
  border: 1px solid #b3dae2;
  border-radius: 20px;

  .leaflet-container {
    height: 227px;

    border: 1px solid #dde3f0;
    border-radius: 20px;
  }

  strong {
    display: flex;
    justify-content: center;
    color: #f4d35e;
    margin-top: 19px;
    cursor: pointer;
  }
`;

export const OngDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  img {
    width: 64px;
    height: 64px;
  }

  > div {
    width: 489px;
    max-width: 489px;
  }
`;

export const OngContact = styled.div`
  margin: 55px 0 50px;
`;

export const OngWhatsapp = styled.a`
  background: #f3f5f7;
  border-radius: 10px;
  padding: 13px 27px;
  margin-top: 17px;

  display: flex;
  align-items: center;
  width: fit-content;
  gap: 9px;

  img {
    width: 24px;
    height: 24px;
  }
`;
