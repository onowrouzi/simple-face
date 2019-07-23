import { goals, today } from "user-activity";
import document from "document";

export default class StepsCounter {
  constructor() {
    this.element = document.getElementById("steps");
    this.showGoalSteps = false;
  }

  set = () => {
    let stepsString =
      goals.steps && this.showGoalSteps
        ? `${today.adjusted.steps}/${goals.steps}`
        : `${today.adjusted.steps}`;
    this.element.text = stepsString;
  };
}
