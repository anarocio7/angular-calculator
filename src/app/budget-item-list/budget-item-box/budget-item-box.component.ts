import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-item-box',
  templateUrl: './budget-item-box.component.html',
  styleUrls: ['./budget-item-box.component.scss']
})
export class BudgetItemBoxComponent implements OnInit {

  @Input() isIncome: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
