import introBackground from "../../assets/intro-coffee.svg";
import * as S from "./styles";

export const Home = () => {
  return (
    <main>
      <S.IntroContainer>
        <S.SectionTexts>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <S.InfosList>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </S.InfosList>
        </S.SectionTexts>

        <S.ImageContainer>
          <img src={introBackground} alt="" />
        </S.ImageContainer>
      </S.IntroContainer>
    </main>
  );
};
