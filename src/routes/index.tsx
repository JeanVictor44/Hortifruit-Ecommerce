import { 
    Switch, 
    Route,  
} from 'react-router-dom'
import { Home} from '../pages/Home'
import { Products } from '../pages/Produtcts'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/products" component={Products} />
        </Switch>
    )
}