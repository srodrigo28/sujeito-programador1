import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Menu } from "../components/Menu"
import { Contato } from '../pages/Contato' 
import { Home } from '../pages/Home' 
import { Sobre } from '../pages/Sobre' 
import { Produto } from '../pages/Produto' 

const Routes = () => {
    return(
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/produto/:id" component={Produto} />
                <Route exact path="/sobre" component={Sobre} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes