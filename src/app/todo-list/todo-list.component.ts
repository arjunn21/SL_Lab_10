import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }
  submit(e: any){
    // let id = this.todoService.taskList.length + 1;
    // let element = {"id": id, "detail": e}
    // this.todoService.taskList.push(element);
    // let el = document.getElementById("input");
    // el.style.display = "none";
    // el = document.getElementById("button");
    // el.style.display = "none";
    // return false;
  }
}
