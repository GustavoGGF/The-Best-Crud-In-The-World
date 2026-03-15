import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-create-card",
  templateUrl: "./create-card.component.html",
  styleUrls: ["./create-card.component.scss"],
})
export class CreateCardComponent {
  @Input() direction: "";
  @Input() typeConfiguraion: "";
  @Input() description: "";
  @Input() color: "";
}
