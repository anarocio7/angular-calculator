import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemBoxComponent } from './budget-item-box.component';

describe('BudgetItemBoxComponent', () => {
  let component: BudgetItemBoxComponent;
  let fixture: ComponentFixture<BudgetItemBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetItemBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
