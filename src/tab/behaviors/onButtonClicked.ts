import randomInt from "random-int";
import { buttonClicked } from "../events/buttonClicked";
import { dismissSendInviteDialog } from "../effects/dismissSendInviteDialog";
import { combine, guard, sample } from "effector";
import { delayNextClick } from "../effects/delayNextClick";
import { stopped } from "../events/stopped";
import { buttonClicksCountStore } from "../stores/buttonClicksCountStore";

sample({ clock: buttonClicked, target: dismissSendInviteDialog });

sample({
  clock: buttonClicked,
  fn: () => randomInt(1500, 3000),
  target: delayNextClick,
});

guard({
  clock: buttonClicked,
  source: combine({
    buttonClicksCount: buttonClicksCountStore,
    maximumAutoConnectionsPerSession: 10,
  }),
  filter: ({ buttonClicksCount, maximumAutoConnectionsPerSession }) =>
    buttonClicksCount >= Number(maximumAutoConnectionsPerSession),
  target: stopped,
});
