(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-page-perfil-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/profile-list/profile-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/profile-list/profile-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border rounded-lg overflow-hidden\">\n  <ul class=\"divide-y divide-gray-200\">\n    <li\n      *ngFor=\"let item of items\"\n      class=\"p-4 hover:bg-gray-50 flex justify-between items-center gap-4\"\n    >\n      <div class=\"flex gap-4\">\n        <span class=\"font-bold text-blue-600\">#{{ item.id }}</span>\n        <span class=\"text-gray-700\">{{ item.descricao }}</span>\n      </div>\n\n      <button\n        (click)=\"editProfile(item)\"\n        class=\"flex items-center gap-1 px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition duration-200\"\n      >\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          class=\"h-4 w-4\"\n          fill=\"none\"\n          viewBox=\"0 0 24 24\"\n          stroke=\"currentColor\"\n        >\n          <path\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            stroke-width=\"2\"\n            d=\"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z\"\n          />\n        </svg>\n        Editar\n      </button>\n    </li>\n\n    <li\n      *ngIf=\"!items || items.length === 0\"\n      class=\"p-8 text-center text-gray-500 bg-gray-50\"\n    >\n      <div class=\"flex flex-col items-center gap-2\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          class=\"h-8 w-8 text-gray-400\"\n          fill=\"none\"\n          viewBox=\"0 0 24 24\"\n          stroke=\"currentColor\"\n        >\n          <path\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            stroke-width=\"2\"\n            d=\"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4\"\n          />\n        </svg>\n        <span>Nenhum registro encontrado.</span>\n      </div>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100\"\n>\n  <div class=\"flex justify-between items-center mb-6\">\n    <h2 class=\"text-2xl font-bold text-gray-800\">Gerenciar Perfis</h2>\n\n    <span\n      [class]=\"\n        isEditing ? 'text-blue-600 bg-blue-100' : 'text-green-600 bg-green-100'\n      \"\n      class=\"px-3 py-1 text-xs font-semibold rounded-full uppercase\"\n    >\n      {{ isEditing ? \"Editando Registro #\" + isEditing : \"Novo Registro\" }}\n    </span>\n  </div>\n\n  <form [formGroup]=\"perfilForm\" (ngSubmit)=\"sendData()\">\n    <div class=\"mb-4\">\n      <label class=\"block text-sm font-medium text-gray-700 mb-2\"\n        >Descrição do Perfil</label\n      >\n      <input\n        type=\"text\"\n        formControlName=\"descricao\"\n        class=\"w-full p-3 border rounded-lg focus:outline-none transition duration-200 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200\"\n        placeholder=\"Ex: Administrador, Gerente...\"\n      />\n\n      <p\n        *ngIf=\"\n          perfilForm.get('descricao').invalid &&\n          perfilForm.get('descricao').touched\n        \"\n        class=\"text-red-500 text-xs mt-1\"\n      >\n        A descrição deve ter pelo menos 5 caracteres.\n      </p>\n    </div>\n\n    <div class=\"flex justify-between mt-6\">\n      <div>\n        <button\n          *ngIf=\"isEditing\"\n          type=\"button\"\n          (click)=\"deleteProfile()\"\n          class=\"px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-medium transition duration-200 flex items-center gap-2\"\n        >\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            class=\"h-4 w-4\"\n            fill=\"none\"\n            viewBox=\"0 0 24 24\"\n            stroke=\"currentColor\"\n          >\n            <path\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              stroke-width=\"2\"\n              d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\"\n            />\n          </svg>\n          Excluir\n        </button>\n      </div>\n\n      <div class=\"flex gap-3\">\n        <button\n          *ngIf=\"isEditing\"\n          type=\"button\"\n          (click)=\"clearForm()\"\n          class=\"px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition\"\n        >\n          Cancelar\n        </button>\n\n        <button\n          type=\"submit\"\n          [disabled]=\"perfilForm.invalid\"\n          class=\"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition shadow-lg shadow-blue-200\"\n        >\n          {{ isEditing ? \"Atualizar Perfil\" : \"Adicionar Perfil\" }}\n        </button>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"mt-10 pt-6 border-t border-gray-100\">\n    <h3 class=\"text-lg font-semibold text-gray-700 mb-4\">\n      Perfis Disponíveis no Sistema\n    </h3>\n    <app-profile-list\n      [items]=\"profiles\"\n      (onEdit)=\"editProfile($event)\"\n    ></app-profile-list>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/components/profile-list/profile-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/components/profile-list/profile-list.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9wcm9maWxlLWxpc3QvcHJvZmlsZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/components/profile-list/profile-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/components/profile-list/profile-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileListComponent", function() { return ProfileListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileListComponent = /** @class */ (function () {
    function ProfileListComponent() {
        this.items = [];
        // Cria o "emissor" do evento
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProfileListComponent.prototype.editProfile = function (item) {
        // Quando o botão for clicado, ele dispara o item para quem estiver ouvindo
        this.onEdit.emit(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProfileListComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProfileListComponent.prototype, "onEdit", void 0);
    ProfileListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile-list",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/profile-list/profile-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-list.component.scss */ "./src/components/profile-list/profile-list.component.scss")).default]
        })
    ], ProfileListComponent);
    return ProfileListComponent;
}());



