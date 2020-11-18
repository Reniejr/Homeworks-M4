import React, {Component} from 'react'
import MyBadge from './MyBadge'

export default class SingleBook extends Component{
    state={
        selected: false,
    }
    select = ()=>{
        this.setState({selected : !this.state.selected})
        console.log(this.state)
    }
    render(){
        let {book} = this.props
        let {index2} = this.props
        return (
            <div className={`book ${this.state.selected?"selected": ""}` } key={index2} onClick={()=>this.select()}>
            <img src={book.img} alt=""/>
                <div className="book-info">
                    <p className="title-book">{book.title}</p>
                    <p className="price">Price: {book.price} €</p>
                    <p className="category">Category: {book.category}</p>
                    <p className="asin">Id: {book.asin}</p>
                </div>
            <MyBadge category={book.category}/>
            </div>) 
    }
    
}