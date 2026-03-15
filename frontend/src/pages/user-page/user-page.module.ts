import { NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserPageComponent } from "./user-page.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [{ path: "", component: UserPageComponent }];

@NgModule({
  declarations: [UserPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class UserPageModule {}
