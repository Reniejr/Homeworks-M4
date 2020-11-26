import React, { PureComponent } from 'react'
import './Styles/Registration.scss'
import {Container, Form, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Registration extends PureComponent {
    state={
        registration:{
            firstname :'',
            lastname : '',
            email : '',
            password : '',
            birth: '',
            city: '',
            street: '',
            postal: ''

        }
    }

    updateForm=(e)=>{
        let registration = {...this.state.registration}
        let currentId = e.currentTarget.id
        registration[currentId] = e.currentTarget.value;
        this.setState({registration : registration})
        // console.log(this.state.registration)
    }

    check=()=>{
        this.props.account(this.state.registration)
    }

    

    render() {
        return (
            <div id='registration'>
                <Container>
                    <h2>Please Register to make your Account</h2>
                    <Form onSubmit={this.check}>
                        <Row>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label htmlFor="firstname">First Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Your First Name"
                                        minLength='2'
                                        value={this.state.registration.firstName}
                                        onChange={this.updateForm}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="email">E Mail</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        value={this.state.registration.email}
                                        onChange={this.updateForm}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="birth">Birth Year</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="birth"
                                        id="birth"
                                        placeholder="Birth Year"
                                        value={this.state.registration.birth}
                                        onChange={this.updateForm}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="street">Street Addres</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="street"
                                        id="street"
                                        placeholder="Street Address"
                                        value={this.state.registration.street}
                                        onChange={this.updateForm}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label htmlFor="lastname">Last Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        placeholder="Your Last Name"
                                        minLength='3'
                                        value={this.state.registration.lastname}
                                        onChange={this.updateForm}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Your Password"
                                        minLength='8'
                                        value={this.state.registration.password}
                                        onChange={this.updateForm}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="city">City</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="Your City"
                                        value={this.state.registration.city}
                                        onChange={this.updateForm}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="postal">Postal Code</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="postal"
                                        id="postal"
                                        placeholder="Your Postal Code"
                                        minLength='5'
                                        maxLength='5'
                                        value={this.state.registration.postal}
                                        onChange={this.updateForm}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Link to='/Accounts'>
                            <input type="submit" value='Registrate'/>
                        </Link>
                    </Form>
                </Container>
            </div>
        )
    }
}
