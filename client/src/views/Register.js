import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import { Form, Row, Col, Button } from 'react-bootstrap'


import _ from 'lodash';
import axios from "axios";

const Register = (props) => {
    let navigate = useNavigate();

    const { userLoggedIn, setUserLoggedIn } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    });
    const [errorMessages, setErrorMessages] = useState("");

    const loginUser = (email, password) => {
        console.log(userCredentials)
        axios.post("http://localhost:8000/api/user/login", {
            email,
            password
        },
            {
                withCredentials: true
            })
            .then((res) => {
                console.log(res)
                setUserLoggedIn(res.data.userLoggedIn)
                navigate("/account");
            })
            .catch(err => {
                console.log(err.response);
                setUpErrorsMessages(err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/register", {
            firstName,
            lastName,
            email,
            address,
            city,
            state,
            password,
            confirmPassword
        },
            {
                // this will force the sending of the credentials / cookies so they can be updated
                // XMLHttpRequest from a different domain cannot set cookie values for their own domain 
                // unless withCredentials is set to true before making the request
                withCredentials: true,
            })
            .then(res => {
                // when we successfully created the account, reset state for registration form
                // We do this if we are NOT navigating automatically away from the page
                setUserCredentials({
                    email: email,
                    password: password
                })
                loginUser(email, password);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
            });
    }

    const setUpErrorsMessages = (err) => {
        console.log(err)
        setErrorMessages("Invalid Registration. Please try again");
    }


    return (<>
        <div className="text-center">
            <h1>Register</h1>
            <div className="text-center">
                <Form onSubmit={handleSubmit} className="my-3">
                <Form.Group as={Row} controlId="firstName" >
                        <Form.Label column sm={2}>
                            First Name
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="lastName" >
                        <Form.Label column sm={2}>
                            Last Name
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="email" >
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="address" >
                        <Form.Label column sm={2}>
                        Address
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="text"
                                name="address"
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="city" >
                        <Form.Label column sm={2}>
                        City
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="text"
                                name="city"
                                placeholder="City"
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="state" >
                        <Form.Label column sm={2}>
                        State
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="text"
                                name="state"
                                placeholder="State"
                                onChange={(e) => setState(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="password" >
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="confirmPassword" >
                        <Form.Label column sm={2}>
                            Confirm Password
                        </Form.Label>
                        <Col sm={5}>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {(errorMessages !== "") &&
                            <div className="text-danger small text-start">{errorMessages}</div>
                        }
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <a href="/login" >Already have an account? Login</a>
                        <Button
                            variant="primary"
                            type="submit"
                            size="sm"
                            className="mt-2 px-4"
                        >
                            Register
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    </>)
}

export default Register;