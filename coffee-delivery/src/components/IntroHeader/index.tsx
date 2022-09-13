import introBackground from "../../assets/intro-coffee.svg";
import { introItemsDescriptions } from "./constants";
import * as S from "./styles";

export const IntroHeader = () => {
  return (
    <S.IntroContainer>
      <S.SectionTexts>
        <S.IntroTitle>
          Encontre o café perfeito para qualquer hora do dia
        </S.IntroTitle>
        <S.IntroSubtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </S.IntroSubtitle>

        <S.InfosList>
          {introItemsDescriptions.map((item) => (
            <S.InfoItem key={item.text} backgroundColor={item.backgroundColor}>
              <span>{item.icon}</span>
              <p>{item.text}</p>
            </S.InfoItem>
          ))}
        </S.InfosList>
      </S.SectionTexts>

      <S.ImageContainer>
        <img src={introBackground} alt="" />
      </S.ImageContainer>
    </S.IntroContainer>
  );
};
