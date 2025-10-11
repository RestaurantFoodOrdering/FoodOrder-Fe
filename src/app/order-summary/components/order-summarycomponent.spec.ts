import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummarycomponent } from './order-summarycomponent';

describe('OrderSummarycomponent', () => {
  let component: OrderSummarycomponent;
  let fixture: ComponentFixture<OrderSummarycomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderSummarycomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummarycomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
