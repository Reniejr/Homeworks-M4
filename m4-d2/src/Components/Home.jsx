import React from 'react'
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';

class Home extends React.Component{
    render(){
        console.log(history)
        function split(array, length){
            let chunk = [], i=0, n=array.length
            while(i<n){
                chunk.push(array.slice(i, i+=length))
            }
            return chunk
        }
        console.log(split(fantasy, 5))
        return <div id="home">
            <div className="slider-prods">
                <div className="ProdsList">
                    <div className="prods">
                        <div className="card">
                            {fantasy.slice(0,5).map((book, index)=>{
                                return <div className="book" key={index}>
                                <img src={book.img} alt=""/>
                            <p className="title-book">{book.title}</p>
                            <p className="price">{book.price} €</p>
                            <p className="category">{book.category}</p>
                            <p className="asin">{book.asin}</p>
                                </div> 
                            })}
                        </div>
                    </div>
                    <div className="prods">
                        <div className="card">
                            {history.slice(0,5).map((book, index)=>{
                                return <div className="book" key={index}>
                                <img src={book.img} alt=""/>
                            <p className="title-book">{book.title}</p>
                            <p className="price">{book.price} €</p>
                            <p className="category">{book.category}</p>
                            <p className="asin">{book.asin}</p>
                                </div> 
                            })}
                        </div>
                    </div>
                    <div className="prods">
                        <div className="card">
                            {horror.slice(0,5).map((book, index)=>{
                                return <div className="book" key={index}>
                                <img src={book.img} alt=""/>
                            <p className="title-book">{book.title}</p>
                            <p className="price">{book.price} €</p>
                            <p className="category">{book.category}</p>
                            <p className="asin">{book.asin}</p>
                                </div> 
                            })}
                        </div>
                    </div>
                    <div className="prods">
                        <div className="card">
                            {romance.slice(0,5).map((book, index)=>{
                                return <div className="book" key={index}>
                                <img src={book.img} alt=""/>
                            <p className="title-book">{book.title}</p>
                            <p className="price">{book.price} €</p>
                            <p className="category">{book.category}</p>
                            <p className="asin">{book.asin}</p>
                                </div> 
                            })}
                        </div>
                    </div>
                    <div className="prods">
                        <div className="card">
                            {scifi.slice(0,5).map((book, index)=>{
                                return <div className="book" key={index}>
                                <img src={book.img} alt=""/>
                            <p className="title-book">{book.title}</p>
                            <p className="price">{book.price} €</p>
                            <p className="category">{book.category}</p>
                            <p className="asin">{book.asin}</p>
                                </div> 
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home