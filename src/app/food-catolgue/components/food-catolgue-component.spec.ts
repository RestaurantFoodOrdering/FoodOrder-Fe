import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCatolgueComponent } from './food-catolgue-component';

describe('FoodCatolgueComponent', () => {
  let component: FoodCatolgueComponent;
  let fixture: ComponentFixture<FoodCatolgueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodCatolgueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCatolgueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
