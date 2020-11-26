import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import NavbarNetflix from './Components/NavbarNetflix'
import MovieDetails from './Components/MovieDetails'
import Accounts from './Components/Accounts'
import Registration from './Components/Registration'


export default class RouterWeb extends PureComponent {
    state = { searchedMovies: [], searchedLoading: null, account:{}};

  showSearchResult = (searchString) => {
    this.setState({ searchedLoading: true });

    fetch(`http://www.omdbapi.com/?apikey=ad2a416a&s=${searchString}`)
      .then((response) => response.json())
      .then((responseObject) => {
        console.log(responseObject);
        if (responseObject.Response === "True") {
          this.setState({
            searchedMovies: responseObject.Search,
          });
        }
        this.setState({ searchedLoading: false });
      })
      .catch((err) => {
        this.setState({ searchedLoading: null });
      });
  };

  showAccount=(account)=>{this.setState({account: account})}

    render() {
        return (
            <Router>
                <div id='router-main'>
                    <NavbarNetflix showSearchResult={this.showSearchResult}/>
                    <Switch>
                        <Route path='/' exact component={Accounts}/>
                        <Route path='/Home' exact render={(props)=><Home searchedMovies={this.state.searchedMovies} searchedLoading={this.state.searchedLoading} {...props}/>}/>
                        <Route path='/Details/:id' render={(props)=><MovieDetails {...props}/>}/>
                        <Route path='/Registration' exact render={(props)=><Registration account={this.showAccount} {...props}/>}/>
                        <Route path='/Accounts' exact render={(props)=><Accounts show={this.state.account} {...props}/>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
