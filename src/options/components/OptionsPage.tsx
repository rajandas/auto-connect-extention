import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { darkChakraTheme } from "../../shared/constants/darkChakraTheme";

export function OptionsPage() {

  return (
    <ChakraProvider theme={darkChakraTheme}>
      <Container backgroundColor="gray.700" padding="5" borderRadius="md" marginY="5">
        <VStack spacing={4} align="stretch">
          <Box>
            <Heading as="h1" size="md">
              LinkedIn AutoConnect Options
            </Heading>
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}
