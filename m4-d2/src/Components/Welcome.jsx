import React, {Component} from 'react';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';

class Welcome extends Component {
    render(){
        return <div className='slider'>
            <div className='locandina'>
                <h3>{this.props.title}</h3>
                <p>{this.props.message}</p>
            </div>
        <div className='slider-container'>
            <div className="slide" key={fantasy[0].asin}>
                 <img src={fantasy[0].img} alt=""/>
                 <div className="title">
                    <h4>{fantasy[0].category}</h4>
                 </div>
            </div>
            <div className="slide" key={history[0].asin}>
                 <img src={history[0].img} alt=""/>
                 <div className="title">
                    <h4>{history[0].category}</h4>
                 </div>
            </div>
            <div className="slide" key={horror[0].asin}>
                 <img src={horror[0].img} alt=""/>
                 <div className="title">
                    <h4>{horror[0].category}</h4>
                 </div>
            </div>
            <div className="slide" key={romance[0].asin}>
                 <img src={romance[0].img} alt=""/>
                 <div className="title">
                    <h4>{romance[0].category}</h4>
                 </div>
            </div>
            <div className="slide" key={scifi[0].asin}>
                 <img src={scifi[0].img} alt=""/>
                 <div className="title">
                    <h4>{scifi[0].category}</h4>
                 </div>
            </div>
        </div>
    </div> 
    }
}

export default Welcome