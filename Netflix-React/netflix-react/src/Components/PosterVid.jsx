import React, { PureComponent } from 'react'
import './Styles/PosterVid.scss'

export default class PosterVid extends PureComponent {
    render() {
        let {videoSrc} = this.props
        return (
            <div className='poster-vid'>
                <video src={videoSrc} autoPlay loop muted></video>
            </div>
        )
    }
}
