(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-page-user-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/profile-checkbox/profile-checkbox.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/profile-checkbox/profile-checkbox.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-8\">\n  <label class=\"block text-sm font-semibold text-gray-700 mb-4\"\n    >Perfis de Sistema (Mínimo 1)</label\n  >\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4\">\n    <div\n      *ngFor=\"let perfil of perfisDisponiveis\"\n      class=\"flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer\"\n    >\n      <input\n        type=\"checkbox\"\n        [id]=\"'perfil-' + perfil.id\"\n        [value]=\"perfil.descricao\"\n        (change)=\"onCheckboxChange($event, perfil)\"\n        [checked]=\"isProfileSelected(perfil.descricao)\"\n        class=\"w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer\"\n      />\n      <label\n        [for]=\"'perfil-' + perfil.id\"\n        class=\"ml-3 text-sm text-gray-700 font-semibold cursor-pointer select-none uppercase\"\n      >\n        {{ perfil.descricao }}\n      </label>\n    </div>\n  </div>\n\n  <div\n    *ngIf=\"perfisFormArray?.invalid && userForm?.touched\"\n    class=\"text-red-500 text-xs mt-3 italic\"\n  >\n    * Selecione ao menos um perfil para este usuário.\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/user-page/user-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/user-page/user-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar-component></app-navbar-component>\n<div\n  class=\"max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100\"\n>\n  <div class=\"flex justify-between items-center mb-8 border-b pb-4\">\n    <h2 class=\"text-3xl font-extrabold text-gray-900\">Gerenciar Usuários</h2>\n    <span\n      [class]=\"\n        isEditing ? 'text-blue-600 bg-blue-100' : 'text-green-600 bg-green-100'\n      \"\n      class=\"px-3 py-1 text-xs font-semibold rounded-full uppercase\"\n    >\n      {{ isEditing ? \"Editando Usuário #\" + isEditing : \"Novo Registro\" }}\n    </span>\n  </div>\n\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"sendData()\">\n    <div class=\"mb-8\">\n      <label class=\"block text-sm font-semibold text-gray-700 mb-2\"\n        >Nome Completo</label\n      >\n      <input\n        type=\"text\"\n        formControlName=\"name\"\n        class=\"w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition border-gray-300\"\n        [ngClass]=\"{ 'border-red-500': isFieldInvalid('name') }\"\n        placeholder=\"Digite o nome completo do usuário\"\n      />\n\n      <div\n        *ngIf=\"userForm.get('name').invalid && userForm.get('name').touched\"\n        class=\"text-red-500 text-xs mt-2\"\n      >\n        <p *ngIf=\"userForm.get('name').errors?.required\">\n          O nome é obrigatório.\n        </p>\n        <p *ngIf=\"userForm.get('name').errors?.minlength\">\n          O nome deve ter no mínimo 10 caracteres.\n        </p>\n      </div>\n    </div>\n\n    <app-profile-checkbox\n      [perfisDisponiveis]=\"perfisDisponiveis\"\n      [perfisFormArray]=\"perfisFormArray\"\n      [userForm]=\"userForm\"\n      (onEdit)=\"currentProfile($event)\"\n      [selectedPerfis]=\"userSelectedPerfis\"\n    ></app-profile-checkbox>\n\n    <div class=\"flex justify-between pt-6 border-t\">\n      <div>\n        <button\n          *ngIf=\"isEditing\"\n          type=\"button\"\n          (click)=\"deleteUser()\"\n          class=\"px-6 py-3 text-red-600 bg-red-50 hover:bg-red-100 font-bold rounded-xl transition flex items-center gap-2\"\n        >\n          Excluir Usuário\n        </button>\n      </div>\n\n      <div class=\"flex gap-3\">\n        <button\n          *ngIf=\"isEditing\"\n          type=\"button\"\n          (click)=\"clearForm()\"\n          class=\"px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition\"\n        >\n          Cancelar\n        </button>\n\n        <button\n          type=\"submit\"\n          [disabled]=\"userForm.invalid\"\n          class=\"px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200\"\n        >\n          {{ isEditing ? \"Atualizar Usuário\" : \"Finalizar Cadastro\" }}\n        </button>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"mt-12 pt-8 border-t border-gray-100\">\n    <h3 class=\"text-xl font-bold text-gray-800 mb-6\">Usuários Cadastrados</h3>\n    <app-generator-list\n      [usersList]=\"users\"\n      (editUser)=\"onUserSelectedForEdit($event)\"\n    >\n      ></app-generator-list\n    >\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/components/profile-checkbox/profile-checkbox.component.ts":
/*!***********************************************************************!*\
  !*** ./src/components/profile-checkbox/profile-checkbox.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCheckboxComponent", function() { return ProfileCheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ProfileCheckboxComponent = class ProfileCheckboxComponent {
    constructor() {
        this.perfisDisponiveis = [];
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set selectedPerfis(values) {
        if (values) {
            this.updateCheckboxes(values);
        }
    }
    updateCheckboxes(selectedValues) {
        // 1. Limpa o FormArray atual para não duplicar dados
        this.perfisFormArray.clear();
        // 2. Adiciona os novos valores ao FormArray
        selectedValues.forEach((perfil) => {
            this.perfisFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](perfil));
        });
    }
    // Função auxiliar para o HTML saber se deve marcar o check
    isProfileSelected(perfilDesc) {
        return this.perfisFormArray.value.includes(perfilDesc);
    }
    onCheckboxChange(e, perfil) {
        // Cria um objeto com o estado do checkbox e o perfil
        const data = {
            checked: e.target.checked,
            perfil: perfil,
        };
        this.onEdit.emit(data);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileCheckboxComponent.prototype, "perfisDisponiveis", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileCheckboxComponent.prototype, "userForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileCheckboxComponent.prototype, "perfisFormArray", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileCheckboxComponent.prototype, "selectedPerfis", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProfileCheckboxComponent.prototype, "onEdit", void 0);
ProfileCheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile-checkbox",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-checkbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/profile-checkbox/profile-checkbox.component.html")).default,
    })
], ProfileCheckboxComponent);



/***/ }),

