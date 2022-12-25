import { Button, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Pagelayout from "../PageLayout/PageLayout";
import { ToastExample } from "./toast";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  const handleSubmit = () => {
    const payload = {
      firstname,
      lastName,
      email,
      password,
    };

    fetch("http://localhost:7005/Signup", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        <ToastExample />;

        navigator("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Pagelayout>
      <div>
        <h2 className="login">REGISTER</h2>
        <p style={{ marginTop: "18px", fontWeight: "500" }}>
          Please fill in the fields below:
        </p>
        <form>
          <Input
            w="35%"
            borderColor="black.100"
            p="25px"
            mt="80px"
            borderRadius="50px"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <Input
            w="35%"
            borderColor="black.500"
            p="25px"
            mt="25px"
            borderRadius="50px"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <Input
            w="35%"
            borderColor="black.500"
            p="25px"
            mt="25px"
            borderRadius="50px"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
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
            onClick={handleSubmit}
          >
            CREATE ACCOUNT
          </Button>
        </form>

        <div style={{ marginBottom: "100px" }} className="create">
          <p>Already have an account?</p>
          <Link
            style={{ textDecoration: "underline", marginLeft: "5px" }}
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </Pagelayout>
  );
};

export default Signup;
