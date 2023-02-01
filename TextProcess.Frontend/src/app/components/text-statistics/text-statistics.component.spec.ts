import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStatisticsComponent } from './text-statistics.component';

describe('TextStatisticsComponent', () => {
  let component: TextStatisticsComponent;
  let fixture: ComponentFixture<TextStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
