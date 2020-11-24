import React, { PureComponent } from 'react'
import './Styles/Animations.scss'
import './Styles/SingleBook.scss'

export default class SingleBook extends PureComponent {
    render() {
        let {img} = this.props
        let {title} = this.props
        return (
            <div className='book'>
                <img src={img} alt=""/>
                <p>{title}</p>
                <input type="button" value='Go to Book'/>
            </div>
        )
    }
}
