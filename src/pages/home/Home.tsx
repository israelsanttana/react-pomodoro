import { Play } from "phosphor-react";
import { CounterContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountButton, TaskInput } from "./styles";



export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>

                    <label htmlFor="task">Vou trabalhar em </label>
                    <TaskInput
                        id="task"
                        placeholder="Nome da sua tarefa" />

                    <label htmlFor="">Durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00" />

                    <span>minutos.</span>

                </FormContainer>


                <CounterContainer>

                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>

                </CounterContainer>

                <StartCountButton type="submit" disabled>
                    <Play size={20} />
                    Começar
                </StartCountButton>
            </form>
        </HomeContainer>
    )
}