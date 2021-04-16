import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-cto-pdata',
  templateUrl: './user-cto-pdata.component.html',
  styleUrls: ['./user-cto-pdata.component.css']
})
export class UserCtoPDataComponent implements OnInit {

  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  data = {
    name: "shiv raj bhagat",
    age: 23
  };
  sendData(){
    this.parentFunction.emit(this.data);
  };
}
