(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-page-home-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/components/create-card/create-card.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/create-card/create-card.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  [routerLink]=\"['/', direction]\"\n  class=\"group cursor-pointer bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-{{\n    color\n  }}-500 transition-all\"\n>\n  <div class=\"flex items-center justify-between mb-4\">\n    <div\n      class=\"p-3 bg-{{ color }}-100 rounded-lg text-{{\n        color\n      }}-600 group-hover:bg-{{\n        color\n      }}-600 group-hover:text-white transition-colors\"\n    >\n      <svg\n        class=\"w-6 h-6\"\n        fill=\"none\"\n        stroke=\"currentColor\"\n        viewBox=\"0 0 24 24\"\n      >\n        <path\n          stroke-linecap=\"round\"\n          stroke-linejoin=\"round\"\n          stroke-width=\"2\"\n          d=\"id-badge-icon-path...\"\n        />\n      </svg>\n    </div>\n    <span class=\"text-xs font-semibold text-gray-400 uppercase\">{{\n      typeConfiguraion\n    }}</span>\n  </div>\n  <h2 class=\"text-xl font-bold text-gray-800\">Perfis de Sistema</h2>\n  <p class=\"text-gray-500 mt-2\">\n    {{ description }}\n  </p>\n  <div class=\"mt-4 flex items-center text-{{ color }}-600 font-medium\">\n    Acessar CRUD <span class=\"ml-2\">→</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/home-page/home-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/home-page/home-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"min-h-screen bg-gray-50 p-8\">\n  <header class=\"max-w-5xl mx-auto mb-10\">\n    <h1 class=\"text-3xl font-extrabold text-gray-900\">\n      Configurações do Sistema\n    </h1>\n    <p class=\"text-gray-600\">\n      Selecione qual módulo deseja gerenciar no momento.\n    </p>\n  </header>\n  <main class=\"max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6\">\n    <app-create-card\n      [direction]=\"'perfil'\"\n      [typeConfiguraion]=\"'Gestão de Perfis'\"\n      [description]=\"\n        'Defina os níveis de acesso e descrições das funções do sistema.'\n      \"\n      [color]=\"'blue'\"\n    ></app-create-card>\n    <app-create-card\n      [direction]=\"'user'\"\n      [typeConfiguraion]=\"'Gestão de Usuários'\"\n      [description]=\"\n        'Gerencie os usuários e vincule-os aos perfis cadastrados.'\n      \"\n      [color]=\"'green'\"\n    ></app-create-card>\n  </main>\n</div>\n");

/***/ }),

/***/ "./src/components/create-card/create-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/create-card/create-card.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jcmVhdGUtY2FyZC9jcmVhdGUtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/components/create-card/create-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/create-card/create-card.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCardComponent", function() { return CreateCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateCardComponent = /** @class */ (function () {
    function CreateCardComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CreateCardComponent.prototype, "direction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CreateCardComponent.prototype, "typeConfiguraion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CreateCardComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CreateCardComponent.prototype, "color", void 0);
    CreateCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create-card",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/components/create-card/create-card.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-card.component.scss */ "./src/components/create-card/create-card.component.scss")).default]
        })
    ], CreateCardComponent);
    return CreateCardComponent;
}());



/***/ }),

/***/ "./src/components/create-card/create-card.module.ts":
/*!**********************************************************!*\
  !*** ./src/components/create-card/create-card.module.ts ***!
  \**********************************************************/
/*! exports provided: CreateCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCardModule", function() { return CreateCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-card.component */ "./src/components/create-card/create-card.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CreateCardModule = /** @class */ (function () {
    function CreateCardModule() {
    }
    CreateCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_create_card_component__WEBPACK_IMPORTED_MODULE_3__["CreateCardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            exports: [_create_card_component__WEBPACK_IMPORTED_MODULE_3__["CreateCardComponent"]],
        })
    ], CreateCardModule);
    return CreateCardModule;
}());



/***/ }),

/***/ "./src/pages/home-page/home-page.component.scss":
/*!******************************************************!*\
  !*** ./src/pages/home-page/home-page.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/pages/home-page/home-page.component.ts":
/*!****************************************************!*\
  !*** ./src/pages/home-page/home-page.component.ts ***!
  \****************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/home-page/home-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.scss */ "./src/pages/home-page/home-page.component.scss")).default]
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/pages/home-page/home-page.module.ts":
/*!*************************************************!*\
  !*** ./src/pages/home-page/home-page.module.ts ***!
  \*************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "./src/pages/home-page/home-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_components_create_card_create_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/create-card/create-card.module */ "./src/components/create-card/create-card.module.ts");






var routes = [{ path: "", component: _home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] }];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_components_create_card_create_card_module__WEBPACK_IMPORTED_MODULE_5__["CreateCardModule"]],
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-page-home-page-module.js.map