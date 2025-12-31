"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_graph-section_graph-section_module_ts"],{

/***/ 25379:
/*!*******************************************************!*\
  !*** ./src/app/graph-section/graph-section.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphSectionPageModule: () => (/* binding */ GraphSectionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _graph_section_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-section-routing.module */ 27034);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 93887);







let GraphSectionPageModule = class GraphSectionPageModule {};
GraphSectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _graph_section_routing_module__WEBPACK_IMPORTED_MODULE_0__.GraphSectionPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
  declarations: []
})], GraphSectionPageModule);


/***/ }),

/***/ 27034:
/*!***************************************************************!*\
  !*** ./src/app/graph-section/graph-section-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphSectionPageRoutingModule: () => (/* binding */ GraphSectionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _graph_section_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph-section.page */ 60460);




const routes = [{
  path: '',
  component: _graph_section_page__WEBPACK_IMPORTED_MODULE_0__.GraphSectionPage,
  children: [{
    path: '',
    redirectTo: '/graph-section/graph',
    pathMatch: 'full'
  }, {
    path: 'graph',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_graph-section_graph_graph_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./graph/graph.module */ 68016)).then(m => m.GraphPageModule)
  }]
}];
let GraphSectionPageRoutingModule = class GraphSectionPageRoutingModule {};
GraphSectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], GraphSectionPageRoutingModule);


/***/ })

}]);
//# sourceMappingURL=src_app_graph-section_graph-section_module_ts.js.map