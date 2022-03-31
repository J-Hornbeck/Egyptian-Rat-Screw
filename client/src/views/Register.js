import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import epic from "../static/img/epic.gif";

import { Form, Row, Col, Button } from "react-bootstrap";

import _ from "lodash";
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
        password: "",
    });
    const [errors, setErrors] = useState({});

    const loginUser = (email, password) => {
        console.log(userCredentials);
        axios
            .post(
                "http://localhost:8000/api/user/login",
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res);
                setUserLoggedIn(res.data.userLoggedIn);
                navigate("/account");
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/user/register",
                {
                    firstName,
                    lastName,
                    email,
                    address,
                    city,
                    state,
                    password,
                    confirmPassword,
                },
                {
                    // this will force the sending of the credentials / cookies so they can be updated
                    // XMLHttpRequest from a different domain cannot set cookie values for their own domain
                    // unless withCredentials is set to true before making the request
                    withCredentials: true,
                }
            )
            .then((res) => {
                // when we successfully created the account, reset state for registration form
                // We do this if we are NOT navigating automatically away from the page
                setUserCredentials({
                    email: email,
                    password: password,
                });
                loginUser(email, password);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <>
            <div id="Register" className="page-bg">
                <img className="gif" src={epic} alt="epic" />
                <h1 className="title">Register</h1>
                <div className="flex justify-content-around box-shadow container-sm">
                    <Form onSubmit={handleSubmit} className="col-4 p-r-25 bg-1 py-4 ps-3">
                        <Form.Group as={Row} controlId="firstName">
                        {errors.firstName ? <p style = {{color: "white"}}>{errors.firstName.message}</p> : null}
                            <Form.Label column sm={4}>
                                First Name
                            </Form.Label>
                            <Col>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="lastName">
                        {errors.lastName ? <p style = {{color: "white"}}>{errors.lastName.message}</p> : null}
                            <Form.Label column sm={4}>
                                Last Name
                            </Form.Label>
                            <Col>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="email">
                        {errors.email ? <p style = {{color: "white"}}>{errors.email.message}</p> : null}
                            <Form.Label column sm={4}>
                                Email
                            </Form.Label>
                            <Col>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="johndoe@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="address">
                        {errors.address ? <p style = {{color: "white"}}>{errors.address.message}</p> : null}
                            <Form.Label column sm={4}>
                                Address
                            </Form.Label>
                            <Col>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="city">
                        {errors.city ? <p style = {{color: "white"}}>{errors.city.message}</p> : null}
                            <Form.Label column sm={4}>
                                City
                            </Form.Label>
                            <Col>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="state">
                        {errors.state ? <p style = {{color: "white"}}>{errors.state.message}</p> : null}
                            <Form.Label column sm={4}>
                                State
                            </Form.Label>
                            <Col>
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="password">
                        {errors.password ? <p style = {{color: "white"}}>{errors.password.message}</p> : null}
                            <Form.Label column sm={4}>
                                Password
                            </Form.Label>
                            <Col>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="confirmPassword">
                        {errors.confirmPassword ? <p style = {{color: "white"}}>{errors.confirmPassword.message}</p> : null}
                            <Form.Label column sm={4}>
                                Confirm Password
                            </Form.Label>
                            <Col>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <div className="text-center">
                            <a href="/login">Already have an account? Login</a>
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
        </>
    );
};

export default Register;
