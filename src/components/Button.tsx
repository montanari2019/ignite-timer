import styleButton from "./Button.module.css"

interface ButtonProps{
    color?: 'primary' | 'danger' | 'secondary' | 'success' | 'warning'
}

export function Button({color = "primary"}: ButtonProps){
    return(
        <>
            <button className={`${styleButton} ${styleButton[color]}`}>Enviar</button>
        </>
    )
}