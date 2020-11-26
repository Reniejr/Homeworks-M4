import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import NavbarNetflix from './Components/NavbarNetflix'
import MovieDetails from './Components/MovieDetails'


export default class RouterWeb extends PureComponent {
    state = { searchedMovies: [], searchedLoading: null };

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
    render() {
        return (
            <Router>
                <div id='router-main'>
                    <NavbarNetflix showSearchResult={this.showSearchResult}/>
                    <Switch>
                        <Route path='/' exact/>
                        <Route path='/Home' exact render={(props)=><Home searchedMovies={this.state.searchedMovies} searchedLoading={this.state.searchedLoading} {...props}/>}/>
                        <Route path='/Details/:id' render={(props)=><MovieDetails {...props}/>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
