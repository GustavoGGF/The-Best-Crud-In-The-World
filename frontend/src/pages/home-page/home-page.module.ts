import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import { RouterModule, Routes } from "@angular/router";
import { CreateCardComponent } from "src/components/create-card/create-card.component";

const routes: Routes = [{ path: "", component: HomePageComponent }];

@NgModule({
  declarations: [HomePageComponent, CreateCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomePageModule {}
