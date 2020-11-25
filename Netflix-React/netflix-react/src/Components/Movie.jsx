import React, { PureComponent } from 'react'
import './Styles/Movie.scss'

export default class Movie extends PureComponent {
    render() {
        let {poster, title, year} = this.props
        return (
            <div className='movie'>
                <img src={poster} alt=""/>
                <div className="movie-info">
                    <p>{title}</p>
                    <p>{year}</p>
                </div>
            </div>
        )
    }
}
