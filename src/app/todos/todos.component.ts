import { Component, inject, Output, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  // search Term 
  searchTerm = ''

// inject Todo service
todoService = inject(TodosService)

todoItems = signal<Array<Todo>>([]);

ngOnInit(): void {

  this.todoService.getTodosFromApi().pipe(
    // pipe to catch if have any error
    catchError((err)=>{
      console.log(err);
      throw err
    })
  ).subscribe((todos)=>{
    // subscribe todos and set it into todoItems
    this.todoItems.set(todos)
  })
  
  
}


// changes when onChangeTodo 
onChangeTodo(todoItem:Todo){
  this.todoItems.update((todos)=>{
    return todos.map(todo => {
      if(todo.id === todoItem.id){
        return{
          ...todo,
          completed:!todo.completed
        }
      }
      return todo
    })
  })
}


}
