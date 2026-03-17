import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserProfile } from "src/interfaces/UserProfile";

@Component({
  selector: "app-generator-list",
  templateUrl: "./generator-list.component.html",
})
export class GeneratorListComponent {
  @Input() profilesList: any[] = [];
  @Input() usersList: any[] = [];

  // Cria o "emissor" do evento
  @Output() onEdit = new EventEmitter<any>();
  @Output() editUser = new EventEmitter<UserProfile>();

  handleEdit(item: any) {
    // Quando o botão for clicado, ele dispara o item para quem estiver ouvindo
    this.onEdit.emit(item);
  }

  handleEditUser(user: any) {
    // Mapeia o objeto que vem da lista para o formato da sua Interface
    const userToExport: UserProfile = {
      id: user.id,
      descricao: user.name,
      perfis: user.perfis,
    };

    // Emite para o componente pai
    this.editUser.emit(userToExport);
  }
}
