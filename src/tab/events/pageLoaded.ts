import { split } from "effector";
import { LinkedInUrl } from "../../shared/enums/LinkedInUrl";
import { windowLocationUpdated } from "./windowLocationUpdated";

export const {
  searchPageLoaded,
  __: unidentifiedPageLoaded,
} = split(windowLocationUpdated, {
  searchPageLoaded: (windowLocation) => windowLocation.includes(LinkedInUrl.PatternOfSearchPage),
});
