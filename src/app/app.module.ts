import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UpdateTodoComponent,
    AddTodoComponent,
    ListTodosComponent //We cannot add {standalone: true } Components here
    //...your components, directives, pipes
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule
    //...other imported modules
  ],
  exports:[
    // Components, directives, pipes exported for use in other modules
  ],
  providers:[
     //Services
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
