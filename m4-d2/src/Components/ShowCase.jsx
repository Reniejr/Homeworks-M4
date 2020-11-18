import React, {Component} from 'react'
import SingleBook from './SingleBook'
import WarningSign from './WarningSign'

export default class ShowCase extends Component{
    state={array:this.props.array}
    filter=(e)=>{
        let NewArray = this.props.array.filter(book=> book.title.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({array:NewArray})
    }
    render(){
        let {array} = this.state
        return(
            <div id='allBooks'>
                {/* array[0]?=> ? prima di .category controlla se esiste... se non esiste ignora*/}
                <h4>{array[0]?.category}</h4>
                <input type="text" placeholder='Search title book?' id='search' onChange={(e)=>this.filter(e)}/>
                <WarningSign show={array.lenght<=0? true: false}/>
                <div id="show-case">
                {array.map((book, index)=>{
                    return <SingleBook book={book} index2={index}/>
                })}
                </div>
            </div>
        )
    }
}
