import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import axios from "axios";
import { SystemProfile } from "src/interfaces/SystemProfile";

@Component({
  selector: "app-perfil-page",
  templateUrl: "./perfil-page.component.html",
  styleUrls: ["./perfil-page.component.scss"],
})
export class PerfilPageComponent implements OnInit {
  perfilForm: FormGroup;
  profiles: SystemProfile[] = [];
  isEditing: number | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.getData();
    this.perfilForm = this.fb.group({
      descricao: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  async getData() {
    try {
      const response = await axios.get<SystemProfile[]>(
        "/profile/get-all-profiles",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      console.log("response: ", response);

      this.profiles = (response.data || []).sort((a, b) => a.id - b.id);
    } catch (err) {
      console.error("Erro ao buscar os perfis: ", err);
      throw err;
    }
  }

  async sendData() {
    if (this.perfilForm.invalid) return;

    try {
      const payload = {
        descricao: this.perfilForm.value.descricao,
      };

      if (this.isEditing) {
        // CENÁRIO: EDIÇÃO (PUT)
        // Note que passamos o ID na URL
        await axios.put(`/profile/update/${this.isEditing}`, payload);
        console.log("Perfil atualizado!");
      } else {
        // CENÁRIO: NOVO REGISTRO (POST)
        await axios.post("/profile/add", payload);
        console.log("Perfil adicionado!");
      }

      // Limpa o estado (reseta o form e volta o idSendoEditado para null)
      this.clearForm();

      // Atualiza a lista
      await this.getData();
    } catch (err) {
      console.error("Erro na operação:", err);
      alert("Erro ao processar a requisição no banco de dados.");
    }
  }

  editProfile(perfil: any) {
    // O patchValue coloca os valores no formulário automaticamente
    this.perfilForm.patchValue({
      descricao: perfil.descricao,
    });

    // Dica: Você vai precisar guardar o ID para saber que está editando
    this.isEditing = perfil.id;
  }

  clearForm() {
    this.isEditing = null; // Remove o ID para sair do modo edição
    this.perfilForm.reset(); // Limpa o texto do input
  }

  async deleteProfile() {
    if (
      this.isEditing &&
      confirm(`Tem certeza que deseja excluir o perfil #${this.isEditing}?`)
    ) {
      try {
        await axios.delete(`/profile/delete/${this.isEditing}`);
        console.log("Perfil removido!");
        this.clearForm();
        await this.getData(); // Recarrega a lista
      } catch (err) {
        console.error("Erro ao deletar:", err);
        alert("Não foi possível excluir o perfil.");
      }
    }
  }
}
