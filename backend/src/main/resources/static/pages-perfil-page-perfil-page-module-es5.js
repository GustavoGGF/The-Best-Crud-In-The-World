function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-page-perfil-page-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_pages_perfilPage_perfilPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-navbar-component></app-navbar-component>\n<div\n  class=\"max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100\"\n>\n  <div class=\"flex justify-between items-center mb-6\">\n    <h2 class=\"text-2xl font-bold text-gray-800\">Gerenciar Perfis</h2>\n\n    <span\n      [class]=\"\n        isEditing ? 'text-blue-600 bg-blue-100' : 'text-green-600 bg-green-100'\n      \"\n      class=\"px-3 py-1 text-xs font-semibold rounded-full uppercase\"\n    >\n      {{ isEditing ? \"Editando Registro #\" + isEditing : \"Novo Registro\" }}\n    </span>\n  </div>\n\n  <form [formGroup]=\"perfilForm\" (ngSubmit)=\"sendData()\">\n    <div class=\"mb-4\">\n      <label class=\"block text-sm font-medium text-gray-700 mb-2\"\n        >Descrição do Perfil</label\n      >\n      <input\n        type=\"text\"\n        formControlName=\"descricao\"\n        class=\"w-full p-3 border rounded-lg focus:outline-none transition duration-200 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200\"\n        placeholder=\"Ex: Administrador, Gerente...\"\n      />\n\n      <p\n        *ngIf=\"\n          perfilForm.get('descricao').invalid &&\n          perfilForm.get('descricao').touched\n        \"\n        class=\"text-red-500 text-xs mt-1\"\n      >\n        A descrição deve ter pelo menos 5 caracteres.\n      </p>\n    </div>\n\n    <div class=\"flex justify-between mt-6\">\n      <div>\n        <button\n          *ngIf=\"isEditing\"\n          type=\"button\"\n          (click)=\"deleteProfile()\"\n          class=\"px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-medium transition duration-200 flex items-center gap-2\"\n        >\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            class=\"h-4 w-4\"\n            fill=\"none\"\n            viewBox=\"0 0 24 24\"\n            stroke=\"currentColor\"\n          >\n            <path\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              stroke-width=\"2\"\n              d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\"\n            />\n          </svg>\n          Excluir\n        </button>\n      </div>\n\n      <div class=\"flex gap-3\">\n        <button\n          *ngIf=\"isEditing\"\n          type=\"button\"\n          (click)=\"clearForm()\"\n          class=\"px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition\"\n        >\n          Cancelar\n        </button>\n\n        <button\n          type=\"submit\"\n          [disabled]=\"perfilForm.invalid\"\n          class=\"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition shadow-lg shadow-blue-200\"\n        >\n          {{ isEditing ? \"Atualizar Perfil\" : \"Adicionar Perfil\" }}\n        </button>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"mt-10 pt-6 border-t border-gray-100\">\n    <h3 class=\"text-lg font-semibold text-gray-700 mb-4\">\n      Perfis Disponíveis no Sistema\n    </h3>\n    <app-generator-list\n      [profilesList]=\"profiles\"\n      (onEdit)=\"editProfile($event)\"\n    ></app-generator-list>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./src/pages/perfil-page/perfil-page.component.ts": (
  /*!********************************************************!*\
    !*** ./src/pages/perfil-page/perfil-page.component.ts ***!
    \********************************************************/
  /*! exports provided: PerfilPageComponent */
  /***/
  function _src_pages_perfilPage_perfilPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PerfilPageComponent", function () {
      return PerfilPageComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */"./node_modules/axios/index.js");
    /* harmony import */
    var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
    var PerfilPageComponent = /*#__PURE__*/function () {
      function PerfilPageComponent(fb, zone) {
        _classCallCheck(this, PerfilPageComponent);
        this.fb = fb;
        this.zone = zone;
        this.profiles = [];
        this.isEditing = null;
      }
      return _createClass(PerfilPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
          this.perfilForm = this.fb.group({
            descricao: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]]
          });
        }
      }, {
        key: "getData",
        value: function () {
          var _getData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
            var _this = this;
            var response, _t;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.p = _context.n) {
                case 0:
                  _context.p = 0;
                  _context.n = 1;
                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/profile/get-all-profiles", {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json"
                    }
                  });
                case 1:
                  response = _context.v;
                  // Força a atualização a acontecer dentro da zona do Angular
                  this.zone.run(function () {
                    _this.profiles = (response.data || []).sort(function (a, b) {
                      return a.id - b.id;
                    });
                  });
                  _context.n = 3;
                  break;
                case 2:
                  _context.p = 2;
                  _t = _context.v;
                  console.error("Erro ao buscar os perfis: ", _t);
                  throw _t;
                case 3:
                  return _context.a(2);
              }
            }, _callee, this, [[0, 2]]);
          }));
          function getData() {
            return _getData.apply(this, arguments);
          }
          return getData;
        }()
      }, {
        key: "sendData",
        value: function () {
          var _sendData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
            var payload, _t2;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.p = _context2.n) {
                case 0:
                  if (!this.perfilForm.invalid) {
                    _context2.n = 1;
                    break;
                  }
                  return _context2.a(2);
                case 1:
                  _context2.p = 1;
                  payload = {
                    descricao: this.perfilForm.value.descricao
                  };
                  if (!this.isEditing) {
                    _context2.n = 3;
                    break;
                  }
                  _context2.n = 2;
                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("/profile/update/".concat(this.isEditing), payload);
                case 2:
                  _context2.n = 4;
                  break;
                case 3:
                  _context2.n = 4;
                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/profile/add", payload);
                case 4:
                  // Limpa o estado (reseta o form e volta o idSendoEditado para null)
                  this.clearForm();
                  // Atualiza a lista
                  _context2.n = 5;
                  return this.getData();
                case 5:
                  _context2.n = 7;
                  break;
                case 6:
                  _context2.p = 6;
                  _t2 = _context2.v;
                  console.error("Erro na operação:", _t2);
                  alert("Erro ao processar a requisição no banco de dados.");
                case 7:
                  return _context2.a(2);
              }
            }, _callee2, this, [[1, 6]]);
          }));
          function sendData() {
            return _sendData.apply(this, arguments);
          }
          return sendData;
        }()
      }, {
        key: "editProfile",
        value: function editProfile(perfil) {
          // O patchValue coloca os valores no formulário automaticamente
          this.perfilForm.patchValue({
            descricao: perfil.descricao
          });
          this.isEditing = perfil.id;
        }
      }, {
        key: "clearForm",
        value: function clearForm() {
          this.isEditing = null; // Remove o ID para sair do modo edição
          this.perfilForm.reset(); // Limpa o texto do input
        }
      }, {
        key: "deleteProfile",
        value: function () {
          var _deleteProfile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
            var _t3;
            return _regenerator().w(function (_context3) {
              while (1) switch (_context3.p = _context3.n) {
                case 0:
                  if (!(this.isEditing && confirm("Tem certeza que deseja excluir o perfil #".concat(this.isEditing, "?")))) {
                    _context3.n = 5;
                    break;
                  }
                  _context3.p = 1;
                  _context3.n = 2;
                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/profile/delete/".concat(this.isEditing));
                case 2:
                  this.clearForm();
                  _context3.n = 3;
                  return this.getData();
                case 3:
                  _context3.n = 5;
                  break;
                case 4:
                  _context3.p = 4;
                  _t3 = _context3.v;
                  console.error("Erro ao deletar:", _t3);
                  alert("Não foi possível excluir o perfil.");
                case 5:
                  return _context3.a(2);
              }
            }, _callee3, this, [[1, 4]]);
          }));
          function deleteProfile() {
            return _deleteProfile.apply(this, arguments);
          }
          return deleteProfile;
        }()
      }]);
    }();
    PerfilPageComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    PerfilPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-perfil-page",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil-page.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/pages/perfil-page/perfil-page.component.html"))["default"]
    })], PerfilPageComponent);

    /***/
  }),
  /***/"./src/pages/perfil-page/perfil-page.module.ts": (
  /*!*****************************************************!*\
    !*** ./src/pages/perfil-page/perfil-page.module.ts ***!
    \*****************************************************/
  /*! exports provided: PerfilPageModule */
  /***/
  function _src_pages_perfilPage_perfilPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
      return PerfilPageModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _perfil_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-page.component */"./src/pages/perfil-page/perfil-page.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var src_components_generator_list_generator_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/generator-list/generator-list.module */"./src/components/generator-list/generator-list.module.ts");
    /* harmony import */
    var src_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/navbar/navbar.module */"./src/components/navbar/navbar.module.ts");
    var routes = [{
      path: "",
      component: _perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"]
    }];
    var PerfilPageModule = /*#__PURE__*/_createClass(function PerfilPageModule() {
      _classCallCheck(this, PerfilPageModule);
    });
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_components_generator_list_generator_list_module__WEBPACK_IMPORTED_MODULE_6__["GeneratorListModule"], src_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"]],
      exports: [_perfil_page_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPageComponent"]]
    })], PerfilPageModule);

    /***/
  })
}]);
//# sourceMappingURL=pages-perfil-page-perfil-page-module-es5.js.map