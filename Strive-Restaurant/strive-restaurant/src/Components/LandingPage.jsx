import React, { PureComponent } from 'react'
import './Styles/LandingPage.scss'
import {Link} from 'react-router-dom'

export default class LandingPage extends PureComponent {
    render() {
        return (
            <div className='landing-page'>
                <div className="start">
                    <h1>Only the BEST Food for You</h1>
                    <Link to='/Home'>
                        Go to the restaurant
                    </Link>
                </div>
            </div>
        )
    }
}
