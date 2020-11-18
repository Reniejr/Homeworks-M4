import React from 'react'

const ShowCase = ({array})=>{
        return(
            <div id='allBooks'>
                     {{array}.map((book, index)=>{
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
        )
    
    
}

export default ShowCase 