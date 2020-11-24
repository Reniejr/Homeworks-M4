import React, { PureComponent } from 'react'
import './Styles/Home.scss'
import WelcomeSlider from './WelcomeSlider'
import Fantasy from '../Data/Category-Data/fantasy.json'
import History from '../Data/Category-Data/history.json'
import Horror from '../Data/Category-Data/horror.json'
import Romance from '../Data/Category-Data/romance.json'
import Scifi from '../Data/Category-Data/scifi.json'
import SingleBook from './SingleBook'

export default class Home extends PureComponent {
    
    fantasy= {
        background: '50, 160, 81',
        color: '#0e6f39',
        sliderBg: '106, 192, 122' 
    }
    history= {
        background: '255, 193, 50',
        color: '#cd822d',
        sliderBg: '255, 211, 110' 
    }
    horror= {
        background: '53, 72, 85',
        color: '#152835',
        sliderBg: '85, 105, 118' 
    }
    romance= {
        background: '218, 32, 55',
        color: '#a11c33',
        sliderBg: '238, 64, 74' 
    }
    scifi= {
        background: '21, 101, 177',
        color: '#144070',
        sliderBg: '50, 162, 219' 
    }

    colorThemes=[this.fantasy, this.history, this.horror, this.romance, this.scifi]


    allCat = [
        Fantasy,
        History,
        Horror,
        Romance,
        Scifi,
    ]
    render() {
        return (
            <div id='home'>
                <WelcomeSlider/>
                {this.allCat.map((cat, index)=>{
                    return(
                        <div className='slider-container' 
                        style={{backgroundColor:`rgba(${this.colorThemes[index].sliderBg}, 0.5)`}}
                        key={index}
                        >
                            <div className="cat-info" style={{backgroundColor:`rgba(${this.colorThemes[index].background}, 0.7)`}}>
                                <h4>{cat[0].category}</h4>
                                <p>We have {cat.length} of {cat[0].category} books.</p>
                            </div>
                            <div className='category-slider' key={index}>
                                {cat.slice(0, 10).map(book=>{
                                    return(
                                        <SingleBook img={book.img} title={book.title} key={book.asin}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
