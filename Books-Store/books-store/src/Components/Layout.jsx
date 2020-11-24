import React, { PureComponent } from 'react'
import './Styles/Layout.scss'
import {Link} from 'react-router-dom'

export default class Layout extends PureComponent {
    render() {
        return (
            <div id='starting-page'>
                <div className='presentation'>
                    <h1>Best Books for the Best Reader</h1>
                    <Link to='/Home'>
                        <input type="button" value='Go to the Shop'/>
                    </Link>
                </div>
            </div>
        )
    }
}
