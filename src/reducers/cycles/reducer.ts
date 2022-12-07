import { ICyclesStateReduce } from "./@types"
import { ActionReduceTypes } from "./actions"
import { produce } from "immer"




export function CyclesReducer(state: ICyclesStateReduce, action: any) {

  switch (action.type) {
    case ActionReduceTypes.ADD_CREATE_NEW_CYCLE:


      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })


    case ActionReduceTypes.INTERRUPT_CYCLE: {

      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptDate = new Date()
      })

    }
    case ActionReduceTypes.MARK_FINISHED_CYCLE: {

      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default:
      return state
  }


}