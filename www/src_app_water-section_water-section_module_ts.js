"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_water-section_water-section_module_ts"],{

/***/ 863:
/*!*******************************************************!*\
  !*** ./src/app/water-section/water-section.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WaterSectionPageModule: () => (/* binding */ WaterSectionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _water_section_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./water-section-routing.module */ 77334);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 93887);







let WaterSectionPageModule = class WaterSectionPageModule {};
WaterSectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _water_section_routing_module__WEBPACK_IMPORTED_MODULE_0__.WaterSectionPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
  declarations: []
})], WaterSectionPageModule);


/***/ }),

/***/ 77334:
/*!***************************************************************!*\
  !*** ./src/app/water-section/water-section-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WaterSectionPageRoutingModule: () => (/* binding */ WaterSectionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _water_section_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./water-section.page */ 36200);




const routes = [{
  path: '',
  component: _water_section_page__WEBPACK_IMPORTED_MODULE_0__.WaterSectionPage,
  children: [{
    path: '',
    redirectTo: '/water-section/water',
    pathMatch: 'full'
  }, {
    path: 'water',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_water-section_water_water_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./water/water.module */ 67861)).then(m => m.WaterPageModule)
  }]
}];
let WaterSectionPageRoutingModule = class WaterSectionPageRoutingModule {};
WaterSectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], WaterSectionPageRoutingModule);


/***/ })

}]);
//# sourceMappingURL=src_app_water-section_water-section_module_ts.js.map