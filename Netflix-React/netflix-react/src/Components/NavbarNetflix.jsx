import React, { PureComponent } from 'react'
import './Styles/NavbarNetflix.scss'
import NavbarItems from '../Data/NavbarItems.json'
import {Link} from 'react-router-dom'

export default class NavbarNetflix extends PureComponent {
    render() {
        return (
        <nav className="navbar-netflix">
            <div className="first-nav-part">
                <div id="logo">
                    <img src="./Media/strive1.png" alt="" />
                </div>
                <ul className="nav-list">
                    {NavbarItems.map((item, index)=>{
                        return(
                            <Link to={`/${item.name}`} key={index}>
                            <li className="nav-item" key={index}>
                                <p>{item.name}</p>
                            </li>
                        </Link>
                        )
                    })}
                </ul>
            </div>

            <div className="search">
                <input type="text" placeholder="Search" />
                <input type="button" value="Search" />
                <ion-icon name="search-outline" className="search-btn"></ion-icon>
                <div className="account-settings">
                    <div className="drop-toggler">
                        <i className="fas fa-sort-down"></i>
                    </div>
                    <ul>
                        <div className="account current">
                        <img src="" alt="" />
                        <span>Name</span>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}
