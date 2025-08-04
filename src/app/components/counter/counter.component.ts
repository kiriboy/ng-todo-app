import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  value = 4

  @Output() aName = new EventEmitter<any>()

  
  counterValue = signal(0)

  increment(){
    this.counterValue.update((val)=>val + 1)
  }
  decrement(){
     this.counterValue.update((val)=>val - 1)
  }
  reset(){
    this.counterValue.set(0)
  }

}
