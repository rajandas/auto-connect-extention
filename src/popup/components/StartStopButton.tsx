import React from "react";
import { useStore } from "effector-react";
import { Text, Button, CircularProgress, CircularProgressLabel, Box, VStack } from "@chakra-ui/react";
import { stopButtonClicked } from "../events/stopButtonClicked";
import { startButtonClicked } from "../events/startButtonClicked";
import { isAutoConnectionRunningStore } from "../stores/isAutoConnectionRunningStore";
import { buttonClicksCountStore } from "../stores/buttonClicksCountStore";

export function StartStopButton() {
  const isAutoConnectionRunning = useStore(isAutoConnectionRunningStore);
  const buttonClicksCount = useStore(buttonClicksCountStore);
  const maximumAutoConnectionsPerSession = 10;

  return (
    <VStack spacing="3">
      <Box>
        <Text fontSize="18px">Invitations Sent</Text>
      </Box>
      <Box>
        <CircularProgress
          value={(buttonClicksCount / Number(maximumAutoConnectionsPerSession)) * 100}
          color="green.400"
          size="100px"
        >
          <CircularProgressLabel>{buttonClicksCount}</CircularProgressLabel>
        </CircularProgress>
      </Box>
      <Box>
        <Button
          colorScheme={isAutoConnectionRunning ? "red" : "green"}
          onClick={() => (isAutoConnectionRunning ? stopButtonClicked() : startButtonClicked())}
          isFullWidth
        >
          {isAutoConnectionRunning ? "STOP" : "START"} CONNECTING
        </Button>
      </Box>
    </VStack>
  );
}
