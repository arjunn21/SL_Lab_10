import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab10';
  constructor(public todoService: TodoService){}
   addData(){
    let el:any = document.getElementById("input");
    el.style.display = "block";
    el = document.getElementById("button");
    el.style.display = "block";
  }
  submit(e: string){
    let index = this.todoService.taskList.length + 1;
    let element:any = {'id': index, "detail": e};
    this.todoService.taskList.push(element);
    let el:any = document.getElementById("button");
    el.style.display = "none";
    el = document.getElementById("input");
    el.style.display = "none";
  }
}
