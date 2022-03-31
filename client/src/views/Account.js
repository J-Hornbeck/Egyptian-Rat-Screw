import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import PlayerJoinGame from "../components/PlayerJoinGame";
import NewGameForm from "../components/NewGameForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import epic from "../static/img/epic.gif";

const Account = (props) => {
  let navigate = useNavigate();
  const { userLoggedIn, setUserLoggedIn } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/account`, {
        // send our cookie along with the axios request
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setFirstName(response.data.queriedUser.firstName);
        setLastName(response.data.queriedUser.lastName);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const handleLogout = (e) => {
    axios
      .get("http://localhost:8000/api/user/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Response: ", res);
        sessionStorage.clear();
        navigate("/login");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  console.log("this is userCredentials", userLoggedIn.userId);

  return (
    <div id="Account" className="page-bg">
      <img className="gif" src={epic} alt="epic" />
      <div className="flex justify-content-between container-sm title">
        <h1 className="text-center">
          Welcome {firstName} {lastName}
        </h1>
        <button
          onClick={() => {
            handleLogout();
          }}
          className="ms-5 btn"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-content-around box-shadow container-sm">
        <Col className="col-4 p-r-25 bg-1">
          <UpdateUser />
        </Col>
        <Col className="col-3 p-r-25 bg-1">
          <PlayerJoinGame />
        </Col>
        <Col className="col-3 p-r-25 bg-1">
          <NewGameForm />
        </Col>
      </div>
    </div>
  );
};

export default Account;
