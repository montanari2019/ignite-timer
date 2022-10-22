import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        gap: 0.5rem;
       
        a { 
            width: 3rem;
            height: 3rem;
            color: ${(props) => props.theme["gray-100"]};

            display: flex;
            justify-content: center;
            align-items: center;

            border-top: solid 1px transparent;
            border-bottom: solid 1px transparent;

            &:hover{
                border-bottom: solid 1px ${(props) => props.theme["green-500"]};
            }

            &:active {
                color: ${(props) => props.theme["green-500"]};
                background: ${(props) => props.theme["gray-100"]};
                
            }
        }
        

    }

`