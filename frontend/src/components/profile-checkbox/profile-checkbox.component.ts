import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-profile-checkbox",
  templateUrl: "./profile-checkbox.component.html",
})
export class ProfileCheckboxComponent {
  @Input() perfisDisponiveis: any[] = [];
  @Input() userForm: FormGroup;
  @Input() perfisFormArray!: FormArray;

  @Input() set selectedPerfis(values: string[]) {
    if (values) {
      this.updateCheckboxes(values);
    }
  }

  @Output() onEdit = new EventEmitter<any>();

  private updateCheckboxes(selectedValues: string[]) {
    // 1. Limpa o FormArray atual para não duplicar dados
    this.perfisFormArray.clear();

    // 2. Adiciona os novos valores ao FormArray
    selectedValues.forEach((perfil) => {
      this.perfisFormArray.push(new FormControl(perfil));
    });
  }

  // Função auxiliar para o HTML saber se deve marcar o check
  isProfileSelected(perfilDesc: string): boolean {
    return this.perfisFormArray.value.includes(perfilDesc);
  }

  onCheckboxChange(e: any, perfil: any) {
    // Cria um objeto com o estado do checkbox e o perfil
    const data = {
      checked: e.target.checked,
      perfil: perfil,
    };
    this.onEdit.emit(data);
  }
}
