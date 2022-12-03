import { useContext } from "react";
import { CyclesContex } from "../../context/CycleContext";
import { HistoryContainer, HistoryTable, Status } from "./style";
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"



export function History() {
  const { cycles } = useContext(CyclesContex);
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryTable>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((index) => {
              return (
                <tr key={index.id}>
                  <td>{index.taks}</td>
                  <td>{index.minutesAmount}</td>
                  <td>{formatDistanceToNow(index.dateStart, {
                    addSuffix: true,
                    locale: ptBR

                  }) }</td>
                  <td>
                    {index.finishedDate && (<Status statusColor="green">Concluido</Status>)}
                    {index.interruptDate && (<Status statusColor="red">Interrompido</Status>)}
                    {(!index.finishedDate && !index.interruptDate) && (<Status statusColor="yellow">Em andamento</Status>)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryTable>
    </HistoryContainer>
  );
}
