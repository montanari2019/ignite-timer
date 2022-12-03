import { createContext, ReactNode, useState } from "react";

interface createCycleData{
    task: string;
    minutesAmount: number;
}

interface ICycle {
    id: string;
    taks: string;
    minutesAmount: number;
    dateStart: Date;
    interruptDate?: Date;
    finishedDate?: Date;
  }

interface CycleContextProps {
    cycles: ICycle[]
    activeCycle: ICycle | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number
    markCycleFinishedContex: () => void;
    handleSetAmountSeconds: (seconds:number) => void
    CreateNewCycle:(data: createCycleData) => void
    InterruptCycle:() => void

  
}
  

export const CyclesContex = createContext({} as CycleContextProps);

interface IContextProviderProps{
    children: ReactNode
}

export function CycleContextComponent({ children }: IContextProviderProps){
    const [cycles, setCycles] = useState<ICycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
    const activeCycle = cycles.find((index) => index.id === activeCycleId);

    function markCycleFinishedContex() {
        setCycles((state) =>
          state.map((cycle) => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, finishedDate: new Date() };
            } else {
              return cycle;
            }
          })
        );
      }
    
      function handleSetAmountSeconds(seconds: number){
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
    
        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(id);
        setAmountSecondsPassed(0);
    
        // reset();
      }
    
      function InterruptCycle() {
        setCycles(
          cycles.map((cycle) => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, interruptDate: new Date() };
            } else {
              return cycle;
            }
          })
        );
        setActiveCycleId(null);
      }
    
    return(
        <CyclesContex.Provider value={{activeCycle, activeCycleId, markCycleFinishedContex, amountSecondsPassed, handleSetAmountSeconds, InterruptCycle, CreateNewCycle , cycles}}>
            {children}
        </CyclesContex.Provider>
    )
}