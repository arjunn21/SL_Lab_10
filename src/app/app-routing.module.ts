import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SpaceXComponent } from './space-x/space-x.component';
const routes: Routes = [{path: "list",component:TodoListComponent},
{path: "details", component:TodoDetailsComponent},
{path: "spacex", component:SpaceXComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
