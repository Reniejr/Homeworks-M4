import React, { PureComponent } from 'react'
import './Menu.scss'
import './Dish.scss'
import {Container, Row} from 'react-bootstrap'
import Dish from './Dish'
import menu from '../data/menu.json'

export default class Menu extends PureComponent {

    render() {
        console.log(menu)
        return (
            <Container id='menu'>
                <h1>The Best {menu[0].category}</h1>
                <Row>
                    {menu.map((dish, index)=>{
                        return(
                            <Dish img={dish.image} title={dish.name} description={dish.description} price={dish.price} key={index}/>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}
