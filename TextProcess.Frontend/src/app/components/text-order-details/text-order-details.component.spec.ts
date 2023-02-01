import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOrderDetailsComponent } from './text-order-details.component';

describe('TextOrderDetailsComponent', () => {
  let component: TextOrderDetailsComponent;
  let fixture: ComponentFixture<TextOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextOrderDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
