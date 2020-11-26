import React, { PureComponent } from 'react'
import './Styles/Accounts.scss'
import {Link} from 'react-router-dom'

export default class Accounts extends PureComponent {
    render() {
        console.log(this.props.show)
        return (
            <div id='accounts'>
                <Link to='/Registration'>
                    <h2>No Accounts? Click here</h2>
                </Link>
            </div>
        )
    }
}
