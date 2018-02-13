import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent  {

  todo = null;

  todoList:Array<string> = [];

  public addNewTodo(): void {
    if (this.todo){
      this.todoList.push(this.todo);
      this.todo = null;
    }

  }

  public removeTodo(id, event: MouseEvent): void {
    event.preventDefault();
    this.todoList.splice(id, 1)
  }


}
