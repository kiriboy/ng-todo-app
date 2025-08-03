import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from 'src/app/model/todo.type';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  // this todo input required and need to pass from parent
  @Input({required:true}) todo!:Todo

  // output action when click toggle icon
  @Output() todoToggled:EventEmitter<Todo> = new EventEmitter()

  todoClicked(){
    this.todoToggled.emit(this.todo)
  }
}
