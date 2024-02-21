import { useParams } from "react-router-dom"

export function Produto(){
    const { id } = useParams()

    return(
        <div>
            <h1>Bem vindo a página Produto</h1>
            <p>Produto: <span>{id}</span> </p>
        </div>
    )
}