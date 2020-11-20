import React from 'react'
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import SingleBook from './SingleBook'
import ShowCase from './ShowCase'

class Home extends React.Component{
    state={
        //Category Info Theme
        infoThemes : [
        {style:{backgroundColor:'#144070'}},
        {style:{backgroundColor:'#c44e00'}},
        {style:{backgroundColor:'#152835'}},
        {style:{backgroundColor:'#a11c33'}},
        {style:{backgroundColor:'#687781'}}],
        // //Category slider Theme
        categoryThemes : [
        {style:{backgroundColor:'#1565b1'}},
        {style:{backgroundColor:'#ee710a'}},
        {style:{backgroundColor:'#354855'}},
        {style:{backgroundColor:'#da2037'}},
        {style:{backgroundColor:'#86929c'}}],
        //Selected Category
        selectedCategory:fantasy,
    }

    changeCat = async (cat)=>{
        this.setState({selectedCategory:cat})
    }

    render(){
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
                        <a href='#allBooks' onClick={this.changeCat(category[index])}>Click Here to see the full collection</a>
                        </div>
                        {cat.map((subCat, index1) => {
                            return (
                            <div className="card" key={index1}>
                            {subCat.map((book, index2)=>{
                                   return <SingleBook book={book} index2={index2}/>
                            })}
                        </div>)
                        })}

                    </div>)
                    })}
                </div>
            </div>
            <ShowCase array={this.state.selectedCategory}/>
        </div>)
    }
}

export default Home