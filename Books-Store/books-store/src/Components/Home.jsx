import React, { PureComponent } from 'react'
import './Styles/Home.scss'
import WelcomeSlider from './WelcomeSlider'
import Fantasy from '../Data/Category-Data/fantasy.json'
import History from '../Data/Category-Data/history.json'
import Horror from '../Data/Category-Data/horror.json'
import Romance from '../Data/Category-Data/romance.json'
import Scifi from '../Data/Category-Data/scifi.json'

export default class Home extends PureComponent {
    allCat = [
        Fantasy,
        History,
        Horror,
        Romance,
        Scifi,
    ]
    render() {
        return (
            <div>
                <WelcomeSlider/>
            </div>
        )
    }
}
