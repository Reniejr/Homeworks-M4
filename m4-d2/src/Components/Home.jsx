import React from 'react'
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';

class Home extends React.Component{
    state={
        //Category Info Theme 
        infoThemes : [{style:{backgroundColor:'#144070'}},
        {style:{backgroundColor:'#c44e00'}},
        {style:{backgroundColor:'#152835'}},
        {style:{backgroundColor:'#a11c33'}},
        {style:{backgroundColor:'#687781'}}],
        // //Category slider Theme
        categoryThemes : [{style:{backgroundColor:'#1565b1'}},
        {style:{backgroundColor:'#ee710a'}},
        {style:{backgroundColor:'#354855'}},
        {style:{backgroundColor:'#da2037'}},
        {style:{backgroundColor:'#86929c'}}],
        //Selected Category
        selectedCategory: fantasy
    }

    selectCat = (cat)=>{
        console.log(cat)
        this.setState({selectedCategory: cat})
    }
    
    render(){
        // console.log(fantasy)
        // console.log(history)
        // console.log(horror)
        // console.log(romance)
        // console.log(scifi)
        function split(array, length){
            let chunk = [], i=0, n=array.length
            while(i<n){
                chunk.push(array.slice(i, i+=length))
            }
            return chunk
        }

        let fantasy2 = split(fantasy, 5),
        history2 = split(history, 5),
        horror2 = split(horror, 5),
        romance2 = split(romance, 5),
        scifi2 = split(scifi, 5)
        let category = [fantasy, history, horror, romance, scifi]
        let categories2 = [fantasy2, history2, horror2, romance2, scifi2]

        return ( 
        <div id="home">
            <div className="slider-prods">
                <div className="ProdsList">
                    {categories2.map((cat, index)=>{
                        return (
                        <div className="prods" key={index} style={this.state.categoryThemes[index].style}>
                        <div className="category-info" style={this.state.infoThemes[index].style}>
                            <h4>{cat[0][0].category}</h4>
                            <p>We have {category[index].length} of {cat[0][0].category} books. Enjoy the collection</p>
                            <a href='#allBooks' onClick={()=>this.selectCat(category[index])}>Click Here to see the full collection</a>
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
                <h4>{this.state.selectedCategory[0].category}</h4>
                {this.state.selectedCategory.map((book, index)=>{
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