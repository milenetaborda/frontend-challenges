import { zodResolver } from "@hookform/resolvers/zod";
import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";

import * as S from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo de 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo de 60 minutos"),
});

type NewCycleFormInputs = zod.infer<typeof newCycleFormValidationSchema>;

export const Home = () => {
  const { register, handleSubmit, watch } = useForm<NewCycleFormInputs>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormInputs) {}

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="#">
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <S.StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </S.StartCountdownButton>
      </form>
    </S.HomeContainer>
  );
};
