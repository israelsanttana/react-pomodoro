import { Play } from "phosphor-react";
import { CounterContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountButton, TaskInput } from "./styles";
import { useState } from "react";
import { useForm } from "react-hook-form";



export function Home() {

    const [task, setTask] = useState('');

    return (
        <HomeContainer>
            <form action="">
                <FormContainer>

                    <label htmlFor="task">Vou trabalhar em </label>
                    <TaskInput
                        id="task"
                        placeholder="Nome da sua tarefa"
                        list="task-suggestions"
                        onChange={(e) => setTask(e.target.value)}
                        value={task}

                    />

                    <datalist id="task-suggestions">
                        <option value="1" />
                        <option value="2" />
                        <option value="3" />
                        <option value="4" />
                        <option value="5" />
                    </datalist>


                    <label htmlFor="">Durante</label>
                    <MinutesAmountInput
                        type="number"
                        step={5}
                        min={5}
                        max={60}
                        id="minutesAmount"
                        placeholder="00"
                    />

                    <span>minutos.</span>

                </FormContainer>


                <CounterContainer>

                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>

                </CounterContainer>

                <StartCountButton disabled={!task} type="submit" >
                    <Play size={20} />
                    Começar
                </StartCountButton>
            </form>
        </HomeContainer>
    )
}