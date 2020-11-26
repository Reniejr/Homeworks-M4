import React, { PureComponent } from 'react'
import './Styles/NavbarNetflix.scss'
import NavbarItems from '../Data/NavbarItems.json'
import NavbarAccounts from '../Data/NavbarAccounts.json'
import {Link, withRouter} from 'react-router-dom'

class NavbarNetflix extends PureComponent {
    state={dropAccount:true, searchField:true, searchString: ''}

    updateSearch=(e)=>{
        if (e.keyCode === 13 || e.key === "Enter") {
            this.props.showSearchResult(this.state.searchString);
            // console.log(this.state.searchString)
          } else {
            this.setState({ searchString: e.currentTarget.value });
          }
    }

    dropAccount = ()=>{this.setState({dropAccount : !this.state.dropAccount})}

    showSearch = ()=>{this.setState({searchField : !this.state.searchField})}

    render() {
        let dropAccounts = this.state.dropAccount? 'hidden' : 'visible'
        let searchFieldTransition = this.state.searchField? '0px' : '34vh'
        let searchField = this.state.searchField? '0' : '1'
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
                                <li className={`nav-item ${this.props.location.pathname === `/${item.name}`? 'active' : ''}`}>
                                    <p>{item.name}</p>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>

            <div className="search">
                <div className="searchField" style={{width:`${searchFieldTransition}`, opacity:`${searchField}`}}>
                    <input type="text" placeholder="Search"
                    value={this.state.searchString}
                    onKeyDown={this.updateSearch}
                    onChange={this.updateSearch}
                    />
                    <input type="button" value="Search" />
                </div>
                <ion-icon name="search-outline" className="search-btn" onClick={this.showSearch.bind(this)}></ion-icon>
                <div className="account-settings" style={{overflow: `${dropAccounts}`}}>
                    <div className="drop-toggler" onClick={this.dropAccount.bind(this)}>
                        <i className="fas fa-sort-down"></i>
                    </div>
                    <ul>
                        {NavbarAccounts.map((account, index)=>{
                            return(
                                <div className="account" key={index}>
                                    <img src={account.src} alt="" />
                                    <span>{account.name}</span>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}
export default withRouter(NavbarNetflix)
