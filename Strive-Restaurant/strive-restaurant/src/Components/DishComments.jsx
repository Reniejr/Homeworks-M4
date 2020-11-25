import React, { PureComponent } from 'react'
import './Styles/DishComments.scss'

export default class DishComments extends PureComponent {
    state={
        comments:this.props.dish.comments
    }

    array=[]

    componentDidMount=()=>{
        this.setState({comments: []})
    }


    componentDidUpdate = (prevState)=>{
        let dish= this.props.dish
        this.setState({comments: dish.comments})
        if(prevState.comments !== this.state.comments){
            console.log('prev=', prevState.comments, 'new=', this.state.comments)
            this.array=this.state.comments
        }
    }

    render() {
        let {dish}=this.props
        return (
            <div className='comments'>
                <h4>{dish.name}</h4>
                {this.array.map((comment, index)=>{
                    return(
                        <div key={index}>
                            <p>{comment.author}</p>
                            <p>{comment.comment}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
