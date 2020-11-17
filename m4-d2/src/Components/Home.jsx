import React from 'react'
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';

class Home extends React.Component{
    state=[
        //Category Info Theme 
        [{style:{backgroundColor:'#144070'}},
        {style:{backgroundColor:'#c44e00'}},
        {style:{backgroundColor:'#152835'}},
        {style:{backgroundColor:'#a11c33'}},
        {style:{backgroundColor:'#687781'}}],
        //Category slider Theme
        [{style:{backgroundColor:'#1565b1'}},
        {style:{backgroundColor:'#ee710a'}},
        {style:{backgroundColor:'#354855'}},
        {style:{backgroundColor:'#da2037'}},
        {style:{backgroundColor:'#86929c'}}]
        
    ]
    
    render(){
        console.log(fantasy)
        console.log(history)
        console.log(horror)
        console.log(romance)
        console.log(scifi)
        function split(array, length){
            let chunk = [], i=0, n=array.length
            while(i<n){
                chunk.push(array.slice(i, i+=length))
            }
            return chunk
        }

        let fantasy2 = split(fantasy, 5)
        let history2 = split(history, 5)
        let horror2 = split(horror, 5)
        let romance2 = split(romance, 5)
        let scifi2 = split(scifi, 5)
        let category = [fantasy, history, horror, romance, scifi]
        let categories2 = [fantasy2, history2, horror2, romance2, scifi2]

        // const listOfBooks = (array)=>{
        //     return (
        //         <div id='allBooks'>
        //         {array.map((book, index)=>{
        //             return(
        //                 <div className='card-book' key={index}>
        //                     <img src={book.img} alt=""/>
        //                     <div className="book-info">
        //                         <p className="title-book">{book.title}</p>
        //                         <p className="price">Price: {book.price} €</p>
        //                         <p className="category">Category: {book.category}</p>
        //                         <p className="asin">Id: {book.asin}</p>
        //                     </div>
        //                 </div>
        //             )
        //         })}  
        //     </div>
        //     )
        // }

        return ( 
        <div id="home">
            <div className="slider-prods">
                <div className="ProdsList">
                    {categories2.map((cat, index)=>{
                        return (
                        <div className="prods" key={index} style={this.state[1][index].style}>
                        <div className="category-info" style={this.state[0][index].style}>
                            <h4>{cat[0][0].category}</h4>
                            <p>We have {category[index].length} of {cat[0][0].category} books. Enjoy the collection</p>
                        </div>
                        {cat.map((subCat, index1) => {
                            return ( 
                            <div className="card" key={index1}>
                            {subCat.map((book, index2)=>{
                                return (
                                <div className="book" key={index2}>
                                <img src={book.img} alt=""/>
                                    <div className="book-info">
                                        <p className="title-book">{book.title}</p>
                                        <p className="price">Price: {book.price} €</p>
                                        <p className="category">Category: {book.category}</p>
                                        <p className="asin">Id: {book.asin}</p>
                                    </div>
                                </div>) 
                            })}
                        </div>)
                        })}
                        
                    </div>)
                    })}
                </div>
            </div>
            <div id='allBooks'>
                {fantasy.map((book, index)=>{
                    return(
                        <div className='card-book' key={index}>
                            <img src={book.img} alt=""/>
                            <div className="book-info">
                                <p className="title-book">{book.title}</p>
                                <p className="price">Price: {book.price} €</p>
                                <p className="category">Category: {book.category}</p>
                                <p className="asin">Id: {book.asin}</p>
                            </div>
                        </div>
                    )
                })}  
            </div>
        </div>)
    }
}

export default Home