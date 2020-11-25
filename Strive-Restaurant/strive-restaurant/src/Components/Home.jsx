import React, { PureComponent } from 'react'
import './Styles/Home.scss'
import {Link} from 'react-router-dom'

export default class Home extends PureComponent {
    render() {
        return (
            <div id='home'>
                <div className="option">
                    <Link to='/Menu'>
                        <i className="fas fa-utensils"></i>
                        <h3>Take a look at the menu</h3>
                    </Link>
                </div>
                <div className="option">
                    <Link to='/Reservation'>
                        <i className="fas fa-desktop"></i>
                        <h3>Book a table</h3>
                    </Link>
                </div>
            </div>
        )
    }
}
