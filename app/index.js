import clock from "clock";
import Weather from "./weather";
import HeartRate from "./heartrate";
import Battery from "./battery";
import StepsCounter from "./steps";
import CaloriesCounter from "./calories";
import TimeDisplay from "./time";
import DateDisplay from "./date";
import Messaging from "./messaging";

clock.granularity = "seconds";

const time = new TimeDisplay();
const date = new DateDisplay();
const battery = new Battery();
const weather = new Weather();
const steps = new StepsCounter();
const calories = new CaloriesCounter();
const heartRate = new HeartRate();

heartRate.start();
Messaging.run(battery, date);

clock.ontick = evt => {
  time.set(evt);
  date.set(evt);
  weather.set(evt);
  battery.set();
  steps.set();
  calories.set();
};
