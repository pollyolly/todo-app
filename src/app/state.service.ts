import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import TodoType from "./todo.type"

@Injectable({
  providedIn: 'root'
})

export class StateService {

  private todoSubject = new BehaviorSubject<TodoType[]>([]);
  todo$ = this.todoSubject.asObservable(); //We set this to access todo$

  constructor() { }

  addTodo(todo_name: string, todo_description: string, todo_status: boolean): void {
    const currentTodo = this.todoSubject.value;
    const newTodo: TodoType = {
      todo_id: Date.now(),
      todo_name: todo_name,
      todo_description: todo_description,
      todo_status: todo_status
    };
    this.todoSubject.next([...currentTodo, newTodo]);
  }
  updateTodo(todo_id: number, todo_name: string, todo_description: string, todo_status: boolean): void {
    const currentTodo = this.todoSubject.value;
    const updateTodo = currentTodo.map(todo =>
       todo.todo_id == todo_id ? {...todo, todo_id: todo_id, todo_name: todo_name, 
        todo_description: todo_description, todo_status: todo_status}: todo)
       this.todoSubject.next(updateTodo);
  }
  deleteTodo(todo_id: number): void {
    const currentTodo = this.todoSubject.value;
    const updateTodo = currentTodo.filter(todo => todo.todo_id !== todo_id);
    this.todoSubject.next(updateTodo);
  }
  getTodo(todo_id: number): Observable<TodoType[]> {
    const currentTodo = this.todoSubject.value;
    const getTodo = currentTodo.filter(todo => todo.todo_id == todo_id);
    // this.todoSubject.next(getTodo);
    return of(getTodo);
  }
  getTopFive(): Observable<TodoType[]> {
    const currentTodo = this.todoSubject.value;
    return of(currentTodo.slice(0, 5))
  }
}
