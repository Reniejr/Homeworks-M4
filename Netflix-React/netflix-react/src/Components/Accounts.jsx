import React, { PureComponent } from 'react'
import './Styles/Accounts.scss'
import Registration from './Registration'
import Images from '../Data/Images.json'

export default class Accounts extends PureComponent {
    forAccount = Images.filter(img=>img.target==='Accounts')
    background = this.forAccount.filter(img=> img.name==='Background')
    profile = this.forAccount.filter(img=>img.name==='Profile')
    
    state={
        account:[],
        display:true,
        img:[]
    }


    componentDidUpdate(prevProps, prevState){
        if(prevState.account !== this.state.account
             && 
             prevState.img !== this.state.img){
            console.log(this.state.account)
        }
    }

    updateAccount(account, src){
        this.setState({account : [...this.state.account, account], img: [...this.state.img, src]})
        this.showRegistration()
    }

    showRegistration(){this.setState({display : !this.state.display})}

    render() {
        let displayed = this.state.display? 'none' : 'block'
        console.log(this.profile)
        return (
            <div id='accounts' 
                style={
                    {
                        background: `url(${this.background[0].src})`,
                        backgroundPosition : 'center',
                        backgroundSize : 'cover',
                        backgroundAttachment : "fixed"
                    }
                }
            >
                <div className='accounts-list'>
                    {this.state.account.map((user, index)=> {
                        return(
                            <div className='user' key={index}>
                                <img src={this.state.img[index]} alt=""/>
                                <p>{user.firstname}</p>
                            </div>
                        )
                    })}
                </div>
                <h2 onClick={this.showRegistration.bind(this)}>No Accounts? Click here</h2>
                <Registration style={displayed} makeAccount={this.updateAccount.bind(this)}/>
            </div>
        )
    }
}
