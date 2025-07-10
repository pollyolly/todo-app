### Run Development server
```
$ng serve
```
### Create Project
```
$ng new todo-app
```
### Generate Component and Other
```
$ng generate component component-name

$ng generate directive|pipe|service|class|guard|interface|enum|module
```
### Generate Build stored in dist/ directory
```
$ng build 
```
### Running unit tests to execute unit test
```
$ng test
```
### Troubleshoot
Error: Unexpected value 'DecoratorFactory' imported by the module 'AppModule2'. Please add an @NgModule annotation.
```
  imports: [
    NgModule, //Do not import NgModule it is a Decorator
  ]
```
Can't bind to 'routerLink' since it isn't a known property of 'a'.
```
import {RouterModule} from '@angular/router';
@NgModule({
   imports:[RouterModule]
})
```
### Resources

https://www.youtube.com/watch?v=JnwjU06yoEE

https://medium.com/@sehban.alam/state-management-in-angular-using-services-d31a87906c1f