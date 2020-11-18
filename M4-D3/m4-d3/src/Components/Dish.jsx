import React, { PureComponent } from 'react'
import './Dish.scss'

export default class Dish extends PureComponent {
    render() {
        let {img}=this.props
        let {title}=this.props
        let {description}=this.props
        let {price}=this.props
        return (
            <div className='dish' style={{backgroundImage: `url(${img})`}}>
                <div className="dish-info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>€ {price}</p>
                </div>
            </div>
        )
    }
}
