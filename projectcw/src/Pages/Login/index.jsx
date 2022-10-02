import { Button, color, Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Pagelayout from "../../PageLayout";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ email, password });

    const user = parsedUsers.find((item) => {
      if (item.email === email && item.password === password) {
        return true;
      } else {
        return false;
      }
    });

    if (user && user.password === password) {
      alert("User logged in Successfully");
      navigate("/");
    } else {
      alert("Wrong Details");
    }
  };

  const SavedUser = window.localStorage.getItem("SignupData");
  const parsedUsers = JSON.parse(SavedUser);
  console.log("GetUsers", parsedUsers);

  return (
    <Pagelayout>
      <div>
        <h2 className="login">LOGIN</h2>
        <p style={{ marginTop: "18px", fontWeight: "500" }}>
          Please enter your e-mail and password:
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            w="35%"
            borderColor="black.100"
            p="25px"
            mt="80px"
            borderRadius="50px"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <Input
            w="35%"
            borderColor="black.500"
            p="25px"
            mt="25px"
            borderRadius="50px"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <br />

          <Button
            size="md"
            p="25px"
            width="35%"
            borderRadius="50px"
            border="1px"
            borderColor="black.500"
            backgroundColor="blue"
            color="white"
            mt="25px"
            type="submit"
          >
            LOGIN
          </Button>
        </form>

        <div className="create">
          <p>New customer?</p>
          <Link
            style={{ textDecoration: "underline", marginLeft: "5px" }}
            to="/signup"
          >
            Create an account
          </Link>
        </div>
      </div>
    </Pagelayout>
  );
};

export default Login;
