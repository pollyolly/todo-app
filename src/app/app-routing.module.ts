import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'add-todo', component: AddTodoComponent },
        { path: 'update-todo/:id', component: UpdateTodoComponent },
        { path: 'list-todo', component: ListTodosComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}