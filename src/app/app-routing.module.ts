import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserTemplateComponent} from "./user-template/user-template.component";

const routes: Routes = [
  {
    path: '',
    component: UserTemplateComponent,
    children:[
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
