import { differenceInSeconds } from "date-fns";
import { createContext, useEffect, useReducer, useState } from "react";
import { ActionReduceTypes, CreateNewCycleAction, InterruptCycleAction, markCycleFinishedContexAction } from "../reducers/cycles/actions";
import { CyclesReducer } from "../reducers/cycles/reducer";

import { createCycleData, CycleContextProps, IContextProviderProps, ICycle, } from "./@types";




export const CyclesContex = createContext({} as CycleContextProps);


export function CycleContextComponent({ children }: IContextProviderProps) {

  const [cyclesState, dispatch] = useReducer(CyclesReducer, {
    cycles: [],
    activeCycleId: null
  }, () => {
    const storageStateAsJSON = localStorage.getItem("@ignite-timer:cycles-state-1.0.0")
    if (storageStateAsJSON) {
      return JSON.parse(storageStateAsJSON)
    }else{
      return {
        cycles: [],
        activeCycleId: null
      }
    }
  })


  const { cycles, activeCycleId } = cyclesState
  let activeCycle = cycles.find((index) => index.id === activeCycleId);

  
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(()=>{
    if(activeCycle){
      return differenceInSeconds(new Date(), new Date(activeCycle.dateStart))
    }
    return 0
  });


  useEffect(() => {

    if (activeCycleId !== null) {
      activeCycle = cycles.find((index) => index.id === activeCycleId);

    }

    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON)

  }, [cycles, cyclesState])

  function markCycleFinishedContex() {

    dispatch(markCycleFinishedContexAction())
  }

  function handleSetAmountSeconds(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function CreateNewCycle(data: createCycleData) {
    const id = String(new Date().getTime());
    const newCycle: ICycle = {
      id,
      taks: data.task,
      minutesAmount: data.minutesAmount,
      dateStart: new Date(),
    };

    dispatch(CreateNewCycleAction(newCycle))

    setAmountSecondsPassed(0);

  }

  function InterruptCycle() {

    dispatch(InterruptCycleAction())

  }

  return (
    <CyclesContex.Provider value={{ activeCycle, activeCycleId, markCycleFinishedContex, amountSecondsPassed, handleSetAmountSeconds, InterruptCycle, CreateNewCycle, cycles }}>
      {children}
    </CyclesContex.Provider>
  )
}