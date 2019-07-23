import document from "document";
import * as util from "../common/utils";
import { preferences } from "user-settings";

export default class TimeDisplay {
  constructor() {
    this.element = document.getElementById("time");
  }

  set = evt => {
    let today = evt.date;
    let hours = today.getHours();
    hours =
      preferences.clockDisplay === "12h"
        ? hours % 12 || 12
        : util.zeroPad(hours);
    let mins = util.zeroPad(today.getMinutes());
    this.element.text = `${hours}:${mins}`;
  };
}
