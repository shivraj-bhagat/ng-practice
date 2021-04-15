import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-pto-cdata',
  templateUrl: './user-pto-cdata.component.html',
  styleUrls: ['./user-pto-cdata.component.css']
})
export class UserPtoCDataComponent implements OnInit {

  @Input() hero; 
  constructor() { }

  ngOnInit(): void {
  }

}
