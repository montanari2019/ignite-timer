import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountDownContainer, Separator, StartCountDownButton, TaskInput, MinutesAmountInput } from "./styleHome";

import { useForm } from 'react-hook-form'

import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"


const newCycleValidationSchema = zod.object({
  task: zod.string().min(1, "informe a tarefa"),
  minutesAmount: zod.number().min(5, "o ciclo pracisa ser no mínimo de 5 minutos").max(60, "o ciclo precisa ser no máximo de 60 minutos"),
})

type NewCycleFormData = zod.infer<typeof newCycleValidationSchema>


export function Home() {

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
    
  })


  function handleCreatNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  const taksValidate = watch('task')
  const isSubmitDisabled = !taksValidate

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreatNewCycle)} >
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" list="task-suggestion" placeholder="Nome do projeto" {...register('task')} />

          <datalist id="task-suggestion">
            <option value="Projeto 1"/>
            <option value="Projeto 1541"/>
            <option value="Projeto 3"/>
            <option value="Porjeto Bomba by adam"/>
            <option value="Vaquinha Amarela"/>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" placeholder="00"  step={5} min={5} max={60} {...register('minutesAmount', {valueAsNumber: true})}/>

          <span>minutos</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} /> Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
