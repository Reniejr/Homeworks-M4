import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavbarNetflix from './Components/NavbarNetflix'


export default class RouterWeb extends PureComponent {
    render() {
        return (
            <Router>
                <div id='router-main'>
                    <NavbarNetflix/>
                    <Switch>
                        <Route path='/' exact/>
                        <Route path='/Home' exact
                        />
                        <Route path='/Category/' exact/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
