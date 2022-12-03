import { differenceInSeconds } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { CyclesContex } from "../../../../context/CycleContext";
import { CountDownContainer, Separator } from "./styles";

export function CountDown(){

  const { activeCycle, markCycleFinishedContex, amountSecondsPassed, handleSetAmountSeconds} = useContext(CyclesContex)

  
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Timer - ${minutes}:${seconds}`;
    }else{
      document.title = `Ignite Timer`;
    }
  }, [minutes, seconds, activeCycle]);


  useEffect(() => {
    let interval: NodeJS.Timer;

    if (activeCycle) {
      interval = setInterval(() => {

        const secondsDifference = differenceInSeconds(new Date(), activeCycle.dateStart)
       

        if(secondsDifference >= totalSeconds){
          markCycleFinishedContex()
          handleSetAmountSeconds(totalSeconds)
          clearInterval(interval)

        }else{
          handleSetAmountSeconds(secondsDifference)
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, markCycleFinishedContex]);

    return(
        <CountDownContainer>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <Separator>:</Separator>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </CountDownContainer>

    )
}