import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOrderComponent } from './text-order.component';

describe('TextOrderComponent', () => {
  let component: TextOrderComponent;
  let fixture: ComponentFixture<TextOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
