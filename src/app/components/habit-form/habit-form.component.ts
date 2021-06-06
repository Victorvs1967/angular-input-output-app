import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Habit } from 'src/app/models/habit';
import { HABITS } from 'src/app/models/habits';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss']
})
export class HabitFormComponent implements OnInit {

  @Output()
  onExit = new EventEmitter();

  @Input()
  habit?: Habit;

  public habits?: Habit[];
  public editingIndex?: number;

  public habitForm = new FormGroup({
    name: new FormControl(null),
    frequency: new FormControl(null),
    description: new FormControl(null),
  });

  constructor() { 
  }

  ngOnInit(): void {
    this.habits = HABITS;

    if (this.habit) {
      console.log(this.habit);
      this.editingIndex = this.habits.indexOf(this.habit);
      this.setEditForm(this.habit);
    }
  }

  public onSubmit() {
    const habit = this.habitForm.value as Habit;

    if (this.habit && this.habits && this.editingIndex) {
      this.habits.splice(this.editingIndex, 1, habit)
    } else if (this.habits) {
      this.habits.push(habit);
    }
    this.exitForm();
  }

  public setEditForm(habit: Habit) {
    this.habitForm.patchValue({
      name: habit.name,
      frequency: habit.frequency,
      description: habit.description,
    });
  }

  exitForm() {
    this.habitForm.reset();
    this.onExit.emit();
  }

}
