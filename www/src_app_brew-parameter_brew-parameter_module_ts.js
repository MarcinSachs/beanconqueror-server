"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_brew-parameter_brew-parameter_module_ts"],{

/***/ 39860:
/*!*****************************************************************!*\
  !*** ./src/app/brew-parameter/brew-parameter-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrewParameterPageRoutingModule: () => (/* binding */ BrewParameterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _brew_parameter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brew-parameter.page */ 57294);
/* harmony import */ var _manage_parameter_manage_parameter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-parameter/manage-parameter.component */ 55723);
/* harmony import */ var _sort_parameter_sort_parameter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-parameter/sort-parameter.component */ 37689);
/* harmony import */ var _default_parameter_default_parameter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-parameter/default-parameter.component */ 72175);
/* harmony import */ var _list_view_parameter_list_view_parameter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-view-parameter/list-view-parameter.component */ 18631);
/* harmony import */ var _repeat_parameter_repeat_parameter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repeat-parameter/repeat-parameter.component */ 94775);









const routes = [{
  path: '',
  component: _brew_parameter_page__WEBPACK_IMPORTED_MODULE_0__.BrewParameterPage
}, {
  path: 'manage',
  component: _manage_parameter_manage_parameter_component__WEBPACK_IMPORTED_MODULE_1__.ManageParameterComponent
}, {
  path: 'sort',
  component: _sort_parameter_sort_parameter_component__WEBPACK_IMPORTED_MODULE_2__.SortParameterComponent
}, {
  path: 'default',
  component: _default_parameter_default_parameter_component__WEBPACK_IMPORTED_MODULE_3__.DefaultParameterComponent
}, {
  path: 'listview',
  component: _list_view_parameter_list_view_parameter_component__WEBPACK_IMPORTED_MODULE_4__.ListViewParameterComponent
}, {
  path: 'repeat',
  component: _repeat_parameter_repeat_parameter_component__WEBPACK_IMPORTED_MODULE_5__.RepeatParameterComponent
}];
let BrewParameterPageRoutingModule = class BrewParameterPageRoutingModule {};
BrewParameterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
})], BrewParameterPageRoutingModule);


/***/ }),

/***/ 85397:
/*!*********************************************************!*\
  !*** ./src/app/brew-parameter/brew-parameter.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrewParameterPageModule: () => (/* binding */ BrewParameterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _brew_parameter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brew-parameter-routing.module */ 39860);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 93887);







let BrewParameterPageModule = class BrewParameterPageModule {};
BrewParameterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _brew_parameter_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrewParameterPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
  declarations: []
})], BrewParameterPageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_brew-parameter_brew-parameter_module_ts.js.map