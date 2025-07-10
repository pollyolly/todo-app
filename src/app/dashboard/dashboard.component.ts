import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import TodoType from '../todo.type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = "Dashboard"
  title2 = "Top Five"
  todos: TodoType[] = [];

  constructor(private stateService: StateService){}

  ngOnInit(): void {
    this.stateService.getTopFive().subscribe(todos => this.todos = todos)
  }
}
