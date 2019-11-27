import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-box',
  templateUrl: './budget-item-box.component.html',
  styleUrls: ['./budget-item-box.component.scss']
})
export class BudgetItemBoxComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() boxClick: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  onXButtonClick() {
    this.xButtonClick.emit();
  }

  onBoxClick() {
    this.boxClick.emit();
  }

}
