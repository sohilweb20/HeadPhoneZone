import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <div>
      <Stack textAlign={"center"}>
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    </div>
  );
};
export { Loading };
