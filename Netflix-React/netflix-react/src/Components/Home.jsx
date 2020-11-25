import React, { PureComponent } from 'react'
import './Styles/Home.scss'
import Movie from './Movie'
import {} from 'react-bootstrap'

export default class Home extends PureComponent {
    url = 'http://www.omdbapi.com/?'
    apikey = 'apikey=ad2a416a'
    titles=['harry potter', 'spider man', 'superman']
    showcase=[]

    state={
        serie1:[],
        serie2:[],
        serie3:[],
        margin: '0',
        loading: true
    }



    componentDidMount = ()=>{
        Promise.all([
            fetch(this.url+this.apikey+'&s='+this.titles[0])
            .then(response => response.json())
            .then(result=>{
                this.setState({serie1:result.Search})
                this.showcase.push(this.state.serie1)
            }),
            fetch(this.url+this.apikey+'&s='+this.titles[1])
            .then(response => response.json())
            .then(result=>{
                this.setState({serie2:result.Search})
                this.showcase.push(this.state.serie2)
            }),
            fetch(this.url+this.apikey+'&s='+this.titles[2])
            .then(response => response.json())
            .then(result=>{
                this.setState({serie3:result.Search})
                this.showcase.push(this.state.serie3)
            })
        ])
        console.log(this.showcase)
    }
    
    slide = ()=>{
        this.setState({margin: `-${parseFloat(this.state.margin)+100}%`})
    }

    render() {
        return (
            <div className='home'>
                {this.showcase.map((serie, index)=>{
                    return(
                        <div className="gallery-container" key={index}>
                            <h4>{this.titles[index]}</h4>
                            <i className="fas fa-chevron-left" onClick={this.slide.bind(this)}></i>
                            <i className="fas fa-chevron-right" onClick={this.slide.bind(this)}></i>
                            <div className='gallery' style={{marginLeft:`${this.state.margin}`}}>
                                {serie.map(movie=>{
                                    return(
                                    <Movie poster={movie.Poster} title={movie.Title} year={movie.Year} key={movie.imdbID}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                {/* <div className='gallery'>
                {this.state.serie1.map(movie=>{
                    return(
                        <Movie poster={movie.Poster} key={movie.imdbID}/>
                    )
                })}
                </div> */}
            </div>
        )
    }
}
