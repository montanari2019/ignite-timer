import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountDownContainer, Separator, StartCountDownButton, TaskInput, MinutesAmountInput } from "./styleHome";

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" list="task-suggestion" placeholder="Nome do projeto"/>

          <datalist id="task-suggestion">
            <option value="Projeto 1"/>
            <option value="Projeto 1541"/>
            <option value="Projeto 3"/>
            <option value="Porjeto Bomba by adam"/>
            <option value="Vaquinha Amarela"/>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" placeholder="00"  step={5} min={5} max={60}/>

          <span>minutos</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled={true} type="submit">
          <Play size={24} /> Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
