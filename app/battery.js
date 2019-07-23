import document from "document";
import { battery } from "power";

export default class Battery {
  constructor() {
    this.element = {
      levels: {
        battery_100: document.getElementById("battery-100"),
        battery_75: document.getElementById("battery-75"),
        battery_50: document.getElementById("battery-50"),
        battery_25: document.getElementById("battery-25")
      },
      text: document.getElementById("battery-txt")
    };
    this.enabled = true;
  }

  enable = () => {
    this.enabled = true;
    this.set();
  };

  disable = () => {
    this.enabled = false;
    this.element.text.text = "";
    this.setLevel();
  };

  set = () => {
    if (!this.enabled) return;

    var charge = Math.floor(battery.chargeLevel);
    if (charge > 75) {
      this.setLevel("battery_100");
    } else if (charge > 50) {
      this.setLevel("battery_75");
    } else if (charge > 25) {
      this.setLevel("battery_50");
    } else {
      this.setLevel("battery_25");
    }

    this.element.text.text = `${charge < 10 ? "0" : ""}${charge}%`;
  };

  setLevel = lvl => {
    for (var level in this.element.levels) {
      this.element.levels[level].style.visibility =
        level == lvl ? "visible" : "hidden";
    }
  };
}
