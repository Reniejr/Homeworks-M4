import React, { PureComponent } from 'react'
import './Styles/NavbarRestaurant.scss'
import navList from '../Data/Navbar.json'
import {Link} from 'react-router-dom'

export default class NavbarRestaurant extends PureComponent {
    render() {
        let {projectTitle} = this.props
        return (
            <nav className='navBar-restaurant'>
                <div className="logo">
                    <img src='' alt=""/>
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
            </nav>
        )
    }
}
