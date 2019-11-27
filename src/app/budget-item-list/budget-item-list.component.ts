import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { UpdateBudgetEvent } from 'src/shared/models/edit-budget.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateBudgetEvent> = new EventEmitter<UpdateBudgetEvent>();

   constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  onBoxClick(item: BudgetItem) {
    // Display Edit mode
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '580px',
      data: item
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Replaces item with updated information. Result is updated budget item
        this.update.emit({
          old: item,
          new: result
        })
      }
    })
  }
}
