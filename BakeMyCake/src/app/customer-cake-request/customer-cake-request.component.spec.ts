import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCakeRequestComponent } from './customer-cake-request.component';

describe('CustomerCakeRequestComponent', () => {
  let component: CustomerCakeRequestComponent;
  let fixture: ComponentFixture<CustomerCakeRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCakeRequestComponent]
    });
    fixture = TestBed.createComponent(CustomerCakeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
