import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDetailsCartsComponent } from './cake-details-carts.component';

describe('CakeDetailsCartsComponent', () => {
  let component: CakeDetailsCartsComponent;
  let fixture: ComponentFixture<CakeDetailsCartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeDetailsCartsComponent]
    });
    fixture = TestBed.createComponent(CakeDetailsCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
