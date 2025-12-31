"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_roasting-section_roasting-section_module_ts"],{

/***/ 50663:
/*!*************************************************************!*\
  !*** ./src/app/roasting-section/roasting-section.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoastingSectionPageModule: () => (/* binding */ RoastingSectionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _roasting_section_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roasting-section-routing.module */ 72190);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 93887);







let RoastingSectionPageModule = class RoastingSectionPageModule {};
RoastingSectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _roasting_section_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoastingSectionPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
  declarations: []
})], RoastingSectionPageModule);


/***/ }),

/***/ 72190:
/*!*********************************************************************!*\
  !*** ./src/app/roasting-section/roasting-section-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoastingSectionPageRoutingModule: () => (/* binding */ RoastingSectionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _roasting_section_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roasting-section.page */ 96416);




const routes = [{
  path: '',
  component: _roasting_section_page__WEBPACK_IMPORTED_MODULE_0__.RoastingSectionPage,
  children: [{
    path: '',
    redirectTo: '/roasting-section/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_roasting-section_green-beans_green-beans_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./green-beans/green-beans.module */ 5519)).then(m => m.GreenBeansPageModule)
  }, {
    path: 'roasting-machine',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_roasting-section_roasting-machine_roasting-machine_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./roasting-machine/roasting-machine.module */ 16943)).then(m => m.RoastingMachinePageModule)
  }]
}];
let RoastingSectionPageRoutingModule = class RoastingSectionPageRoutingModule {};
RoastingSectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], RoastingSectionPageRoutingModule);


/***/ })

}]);
//# sourceMappingURL=src_app_roasting-section_roasting-section_module_ts.js.map