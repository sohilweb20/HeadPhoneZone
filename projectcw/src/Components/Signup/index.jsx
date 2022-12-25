import { Button, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagelayout from "../PageLayout/PageLayout";

const Signup = () => {
  const [form, setForm] = useState([]);
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm((prevform) => [...prevform, initialValues]);
  };

  useEffect(() => {
    localStorage.setItem("SignupData", JSON.stringify(form));
  }, [form]);

  return (
    <Pagelayout>
      <div>
        <h2 className="login">REGISTER</h2>
        <p style={{ marginTop: "18px", fontWeight: "500" }}>
          Please fill in the fields below:
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            w="35%"
            borderColor="black.100"
            p="25px"
            mt="80px"
            borderRadius="50px"
            placeholder="First Name"
            value={initialValues.firstName}
            onChange={(e) =>
              setInitialValues({ ...initialValues, firstName: e.target.value })
            }
          />
          <br />
          <Input
            w="35%"
            borderColor="black.500"
            p="25px"
            mt="25px"
            borderRadius="50px"
            placeholder="Last Name"
            value={initialValues.lastName}
            onChange={(e) =>
              setInitialValues({ ...initialValues, lastName: e.target.value })
            }
          />
          <br />
          <Input
            w="35%"
            borderColor="black.500"
            p="25px"
            mt="25px"
            borderRadius="50px"
            placeholder="Email"
            value={initialValues.email}
            onChange={(e) =>
              setInitialValues({ ...initialValues, email: e.target.value })
            }
          />
          <br />
          <Input
            w="35%"
            borderColor="black.500"
            p="25px"
            mt="25px"
            borderRadius="50px"
            placeholder="Password"
            value={initialValues.password}
            onChange={(e) =>
              setInitialValues({ ...initialValues, password: e.target.value })
            }
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