/***/ }),

/***/ "./src/components/profile-list/profile.module.ts":
/*!*******************************************************!*\
  !*** ./src/components/profile-list/profile.module.ts ***!
  \*******************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-list.component */ "./src/components/profile-list/profile-list.component.ts");




var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_list_component__WEBPACK_IMPORTED_MODULE_3__["ProfileListComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_profile_list_component__WEBPACK_IMPORTED_MODULE_3__["ProfileListComponent"]],
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/pages/perfil-page/perfil-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/pages/perfil-page/perfil-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvcGVyZmlsLXBhZ2UvcGVyZmlsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var PerfilPageComponent = /** @class */ (function () {
    function PerfilPageComponent(fb) {
        this.fb = fb;
        this.profiles = [];
        this.isEditing = null;
    }
    PerfilPageComponent.prototype.ngOnInit = function () {
        this.getData();
        this.perfilForm = this.fb.group({
            descricao: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
        });
    };
    PerfilPageComponent.prototype.getData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/profile/get-all-profiles", {
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        console.log("response: ", response);
                        this.profiles = (response.data || []).sort(function (a, b) { return a.id - b.id; });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error("Erro ao buscar os perfis: ", err_1);
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PerfilPageComponent.prototype.sendData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.perfilForm.invalid)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        payload = {
                            descricao: this.perfilForm.value.descricao,
                        };
                        if (!this.isEditing) return [3 /*break*/, 3];
                        // CENÁRIO: EDIÇÃO (PUT)
                        // Note que passamos o ID na URL
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("/profile/update/" + this.isEditing, payload)];
                    case 2:
                        // CENÁRIO: EDIÇÃO (PUT)
                        // Note que passamos o ID na URL
                        _a.sent();
                        console.log("Perfil atualizado!");
                        return [3 /*break*/, 5];
                    case 3: 
                    // CENÁRIO: NOVO REGISTRO (POST)
                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/profile/add", payload)];
                    case 4:
                        // CENÁRIO: NOVO REGISTRO (POST)
                        _a.sent();
                        console.log("Perfil adicionado!");
                        _a.label = 5;
                    case 5:
                        // Limpa o estado (reseta o form e volta o idSendoEditado para null)
                        this.clearForm();
                        // Atualiza a lista
                        return [4 /*yield*/, this.getData()];
                    case 6:
                        // Atualiza a lista
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        err_2 = _a.sent();
                        console.error("Erro na operação:", err_2);
                        alert("Erro ao processar a requisição no banco de dados.");
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    PerfilPageComponent.prototype.editProfile = function (perfil) {
        // O patchValue coloca os valores no formulário automaticamente
        this.perfilForm.patchValue({
            descricao: perfil.descricao,
        });
        // Dica: Você vai precisar guardar o ID para saber que está editando
        this.isEditing = perfil.id;
    };
    PerfilPageComponent.prototype.clearForm = function () {
        this.isEditing = null; // Remove o ID para sair do modo edição
        this.perfilForm.reset(); // Limpa o texto do input
    };
    PerfilPageComponent.prototype.deleteProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.isEditing &&
                            confirm("Tem certeza que deseja excluir o perfil #" + this.isEditing + "?"))) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete("/profile/delete/" + this.isEditing)];
                    case 2:
                        _a.sent();
                        console.log("Perfil removido!");
                        this.clearForm();
                        return [4 /*yield*/, this.getData()];
                    case 3:
                        _a.sent(); // Recarrega a lista
                        return [3 /*break*/, 5];
                    case 4:
                        err_3 = _a.sent();
                        console.error("Erro ao deletar:", err_3);
                        alert("Não foi possível excluir o perfil.");
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PerfilPageComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    PerfilPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-perfil-page",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perfil-page.component.scss */ "./src/pages/perfil-page/perfil-page.component.scss")).default]
        })
    ], PerfilPageComponent);
    return PerfilPageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _perfil_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-page.component */ "./src/pages/perfil-page/perfil-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_components_profile_list_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/profile-list/profile.module */ "./src/components/profile-list/profile.module.ts");







var routes = [{ path: "", component: _perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"] }];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_components_profile_list_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"],
            ],
            exports: [_perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"]],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-perfil-page-perfil-page-module.js.map