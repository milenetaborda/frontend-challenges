import { Play } from "phosphor-react";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeContainer>
      <form action="#">
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <S.StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </S.StartCountdownButton>
      </form>
    </S.HomeContainer>
  );
};
