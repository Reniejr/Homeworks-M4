import React from 'react'
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';

class Home extends React.Component{
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
        return <div id="home">
            <div className="slider-prods">
                <div className="ProdsList">
                    {categories2.map((cat, index)=>{return<div className="prods" key={index}>
                        <div className="category-info">
                            <h4>{cat[0][0].category}</h4>
                            <p>We have {category[index].length} of {cat[0][0].category} books. Enjoy the collection</p>
                        </div>
                        {cat.map((subCat, index) => {return<div className="card" key={index}>
                            {subCat.map((book, index)=>{
                                return <div className="book" key={index}>
                                <img src={book.img} alt=""/>
                                    <div className="book-info">
                                        <p className="title-book">{book.title}</p>
                                        <p className="price">Price: {book.price} €</p>
                                        <p className="category">Category: {book.category}</p>
                                        <p className="asin">Id: {book.asin}</p>
                                    </div>
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