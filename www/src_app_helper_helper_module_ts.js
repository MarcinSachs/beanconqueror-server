"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_helper_helper_module_ts"],{

/***/ 87405:
/*!*****************************************!*\
  !*** ./src/app/helper/helper.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelperPageModule: () => (/* binding */ HelperPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _helper_brew_ratio_helper_brew_ratio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-brew-ratio/helper-brew-ratio.component */ 36885);
/* harmony import */ var _helper_water_hardness_helper_water_hardness_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-water-hardness/helper-water-hardness.component */ 52893);
/* harmony import */ var _helper_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper.page */ 36790);










const routes = [{
  path: '',
  component: _helper_page__WEBPACK_IMPORTED_MODULE_3__.HelperPage,
  children: [{
    path: '',
    redirectTo: '/helper/brew-ratio',
    pathMatch: 'full'
  }, {
    path: 'brew-ratio',
    component: _helper_brew_ratio_helper_brew_ratio_component__WEBPACK_IMPORTED_MODULE_1__.HelperBrewRatioComponent
  }, {
    path: 'water-hardness',
    component: _helper_water_hardness_helper_water_hardness_component__WEBPACK_IMPORTED_MODULE_2__.HelperWaterHardnessComponent
  }]
}];
let HelperPageModule = class HelperPageModule {};
HelperPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
  declarations: [],
  providers: []
})], HelperPageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_helper_helper_module_ts.js.map