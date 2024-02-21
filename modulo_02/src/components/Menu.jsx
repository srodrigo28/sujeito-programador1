import { Link } from "react-router-dom"

export function Menu(){
    return(
        <>
            <ul>
                <Link to="/home">Home</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/sobre">Sobre</Link>
            </ul>
        </>
    )
}