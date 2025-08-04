import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { UpdateTodoStyleDirective } from './directives/update-todo-style.directive';
import { FilterTodosPipe } from './pipes/filter-todos.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighliteDirective } from './directives/highlite.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GreetingComponent,
    CounterComponent,
    TodosComponent,
    TodoItemComponent,
    UpdateTodoStyleDirective,
    FilterTodosPipe,
    HighliteDirective,
    PageNotFoundComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // provide http client 
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
