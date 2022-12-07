import { ReactNode } from "react";

export interface createCycleData {
    task: string;
    minutesAmount: number;
}

export interface ICycle {
    id: string;
    taks: string;
    minutesAmount: number;
    dateStart: Date;
    interruptDate?: Date;
    finishedDate?: Date;
}

export interface CycleContextProps {
    cycles: ICycle[]
    activeCycle: ICycle | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number
    markCycleFinishedContex: () => void;
    handleSetAmountSeconds: (seconds: number) => void
    CreateNewCycle: (data: createCycleData) => void
    InterruptCycle: () => void


}



export interface IContextProviderProps{
    children: ReactNode
}
