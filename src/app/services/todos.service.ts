import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  // inject http client
  http = inject(HttpClient)


  constructor() { }

  // get todos data via api

  getTodosFromApi():Observable<Todo[]>{
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url)
  }
}
