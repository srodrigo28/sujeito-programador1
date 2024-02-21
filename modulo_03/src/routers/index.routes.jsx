import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Main } from "../../pages/Main"
import { Repositorio } from "../../pages/Repositorio"

import { Menu } from "../components/Menu"

export default function Routes(){
    return(
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/repositorio/:repositorio" exact component={Repositorio} />
            </Switch>
        </BrowserRouter>
    )
}

