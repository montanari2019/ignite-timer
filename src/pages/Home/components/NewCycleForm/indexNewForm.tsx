import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";



import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContex } from "../../../../context/CycleContext";




export function NewCycleForm(){

  const { activeCycle } = useContext(CyclesContex)

  const { register } = useFormContext()

  


    return(
        <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          list="task-suggestion"
          placeholder="Nome do projeto"
          disabled={!!activeCycle}
          {...register("task")}
        />

        <datalist id="task-suggestion">
          <option value="Projeto 1" />
          <option value="Projeto 1541" />
          <option value="Projeto 3" />
          <option value="Porjeto Bomba by adam" />
          <option value="Vaquinha Amarela" />
        </datalist>

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          {...register("minutesAmount", { valueAsNumber: true })}
        />

        <span>minutos</span>
      </FormContainer>
    )
}