function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-page-user-page-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/components/profile-checkbox/profile-checkbox.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/profile-checkbox/profile-checkbox.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_components_profileCheckbox_profileCheckboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"mb-8\">\n  <label class=\"block text-sm font-semibold text-gray-700 mb-4\"\n    >Perfis de Sistema (Mínimo 1)</label\n  >\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4\">\n    <div\n      *ngFor=\"let perfil of perfisDisponiveis\"\n      class=\"flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer\"\n    >\n      <input\n        type=\"checkbox\"\n        [id]=\"'perfil-' + perfil.id\"\n        [value]=\"perfil.descricao\"\n        (change)=\"onCheckboxChange($event, perfil)\"\n        [checked]=\"isProfileSelected(perfil.descricao)\"\n        class=\"w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer\"\n      />\n      <label\n        [for]=\"'perfil-' + perfil.id\"\n        class=\"ml-3 text-sm text-gray-700 font-semibold cursor-pointer select-none uppercase\"\n      >\n        {{ perfil.descricao }}\n      </label>\n    </div>\n  </div>\n\n  <div\n    *ngIf=\"perfisFormArray?.invalid && userForm?.touched\"\n    class=\"text-red-500 text-xs mt-3 italic\"\n  >\n    * Selecione ao menos um perfil para este usuário.\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/pages/user-page/user-page.component.html": (
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/user-page/user-page.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_pages_userPage_userPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-navbar-component></app-navbar-component>\n<div\n  class=\"max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100\"\n>\n  <div class=\"flex justify-between items-center mb-8 border-b pb-4\">\n    <h2 class=\"text-3xl font-extrabold text-gray-900\">Gerenciar Usuários</h2>\n    <span\n      [class]=\"\n        isEditing ? 'text-blue-600 bg-blue-100' : 'text-green-600 bg-green-100'\n      \"\n      class=\"px-3 py-1 text-xs font-semibold rounded-full uppercase\"\n    >\n      {{ isEditing ? \"Editando Usuário #\" + isEditing : \"Novo Registro\" }}\n    </span>\n  </div>\n\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"sendData()\">\n    <div class=\"mb-8\">\n      <label class=\"block text-sm font-semibold text-gray-700 mb-2\"\n        >Nome Completo</label\n      >\n      <input\n        type=\"text\"\n        formControlName=\"name\"\n        class=\"w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition border-gray-300\"\n        [ngClass]=\"{ 'border-red-500': isFieldInvalid('name') }\"\n        placeholder=\"Digite o nome completo do usuário\"\n      />\n\n      <div\n        *ngIf=\"userForm.get('name').invalid && userForm.get('name').touched\"\n        class=\"text-red-500 text-xs mt-2\"\n      >\n        <p *ngIf=\"userForm.get('name').errors?.required\">\n          O nome é obrigatório.\n        </p>\n        <p *ngIf=\"userForm.get('name').errors?.minlength\">\n          O nome deve ter no mínimo 10 caracteres.\n        </p>\n      </div>\n    </div>\n\n    <app-profile-checkbox\n      [perfisDisponiveis]=\"perfisDisponiveis\"\n      [perfisFormArray]=\"perfisFormArray\"\n      [userForm]=\"userForm\"\n      (onEdit)=\"currentProfile($event)\"\n      [selectedPerfis]=\"userSelectedPerfis\"\n    ></app-profile-checkbox>\n\n    <div class=\"flex justify-between pt-6 border-t\">\n      <div>\n        <button\n          *ngIf=\"isEditing\"\n          type=\"button\"\n          (click)=\"deleteUser()\"\n          class=\"px-6 py-3 text-red-600 bg-red-50 hover:bg-red-100 font-bold rounded-xl transition flex items-center gap-2\"\n        >\n          Excluir Usuário\n        </button>\n      </div>\n\n      <div class=\"flex gap-3\">\n        <button\n          *ngIf=\"isEditing\"\n          type=\"button\"\n          (click)=\"clearForm()\"\n          class=\"px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition\"\n        >\n          Cancelar\n        </button>\n\n        <button\n          type=\"submit\"\n          [disabled]=\"userForm.invalid\"\n          class=\"px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200\"\n        >\n          {{ isEditing ? \"Atualizar Usuário\" : \"Finalizar Cadastro\" }}\n        </button>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"mt-12 pt-8 border-t border-gray-100\">\n    <h3 class=\"text-xl font-bold text-gray-800 mb-6\">Usuários Cadastrados</h3>\n    <app-generator-list\n      [usersList]=\"users\"\n      (editUser)=\"onUserSelectedForEdit($event)\"\n    >\n      ></app-generator-list\n    >\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./src/components/profile-checkbox/profile-checkbox.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/components/profile-checkbox/profile-checkbox.component.ts ***!
    \***********************************************************************/
  /*! exports provided: ProfileCheckboxComponent */
  /***/
  function _src_components_profileCheckbox_profileCheckboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProfileCheckboxComponent", function () {
      return ProfileCheckboxComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    var ProfileCheckboxComponent = /*#__PURE__*/function () {
      function ProfileCheckboxComponent() {
        _classCallCheck(this, ProfileCheckboxComponent);
        this.perfisDisponiveis = [];
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      return _createClass(ProfileCheckboxComponent, [{
        key: "selectedPerfis",
        set: function set(values) {
          if (values) {
            this.updateCheckboxes(values);
          }
        }
      }, {
        key: "updateCheckboxes",
        value: function updateCheckboxes(selectedValues) {
          var _this = this;
          // 1. Limpa o FormArray atual para não duplicar dados
          this.perfisFormArray.clear();
          // 2. Adiciona os novos valores ao FormArray
          selectedValues.forEach(function (perfil) {
            _this.perfisFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](perfil));
          });
        }
        // Função auxiliar para o HTML saber se deve marcar o check
      }, {
        key: "isProfileSelected",
        value: function isProfileSelected(perfilDesc) {
          return this.perfisFormArray.value.includes(perfilDesc);
        }
      }, {
        key: "onCheckboxChange",
        value: function onCheckboxChange(e, perfil) {
          // Cria um objeto com o estado do checkbox e o perfil
          var data = {
            checked: e.target.checked,
            perfil: perfil
          };
          this.onEdit.emit(data);
        }
      }]);
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileCheckboxComponent.prototype, "perfisDisponiveis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileCheckboxComponent.prototype, "userForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileCheckboxComponent.prototype, "perfisFormArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileCheckboxComponent.prototype, "selectedPerfis", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProfileCheckboxComponent.prototype, "onEdit", void 0);
    ProfileCheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile-checkbox",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-checkbox.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/components/profile-checkbox/profile-checkbox.component.html"))["default"]
    })], ProfileCheckboxComponent);

    /***/
  }),
  /***/"./src/components/profile-checkbox/profile-checkbox.module.ts": (
  /*!********************************************************************!*\
    !*** ./src/components/profile-checkbox/profile-checkbox.module.ts ***!
    \********************************************************************/
  /*! exports provided: ProfileCheckboxModule */
  /***/
  function _src_components_profileCheckbox_profileCheckboxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProfileCheckboxModule", function () {
      return ProfileCheckboxModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _profile_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-checkbox.component */"./src/components/profile-checkbox/profile-checkbox.component.ts");
    var ProfileCheckboxModule = /*#__PURE__*/_createClass(function ProfileCheckboxModule() {
      _classCallCheck(this, ProfileCheckboxModule);
    });
    ProfileCheckboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_profile_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["ProfileCheckboxComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_profile_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["ProfileCheckboxComponent"]]
    })], ProfileCheckboxModule);

    /***/
  }),
  /***/"./src/pages/user-page/user-page.component.ts": (
  /*!****************************************************!*\
    !*** ./src/pages/user-page/user-page.component.ts ***!
    \****************************************************/
  /*! exports provided: UserPageComponent */
  /***/
  function _src_pages_userPage_userPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserPageComponent", function () {
      return UserPageComponent;
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
    var UserPageComponent = /*#__PURE__*/function () {
      function UserPageComponent(fb, zone) {
        _classCallCheck(this, UserPageComponent);
        this.fb = fb;
        this.zone = zone;
        this.isEditing = false;
        // Lista de perfis disponíveis no sistema para o usuário escolher
        this.perfisDisponiveis = [];
        this.users = [];
        this.profilesSelected = [];
        this.userSelectedPerfis = [];
      }
      return _createClass(UserPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSystemProfileData();
          this.getUserProfileData();
          this.userForm = this.fb.group({
            id: [null],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            perfis: this.fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)])
          });
        }
        // Getter para facilitar o acesso ao FormArray no HTML
      }, {
        key: "perfisFormArray",
        get: function get() {
          return this.userForm.get("perfis");
        }
      }, {
        key: "getSystemProfileData",
        value: function () {
          var _getSystemProfileData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
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
                  this.perfisDisponiveis = (response.data || []).sort(function (a, b) {
                    return a.id - b.id;
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
          function getSystemProfileData() {
            return _getSystemProfileData.apply(this, arguments);
          }
          return getSystemProfileData;
        }()
      }, {
        key: "getUserProfileData",
        value: function () {
          var _getUserProfileData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
            var _this2 = this;
            var response, _t2;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.p = _context2.n) {
                case 0:
                  _context2.p = 0;
                  _context2.n = 1;
                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/user/get-all-users");
                case 1:
                  response = _context2.v;
                  // Força a atualização a acontecer dentro da zona do Angular
                  this.zone.run(function () {
                    _this2.users = (response.data || []).sort(function (a, b) {
                      return a.id - b.id;
                    });
                  });
                  _context2.n = 3;
                  break;
                case 2:
                  _context2.p = 2;
                  _t2 = _context2.v;
                  console.error("Erro ao buscar os usuarios: ", _t2);
                case 3:
                  return _context2.a(2);
              }
            }, _callee2, this, [[0, 2]]);
          }));
          function getUserProfileData() {
            return _getUserProfileData.apply(this, arguments);
          }
          return getUserProfileData;
        }()
      }, {
        key: "sendData",
        value: function () {
          var _sendData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
            var data, _t3;
            return _regenerator().w(function (_context3) {
              while (1) switch (_context3.p = _context3.n) {
                case 0:
                  data = this.userForm.value;
                  _context3.p = 1;
                  if (!data.id) {
                    _context3.n = 3;
                    break;
                  }
                  _context3.n = 2;
                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("/user/update", data);
                case 2:
                  _context3.n = 4;
                  break;
                case 3:
                  _context3.n = 4;
                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/user/new-user", data);
                case 4:
                  this.clearForm();
                  _context3.n = 5;
                  return this.getUserProfileData();
                case 5:
                  _context3.n = 7;
                  break;
                case 6:
                  _context3.p = 6;
                  _t3 = _context3.v;
                  console.error(_t3);
                case 7:
                  return _context3.a(2);
              }
            }, _callee3, this, [[1, 6]]);
          }));
          function sendData() {
            return _sendData.apply(this, arguments);
          }
          return sendData;
        }()
      }, {
        key: "deleteUser",
        value: function () {
          var _deleteUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
            var data, _t4;
            return _regenerator().w(function (_context4) {
              while (1) switch (_context4.p = _context4.n) {
                case 0:
                  if (!(this.isEditing && confirm("Tem certeza que deseja excluir o perfil #".concat(this.isEditing, "?")))) {
                    _context4.n = 5;
                    break;
                  }
                  _context4.p = 1;
                  data = this.userForm.value;
                  _context4.n = 2;
                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/user/delete/".concat(data.id));
                case 2:
                  this.clearForm();
                  _context4.n = 3;
                  return this.getUserProfileData();
                case 3:
                  _context4.n = 5;
                  break;
                case 4:
                  _context4.p = 4;
                  _t4 = _context4.v;
                  console.error("Erro ao deletar:", _t4);
                  alert("Não foi possível excluir o perfil.");
                case 5:
                  return _context4.a(2);
              }
            }, _callee4, this, [[1, 4]]);
          }));
          function deleteUser() {
            return _deleteUser.apply(this, arguments);
          }
          return deleteUser;
        }()
      }, {
        key: "isFieldInvalid",
        value: function isFieldInvalid(fieldName) {
          var field = this.userForm.get(fieldName);
          return !!(field && field.invalid && field.touched);
        }
      }, {
        key: "clearForm",
        value: function clearForm() {
          this.userForm.reset();
          this.isEditing = false;
        }
      }, {
        key: "currentProfile",
        value: function currentProfile(dadosRecebidos) {
          var checked = dadosRecebidos.checked,
            perfil = dadosRecebidos.perfil;
          // Pega a referência do FormArray dentro do userForm
          var perfisFormArray = this.userForm.get("perfis");
          if (checked) {
            // 1. Adicionar: Cria um novo FormControl com a descrição do perfil
            perfisFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](perfil.descricao));
          } else {
            // 2. Remover: Precisa achar o índice do valor a retirar
            var index = perfisFormArray.controls.findIndex(function (control) {
              return control.value === perfil.descricao;
            });
            if (index !== -1) {
              perfisFormArray.removeAt(index);
            }
          }
        }
      }, {
        key: "onUserSelectedForEdit",
        value: function onUserSelectedForEdit(user) {
          this.isEditing = true;
          this.userForm.patchValue({
            id: user.id,
            name: user.descricao
          });
          this.userSelectedPerfis = _toConsumableArray(user.perfis);
        }
      }]);
    }();
    UserPageComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-user-page",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-page.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/pages/user-page/user-page.component.html"))["default"]
    })], UserPageComponent);

    /***/
  }),
  /***/"./src/pages/user-page/user-page.module.ts": (
  /*!*************************************************!*\
    !*** ./src/pages/user-page/user-page.module.ts ***!
    \*************************************************/
  /*! exports provided: UserPageModule */
  /***/
  function _src_pages_userPage_userPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
      return UserPageModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-page.component */"./src/pages/user-page/user-page.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var src_components_profile_checkbox_profile_checkbox_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/profile-checkbox/profile-checkbox.module */"./src/components/profile-checkbox/profile-checkbox.module.ts");
    /* harmony import */
    var src_components_generator_list_generator_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/generator-list/generator-list.module */"./src/components/generator-list/generator-list.module.ts");
    /* harmony import */
    var src_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/navbar/navbar.module */"./src/components/navbar/navbar.module.ts");
    var routes = [{
      path: "",
      component: _user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"]
    }];
    var UserPageModule = /*#__PURE__*/_createClass(function UserPageModule() {
      _classCallCheck(this, UserPageModule);
    });
    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_components_profile_checkbox_profile_checkbox_module__WEBPACK_IMPORTED_MODULE_6__["ProfileCheckboxModule"], src_components_generator_list_generator_list_module__WEBPACK_IMPORTED_MODULE_7__["GeneratorListModule"], src_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"]]
    })], UserPageModule);

    /***/
  })
}]);
//# sourceMappingURL=pages-user-page-user-page-module-es5.js.map