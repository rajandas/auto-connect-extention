import { forward, sample } from "effector";
import { MessageId } from "../../shared/enums/MessageId";
import { extensionMessageReceived } from "../../shared/events/extensionMessageReceived";
import { buttonClicksCountUpdated } from "../events/buttonClicksCountUpdated";
import { runningStateUpdated } from "../events/runningStateUpdated";

forward({
  from: extensionMessageReceived[MessageId.RunningStateUpdated].map(({ message }) => message.content),
  to: runningStateUpdated,
});

forward({
  from: extensionMessageReceived[MessageId.ButtonClicksCountUpdated].map(({ message }) => message.content),
  to: buttonClicksCountUpdated,
});
