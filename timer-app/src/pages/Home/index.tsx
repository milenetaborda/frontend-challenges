import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "phosphor-react";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { CycleContext } from "../../contexts/CyclesContext";
import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";

import * as S from "./styles";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo de 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo de 60 minutos"),
});

type NewCycleFormInputs = zod.infer<typeof newCycleFormValidationSchema>;

export const Home = () => {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CycleContext);

  const newCycleForm = useForm<NewCycleFormInputs>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const task = watch("task");
  const isSubmitDisabled = !task;

  function handleCreateNewCycle(data: NewCycleFormInputs) {
    createNewCycle(data);
    reset();
  }

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="#">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <S.StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </S.StartCountdownButton>
        )}
      </form>
    </S.HomeContainer>
  );
};
