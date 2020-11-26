import React, { PureComponent } from 'react'
import './Styles/MovieDetails.scss'
import {Row, Col} from 'react-bootstrap'

export default class MovieDetails extends PureComponent {
    url = 'http://www.omdbapi.com/?'
    apikey = 'apikey=ad2a416a'
    state={
        movie:null
    }

    componentDidMount= async()=>{
        let response = await fetch(this.url+this.apikey+'&i='+this.props.match.params.id)
        let result = await response.json()
        this.setState({movie : result})
        console.log(this.state.movie)
    }

    render() {
        console.log(this.props)
        return (
            <>
                {this.state.movie ? 
                (
                <Row>
                    <img src={this.state.movie.Poster} alt="" className='background'/>
                    <Col xs={12} md={6}>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>{this.state.movie.Title}</h2>
                        <p>({this.state.movie.Year})</p>
                        <ul>
                            <li>
                                <span>Starring :</span>
                                <span>{this.state.movie.Actors}</span>
                            </li>
                            <li>
                                <span></span>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                                <span></span>
                            </li>
                        </ul>
                    </Col>
                </Row>) : <h1>Loading</h1>
                }
                
            </>
        )
    }
}
