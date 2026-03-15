import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-perfil-page",
  templateUrl: "./perfil-page.component.html",
  styleUrls: ["./perfil-page.component.scss"],
})
export class PerfilPageComponent implements OnInit {
  perfilForm: FormGroup;
  isEditing = false;

  descricaoSalva: string = "Desenvolvedor Sênior em formação de gerência.";

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.perfilForm = this.fb.group({
      descricao: [
        this.descricaoSalva,
        [Validators.required, Validators.minLength(10)],
      ],
    });
  }

  salvar() {
    if (this.perfilForm.valid) {
      this.descricaoSalva = this.perfilForm.value.descricao;
      this.isEditing = false;
      console.log("Salvo com sucesso:", this.descricaoSalva);
    }
  }

  cancelar() {
    this.perfilForm.patchValue({ descricao: this.descricaoSalva });
    this.isEditing = false;
  }

  excluir() {
    this.descricaoSalva = "";
    this.perfilForm.reset();
    this.isEditing = true;
  }
}
