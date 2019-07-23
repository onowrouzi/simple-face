import document from "document";

export default class DateDisplay {
  constructor() {
    this.element = document.getElementById("date");
    this.enabled = true;
  }

  enable = () => {
    this.enabled = true;
  };

  disable = () => {
    this.enabled = false;
  };

  set = evt => {
    if (this.enabled) {
      let today = evt.date;
      let day = today.getDate();
      let month = today.getMonth();
      let year = today.getYear();
      this.element.text = `${++month}/${day}/${year - 100}`;
    } else {
      this.element.text = "";
    }
  };
}
