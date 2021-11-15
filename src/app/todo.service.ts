import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskList = [{'id': 1, 'detail':"Demo Task"}];
}
