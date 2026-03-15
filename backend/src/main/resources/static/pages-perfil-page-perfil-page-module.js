(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-page-perfil-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100\"\n>\n  <div class=\"flex justify-between items-center mb-6\">\n    <h2 class=\"text-2xl font-bold text-gray-800\">Perfil do Usuário</h2>\n    <span\n      class=\"px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase\"\n      >Status: Ativo</span\n    >\n  </div>\n  <form [formGroup]=\"perfilForm\" (ngSubmit)=\"salvar()\">\n    <div class=\"mb-4\">\n      <label class=\"block text-sm font-medium text-gray-700 mb-2\"\n        >Descrição Profissional</label\n      >\n      <textarea\n        formControlName=\"descricao\"\n        [readonly]=\"!isEditing\"\n        [ngClass]=\"\n          !isEditing\n            ? 'bg-gray-50 border-gray-200'\n            : 'bg-white border-blue-500 ring-2 ring-blue-200'\n        \"\n        class=\"w-full p-3 border rounded-lg focus:outline-none transition duration-200 min-h-[120px] resize-none\"\n        placeholder=\"Digite sua descrição...\"\n      ></textarea>\n\n      <p\n        *ngIf=\"\n          perfilForm.get('descricao').invalid &&\n          perfilForm.get('descricao').touched\n        \"\n        class=\"text-red-500 text-xs mt-1\"\n      >\n        A descrição deve ter pelo menos 10 caracteres.\n      </p>\n    </div>\n\n    <div class=\"flex justify-end gap-3 mt-6 border-t pt-4\">\n      <ng-container *ngIf=\"!isEditing; else editingButtons\">\n        <button\n          type=\"button\"\n          (click)=\"isEditing = true\"\n          class=\"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition\"\n        >\n          Editar\n        </button>\n        <button\n          type=\"button\"\n          (click)=\"excluir()\"\n          class=\"px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition\"\n        >\n          Limpar\n        </button>\n      </ng-container>\n\n      <ng-template #editingButtons>\n        <button\n          type=\"button\"\n          (click)=\"cancelar()\"\n          class=\"px-4 py-2 text-gray-600 hover:text-gray-800 transition\"\n        >\n          Cancelar\n        </button>\n        <button\n          type=\"submit\"\n          [disabled]=\"perfilForm.invalid\"\n          class=\"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition shadow-lg shadow-green-200\"\n        >\n          Salvar Alterações\n        </button>\n      </ng-template>\n    </div>\n  </form>\n</div>\n");

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



var PerfilPageComponent = /** @class */ (function () {
    function PerfilPageComponent(fb) {
        this.fb = fb;
        this.isEditing = false;
        this.descricaoSalva = "Desenvolvedor Sênior em formação de gerência.";
    }
    PerfilPageComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    PerfilPageComponent.prototype.initForm = function () {
        this.perfilForm = this.fb.group({
            descricao: [
                this.descricaoSalva,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)],
            ],
        });
    };
    PerfilPageComponent.prototype.salvar = function () {
        if (this.perfilForm.valid) {
            this.descricaoSalva = this.perfilForm.value.descricao;
            this.isEditing = false;
            console.log("Salvo com sucesso:", this.descricaoSalva);
        }
    };
    PerfilPageComponent.prototype.cancelar = function () {
        this.perfilForm.patchValue({ descricao: this.descricaoSalva });
        this.isEditing = false;
    };
    PerfilPageComponent.prototype.excluir = function () {
        this.descricaoSalva = "";
        this.perfilForm.reset();
        this.isEditing = true;
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






var routes = [{ path: "", component: _perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"] }];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            exports: [_perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"]],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-perfil-page-perfil-page-module.js.map