import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";

@Component({
  selector: "app-profile-checkbox",
  templateUrl: "./profile-checkbox.component.html",
  styleUrls: ["./profile-checkbox.component.scss"],
})
export class ProfileCheckboxComponent {
  @Input() perfisDisponiveis: any[] = [];
  @Input() userForm: FormGroup;
  @Input() perfisFormArray!: FormArray;

  @Output() onEdit = new EventEmitter<any>();

  onCheckboxChange(e: any, perfil: any) {
    // Criamos um objeto com o estado do checkbox e o perfil
    const data = {
      checked: e.target.checked,
      perfil: perfil,
    };
    this.onEdit.emit(data);
  }
}
