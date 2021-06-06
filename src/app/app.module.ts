import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleModule } from './module/module.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HabitsListComponent } from './components/habits-list/habits-list.component';
import { HabitFormComponent } from './components/habit-form/habit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HabitsListComponent,
    HabitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModuleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
