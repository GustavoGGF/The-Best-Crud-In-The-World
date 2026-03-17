import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GeneratorListComponent } from "./generator-list.component";

@NgModule({
  declarations: [GeneratorListComponent],
  imports: [CommonModule],
  exports: [GeneratorListComponent],
})
export class GeneratorListModule {}
