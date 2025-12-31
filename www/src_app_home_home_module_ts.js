"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 45055:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageModule: () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 51624);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 93887);








let HomePageModule = class HomePageModule {};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
    path: '',
    component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    children: [{
      path: 'dashboard',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 65631)).then(m => m.DashboardPageModule)
    }, {
      path: 'brews',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_brew_brew_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../brew/brew.module */ 36545)).then(m => m.BrewPageModule)
    }, {
      path: 'beans',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_beans_beans_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../beans/beans.module */ 69575)).then(m => m.BeansPageModule)
    }, {
      path: 'preparations',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_preparation_preparation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../preparation/preparation.module */ 95391)).then(m => m.PreparationPageModule)
    }, {
      path: 'mills',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mill_mill_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../mill/mill.module */ 29777)).then(m => m.MillPageModule)
    }]
  }]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
  declarations: []
})], HomePageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map