import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  BudgetItem: BudgetItem[] = new Array<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.BudgetItem.push(newItem);
  }
}