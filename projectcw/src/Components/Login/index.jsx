import { Button, Input, useToast } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Pagelayout from "../PageLayout/PageLayout";
import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginRequest } from "../../Redux/AuthReducer/action";
const Login = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const place = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 5 && password.length > 2) {
      dispatch(LoginRequest({ email, password })).then((res) => {
        console.log("RES", res);
        if (res.payload.msg === "Login successfull") {
          toast({
            position: "top",
            title: "Login Successfully",
            description: "Have a nice day !",
            status: "success",
            duration: 6000,
            isClosable: true,
          });
          navigate(place, { replace: true });
        } else {
          toast({
            position: "top",
            title: "Login failed",
            description: "wron password",
            status: "warning",
            duration: 6000,
            isClosable: true,
          });
        }
      });
    } else {
      // setLoading(false);
      toast({
        position: "top",
        title: "Please Enter something",
        description: "Some fields are empty",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
    }
  };

  // const SavedUser = window.localStorage.getItem("SignupData");
  // const parsedUsers = JSON.parse(SavedUser);
  // console.log("GetUsers", parsedUsers);

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
