import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <div>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        textAlign="center"
      />
    </div>
  );
};
export { Loading };
