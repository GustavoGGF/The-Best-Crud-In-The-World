import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-create-card",
  templateUrl: "./create-card.component.html",
})
export class CreateCardComponent {
  @Input() direction: "";
  @Input() typeConfiguraion: "";
  @Input() description: "";
  @Input() color: "";
}
