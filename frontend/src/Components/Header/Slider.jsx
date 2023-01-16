import "./style.css";
import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <p className="Buutoncart" ref={btnRef} onClick={onOpen}>
        Cart
      </p>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>CART</DrawerHeader>
          <h2 className="card1">Your Card Is Empty</h2>
          <Button className="card2">
            <Link to="/cart">START SHOPPING</Link>
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerExample;
