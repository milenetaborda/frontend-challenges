import { createContext, ReactNode, useState } from "react";
import { CreateNewCycleData } from "../@types/Cycles";
import { Cycle } from "../pages/Home";

interface CycleContextData {
  cycles: Cycle[];
  amountSecondsPassed: number;
  activeCycleId: string | null;
  activeCycle: Cycle | undefined;
  interruptCurrentCycle: () => void;
  markCurrentCycleAsFinished: () => void;
  createNewCycle: (cycle: CreateNewCycleData) => void;
  setAmountSecondsPassed: (amountSecondsPassed: number) => void;
}

export const CycleContext = createContext({} as CycleContextData);

export const CycleProvider = ({ children }: { children: ReactNode }) => {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            finishedDate: new Date(),
          };
        }

        return cycle;
      })
    );
  }

  function createNewCycle(data: CreateNewCycleData) {
    const newCycle: Cycle = {
      id: new Date().getTime().toString(),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date(),
          };
        }

        return cycle;
      })
    );

    setActiveCycleId(null);
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        setAmountSecondsPassed,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
};
