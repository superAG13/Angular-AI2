import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPersonComponent} from "./add-person/add-person.component";
import {DetailsComponent} from "./details/details.component";
import {ListComponent} from "./list/list.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: "list", component: ListComponent},
  {path: "add", component: AddPersonComponent},
  {path: "details/:id", component: DetailsComponent},
  {path: "", redirectTo: "/list", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
