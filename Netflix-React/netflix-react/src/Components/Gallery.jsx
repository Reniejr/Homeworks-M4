import React from 'react'
import Movie from './Movie'
import './Styles/Gallery.scss'
import {Col, Spinner} from 'react-bootstrap'

class Gallery extends React.Component {
    state={
        id:''
    }

    updateId = (newId)=>{
        this.setState({id: newId})
        this.props.id(this.state.id)
    }

    render(){
        const {serie, titles, index, slide, margin, loading} = this.props
        return (
            <div className="gallery-container" key={index}>
                <h4>{titles[index]}</h4>
                <i className="fas fa-chevron-left" onClick={slide}></i>
                <i className="fas fa-chevron-right" onClick={slide}></i>
                <div className='gallery' style={{marginLeft:`${margin}`}}>
                    {loading? [0,1,2,3,4].map((item)=>(
                         <Col key={item}>
                         <Spinner animation="border" variant="light" />
                       </Col>
                    )) : serie.map(movie=>{
                        return(
                            <Movie
                            poster={movie.Poster}
                            title={movie.Title}
                            year={movie.Year}
                            key={movie.imdbID}
                            id={movie.imdbID}
                            />
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}

export default Gallery
