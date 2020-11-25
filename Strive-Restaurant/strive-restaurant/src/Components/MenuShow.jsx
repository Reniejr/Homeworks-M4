import React, { PureComponent } from 'react'
import './Styles/MenuShow.scss'
import menuList from '../Data/menu.json'
import DishComments from './DishComments'
import {Link} from 'react-router-dom'

export default class MenuShow extends PureComponent {
    state={
        selected:{},
        display: true
    }

    select = (e, dish)=>{
        this.setState({selected : e})
        this.setState({display: false})
    }

    render() {
        let showComment = this.state.display? 'none' : 'block'
        console.log(this.props)
        return (
            <div id='menu'>
                <div id='menu-show'>
                    <h2>The best pasta only for you</h2>
                    <p>Click on image to see comments</p>
                    <div className="poster">
                        {menuList.map(dish=>{
                            return(
                                <div className="card" key={dish.id} onClick={this.select.bind(this, dish)}>
                                    <img src={dish.image} alt=""/>
                                    <div className="dish-info" >
                                        <p>{dish.name}</p>
                                        <p>{dish.description}</p>
                                        <input type="button" value='Wanna This?'
                                        onClick={()=>this.props.history.push('/Details/' + dish.id)}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="comments-area" style={{display:`${showComment}`}}>
                        <h5>Comments</h5>
                        <DishComments dish={this.state.selected}/>
                    </div>
                </div>
            </div>
        )
    }
}
