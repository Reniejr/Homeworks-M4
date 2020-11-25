import React, { PureComponent } from 'react'
import './Styles/Movie.scss'

export default class Movie extends PureComponent {
    render() {
        let {poster} = this.props
        return (
            <div className='movie'>
                <img src={poster} alt=""/>
            </div>
        )
    }
}
