import { env } from "./env.js";

console.log(env);

import * as weather from "fitbit-weather/companion";
import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { me } from "companion";

if (me.launchReasons.settingsChanged) {
  restoreSettings();
}

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Restoring settings");
  restoreSettings();
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  //
};

// A user changes settings
settingsStorage.onchange = evt => {
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  sendVal(data);
};

// Restore any previously saved settings and send to the device
function restoreSettings() {
  for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key) {
      let data = {
        key: key,
        newValue: settingsStorage.getItem(key)
      };
      sendVal(data);
    }
  }
}

// Send data to device using Messaging API
function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}

weather.setup({
  provider: weather.Providers.darksky,
  apiKey: env.WEATHER_API_KEY
});
