import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabitFormComponent } from './habit-form.component';

describe('NabitFormComponent', () => {
  let component: NabitFormComponent;
  let fixture: ComponentFixture<NabitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
