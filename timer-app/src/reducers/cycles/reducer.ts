import { Cycle } from "../../@types/Cycles";
import { ActionsTypes } from "./actions";

interface CycleState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function cyclesReducer(state: CycleState, action: any) {
  switch (action.type) {
    case ActionsTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
    case ActionsTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return {
              ...cycle,
              interruptedDate: new Date(),
            };
          }

          return cycle;
        }),
        activeCycleId: null,
      };
    case ActionsTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return {
              ...cycle,
              finishedDate: new Date(),
            };
          }

          return cycle;
        }),
      };
    default:
      return state;
  }
}
