import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DishDetails from './Components/DishDetails'
import Home from './Components/Home'
import LandingPage from './Components/LandingPage'
import MenuShow from './Components/MenuShow'
import NavbarRestaurant from './Components/NavbarRestaurant'
import ReservationForm from './Components/ReservationForm'
import Reservations from './Components/Reservations'

export default class RouterWeb extends PureComponent {
    render() {
        return (
            <Router>
                <div id='router-main' >
                    <NavbarRestaurant projectTitle='Strive Restautant'/>
                    <Switch>
                        <Route path='/' exact component={LandingPage}/>
                        <Route path='/Home' exact render={(props)=><Home {...props}/>}/>
                        <Route path='/Menu' exact render={(props)=><MenuShow {...props}/>}/>
                        <Route path='/Reserve Table' exact component={ReservationForm}/>
                        <Route path='/Details/:id' render={(props)=><DishDetails {...props}/>}/>
                        <Route path='/Reservations' exact render={(props)=><Reservations {...props}/>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
