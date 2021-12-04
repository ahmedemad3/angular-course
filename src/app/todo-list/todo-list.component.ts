import { Component, OnInit } from '@angular/core';
import { Api } from './../../services/api/api';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList : [] | undefined ;
  constructor(private api : Api) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.api.get("todos").subscribe(response =>{
      console.log("data : " + JSON.stringify(response))
    })
  }

}