/***/ "./src/components/profile-checkbox/profile-checkbox.module.ts":
/*!********************************************************************!*\
  !*** ./src/components/profile-checkbox/profile-checkbox.module.ts ***!
  \********************************************************************/
/*! exports provided: ProfileCheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCheckboxModule", function() { return ProfileCheckboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profile_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-checkbox.component */ "./src/components/profile-checkbox/profile-checkbox.component.ts");




let ProfileCheckboxModule = class ProfileCheckboxModule {
};
ProfileCheckboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["ProfileCheckboxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_profile_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["ProfileCheckboxComponent"]],
    })
], ProfileCheckboxModule);



/***/ }),

/***/ "./src/pages/user-page/user-page.component.ts":
/*!****************************************************!*\
  !*** ./src/pages/user-page/user-page.component.ts ***!
  \****************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




let UserPageComponent = class UserPageComponent {
    constructor(fb, zone) {
        this.fb = fb;
        this.zone = zone;
        this.isEditing = false;
        // Lista de perfis disponíveis no sistema para o usuário escolher
        this.perfisDisponiveis = [];
        this.users = [];
        this.profilesSelected = [];
        this.userSelectedPerfis = [];
    }
    ngOnInit() {
        this.getSystemProfileData();
        this.getUserProfileData();
        this.userForm = this.fb.group({
            id: [null],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            perfis: this.fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]),
        });
    }
    // Getter para facilitar o acesso ao FormArray no HTML
    get perfisFormArray() {
        return this.userForm.get("perfis");
    }
    async getSystemProfileData() {
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/profile/get-all-profiles", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            this.perfisDisponiveis = (response.data || []).sort((a, b) => a.id - b.id);
        }
        catch (err) {
            console.error("Erro ao buscar os perfis: ", err);
            throw err;
        }
    }
    async getUserProfileData() {
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/user/get-all-users");
            // Força a atualização a acontecer dentro da zona do Angular
            this.zone.run(() => {
                this.users = (response.data || []).sort((a, b) => a.id - b.id);
            });
        }
        catch (err) {
            console.error("Erro ao buscar os usuarios: ", err);
        }
    }
    async sendData() {
        const data = this.userForm.value;
        try {
            if (data.id) {
                // Se tem ID, é uma atualização
                await axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("/user/update", data);
            }
            else {
                // Se não tem ID, é uma inserção
                await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/user/new-user", data);
            }
            this.clearForm();
            await this.getUserProfileData();
        }
        catch (err) {
            console.error(err);
        }
    }
    async deleteUser() {
        if (this.isEditing &&
            confirm(`Tem certeza que deseja excluir o perfil #${this.isEditing}?`)) {
            try {
                const data = this.userForm.value;
                await axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/user/delete/${data.id}`);
                this.clearForm();
                await this.getUserProfileData();
            }
            catch (err) {
                console.error("Erro ao deletar:", err);
                alert("Não foi possível excluir o perfil.");
            }
        }
    }
    isFieldInvalid(fieldName) {
        const field = this.userForm.get(fieldName);
        return !!(field && field.invalid && field.touched);
    }
    clearForm() {
        this.userForm.reset();
        this.isEditing = false;
    }
    currentProfile(dadosRecebidos) {
        const { checked, perfil } = dadosRecebidos;
        // Pega a referência do FormArray dentro do userForm
        const perfisFormArray = this.userForm.get("perfis");
        if (checked) {
            // 1. Adicionar: Cria um novo FormControl com a descrição do perfil
            perfisFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](perfil.descricao));
        }
        else {
            // 2. Remover: Precisa achar o índice do valor a retirar
            const index = perfisFormArray.controls.findIndex((control) => control.value === perfil.descricao);
            if (index !== -1) {
                perfisFormArray.removeAt(index);
            }
        }
    }
    onUserSelectedForEdit(user) {
        this.isEditing = true;
        this.userForm.patchValue({
            id: user.id,
            name: user.descricao,
        });
        this.userSelectedPerfis = [...user.perfis];
    }
};
UserPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/user-page/user-page.component.html")).default,
    })
], UserPageComponent);



/***/ }),

/***/ "./src/pages/user-page/user-page.module.ts":
/*!*************************************************!*\
  !*** ./src/pages/user-page/user-page.module.ts ***!
  \*************************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-page.component */ "./src/pages/user-page/user-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_components_profile_checkbox_profile_checkbox_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/profile-checkbox/profile-checkbox.module */ "./src/components/profile-checkbox/profile-checkbox.module.ts");
/* harmony import */ var src_components_generator_list_generator_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/generator-list/generator-list.module */ "./src/components/generator-list/generator-list.module.ts");
/* harmony import */ var src_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/navbar/navbar.module */ "./src/components/navbar/navbar.module.ts");









const routes = [{ path: "", component: _user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"] }];
let UserPageModule = class UserPageModule {
};
UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_components_profile_checkbox_profile_checkbox_module__WEBPACK_IMPORTED_MODULE_6__["ProfileCheckboxModule"],
            src_components_generator_list_generator_list_module__WEBPACK_IMPORTED_MODULE_7__["GeneratorListModule"],
            src_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
        ],
    })
], UserPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-user-page-user-page-module-es2020.js.map