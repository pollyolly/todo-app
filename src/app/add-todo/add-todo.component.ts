import { Component, OnInit } from '@angular/core';
import TodoType from '../todo.type';
import { StateService } from '../state.service';
// import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {
  title = "Add Todo"
  todos: TodoType[] = [];
  todo_name = "";
  todo_description = "";
  todo_status = false;

  constructor(
    private stateService: StateService, 
    // private route:ActivatedRoute,
    private location: Location
  ){}
  
  ngOnInit(): void {
    this.stateService.todo$.subscribe(todos => this.todos = todos);
  }
  addTodo(): void { 
    this.stateService.addTodo(this.todo_name, this.todo_description, this.todo_status);
    console.log("Add Todos:", this.todos);
  }
  deleteTodo(todo_id: number): void {
    this.stateService.deleteTodo(todo_id);
  }
  goBack(): void {
    this.location.back();
  }
}
