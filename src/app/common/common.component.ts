import { Component, OnInit } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor() { 
    this.reset();
  }

  ngOnInit(): void {
  }
  title = 'Ng Practice App';
  name = 'Shiv Raj Bhagat';
  getName(nameVar) {
    alert(nameVar);
  }

  myEvent(evt) {
    console.warn(evt);
  }
  
  currentVal = "";
  getVal(value) {
    console.warn(value);
    this.currentVal = value;
  }

  disableBox = true;
  enableBox() {
    this.disableBox = false;
  }

  show = "blue";
  color = "green";
  data = ['messi', 'cr7', 'neymar', 'kaka', 'pogba', 'ronaldihno']
  dataFor = [
    {
      name: "akshat",
      age: 23,
      email: 'abc@email.com'
    },
    {
      name: "ajeet",
      age: 26,
      email: 'abc@email.com'
    },
    {
      name: "kunal",
      age: 23,
      email: 'abc@email.com'
    },
    {
      name: "aurat",
      age: 24,
      email: 'abc@email.com'
    }
  ];

  getValues(value) {
    console.warn(value);
  }

  headingColor = "blue";
  err = false;
  updateColor() {
    this.headingColor = "red";
    this.err = !this.err;
  }

  alerts: Alert[];

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  dataUser = [
    {
      name: "Shiv Raj Bhagat",
      age: 23,
      email: 'test@test.com'
    }, {
      name: "Ajeet Bhai",
      age: 23,
      email: 'ajit@ajit.com'
    }, {
      name: "Rakesh",
      age: 26,
      email: 'test@rakesh.com'
    }
  ];
  dataCtoP;
  parentFunction(data) {
    // console.warn(data);
    this.dataCtoP = data;
  };
  today = Date.now();
  str = "hello crownstack";
  money = 1000;
  // obj = {
  //   name: 'hero',
  //   age: 20
  // }

  // arr = ["shiv", "raj", "bhagat"];
  // siteUrl = window.location.href;

}
