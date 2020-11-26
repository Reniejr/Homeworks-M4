import React, { PureComponent } from 'react'
import './Styles/Accounts.scss'
import {Link} from 'react-router-dom'

export default class Accounts extends PureComponent {
    state={
        account:''
    }


    componentDidUpdate(prevProps){
        if(prevProps.account !== this.props.account){
            this.setState({account: this.props.acount})
            console.log(this.state.account)
        }
    }
    
    render() {
        return (
            <div id='accounts'>
                <Link to='/Registration'>
                    <h2>No Accounts? Click here</h2>
                </Link>
            </div>
        )
    }
}
