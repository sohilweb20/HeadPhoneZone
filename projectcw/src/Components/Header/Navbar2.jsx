import React from "react";
// import Styles from "./Navbar2.module.css";
// import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  RadioGroup,
  Button,
  Stack,
  useDisclosure,
  Box,
  DrawerCloseButton,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  return (
    <Box className="nav">
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4"></Stack>
      </RadioGroup>
      <Box position={"absolute"} top="20px" right={"10px"}>
        <Button
          colorScheme="rgb(253,253,249)"
          color={"black"}
          border="1px solid black"
          onClick={onOpen}
        >
          <HamburgerIcon />
        </Button>
      </Box>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="rgb(253,253,249)" width={"250px"}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" fontFamily={"cursive"}>
            HeadPhoneZone
          </DrawerHeader>
          <DrawerBody>
            <Box className="Navbar2">
              <Link to="/Shopping">
                <div>
                  <p>Sale</p>
                </div>
              </Link>
              <div>
                <p>Categories</p>
              </div>
              <div>
                <p> Brands</p>
              </div>
              <div>
                <p>Price</p>
              </div>
              <div>
                <p>Deals</p>
              </div>
              <div>
                <p> Events</p>
              </div>
              <div>
                <p>Info</p>
              </div>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/*  */}
    </Box>
  );
};

export default Navbar2;
