import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import LandingPage from './Components/LandingPage'
import Menu from './Components/Menu'
import NavbarRestaurant from './Components/NavbarRestaurant'

export default class RouterWeb extends PureComponent {
    render() {
        return (
            <Router>
                <div id='router-main' >
                    <NavbarRestaurant projectTitle='Strive Restautant'/>
                    <Switch>
                        <Route path='/' exact component={LandingPage}/>
                        <Route path='/Home' exact component={Home}/>
                        <Route path='/Menu' exact component={Menu}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
