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
`;

export const IntroTitle = styled.h1`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;

  color: ${({ theme }) => theme["base-title"]};
`;

export const IntroSubtitle = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${({ theme }) => theme["base-subtitle"]};

  margin: 16px 0 66px;
`;

export const InfosList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 40px;

  list-style-type: none;
  max-width: 567px;
`;

const BACKGROUND_COLOR_TO_ICON = {
  yellowDark: "#C47F17",
  yellow: "#DBAC2C",
  gray: "#574F4D",
  purple: "#8047F8",
};

export interface InfoItemProps {
  backgroundColor: keyof typeof BACKGROUND_COLOR_TO_ICON;
}

export const InfoItem = styled.li<InfoItemProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  > span {
    background: ${({ backgroundColor }) =>
      BACKGROUND_COLOR_TO_ICON[backgroundColor]};
    padding: 8px;
    border-radius: 50%;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > p {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const ImageContainer = styled.div`
  max-width: 476px;
  height: 360px;
`;
