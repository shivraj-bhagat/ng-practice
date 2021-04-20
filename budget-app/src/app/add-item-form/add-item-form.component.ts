import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.models';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  isNewItem: boolean;

  constructor() { }

  ngOnInit(): void {
    if(this.item) {
      this.isNewItem = false;
    } else {
      this.item = new BudgetItem('', null);
      this.isNewItem = true;
    }
  }

  onSubmit(form: NgForm) {
    // console.log(form.value)
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
