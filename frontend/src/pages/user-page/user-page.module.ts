import { NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserPageComponent } from "./user-page.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileCheckboxModule } from "src/components/profile-checkbox/profile-checkbox.module";
import { GeneratorListModule } from "src/components/generator-list/generator-list.module";
import { NavbarModule } from "src/components/navbar/navbar.module";

const routes: Routes = [{ path: "", component: UserPageComponent }];

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ProfileCheckboxModule,
    GeneratorListModule,
    NavbarModule,
  ],
})
export class UserPageModule {}
