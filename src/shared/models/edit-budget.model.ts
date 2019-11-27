import { BudgetItem } from './budget-item.model';

export interface UpdateBudgetEvent {
  new: BudgetItem;
  old: BudgetItem;
}
