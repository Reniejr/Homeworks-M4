import React, { PureComponent } from 'react'
import './Styles/Registration.scss'
import {Container, Form, Col, Row} from 'react-bootstrap'
import Images from '../Data/Images.json'

export default class Registration extends PureComponent {
    forAccount = Images.filter(img=>img.target==='Accounts')
    profile = this.forAccount.filter(img=>img.name==='Profile')

    state={
        registration:{
            firstname :'',
            lastname : '',
            email : '',
            password : '',
            birth: '',
            city: '',
            street: '',
            postal: '',
            credit:'',
        },
        img:'',
        selected:null
    }

    updateForm=(e)=>{
        let registration = {...this.state.registration}
        let currentId = e.currentTarget.id
        registration[currentId] = e.currentTarget.value;
        this.setState({registration : registration})
    }

    check=(event)=>{
        event.preventDefault()
        this.props.makeAccount(this.state.registration, this.state.img)
    }

    selectImg = (src, index)=>{
        this.setState({img: src, selected:index})

    }

    render() {
        const {style} = this.props
        // const selected = this.state.selected? '' : '2px solid green'
        return (
            <div id='registration' style={{display: `${style}`}} >
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
                                        type="number"
                                        name="birth"
                                        id="birth"
                                        placeholder="Birth Year"
                                        value={this.state.registration.birth}
                                        onChange={this.updateForm}
                                        min='1910'
                                        max='2020'
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
                                <Form.Group>
                                    <Form.Label htmlFor="credit">Credit Card</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        name="credit"
                                        id="credit"
                                        placeholder="XXXX XXXX XXXX XXXX"
                                        inputMode='numeric'
                                        pattern='[0-9\s]{13,19}'
                                        maxLength='19'
                                        value={this.state.registration.credit}
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
                                        type="number"
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
                            <div className='profileImg-slider'>
                                <div className="profiles-container">
                                    {this.profile.map((pic, index)=>{
                                        return(
                                            <img
                                            src={`${pic.src}`}
                                            alt='' 
                                            key={index} 
                                            onClick={(e)=>this.selectImg(pic.src, index)}
                                            style={
                                                {
                                                    border : this.state.selected === index ? '2px solid green' : 'none',
                                                    transform : this.state.selected === index ? 'scale(1.2)' : 'none'
                                                }
                                            }
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <input type="submit" value='Registrate'/>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
}
