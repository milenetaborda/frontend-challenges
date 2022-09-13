import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;

  padding: 94px 0 108px;
`;

export const SectionTexts = styled.div`
  max-width: 588px;

  p {
    margin: 16px 0 66px;
  }
`;

export const InfosList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 40px;
`;

export const ImageContainer = styled.div`
  width: 476px;
  height: 360px;
`;
