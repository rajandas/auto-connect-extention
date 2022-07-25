import React from "react";
import { StartStopButton } from "./StartStopButton";
import { Box, Button, ChakraProvider, Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import { darkChakraTheme } from "../../shared/constants/darkChakraTheme";

export function Popup() {

  return (
    <ChakraProvider theme={darkChakraTheme}>
      <Flex paddingX={5} paddingY={2} backgroundColor="gray.700" align="center" width="260px">
        <Box>
          <Heading size="sm">LinkedIn AutoConnect</Heading>
        </Box>
        <Spacer />
      </Flex>
      <Container padding="5">{<StartStopButton />}</Container>
    </ChakraProvider>
  );
}
