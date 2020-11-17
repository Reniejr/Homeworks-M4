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
        let fantasy2 = split(fantasy, 5)
        let history2 = split(history, 5)
        let horror2 = split(horror, 5)
        let romance2 = split(romance, 5)
        let scifi2 = split(scifi, 5)
        let categories = [fantasy2, history2, horror2, romance2, scifi2]
        return <div id="home">
            <div className="slider-prods">
                <div className="ProdsList">
                    {categories.map(cat=>{return<div className="prods">
                        {cat.map(subCat => {return<div className="card">
                            {subCat.map((book, index)=>{
                                return <div className="book" key={index}>
                                <img src={book.img} alt=""/>
                            <p className="title-book">{book.title}</p>
                            <p className="price">{book.price} €</p>
                            <p className="category">{book.category}</p>
                            <p className="asin">{book.asin}</p>
                                </div> 
                            })}
                        </div>
                        })}
                        
                    </div>
                    })}
                </div>
            </div>
        </div>
    }
}

export default Home