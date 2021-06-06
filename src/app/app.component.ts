import { Component } from '@angular/core';
import { Habit } from './models/habit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public formOpen = false;
  public editHabit?: Habit;

  onAdding() {
    this.formOpen = true;
  }

  onEditing(habit: Habit) {
    this.editHabit = habit;
    this.formOpen = true;
  }

  closeForm() {
    this.formOpen = false;
    this.editHabit = null ?? undefined;
  }

}
