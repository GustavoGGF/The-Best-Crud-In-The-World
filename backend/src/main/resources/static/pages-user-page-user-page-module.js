(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-page-user-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/profile-checkbox/profile-checkbox.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/profile-checkbox/profile-checkbox.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-8\">\n  <label class=\"block text-sm font-semibold text-gray-700 mb-4\"\n    >Perfis de Sistema (Mínimo 1)</label\n  >\n\n  <div class=\"grid grid-cols-2 md:grid-cols-3 gap-4\">\n    <div\n      *ngFor=\"let perfil of perfisDisponiveis\"\n      class=\"flex items-center p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer\"\n    >\n      <input\n        type=\"checkbox\"\n        [id]=\"'perfil-' + perfil.id\"\n        [value]=\"perfil.descricao\"\n        (change)=\"onCheckboxChange($event, perfil)\"\n        class=\"w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500\"\n      />\n      <label\n        [for]=\"'perfil-' + perfil.id\"\n        class=\"ml-3 text-gray-700 font-medium cursor-pointer\"\n      >\n        {{ perfil.descricao }}\n      </label>\n    </div>\n  </div>\n\n  <div\n    *ngIf=\"perfisFormArray?.invalid && userForm?.touched\"\n    class=\"text-red-500 text-xs mt-3 italic\"\n  >\n    * Selecione ao menos um perfil para este usuário.\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/user-page/user-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/user-page/user-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100\"\n>\n  <h2 class=\"text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4\">\n    Cadastro de Usuário\n  </h2>\n\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"sendData()\">\n    <div class=\"mb-8\">\n      <label class=\"block text-sm font-semibold text-gray-700 mb-2\"\n        >Nome Completo</label\n      >\n      <input\n        type=\"text\"\n        formControlName=\"nome\"\n        class=\"w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition\"\n        [ngClass]=\"\n          userForm.get('nome').invalid && userForm.get('nome').touched\n            ? 'border-red-500'\n            : 'border-gray-300'\n        \"\n        placeholder=\"Digite o nome completo do usuário\"\n      />\n\n      <div\n        *ngIf=\"userForm.get('nome').invalid && userForm.get('nome').touched\"\n        class=\"text-red-500 text-xs mt-2\"\n      >\n        <p *ngIf=\"userForm.get('nome').errors.required\">\n          O nome é obrigatório.\n        </p>\n        <p *ngIf=\"userForm.get('nome').errors.minlength\">\n          O nome deve ter no mínimo 10 caracteres.\n        </p>\n      </div>\n    </div>\n    <app-profile-checkbox\n      [perfisDisponiveis]=\"perfisDisponiveis\"\n    ></app-profile-checkbox>\n    <div class=\"flex justify-end pt-6 border-t\">\n      <button\n        type=\"submit\"\n        [disabled]=\"userForm.invalid\"\n        class=\"px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200\"\n      >\n        Finalizar Cadastro\n      </button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./src/components/profile-checkbox/profile-checkbox.component.scss":
/*!*************************************************************************!*\
  !*** ./src/components/profile-checkbox/profile-checkbox.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9wcm9maWxlLWNoZWNrYm94L3Byb2ZpbGUtY2hlY2tib3guY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileCheckboxComponent = /** @class */ (function () {
    function ProfileCheckboxComponent() {
        this.perfisDisponiveis = [];
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProfileCheckboxComponent.prototype.onCheckboxChange = function (e, perfil) {
        // Criamos um objeto com o estado do checkbox e o perfil
        var data = {
            checked: e.target.checked,
            perfil: perfil,
        };
        this.onEdit.emit(data);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProfileCheckboxComponent.prototype, "onEdit", void 0);
    ProfileCheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile-checkbox",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-checkbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/profile-checkbox/profile-checkbox.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-checkbox.component.scss */ "./src/components/profile-checkbox/profile-checkbox.component.scss")).default]
        })
    ], ProfileCheckboxComponent);
    return ProfileCheckboxComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-checkbox.component */ "./src/components/profile-checkbox/profile-checkbox.component.ts");




var ProfileCheckboxModule = /** @class */ (function () {
    function ProfileCheckboxModule() {
    }
    ProfileCheckboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["ProfileCheckboxComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_profile_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["ProfileCheckboxComponent"]],
        })
    ], ProfileCheckboxModule);
    return ProfileCheckboxModule;
}());



/***/ }),

/***/ "./src/pages/user-page/user-page.component.scss":
/*!******************************************************!*\
  !*** ./src/pages/user-page/user-page.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvdXNlci1wYWdlL3VzZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(fb) {
        this.fb = fb;
        // Lista de perfis disponíveis no sistema para o usuário escolher
        this.perfisDisponiveis = [];
    }
    UserPageComponent.prototype.ngOnInit = function () {
        this.getData();
        this.userForm = this.fb.group({
            nome: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            perfis: this.fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]),
        });
    };
    Object.defineProperty(UserPageComponent.prototype, "perfisFormArray", {
        // Getter para facilitar o acesso ao FormArray no HTML
        get: function () {
            return this.userForm.get("perfis");
        },
        enumerable: true,
        configurable: true
    });
    UserPageComponent.prototype.getData = function () {
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
                        this.perfisDisponiveis = (response.data || []).sort(function (a, b) { return a.id - b.id; });
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
    UserPageComponent.prototype.sendData = function () { };
    UserPageComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-page",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/user-page/user-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-page.component.scss */ "./src/pages/user-page/user-page.component.scss")).default]
        })
    ], UserPageComponent);
    return UserPageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-page.component */ "./src/pages/user-page/user-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_components_profile_checkbox_profile_checkbox_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/profile-checkbox/profile-checkbox.module */ "./src/components/profile-checkbox/profile-checkbox.module.ts");







var routes = [{ path: "", component: _user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"] }];
var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_components_profile_checkbox_profile_checkbox_module__WEBPACK_IMPORTED_MODULE_6__["ProfileCheckboxModule"],
            ],
        })
    ], UserPageModule);
    return UserPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-page-user-page-module.js.map