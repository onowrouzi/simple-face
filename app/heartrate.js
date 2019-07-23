import document from "document";
import { HeartRateSensor } from "heart-rate";
import { BodyPresenceSensor } from "body-presence";

export default class HeartRate {
  constructor() {
    this.element = document.getElementById("heart-rate");
    this.body = new BodyPresenceSensor();
    this.hrm = new HeartRateSensor();

    this.element.text = "---";
    this.body.onreading = this.senseBody;
    this.hrm.onreading = this.setText;
  }

  start = () => {
    this.body.start();
    this.hrm.start();
  };

  stop = () => {
    this.body.stop();
    this.hrm.stop();
  };

  senseBody = () => {
    if (!this.body.present) {
      this.hrm.stop();
      this.element.text = "---";
    } else {
      this.hrm.start();
    }
  };

  setText = () => {
    let bpm =
      this.hrm.heartRate < 100 ? this.hrm.heartRate : " " + this.hrm.heartRate;
    this.element.text = `${bpm}`;
  };
}
