import React, { PureComponent } from 'react'
import './Styles/NavbarBooks.scss'
import {Link} from 'react-router-dom'

export default class NavbarBooks extends PureComponent {
    state = { 
        toggleNav: true, 
        switcher: true, 
        toggleBtn: true
    }

    
    togglerClick = () => {this.setState({toggleNav: !this.state.toggleNav})}
    toggleBtnClick = () => {
        this.setState({toggleBtn: !this.state.toggleBtn})
        this.setState({switcher: !this.state.switcher})
    }

    render() {
        let {navList, logo, projectTitle, toggleBtn, toggle} = this.props
        let toggleNav = this.state.toggleNav? 'open' : 'close'
        return (
            <nav className={`navBarBooks ${toggleNav} ${toggleBtn}`}>
                <div className='toggler' onClick={this.togglerClick.bind(this)}></div>
                <div className="logo">
                    <img src={logo} alt=""/>
                    <div className="projectTitle">
                             {projectTitle}
                    </div>
                </div>
                <ul id="nav-list">
                    {navList.map((navItem, index) =>{
                        return(
                            <Link to={`/${navItem.name}`} key={index}>
                                <li className="nav-item" key={index}>
                                    <p>{navItem.name}</p>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
                <div className="switch-themes">
                    {toggle}
                </div>
            </nav>
        )
    }
}
