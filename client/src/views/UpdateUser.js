import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


const UpdateUser = () =>{
   let navigate = useNavigate();
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [city, setCity] = useState("");
   const [state, setState] = useState("");

   useEffect(() => {
      axios
         .get(`http://localhost:8000/api/user/account`, {
            // send our cookie along with the axios request
            withCredentials: true
         })
         .then((response) => {
            console.log(response);
            setFirstName(response.data.queriedUser.firstName)
            setLastName(response.data.queriedUser.lastName)
            setEmail(response.data.queriedUser.email)
            setAddress(response.data.queriedUser.address)
            setCity(response.data.queriedUser.city)
            setState(response.data.queriedUser.state)

         })
         .catch((err) => console.log(err.response))
   }, [])


   const handleSubmit = (e) => {
      e.preventDefault();
      axios
         .post(`http://localhost:8000/api/user/update`, {
            firstName,
            lastName,
            email,
            address,
            city,
            state
         })
         .then((response) => {
            console.log(response);
            navigate("/account");
         })
         .catch((err) => console.log(err.response))
   }

   return(
      <div>
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
                        placeholder= {firstName}
                        value = {firstName}
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
                        value = {lastName}
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
                        value = {email}
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
                        value = {address}
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
                        value = {city}
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
                        value = {state}
                        onChange={(e) => setState(e.target.value)}
                     />
                  </Col>
               </Form.Group>
               <div className="text-center">
                  <Button
                     variant="primary"
                     type="submit"
                     size="sm"
                     className="mt-2 px-4"
                  >
                     Update
                  </Button>
               </div>
            </Form>
         </div>
      </div>
   )
}

export default UpdateUser