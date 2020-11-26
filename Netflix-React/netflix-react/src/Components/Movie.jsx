import React, { PureComponent } from 'react'
import './Styles/Movie.scss'
import {Link} from 'react-router-dom'

export default class Movie extends PureComponent {
    render() {
        let {poster, title, year, id} = this.props
        return (
            <>
                <Link to={'/Details/'+ id} className='link'>
                    <div className='movie'>
                        <img src={poster} alt=""/>
                        <div className="movie-info">
                            <p>{title}</p>
                            <p>{year}</p>
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}
