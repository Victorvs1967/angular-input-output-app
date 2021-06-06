import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Habit } from 'src/app/models/habit';
import { HABITS } from 'src/app/models/habits';

@Component({
  selector: 'app-habits-list',
  templateUrl: './habits-list.component.html',
  styleUrls: ['./habits-list.component.scss']
})
export class HabitsListComponent implements OnInit {

  @Output()
  addEvent = new EventEmitter();
  @Output()
  editEvent = new EventEmitter();

  public habits?: Habit[];

  constructor() { }

  ngOnInit(): void {
    this.habits = HABITS;
  }

  onAdd() {
    this.addEvent.emit();
  }

  onEdit(habit: Habit) {
    this.editEvent.emit(habit);
  }

  public onDelete(index: number) {
    this.habits && this.habits.splice(index, 1);
  }

}
