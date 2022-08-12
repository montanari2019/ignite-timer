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

  ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
  }}


`;
