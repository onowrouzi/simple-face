import document from "document";
import { today } from "user-activity";

export default class CaloriesCounter {
  constructor() {
    this.element = document.getElementById("calories");
  }

  set = () => {
    this.element.text = `${Math.floor(today.adjusted.calories)}`;
  };
}
