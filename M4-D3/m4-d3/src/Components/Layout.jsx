import React, { PureComponent } from 'react'
import {Row, Col} from 'react-bootstrap'
import './Layout.scss'

export default class Layout extends PureComponent {
    state={style:{opacity:'1'}}

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
                        <a href="#menu">Browse Menu</a>
                    </Col>
                </Row>
            </div>
        )
    }
}
