import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CycleContext } from "../../../../contexts/CyclesContext";
import * as S from "./styles";

export function Countdown() {
  const {
    activeCycle,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setAmountSecondsPassed,
  } = useContext(CycleContext);

  const totalSeconds = activeCycle ? activeCycle?.minutesAmount * 60 : 0;

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = minutesAmount.toString().padStart(2, "0");
  const seconds = secondsAmount.toString().padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  useEffect(() => {
    if (activeCycle) {
      const interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          setAmountSecondsPassed(totalSeconds);

          return () => clearInterval(interval);
        }

        setAmountSecondsPassed(secondsDifference);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [activeCycle, markCurrentCycleAsFinished, totalSeconds]);

  return (
    <S.CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <S.Separator>:</S.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </S.CountdownContainer>
  );
}
