import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-generator-list",
  templateUrl: "./generator-list.component.html",
})
export class GeneratorListComponent {
  @Input() profilesList: any[] = [];
  @Input() usersList: any[] = [];

  // Cria o "emissor" do evento
  @Output() onEdit = new EventEmitter<any>();

  handleEdit(item: any) {
    // Quando o botão for clicado, ele dispara o item para quem estiver ouvindo
    this.onEdit.emit(item);
  }
}
