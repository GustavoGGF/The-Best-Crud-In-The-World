import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import axios from "axios";
import { SystemProfile } from "src/interfaces/SystemProfile";
import { UserProfile } from "src/interfaces/UserProfile";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.scss"],
})
export class UserPageComponent implements OnInit {
  userForm: FormGroup;
  isEditing: boolean = false;

  // Lista de perfis disponíveis no sistema para o usuário escolher
  perfisDisponiveis: SystemProfile[] = [];
  users: UserProfile[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.getSystemProfileData();
    this.getUserProfileData();
    this.userForm = this.fb.group({
      nome: ["", [Validators.required, Validators.minLength(10)]],
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
      console.log("response: ", response);

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
      const response = await axios.get<UserProfile[]>("/user/get-all-users", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("response: ", response);

      this.users = (response.data || []).sort((a, b) => a.id - b.id);
    } catch (err) {
      console.error("Erro ao buscar os perfis: ", err);
      throw err;
    }
  }

  sendData() {}

  deleteUser() {}

  isFieldInvalid(fieldName: string): boolean {
    const field = this.userForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  clearForm() {}

  editUser() {}
}
