"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_bean-parameter_bean-parameter_module_ts"],{

/***/ 77365:
/*!*********************************************************!*\
  !*** ./src/app/bean-parameter/bean-parameter.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeanParameterPageModule: () => (/* binding */ BeanParameterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _bean_parameter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bean-parameter-routing.module */ 98356);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 93887);







let BeanParameterPageModule = class BeanParameterPageModule {};
BeanParameterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _bean_parameter_routing_module__WEBPACK_IMPORTED_MODULE_0__.BeanParameterPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
  declarations: []
})], BeanParameterPageModule);


/***/ }),

/***/ 98356:
/*!*****************************************************************!*\
  !*** ./src/app/bean-parameter/bean-parameter-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeanParameterPageRoutingModule: () => (/* binding */ BeanParameterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _bean_parameter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bean-parameter.page */ 15054);
/* harmony import */ var _bean_list_view_parameter_bean_list_view_parameter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean-list-view-parameter/bean-list-view-parameter.component */ 19433);
/* harmony import */ var _bean_manage_parameter_bean_manage_parameter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean-manage-parameter/bean-manage-parameter.component */ 71221);






const routes = [{
  path: '',
  component: _bean_parameter_page__WEBPACK_IMPORTED_MODULE_0__.BeanParameterPage
}, {
  path: 'manage',
  component: _bean_manage_parameter_bean_manage_parameter_component__WEBPACK_IMPORTED_MODULE_2__.BeanManageParameterComponent
}, {
  path: 'listview',
  component: _bean_list_view_parameter_bean_list_view_parameter_component__WEBPACK_IMPORTED_MODULE_1__.BeanListViewParameterComponent
}];
let BeanParameterPageRoutingModule = class BeanParameterPageRoutingModule {};
BeanParameterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], BeanParameterPageRoutingModule);


/***/ })

}]);
//# sourceMappingURL=src_app_bean-parameter_bean-parameter_module_ts.js.map