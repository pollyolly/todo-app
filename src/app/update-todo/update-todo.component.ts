import { Component, OnInit } from '@angular/core';
import TodoType from '../todo.type';
import { StateService } from '../state.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.css'
})

export class UpdateTodoComponent implements OnInit {
  title = "Update Todo"
  todos: TodoType[] = [];
  todo_id = 0;
  todo_name = "";
  todo_description = "";
  todo_status = false;

  constructor(
    private stateService: StateService, 
    private route:ActivatedRoute,
    private location: Location
  ){}
  
  ngOnInit(): void {
    this.getTodo();
  }
  deleteTodo(todo_id: number): void {
    this.stateService.deleteTodo(todo_id);
  }
  updateTodo(): void {
    this.stateService.updateTodo(this.todo_id,this.todo_name, this.todo_description, this.todo_status);
    // console.log("Todo Status: ", this.todo_status);
  }
   getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stateService.getTodo(id).subscribe(todos => this.todos = todos);
    // console.log("Update Todos : ", this.todos);
  }
  goBack(): void {
    this.location.back();
  }
}