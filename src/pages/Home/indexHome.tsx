import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { HomeContainer, StartCountDownButton, StopCountDownButton} from "./styleHome";
import { createContext, useContext, useState } from "react";

import { NewCycleForm } from "./components/NewCycleForm/indexNewForm";
import { CountDown } from "./components/CountDown/indexCountDown";
import { CyclesContex } from "../../context/CycleContext";




const newCycleValidationSchema = zod.object({
  task: zod.string().min(1, "informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "o ciclo pracisa ser no mínimo de 5 minutos")
    .max(60, "o ciclo precisa ser no máximo de 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleValidationSchema>;



export function Home() {

  const { CreateNewCycle, InterruptCycle, activeCycle } = useContext(CyclesContex)
  

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const taksValidate = watch("task");
  const isSubmitDisabled = !taksValidate;

 
  function handleCreateNewCycle(data: NewCycleFormData){
    CreateNewCycle(data)
    reset()

  }

 
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
       

          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>


          <CountDown />


      

        {activeCycle ? (
          <StopCountDownButton onClick={InterruptCycle} type="button">
            <HandPalm size={24} /> Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} /> Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
