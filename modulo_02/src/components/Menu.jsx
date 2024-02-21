import { Link } from "react-router-dom"

import { Header, Nav, Button } from "./style"

export function Menu(){
    return(
        <Header>

            <Nav>
                <Link to="/home">Home</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/sobre">Sobre</Link>
            </Nav>

            <Button
                cor="#00FF00"
                tamanho={25}
            >
                Entrar
            </Button>

        </Header>
    )
}