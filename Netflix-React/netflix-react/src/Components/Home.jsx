import React, { PureComponent } from 'react'
import './Styles/Home.scss'
import {Alert} from 'react-bootstrap'
import Gallery from './Gallery'
import PosterVid from './PosterVid'

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
        loading: true,
        error: false
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
        .then(()=>setTimeout(()=>{this.setState({loading: false})}, 1000))
        .catch((err) => {
            this.setState({ error: true });
            console.log("An error has occurred:", err);
        });
        console.log(this.showcase)
    }
    
    slide = ()=>{
        this.setState({margin: `-${parseFloat(this.state.margin)+100}%`})
    }

    render() {
        return (
            <div className='home'>
                <PosterVid videoSrc='./assets/Video/video.mp4'/>
                {this.state.error && (
                    <Alert variant="danger" className="text-center">
                    An error has occurred, please try again later
                    </Alert>
                )}
                 {!this.state.error &&
                    (this.props.searchedMovies.length > 0 ||
                    this.props.searchedLoading === true) && (
                    <Gallery
                        titles="Search Results"
                        loading={this.props.searchedLoading}
                        serie={this.props.searchedMovies}
                        margin={this.state.margin}
                        slide={this.slide.bind(this)}
                    />
                    )}
                {!this.state.error && (!this.props.searchedMovies.length > 0 || this.props.searchedLoading === null) &&(
                    <>
                        {this.showcase.map((serie, index)=>{
                    return(
                        <Gallery
                        serie={serie}
                        titles={this.titles}
                        index={index}
                        slide={this.slide.bind(this)}
                        margin={this.state.margin}
                        loading={this.state.loading}
                        key={index}
                        />
                        
                    )
                })}
                    </>
                )}
                
                
            </div>
        )
    }
}
