import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateCardComponent } from "./create-card.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CreateCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [CreateCardComponent],
})
export class CreateCardModule {}
