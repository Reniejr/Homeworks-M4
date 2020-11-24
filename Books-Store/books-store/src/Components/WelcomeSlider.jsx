import React, { PureComponent } from 'react'
import './Styles/Animations.scss'
import './Styles/WelcomeSlider.scss'
import Fantasy from '../Data/Category-Data/fantasy.json'
import History from '../Data/Category-Data/history.json'
import Horror from '../Data/Category-Data/horror.json'
import Romance from '../Data/Category-Data/romance.json'
import Scifi from '../Data/Category-Data/scifi.json'

export default class WelcomeSlider extends PureComponent {
    allCat = [
        Fantasy,
        History,
        Horror,
        Romance,
        Scifi,
    ]


    render() {
        let num = Math.floor(Math.random()*10)
        return (
            <div id='slider'>
                <div className="blurred"></div>
                <div className="blurred"></div>
                <div className="slider-container">
                    {this.allCat.map((cat, index)=>{
                        return(
                            <div className="slide" key={index}>
                                <img src={cat[num].img} alt=""/>
                                <h3>{cat[num].category}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
