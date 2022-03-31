import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import PlayerJoinGame from "../components/PlayerJoinGame";
import NewGameForm from "../components/NewGameForm";


const Account = (props) => {
   let navigate = useNavigate();
   const { userLoggedIn, setUserLoggedIn } = props;
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");

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

         })
         .catch((err) => console.log(err.response))
   }, [])


   const handleLogout = (e) => {
      axios.get('http://localhost:8000/api/user/logout', {
         withCredentials: true
      })
         .then(res => {
            console.log("Response: ", res)
            sessionStorage.clear();
            navigate("/login")
         })
         .catch(err => {
            console.log("Error: ", err)
         })
   };

   

   return (
      <div>
         <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Welcome {firstName} {lastName}</h1>
            <button onClick={() => { handleLogout() }}>Logout</button>
         </div>
         <UpdateUser />
         <div style={{ display: "flex", justifyContent: "space-around"}}>
         <PlayerJoinGame />
         <NewGameForm />
         </div>
         
      </div>
      )
}

export default Account;