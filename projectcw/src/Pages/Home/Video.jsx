import { Box } from "@chakra-ui/react";

export default function Video() {
  return (
    <>
      <Box
        allowFullScreen
        w="100%"
        h="600px"
        mt="60px"
        as="iframe"
        src="https://player.vimeo.com/video/681364200?autoplay=1&autopause=1&background=1&loop=1&muted=1&transparent=0&responsive=1&portrait=0&title=0&byline=0&color=444444"
        title="ankur"
        allow="autoplay"
      ></Box>
    </>
  );
}
