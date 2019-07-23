import document from "document";
import { units } from "user-settings";
import * as weather from "fitbit-weather/app";

export default class Weather {
  constructor() {
    this.cachedTime = 60 * 60 * 1000;
    this.element = document.getElementById("weather");
    this.set();
  }

  set = evt => {
    if (evt && evt.date.getSeconds() > 1) return;
    console.log("Fetching weather");
    weather
      .fetch(this.cachedTime)
      .then(res => {
        if (!res || !res.temperatureF || !res.temperatureC) {
          throw "Response from fetch is invalid";
        } else {
          this.cachedWeather = res;
          this.setText(res);
        }
      })
      .catch(err => {
        console.log(err);
        let res = Weather.get();
        if (!res || !res.temperatureF || !res.temperatureC) {
          if (this.cachedWeather) {
            this.setText(this.cachedWeather);
          } else {
            throw "Response from get is invalid";
          }
        } else {
          this.setText(res);
        }
      });
  };

  setText = res => {
    this.element.text =
      units.temperature == "F"
        ? `${Math.floor(res.temperatureF)}°F`
        : `${Math.floor(res.temperatureC)}°C`;
  };
}
