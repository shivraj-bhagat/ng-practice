import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  // obj = {
  //   name: 'hero',
  //   age: 20
  // }

  // arr = ["shiv", "raj", "bhagat"];
  // siteUrl = window.location.href;
}
