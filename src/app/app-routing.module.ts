import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { FriendCodeCreateComponent } from './components/friendCode/friend-code-create/friend-code-create.component';
import { FriendCodeUpdateComponent } from './components/friendCode/friend-code-update/friend-code-update.component';
import { FriendCodeCrudComponent } from "./views/friend-code-crud/friend-code-crud.component";
import { FriendCodeDeleteComponent } from './components/friendCode/friend-code-delete/friend-code-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "friendCodes",
    component: FriendCodeCrudComponent
  },
  {
    path: "friendCodes/create",
    component: FriendCodeCreateComponent
  },
  {
    path: "friendCodes/update/:id",
    component: FriendCodeUpdateComponent
  },
  {
    path: "friendCodes/delete/:id",
    component: FriendCodeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
