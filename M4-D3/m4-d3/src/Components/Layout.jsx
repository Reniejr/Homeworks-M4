import React, { PureComponent } from 'react'
import {Row, Col} from 'react-bootstrap'
import './Layout.scss'
import Menu from './Menu'

export default class Layout extends PureComponent {
    state={style:{opacity:'1'}}

    show = ()=>{
        this.state.style='1'? this.setState({style:{opacity:'0'}}): this.setState({style:{opacity:'1'}})
    }

    render() {
        return (
            <div id='layout'>
                <Row>
                    <Col xs={12}>
                        <h4>Menu</h4>
                    </Col>
                    <Col xs={12}>
                        <h1>Eat Best Food of the World</h1>
                    </Col>
                    <Col xs={12}>
                        <a href="#"> Reserve Table</a>
                        <a href="#" onClick={this.show()}>Browse Menu</a>
                    </Col>
                    <Menu style={this.state.style}/>
                </Row>
            </div>
        )
    }
}
