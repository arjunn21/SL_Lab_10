import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  constructor(public todoService: TodoService) { }
  
  ngOnInit(): void {
  }
}
