import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfilPageComponent } from "./perfil-page.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [{ path: "", component: PerfilPageComponent }];

@NgModule({
  declarations: [PerfilPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [PerfilPageComponent],
})
export class PerfilPageModule {}
