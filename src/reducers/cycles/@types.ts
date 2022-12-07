
export interface ICycle {
    id: string;
    taks: string;
    minutesAmount: number;
    dateStart: Date;
    interruptDate?: Date;
    finishedDate?: Date;
}

export interface ICyclesStateReduce{
    cycles: ICycle[],
    activeCycleId: string | null,
}


