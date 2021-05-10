import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;
  constructor() { }

  ngOnInit(): void {
    const items = (() => {
      const fieldValue = localStorage.getItem('budgetItems');
      return fieldValue === null
        ? []
        : JSON.parse(fieldValue);
    })();
    this.budgetItems = items;
    this.budgetItems.forEach((items) => {
      this.totalBudget += items.amount;
    })
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
    localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    // console.log(item)
    this.budgetItems.splice(index,1);
    this.totalBudget -= item.amount;
    localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
  }

  updateItem(updateEvent : UpdateEvent) {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
    localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
  }
}