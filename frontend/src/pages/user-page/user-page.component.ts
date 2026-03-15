import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.scss"],
})
export class UserPageComponent implements OnInit {
  userForm: FormGroup;

  // Lista de perfis disponíveis no sistema para o usuário escolher
  perfisDisponiveis = ["Admin", "Editor", "Visualizador", "Gerente", "Suporte"];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      nome: ["", [Validators.required, Validators.minLength(10)]],
      perfis: this.fb.array([], [Validators.required, Validators.minLength(1)]),
    });
  }

  // Getter para facilitar o acesso ao FormArray no HTML
  get perfisFormArray(): FormArray {
    return this.userForm.get("perfis") as FormArray;
  }

  onCheckboxChange(e: any) {
    const perfis: FormArray = this.perfisFormArray;
    if (e.target.checked) {
      perfis.push(this.fb.control(e.target.value));
    } else {
      const index = perfis.controls.findIndex(
        (x) => x.value === e.target.value,
      );
      perfis.removeAt(index);
    }
  }

  salvar() {
    if (this.userForm.valid) {
      console.log("Usuário Criado:", this.userForm.value);
      alert("Usuário salvo com sucesso!");
      this.userForm.reset();
      // Limpar os checkboxes manualmente se necessário ou via ViewChild
    }
  }
}
