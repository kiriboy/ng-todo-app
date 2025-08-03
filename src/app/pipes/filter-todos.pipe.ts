import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  // this pipe get todos data array and search term
  transform(todos: Todo[], searchTerm: string): Todo[] {

    // if searchTerm is empty then return whole array
    if (!searchTerm) {
      return todos
    }

    // make search term into lower case.
    const text = searchTerm.toLowerCase();

    // return only matching todos after filtering
    return todos.filter((todo) =>{
      return todo.title.toLowerCase().includes(text)
    })
  }

}
