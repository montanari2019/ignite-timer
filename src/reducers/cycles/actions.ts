import { ICycle } from "./@types";

export enum ActionReduceTypes{
    ADD_CREATE_NEW_CYCLE = "ADD_CREATE_NEW_CYCLE",
    MARK_FINISHED_CYCLE = "MARK_FINISHED_CYCLE",
    INTERRUPT_CYCLE = "INTERRUPT_CYCLE",
}


export function CreateNewCycleAction(newCycle: ICycle){
    return {
        type: ActionReduceTypes.ADD_CREATE_NEW_CYCLE,
        payload: {
          newCycle
        }
      }
}

export function InterruptCycleAction(){
    return{
        type: ActionReduceTypes.INTERRUPT_CYCLE,
      }
}

export function markCycleFinishedContexAction(){
    return{
        type: ActionReduceTypes.MARK_FINISHED_CYCLE
      }
}