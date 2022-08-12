import styled, {css} from "styled-components";

export type ButtonVariant = 'primary' | 'danger' | 'secondary' | 'success' | 'warning'


interface ButtonContainerProps{
    variant: ButtonVariant

}

const buttonVariants = {
    primary: 'blue',
    secondary: 'purple',
    success: 'green',
    danger: 'red',
    warning: 'yellow'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`

    width: 100px;
    height: 40px;

    border-radius: 8px;
    margin-right: 1rem;
    border: none;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.withe}

  /* ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
  }} */


`;