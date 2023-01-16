import { Button, Input, Spinner, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Pagelayout from "../PageLayout/PageLayout";
// import { ToastExample } from "./toast";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstname.length > 2 &&
      lastName.length > 2 &&
      password.length > 3 &&
      email.length > 5
    ) {
      let data = { firstname, lastName, password, email };
      axios
        .post("https://troubled-slip-lion.cyclic.app/signup", data)
        .then((res) => {
          // setLoading(false);
          if (res.data === "user already present") {
            toast({
              position: "top",
              title: "Allready Present",
              description: "You allready signup please login",
              status: "error",
              duration: 4000,
              isClosable: true,
            });
          } else if (res.data === "sign up successfully") {
            // setLoading(false);
            toast({
              title: "Account created.",
              description: "Account created ! Please Login",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            navigate("/login");
          }
        })
        .catch((err) => {
          // setLoading(false);
          toast({
            position: "top",
            title: "Please Enter something",
            description: "Some fields are empty",
            status: "warning",
            duration: 6000,
            isClosable: true,
          });
        });
    } else {
      toast({
        position: "top",
        title: "Please Enter something",
        description: "Some fields are empty",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    }
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
