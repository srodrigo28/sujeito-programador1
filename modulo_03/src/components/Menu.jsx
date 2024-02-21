import { Link } from "react-router-dom"

import { Header, Nav } from "./style"

export function Menu(){
    return(
        <Header>
            <Nav>
                <Link to="/home">Home</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/sobre">Sobre</Link>
            </Nav>
        </Header>
    )
}