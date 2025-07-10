import { Component, OnInit } from '@angular/core';
import TodoType from '../todo.type';
import { StateService } from '../state.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {
  title = "List Todo"
  todos: TodoType[] = [];

  constructor( private stateService: StateService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.stateService.todo$.subscribe(todos => this.todos = todos);
    console.log(this.todos);
  }
  goBack(): void {
    this.location.back();
  }

}
