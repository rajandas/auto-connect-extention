import { optionsPageOpened } from "../events/optionsPageOpened";
import { combine, forward, sample } from "effector";
import { renderOptionsPage } from "../effects/renderOptionsPage";

forward({
  from: optionsPageOpened,
  to: renderOptionsPage,
});

sample({
  clock: optionsPageOpened,
  source: combine({
    maximumAutoConnectionsPerSession: 1
  })
});
