import styled from "styled-components";


export const HomeContainer = styled.main`
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;
export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`
export const CounterContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme['gray-100']};

    display: flex;
    gap: 1rem;

    span {
        background: ${(props) => props.theme['gray-700']};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`

export const Separator = styled.div`
    padding: 2rem 0;
    color:  ${(props) => props.theme['green-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

export const StartCountButton = styled.button`
    width: 100%;
    border: none;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['gray-100']} ;


    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
    }

`

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: solid 2px ${(props) => props.theme['gray-500']} ;
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']};;
    }

    &::placeholder {
        color: ${(props) => props.theme['gray-500']};
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`
