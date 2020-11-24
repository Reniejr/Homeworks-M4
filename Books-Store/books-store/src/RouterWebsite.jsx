import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import navlist from './Data/Navbar.json'
import NavbarBooks from './Components/NavbarBooks'
import ToggleBtn from './Components/ToggleBtn'

export default class RouterWebsite extends PureComponent {
    state = { 
        switcher: true, 
        toggleBtn: true
    }
    toggleBtnClick = () => {
        this.setState({toggleBtn: !this.state.toggleBtn})
        console.log(this.state.toggleBtn)
        this.setState({switcher: !this.state.switcher})
    }
    render() {
        let toggleBtn = this.state.toggleBtn? 'on' : 'off';
        let switcher = this.state.switcher? 'switch_on' : 'switch_off'
        let switchTheme = this.state.toggleBtn? 'dark' : 'light';
        return (
            <Router>
                <div className={switchTheme}>
                    <NavbarBooks
                    navList={navlist} 
                    projectTitle={'Books Store'} 
                    toggle={
                        <ToggleBtn toggle={this.state.toggleBtn} switcher={this.state.switcher} click={this.toggleBtnClick.bind(this)} switcherBtn={switcher} toggleBtn={toggleBtn}/>
                    }
                    toggleBtn={toggleBtn}/>
                    <Switch>
                        {/* <Route path='' exact component={}/> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}
