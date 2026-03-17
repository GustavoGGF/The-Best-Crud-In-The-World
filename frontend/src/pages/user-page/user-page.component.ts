import { Component, NgZone, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import axios from "axios";
import { SystemProfile } from "src/interfaces/SystemProfile";
import { UserProfile } from "src/interfaces/UserProfile";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
})
export class UserPageComponent implements OnInit {
  userForm: FormGroup;
  isEditing: boolean = false;

  // Lista de perfis disponíveis no sistema para o usuário escolher
  perfisDisponiveis: SystemProfile[] = [];
  users: UserProfile[] = [];
  profilesSelected: any[] = [];
  userSelectedPerfis: string[] = [];

  constructor(
    private fb: FormBuilder,
    private zone: NgZone,
  ) {}

  ngOnInit() {
    this.getSystemProfileData();
    this.getUserProfileData();
    this.userForm = this.fb.group({
      id: [null],
      name: ["", [Validators.required, Validators.minLength(10)]],
      perfis: this.fb.array([], [Validators.required, Validators.minLength(1)]),
    });
  }

  // Getter para facilitar o acesso ao FormArray no HTML
  get perfisFormArray(): FormArray {
    return this.userForm.get("perfis") as FormArray;
  }

  async getSystemProfileData() {
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

      this.perfisDisponiveis = (response.data || []).sort(
        (a, b) => a.id - b.id,
      );
    } catch (err) {
      console.error("Erro ao buscar os perfis: ", err);
      throw err;
    }
  }

  async getUserProfileData() {
    try {
      const response = await axios.get<UserProfile[]>("/user/get-all-users");

      // Força a atualização a acontecer dentro da zona do Angular
      this.zone.run(() => {
        this.users = (response.data || []).sort((a, b) => a.id - b.id);
      });
    } catch (err) {
      console.error("Erro ao buscar os usuarios: ", err);
    }
  }

  async sendData() {
    const data = this.userForm.value;

    try {
      if (data.id) {
        // Se tem ID, é uma atualização
        await axios.put("/user/update", data);
      } else {
        // Se não tem ID, é uma inserção
        await axios.post("/user/new-user", data);
      }

      this.clearForm();
      await this.getUserProfileData();
    } catch (err) {
      console.error(err);
    }
  }

  async deleteUser() {
    if (
      this.isEditing &&
      confirm(`Tem certeza que deseja excluir o perfil #${this.isEditing}?`)
    ) {
      try {
        const data = this.userForm.value;
        await axios.delete(`/user/delete/${data.id}`);
        this.clearForm();
        await this.getUserProfileData();
      } catch (err) {
        console.error("Erro ao deletar:", err);
        alert("Não foi possível excluir o perfil.");
      }
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.userForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  clearForm() {
    this.userForm.reset();
    this.isEditing = false;
  }

  currentProfile(dadosRecebidos: any) {
    const { checked, perfil } = dadosRecebidos;

    // Pega a referência do FormArray dentro do userForm
    const perfisFormArray = this.userForm.get("perfis") as FormArray;

    if (checked) {
      // 1. Adicionar: Cria um novo FormControl com a descrição do perfil
      perfisFormArray.push(new FormControl(perfil.descricao));
    } else {
      // 2. Remover: Precisa achar o índice do valor a retirar
      const index = perfisFormArray.controls.findIndex(
        (control) => control.value === perfil.descricao,
      );

      if (index !== -1) {
        perfisFormArray.removeAt(index);
      }
    }
  }

  onUserSelectedForEdit(user: UserProfile) {
    this.isEditing = true;
    this.userForm.patchValue({
      id: user.id,
      name: user.descricao,
    });

    this.userSelectedPerfis = [...user.perfis];
  }
}
