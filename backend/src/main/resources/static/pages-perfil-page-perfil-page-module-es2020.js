(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-page-perfil-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar-component></app-navbar-component>\n<div\n  class=\"max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100\"\n>\n  <div class=\"flex justify-between items-center mb-6\">\n    <h2 class=\"text-2xl font-bold text-gray-800\">Gerenciar Perfis</h2>\n\n    <span\n      [class]=\"\n        isEditing ? 'text-blue-600 bg-blue-100' : 'text-green-600 bg-green-100'\n      \"\n      class=\"px-3 py-1 text-xs font-semibold rounded-full uppercase\"\n    >\n      {{ isEditing ? \"Editando Registro #\" + isEditing : \"Novo Registro\" }}\n    </span>\n  </div>\n\n  <form [formGroup]=\"perfilForm\" (ngSubmit)=\"sendData()\">\n    <div class=\"mb-4\">\n      <label class=\"block text-sm font-medium text-gray-700 mb-2\"\n        >Descrição do Perfil</label\n      >\n      <input\n        type=\"text\"\n        formControlName=\"descricao\"\n        class=\"w-full p-3 border rounded-lg focus:outline-none transition duration-200 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200\"\n        placeholder=\"Ex: Administrador, Gerente...\"\n      />\n\n      <p\n        *ngIf=\"\n          perfilForm.get('descricao').invalid &&\n          perfilForm.get('descricao').touched\n        \"\n        class=\"text-red-500 text-xs mt-1\"\n      >\n        A descrição deve ter pelo menos 5 caracteres.\n      </p>\n    </div>\n\n    <div class=\"flex justify-between mt-6\">\n      <div>\n        <button\n          *ngIf=\"isEditing\"\n          type=\"button\"\n          (click)=\"deleteProfile()\"\n          class=\"px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-medium transition duration-200 flex items-center gap-2\"\n        >\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            class=\"h-4 w-4\"\n            fill=\"none\"\n            viewBox=\"0 0 24 24\"\n            stroke=\"currentColor\"\n          >\n            <path\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              stroke-width=\"2\"\n              d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\"\n            />\n          </svg>\n          Excluir\n        </button>\n      </div>\n\n      <div class=\"flex gap-3\">\n        <button\n          *ngIf=\"isEditing\"\n          type=\"button\"\n          (click)=\"clearForm()\"\n          class=\"px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition\"\n        >\n          Cancelar\n        </button>\n\n        <button\n          type=\"submit\"\n          [disabled]=\"perfilForm.invalid\"\n          class=\"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition shadow-lg shadow-blue-200\"\n        >\n          {{ isEditing ? \"Atualizar Perfil\" : \"Adicionar Perfil\" }}\n        </button>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"mt-10 pt-6 border-t border-gray-100\">\n    <h3 class=\"text-lg font-semibold text-gray-700 mb-4\">\n      Perfis Disponíveis no Sistema\n    </h3>\n    <app-generator-list\n      [profilesList]=\"profiles\"\n      (onEdit)=\"editProfile($event)\"\n    ></app-generator-list>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/pages/perfil-page/perfil-page.component.ts":
/*!********************************************************!*\
  !*** ./src/pages/perfil-page/perfil-page.component.ts ***!
  \********************************************************/
/*! exports provided: PerfilPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageComponent", function() { return PerfilPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




let PerfilPageComponent = class PerfilPageComponent {
    constructor(fb, zone) {
        this.fb = fb;
        this.zone = zone;
        this.profiles = [];
        this.isEditing = null;
    }
    ngOnInit() {
        this.getData();
        this.perfilForm = this.fb.group({
            descricao: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
        });
    }
    async getData() {
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/profile/get-all-profiles", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            // Força a atualização a acontecer dentro da zona do Angular
            this.zone.run(() => {
                this.profiles = (response.data || []).sort((a, b) => a.id - b.id);
            });
        }
        catch (err) {
            console.error("Erro ao buscar os perfis: ", err);
            throw err;
        }
    }
    async sendData() {
        if (this.perfilForm.invalid)
            return;
        try {
            const payload = {
                descricao: this.perfilForm.value.descricao,
            };
            if (this.isEditing) {
                await axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(`/profile/update/${this.isEditing}`, payload);
            }
            else {
                await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/profile/add", payload);
            }
            // Limpa o estado (reseta o form e volta o idSendoEditado para null)
            this.clearForm();
            // Atualiza a lista
            await this.getData();
        }
        catch (err) {
            console.error("Erro na operação:", err);
            alert("Erro ao processar a requisição no banco de dados.");
        }
    }
    editProfile(perfil) {
        // O patchValue coloca os valores no formulário automaticamente
        this.perfilForm.patchValue({
            descricao: perfil.descricao,
        });
        this.isEditing = perfil.id;
    }
    clearForm() {
        this.isEditing = null; // Remove o ID para sair do modo edição
        this.perfilForm.reset(); // Limpa o texto do input
    }
    async deleteProfile() {
        if (this.isEditing &&
            confirm(`Tem certeza que deseja excluir o perfil #${this.isEditing}?`)) {
            try {
                await axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/profile/delete/${this.isEditing}`);
                this.clearForm();
                await this.getData();
            }
            catch (err) {
                console.error("Erro ao deletar:", err);
                alert("Não foi possível excluir o perfil.");
            }
        }
    }
};
PerfilPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
PerfilPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-perfil-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html")).default,
    })
], PerfilPageComponent);



/***/ }),

/***/ "./src/pages/perfil-page/perfil-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/pages/perfil-page/perfil-page.module.ts ***!
  \*****************************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _perfil_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-page.component */ "./src/pages/perfil-page/perfil-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_components_generator_list_generator_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/generator-list/generator-list.module */ "./src/components/generator-list/generator-list.module.ts");
/* harmony import */ var src_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/navbar/navbar.module */ "./src/components/navbar/navbar.module.ts");








const routes = [{ path: "", component: _perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"] }];
let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_components_generator_list_generator_list_module__WEBPACK_IMPORTED_MODULE_6__["GeneratorListModule"],
            src_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
        ],
        exports: [_perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"]],
    })
], PerfilPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-perfil-page-perfil-page-module-es2020.js.map