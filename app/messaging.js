import * as messaging from "messaging";
import document from "document";

export default class Messaging {
  static run(battery, date) {
    let background = document.getElementById("background");
    this.battery = battery;
    this.date = date;

    // Message socket opens
    messaging.peerSocket.onopen = () => {
      console.log("App Socket Open");
    };

    // Message socket closes
    messaging.peerSocket.onclose = () => {
      console.log("App Socket Closed");
    };

    messaging.peerSocket.onmessage = evt => {
      console.log("Received message: " + JSON.stringify(evt));
      if (evt.data.newValue) {
        switch (evt.data.key) {
          case "background":
            background.style.fill = JSON.parse(evt.data.newValue);
            break;
          case "hideBattery":
            let hide = evt.data.newValue == "true";
            if (hide) {
              this.battery.disable();
            } else {
              this.battery.enable();
            }
            break;
          case "hideDate":
            let hide = evt.data.newValue == "true";
            if (hide) {
              this.date.disable();
            } else {
              this.date.enable();
            }
            break;
          default:
            return;
        }
      }
    };
  }
}
