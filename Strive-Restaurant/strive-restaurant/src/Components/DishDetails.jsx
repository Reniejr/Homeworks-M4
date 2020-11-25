import React, { PureComponent } from 'react'
import './Styles/DishDetails.scss'
import{Container, Row, Col, Badge} from 'react-bootstrap'
import mains from '../Data/menu.json'

class DishDetails extends PureComponent {
    state={
        dish:null,
        badgeBg:null
    }

    componentDidMount(){
        let dishId = this.props.match.params.id
        let selected = mains.find(dish=>dish.id.toString()===dishId)
        this.setState({dish: selected})
        console.log(this.state.dish)
    }
    
    render() {
        console.log(this.props)
        return (    
            <Container className='dish'>
                {this.state.dish &&
                    <>
                    <Row>
                        <Col xs={12} md={6}>
                            <img src={'/' + this.state.dish.image} alt=""/>
                        </Col>
                        <Col xs={12} md={6}>
                            <h3>{this.state.dish.name}</h3>
                            <Badge variant='warning' className='label'>{this.state.dish.label}</Badge>
                            <p>Category: {this.state.dish.category}</p>
                            <h6>Description :</h6>
                            <p>{this.state.dish.description}</p>
                            <p>{this.state.dish.price} € <Badge variant='danger'>ONLY</Badge></p>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                    </>
                }{!this.state.dish && <h1>Loading...</h1>}
            </Container>
        )
    }
}
export default DishDetails