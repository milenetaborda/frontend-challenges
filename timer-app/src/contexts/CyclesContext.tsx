import { differenceInSeconds } from "date-fns";
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { CreateNewCycleData, Cycle } from "../@types/Cycles";
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from "../reducers/cycles/actions";
import { cyclesReducer } from "../reducers/cycles/reducer";

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
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const localData = localStorage.getItem("@timer-app:cycles-state");
      return localData
        ? JSON.parse(localData)
        : { cycles: [], activeCycleId: null };
    }
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem("@timer-app:cycles-state", stateJSON);
  }, [cyclesState]);

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function createNewCycle(data: CreateNewCycleData) {
    const newCycle: Cycle = {
      id: new Date().getTime().toString(),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  return (
    <CycleContext.Provider
      value={{
        cycles: cyclesState.cycles,
        activeCycleId: cyclesState.activeCycleId,
        activeCycle,
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
