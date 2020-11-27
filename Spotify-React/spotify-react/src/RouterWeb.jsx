import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './Components/HomePage'
import NavbarJr from './Components/NavbarJr'
import ToggleBtn from './Components/ToggleBtn'
import navlist from './Data/Navbar.json'

export default class RouterWeb extends PureComponent {
    state = { 
        switcher: true, 
        toggleBtn: true
    }
    toggleBtnClick = () => {
        this.setState({toggleBtn: !this.state.toggleBtn})
        this.setState({switcher: !this.state.switcher})
    }
    
    render() {
        let toggleBtn = this.state.toggleBtn? 'on' : 'off';
        let switcher = this.state.switcher? 'switch_on' : 'switch_off'
        let switchTheme = this.state.toggleBtn? 'dark' : 'light';
        return (
            <div id='router-web' className={switchTheme}>
                <Router>
                    <NavbarJr
                        navList={navlist}
                        projectTitle={'Spotify'}
                        toggle={
                            <ToggleBtn 
                            toggle={this.state.toggleBtn} 
                            switcher={this.state.switcher} 
                            click={this.toggleBtnClick.bind(this)} 
                            switcherBtn={switcher} toggleBtn={toggleBtn}/>
                        }
                        toggleBtn={toggleBtn}/>
                    <Switch>
                        <Route path='/Home' exact render={(props)=><HomePage theme={switchTheme} {...props}/>}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
