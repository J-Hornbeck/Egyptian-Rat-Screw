import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Form, Row, Col, Button } from 'react-bootstrap'


const Login = (props) => {

   const { userLoggedIn, setUserLoggedIn } = props;
   let navigate = useNavigate();

   const [userCredentials, setUserCredentials] = useState({
      email: "",
      password: ""
   });
   const [errorMessages, setErrorMessages] = useState("");

   const loginUser = () => {

      axios.post("http://localhost:8000/api/user/login", userCredentials,
         {
            // this will force the sending of the credentials / cookies so they can be updated
            //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
            //    unless withCredentials is set to true before making the request
            withCredentials: true
         })
         .then((res) => {
            setUserLoggedIn(res.data.userLoggedIn)
            navigate("/account");
         })
         .catch(err => {
            console.log(err.response);
            setUpErrorsMessages(err);
         });
   };

   // ii) Handlers

   const handleChangeInUserFields = (e) => {
      setUserCredentials({
         ...userCredentials,
         [e.target.name]: e.target.value
      });
   }

   const handleLoginForm = (e) => {
      e.preventDefault();
      loginUser();
   }

   // iii) Auxiliar Functions

   const setUpErrorsMessages = (err) => {
      console.log(err)
      setErrorMessages("Invalid Login. Please try again");
   }

   return (
      <div>
         <div className="container-fluid text-center" >
            <h3 className="text-center">Login</h3>
            <Form onSubmit={handleLoginForm} className="my-3">
               <Form.Group as={Row} controlId="email" >
                  <Form.Label column sm={2}>
                     Email
                  </Form.Label>
                  <Col sm={5}>
                     <Form.Control
                        type="email"
                        name="email"
                        placeholder="johndoe@gmail.com"
                        onChange={handleChangeInUserFields}
                        value={userCredentials.email}
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
                        onChange={handleChangeInUserFields}
                        value={userCredentials.password}
                     />
                  </Col>
                     {(errorMessages !== "") &&
                        <div className="text-danger small text-start">{errorMessages}</div>
                     }
                  
               </Form.Group>
               <div className="text-center">
                  <a href="/register" >Create an Account</a>
                  <Button
                     variant="primary"
                     type="submit"
                     size="sm"
                     className="mt-2 px-4"
                  >
                     Login
                  </Button>
               </div>
            </Form>
         </div>
      </div>
   )
}

export default Login;