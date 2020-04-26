(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AppComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 16, consts: [["id", "app", 1, "app", 3, "dir", "ngClass"], ["id", "app-spinner"], ["src", "assets/img/logo.png", 1, "animated-logo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fixed-header", ctx.settings.fixedHeader)("fixed-sidenav", ctx.settings.fixedSidenav)("fixed-footer", ctx.settings.fixedFooter)("horizontal-menu", ctx.settings.menu == "horizontal")("compact", ctx.settings.menuType == "compact")("mini", ctx.settings.menuType == "mini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.settings.rtl ? "rtl" : "ltr")("ngClass", ctx.settings.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !ctx.settings.loadingSpinner);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["#app-spinner[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.5s, opacity 0.3s linear;\n  transition: visibility 0.5s, opacity 0.3s linear;\n}\n#app-spinner.hide[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n}\n#app-spinner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  letter-spacing: 0.02em;\n  opacity: 0;\n  text-transform: uppercase;\n  -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;\n  animation: loading-text-opacity 2s linear 0s infinite normal;\n}\n#app-spinner[_ngcontent-%COMP%]   img.animated-logo[_ngcontent-%COMP%] {\n  -webkit-animation: rotation 2s infinite linear;\n  animation: rotation 2s infinite linear;\n}\n@keyframes rotation {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes rotation {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHBhcnJsZWwgcG9ydGZvbGlvXFx0aGVtZWZvcmVzdC0xWnZya0FOSy1hbm51bGFyLWFuZ3VsYXItbWF0ZXJpYWwtZGVzaWduLWFkbWluLXRlbXBsYXRlXFxhbm51bGFyXFxhbm51bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBSUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHdEQUFBO0VBRUEsZ0RBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDRVI7QURBSTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFHQSxvRUFBQTtFQUNBLDREQUFBO0FDRVI7QURBSTtFQUdJLDhDQUFBO0VBQ0Esc0NBQUE7QUNFUjtBREdBO0VBQ0k7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDQ1Q7QUFDRjtBREdBO0VBQ0k7SUFBTyxpQ0FBQTtFQ0tUO0FBQ0Y7QURDQTtFQUNJO0lBQUssVUFBQTtFQ09QO0VETkU7SUFBSyxVQUFBO0VDU1A7RURSRTtJQUFLLFVBQUE7RUNXUDtFRFZFO0lBQUssVUFBQTtFQ2FQO0FBQ0Y7QUROQTtFQUNJO0lBQUssVUFBQTtFQ3VCUDtFRHRCRTtJQUFLLFVBQUE7RUN5QlA7RUR4QkU7SUFBSyxVQUFBO0VDMkJQO0VEMUJFO0lBQUssVUFBQTtFQzZCUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcC1zcGlubmVye1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICAmLmhpZGV7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7IFxyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAtbW96LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgICAgICAtby1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgaW1nLmFuaW1hdGVkLWxvZ28ge1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgLW8tYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0aW9uIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICBhbmltYXRpb246IHJvdGF0aW9uIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRpb24geyBcclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IFxyXG59XHJcbkAtbW96LWtleWZyYW1lcyByb3RhdGlvbiB7IFxyXG4gICAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRpb24geyBcclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXHJcbn1cclxuQC1vLWtleWZyYW1lcyByb3RhdGlvbiB7IFxyXG4gICAgMTAwJSB7IC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSAge29wYWNpdHk6IDB9XHJcbiAgICAyMCUge29wYWNpdHk6IDB9XHJcbiAgICA1MCUge29wYWNpdHk6IDF9XHJcbiAgICAxMDAle29wYWNpdHk6IDB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufSIsIiNhcHAtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xufVxuI2FwcC1zcGlubmVyLmhpZGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG4jYXBwLXNwaW5uZXIgaDQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtbW96LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xufVxuI2FwcC1zcGlubmVyIGltZy5hbmltYXRlZC1sb2dvIHtcbiAgLW1vei1hbmltYXRpb246IHJvdGF0aW9uIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgLW8tYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gMnMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRpb24ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcm90YXRpb24ge1xuICAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ "./src/app/theme/utils/custom-overlay-container.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./src/app/pages/errors/not-found/not-found.component.ts");
/* harmony import */ var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/errors/error/error.component */ "./src/app/pages/errors/error/error.component.ts");
/* harmony import */ var _theme_components_top_info_content_top_info_content_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/components/top-info-content/top-info-content.component */ "./src/app/theme/components/top-info-content/top-info-content.component.ts");
/* harmony import */ var _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./theme/components/sidenav/sidenav.component */ "./src/app/theme/components/sidenav/sidenav.component.ts");
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./theme/components/menu/vertical-menu/vertical-menu.component */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./theme/components/flags-menu/flags-menu.component */ "./src/app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./theme/components/fullscreen/fullscreen.component */ "./src/app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./theme/components/applications/applications.component */ "./src/app/theme/components/applications/applications.component.ts");
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./theme/components/messages/messages.component */ "./src/app/theme/components/messages/messages.component.ts");
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./theme/components/user-menu/user-menu.component */ "./src/app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./theme/components/favorites/favorites.component */ "./src/app/theme/components/favorites/favorites.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_settings__WEBPACK_IMPORTED_MODULE_13__["AppSettings"],
        { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
        { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"], useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayContainer"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAir4tXhx3X-wcdZnhe8TLlo9J2m_AKx6w'
            }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
        _pages_pages_component__WEBPACK_IMPORTED_MODULE_15__["PagesComponent"],
        _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__["BlankComponent"],
        _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
        _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
        _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorComponent"],
        _theme_components_top_info_content_top_info_content_component__WEBPACK_IMPORTED_MODULE_20__["TopInfoContentComponent"],
        _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["SidenavComponent"],
        _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__["VerticalMenuComponent"],
        _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_23__["HorizontalMenuComponent"],
        _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_24__["FlagsMenuComponent"],
        _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_25__["FullScreenComponent"],
        _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_26__["ApplicationsComponent"],
        _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__["MessagesComponent"],
        _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_28__["UserMenuComponent"],
        _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_29__["FavoritesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyAir4tXhx3X-wcdZnhe8TLlo9J2m_AKx6w'
                    }),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                    angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"].forRoot({
                        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
                        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
                    }),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                    _pages_pages_component__WEBPACK_IMPORTED_MODULE_15__["PagesComponent"],
                    _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__["BlankComponent"],
                    _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                    _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
                    _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorComponent"],
                    _theme_components_top_info_content_top_info_content_component__WEBPACK_IMPORTED_MODULE_20__["TopInfoContentComponent"],
                    _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["SidenavComponent"],
                    _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__["VerticalMenuComponent"],
                    _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_23__["HorizontalMenuComponent"],
                    _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_24__["FlagsMenuComponent"],
                    _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_25__["FullScreenComponent"],
                    _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_26__["ApplicationsComponent"],
                    _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__["MessagesComponent"],
                    _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_28__["UserMenuComponent"],
                    _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_29__["FavoritesComponent"]
                ],
                entryComponents: [
                    _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__["VerticalMenuComponent"]
                ],
                providers: [
                    _app_settings__WEBPACK_IMPORTED_MODULE_13__["AppSettings"],
                    { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                    { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"], useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayContainer"] }
                ],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./src/app/pages/errors/not-found/not-found.component.ts");
/* harmony import */ var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/errors/error/error.component */ "./src/app/pages/errors/error/error.component.ts");






const routes = [
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"], children: [
            { path: '', loadChildren: () => Promise.all(/*! import() | pages-dashboard-dashboard-module */[__webpack_require__.e("default~pages-charts-charts-module~pages-dashboard-dashboard-module"), __webpack_require__.e("pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: () => __webpack_require__.e(/*! import() | pages-users-users-module */ "pages-users-users-module").then(__webpack_require__.bind(null, /*! ./pages/users/users.module */ "./src/app/pages/users/users.module.ts")).then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            { path: 'dynamic-menu', loadChildren: () => __webpack_require__.e(/*! import() | pages-dynamic-menu-dynamic-menu-module */ "pages-dynamic-menu-dynamic-menu-module").then(__webpack_require__.bind(null, /*! ./pages/dynamic-menu/dynamic-menu.module */ "./src/app/pages/dynamic-menu/dynamic-menu.module.ts")).then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'ui', loadChildren: () => __webpack_require__.e(/*! import() | pages-ui-ui-module */ "pages-ui-ui-module").then(__webpack_require__.bind(null, /*! ./pages/ui/ui.module */ "./src/app/pages/ui/ui.module.ts")).then(m => m.UiModule), data: { breadcrumb: 'UI' } },
            { path: 'mailbox', loadChildren: () => __webpack_require__.e(/*! import() | pages-mailbox-mailbox-module */ "pages-mailbox-mailbox-module").then(__webpack_require__.bind(null, /*! ./pages/mailbox/mailbox.module */ "./src/app/pages/mailbox/mailbox.module.ts")).then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
            { path: 'chat', loadChildren: () => __webpack_require__.e(/*! import() | pages-chat-chat-module */ "pages-chat-chat-module").then(__webpack_require__.bind(null, /*! ./pages/chat/chat.module */ "./src/app/pages/chat/chat.module.ts")).then(m => m.ChatModule), data: { breadcrumb: 'Chat' } },
            { path: 'form-controls', loadChildren: () => __webpack_require__.e(/*! import() | pages-form-controls-form-controls-module */ "pages-form-controls-form-controls-module").then(__webpack_require__.bind(null, /*! ./pages/form-controls/form-controls.module */ "./src/app/pages/form-controls/form-controls.module.ts")).then(m => m.FormControlsModule), data: { breadcrumb: 'Form Controls' } },
            { path: 'tables', loadChildren: () => __webpack_require__.e(/*! import() | pages-tables-tables-module */ "pages-tables-tables-module").then(__webpack_require__.bind(null, /*! ./pages/tables/tables.module */ "./src/app/pages/tables/tables.module.ts")).then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },
            { path: 'schedule', loadChildren: () => __webpack_require__.e(/*! import() | pages-schedule-schedule-module */ "pages-schedule-schedule-module").then(__webpack_require__.bind(null, /*! ./pages/schedule/schedule.module */ "./src/app/pages/schedule/schedule.module.ts")).then(m => m.ScheduleModule), data: { breadcrumb: 'Schedule' } },
            { path: 'maps', loadChildren: () => __webpack_require__.e(/*! import() | pages-maps-maps-module */ "pages-maps-maps-module").then(__webpack_require__.bind(null, /*! ./pages/maps/maps.module */ "./src/app/pages/maps/maps.module.ts")).then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: () => Promise.all(/*! import() | pages-charts-charts-module */[__webpack_require__.e("default~pages-charts-charts-module~pages-dashboard-dashboard-module"), __webpack_require__.e("pages-charts-charts-module")]).then(__webpack_require__.bind(null, /*! ./pages/charts/charts.module */ "./src/app/pages/charts/charts.module.ts")).then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
            { path: 'drag-drop', loadChildren: () => __webpack_require__.e(/*! import() | pages-drag-drop-drag-drop-module */ "pages-drag-drop-drag-drop-module").then(__webpack_require__.bind(null, /*! ./pages/drag-drop/drag-drop.module */ "./src/app/pages/drag-drop/drag-drop.module.ts")).then(m => m.DragDropModule), data: { breadcrumb: 'Drag & Drop' } },
            { path: 'icons', loadChildren: () => __webpack_require__.e(/*! import() | pages-icons-icons-module */ "pages-icons-icons-module").then(__webpack_require__.bind(null, /*! ./pages/icons/icons.module */ "./src/app/pages/icons/icons.module.ts")).then(m => m.IconsModule), data: { breadcrumb: 'Material Icons' } },
            { path: 'profile', loadChildren: () => __webpack_require__.e(/*! import() | pages-profile-profile-module */ "pages-profile-profile-module").then(__webpack_require__.bind(null, /*! ./pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } },
            { path: 'blank', component: _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"], data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], data: { breadcrumb: 'Search' } },
            { path: 'search/:name', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], data: { breadcrumb: 'Search' } }
        ]
    },
    { path: 'landing', loadChildren: () => __webpack_require__.e(/*! import() | pages-landing-landing-module */ "pages-landing-landing-module").then(__webpack_require__.bind(null, /*! ./pages/landing/landing.module */ "./src/app/pages/landing/landing.module.ts")).then(m => m.LandingModule) },
    { path: 'login', loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => __webpack_require__.e(/*! import() | pages-register-register-module */ "pages-register-register-module").then(__webpack_require__.bind(null, /*! ./pages/register/register.module */ "./src/app/pages/register/register.module.ts")).then(m => m.RegisterModule) },
    { path: 'error', component: _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], data: { breadcrumb: 'Error' } },
    { path: '**', component: _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
// preloadingStrategy: PreloadAllModules,  // <- uncomment this line for disable lazy load
// useHash: true
});


/***/ }),

/***/ "./src/app/app.settings.model.ts":
/*!***************************************!*\
  !*** ./src/app/app.settings.model.ts ***!
  \***************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
class Settings {
    constructor(name, loadingSpinner, fixedHeader, fixedSidenav, fixedSidenavUserContent, fixedFooter, sidenavIsOpened, sidenavIsPinned, menu, menuType, theme, rtl) {
        this.name = name;
        this.loadingSpinner = loadingSpinner;
        this.fixedHeader = fixedHeader;
        this.fixedSidenav = fixedSidenav;
        this.fixedSidenavUserContent = fixedSidenavUserContent;
        this.fixedFooter = fixedFooter;
        this.sidenavIsOpened = sidenavIsOpened;
        this.sidenavIsPinned = sidenavIsPinned;
        this.menu = menu;
        this.menuType = menuType;
        this.theme = theme;
        this.rtl = rtl;
    }
}


/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings.model */ "./src/app/app.settings.model.ts");



class AppSettings {
    constructor() {
        this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_1__["Settings"]('Annular', //theme name
        true, //loadingSpinner
        true, //fixedHeader
        true, //fixedSidenav
        false, //fixedSidenavUserContent
        false, //fixedFooter
        true, //sidenavIsOpened
        true, //sidenavIsPinned  
        'vertical', //horizontal , vertical
        'default', //default, compact, mini
        'indigo-light', //indigo-light, teal-light, red-light, gray-light, blue-dark, green-dark, pink-dark, gray-dark
        false // true = rtl, false = ltr
        );
    }
}
AppSettings.ɵfac = function AppSettings_Factory(t) { return new (t || AppSettings)(); };
AppSettings.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppSettings, factory: AppSettings.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSettings, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/blank/blank.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/content-header/content-header.component */ "./src/app/shared/content-header/content-header.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");




class BlankComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank"]], decls: 5, vars: 7, consts: [[3, "icon", "title", "desc", "hideBreadcrumb", "hasBgImage"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", 1, "p-2"], ["fxFlex", "100", 1, "p-2"]], template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-content-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your content here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pb-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "check_box_outline_blank")("title", "Page title")("desc", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin ante lectus, id pretium mi dignissim non.")("hideBreadcrumb", false)("hasBgImage", true);
    } }, directives: [_shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_1__["ContentHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rL2JsYW5rLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank',
                templateUrl: './blank.component.html',
                styleUrls: ['./blank.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/errors/error/error.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/errors/error/error.component.ts ***!
  \*******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/content-header/content-header.component */ "./src/app/shared/content-header/content-header.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class ErrorComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    goHome() {
        this.router.navigate(['/']);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.settings.loadingSpinner = false;
        });
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 13, vars: 6, consts: [[1, "h-100"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "h-100"], ["fxFlex", "80", "fxFlex.gt-sm", "30", "fxFlex.sm", "60", 1, "mat-elevation-z6"], [3, "icon", "title", "hideBreadcrumb", "hasBgImage"], [1, "p-4", "text-center"], [1, "py-2"], [1, "pt-2"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mat-elevation-z6", "mt-3", 3, "click"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-content-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "INTERNAL SERVER ERROR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Opps, something went wrong.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "You can go to home page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_11_listener($event) { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "GO HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pt-4 pb-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "warning")("title", "500")("hideBreadcrumb", true)("hasBgImage", true);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__["ContentHeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html'
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/errors/not-found/not-found.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/errors/not-found/not-found.component.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/content-header/content-header.component */ "./src/app/shared/content-header/content-header.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
















function NotFoundComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Text is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NotFoundComponent {
    constructor(appSettings, router, fb) {
        this.appSettings = appSettings;
        this.router = router;
        this.fb = fb;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.form = this.fb.group({
            'param': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSubmit(values) {
        if (this.form.valid) {
            this.router.navigate(['/search', values['param']]);
        }
    }
    goHome() {
        this.router.navigate(['/']);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.settings.loadingSpinner = false;
        });
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 20, vars: 9, consts: [[1, "h-100"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "h-100"], ["fxFlex", "80", "fxFlex.gt-sm", "30", "fxFlex.sm", "60", 1, "mat-elevation-z6"], [3, "icon", "title", "hideBreadcrumb", "hasBgImage"], [1, "p-4", "text-center"], [1, "pt-2"], [1, "mt-3", 3, "formGroup", "ngSubmit"], [1, "w-100", "py-2"], ["matPrefix", "", 1, "mat-icon-sm", "mb-2", "mr-2", "secondary-text-color"], ["matInput", "", "formControlName", "param", "placeholder", "Enter search keyword..."], [4, "ngIf"], [1, "mt-3"], ["mat-raised-button", "", "color", "accent", "type", "submit", 1, "mat-elevation-z6", "mx-1", 3, "disabled"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mat-elevation-z6", "mx-1", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-content-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Opps, it seems that this page does not exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "If you are sure it should, search for it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NotFoundComponent_Template_form_ngSubmit_9_listener($event) { return ctx.onSubmit(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NotFoundComponent_mat_error_14_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_18_listener($event) { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "GO HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pt-4 pb-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "error")("title", "404")("hideBreadcrumb", true)("hasBgImage", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.param.errors == null ? null : ctx.form.controls.param.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_6__["ContentHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html'
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/utils/app-animation */ "./src/app/theme/utils/app-animation.ts");
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _theme_components_top_info_content_top_info_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/components/top-info-content/top-info-content.component */ "./src/app/theme/components/top-info-content/top-info-content.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../theme/components/favorites/favorites.component */ "./src/app/theme/components/favorites/favorites.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../theme/components/flags-menu/flags-menu.component */ "./src/app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../theme/components/fullscreen/fullscreen.component */ "./src/app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../theme/components/applications/applications.component */ "./src/app/theme/components/applications/applications.component.ts");
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../theme/components/messages/messages.component */ "./src/app/theme/components/messages/messages.component.ts");
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../theme/components/user-menu/user-menu.component */ "./src/app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../theme/components/sidenav/sidenav.component */ "./src/app/theme/components/sidenav/sidenav.component.ts");
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../theme/components/menu/horizontal-menu/horizontal-menu.component */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");






























const _c0 = ["sidenav"];
const _c1 = ["backToTop"];
function PagesComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_button_11_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.sidenav.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagesComponent_button_12__svg_path_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 53);
} }
function PagesComponent_button_12__svg_path_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 54);
} }
function PagesComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.settings.sidenavIsPinned = !ctx_r18.settings.sidenavIsPinned; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagesComponent_button_12__svg_path_2_Template, 1, 0, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PagesComponent_button_12__svg_path_3_Template, 1, 0, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.settings.sidenavIsPinned);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.settings.sidenavIsPinned);
} }
function PagesComponent_mat_drawer_30_mat_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ANNULAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotate", ctx_r21.showSidenav);
} }
function PagesComponent_mat_drawer_30_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedStart", function PagesComponent_mat_drawer_30_Template_mat_drawer_openedStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.showSidenav = !ctx_r22.showSidenav; })("closedStart", function PagesComponent_mat_drawer_30_Template_mat_drawer_closedStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.showSidenav = !ctx_r24.showSidenav; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagesComponent_mat_drawer_30_mat_toolbar_2_Template, 5, 1, "mat-toolbar", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidenav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx_r8.settings.sidenavIsOpened)("mode", ctx_r8.settings.sidenavIsPinned ? "side" : "over");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.settings.fixedSidenav);
} }
function PagesComponent_mat_toolbar_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-horizontal-menu", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("w-100", ctx_r9.settings.menuType != "mini");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuParentId", 0);
} }
function PagesComponent_mat_radio_button_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", menu_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r25);
} }
function PagesComponent_mat_radio_button_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuType_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", menuType_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuType_r26);
} }
class PagesComponent {
    constructor(appSettings, router, menuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.menuService = menuService;
        this.optionsPsConfig = {};
        this.showSidenav = false;
        this.showInfoContent = false;
        this.toggleSearchBar = false;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.optionsPsConfig.wheelPropagation = false;
        if (window.innerWidth <= 960) {
            this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
        }
        this.menuOption = this.settings.menu;
        this.menuTypeOption = this.settings.menuType;
        this.defaultMenu = this.settings.menu;
    }
    ngAfterViewInit() {
        setTimeout(() => { this.settings.loadingSpinner = false; }, 300);
        this.backToTop.nativeElement.style.display = 'none';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.scrollToTop();
            }
            if (window.innerWidth <= 960) {
                this.sidenav.close();
            }
        });
        if (this.settings.menu == "vertical")
            this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
    }
    toggleSidenav() {
        this.sidenav.toggle();
    }
    chooseMenu() {
        this.settings.menu = this.menuOption;
        this.defaultMenu = this.menuOption;
        if (this.menuOption == 'horizontal') {
            this.settings.fixedSidenav = false;
        }
        this.router.navigate(['/']);
    }
    chooseMenuType() {
        this.settings.menuType = this.menuTypeOption;
    }
    changeTheme(theme) {
        this.settings.theme = theme;
    }
    closeInfoContent(showInfoContent) {
        this.showInfoContent = !showInfoContent;
    }
    onWindowResize() {
        if (window.innerWidth <= 960) {
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.settings.menu = 'vertical';
        }
        else {
            (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = true;
            this.settings.sidenavIsPinned = true;
        }
    }
    onPsScrollY(event) {
        (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
    }
    scrollToTop() {
        this.pss.forEach(ps => {
            if (ps.elementRef.nativeElement.id == 'main') {
                ps.scrollToTop(0, 250);
            }
        });
    }
    closeSubMenus() {
        if (this.settings.menu == "vertical") {
            this.menuService.closeAllSubMenus();
        }
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"])); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], viewQuery: function PagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.backToTop = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pss = _t);
    } }, hostBindings: function PagesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PagesComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])], decls: 120, vars: 28, consts: [["id", "main", "perfectScrollbar", "", 1, "h-100", 3, "psScrollY"], [1, "header"], [3, "showInfoContent", "onCloseInfoContent"], [1, "top-toolbar"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxFlex", ""], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["routerLink", "/", "fxLayout", "row", "fxLayoutAlign", "start center", "ngClass.xs", "mobile", 1, "logo", 3, "click"], ["src", "assets/img/logo.png", "alt", "logo"], [1, "mx-2"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "w-100"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "fxShow", "false", "fxShow.gt-xs", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "fxShow", "false", "fxShow.gt-xs", "", 3, "click"], [1, "mat-icon-lg"], ["fxShow", "false", "fxShow.gt-sm", ""], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxShow", "false", "fxShow.gt-xs", "", 1, "search-bar"], ["method", "get"], ["type", "text", "placeholder", "Type to search...", 1, "mat-elevation-z3"], ["mat-icon-button", "", "type", "button", 3, "click"], ["fxShow", "false", "fxShow.gt-xs", ""], [1, "page-wrapper"], ["class", "sidenav mat-elevation-z6", "autoFocus", "false", 3, "opened", "mode", "openedStart", "closedStart", 4, "ngIf"], ["class", "horizontal-menu px-0", 4, "ngIf"], ["position", "end", 1, "options"], ["options", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "op-header", "mat-elevation-z1"], ["mat-icon-button", "", 1, "ml-2", 3, "click"], [3, "perfectScrollbar"], ["fxLayout", "column", 1, "control"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["labelPosition", "before", 3, "checked", "change"], ["labelPosition", "before", 3, "checked", "disabled", "change"], [3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "skin-primary", "indigo-light", 3, "click"], [1, "skin-secondary"], [1, "skin-primary", "teal-light", 3, "click"], [1, "skin-primary", "red-light", 3, "click"], [1, "skin-primary", "gray-light", 3, "click"], [1, "skin-primary", "blue-dark", 3, "click"], [1, "skin-primary", "green-dark", 3, "click"], [1, "skin-primary", "pink-dark", 3, "click"], [1, "skin-primary", "gray-dark", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "options-icon", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "back-to-top", 3, "click"], ["backToTop", ""], ["color", "primary", 1, "footer"], ["mat-raised-button", "", "color", "accent", "href", "https://themeforest.net/item/annular-angular-material-design-admin-template/22537089", "target", "_blank"], ["mat-icon-button", "", 3, "click"], [1, "pin"], ["d", "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z", 4, "ngIf"], ["d", "M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z", 4, "ngIf"], ["d", "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"], ["d", "M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z"], ["autoFocus", "false", 1, "sidenav", "mat-elevation-z6", 3, "opened", "mode", "openedStart", "closedStart"], ["sidenav", ""], ["class", "top-toolbar", 4, "ngIf"], ["routerLink", "/", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "logo"], [1, "horizontal-menu", "px-0"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "w-100"], [3, "menuParentId"], [3, "value"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("psScrollY", function PagesComponent_Template_div_psScrollY_0_listener($event) { return ctx.onPsScrollY($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-top-info-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseInfoContent", function PagesComponent_Template_app_top_info_content_onCloseInfoContent_2_listener($event) { return ctx.closeInfoContent(ctx.showInfoContent); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_a_click_6_listener($event) { return ctx.closeSubMenus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ANNULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PagesComponent_button_11_Template, 3, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PagesComponent_button_12_Template, 4, 2, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_button_click_13_listener($event) { return ctx.showInfoContent = !ctx.showInfoContent; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-favorites", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_button_click_21_listener($event) { return ctx.toggleSearchBar = !ctx.toggleSearchBar; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-flags-menu", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-applications", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-messages", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-user-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-drawer-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PagesComponent_mat_drawer_30_Template, 4, 3, "mat-drawer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PagesComponent_mat_toolbar_32_Template, 3, 3, "mat-toolbar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-drawer", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_button_click_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r10.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Fixed header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-slide-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_49_listener($event) { return ctx.settings.fixedHeader = !ctx.settings.fixedHeader; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Fixed sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-slide-toggle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_53_listener($event) { return ctx.settings.fixedSidenav = !ctx.settings.fixedSidenav; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Fixed footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-slide-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_57_listener($event) { return ctx.settings.fixedFooter = !ctx.settings.fixedFooter; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-slide-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_61_listener($event) { return ctx.settings.rtl = !ctx.settings.rtl; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Choose menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-radio-group", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PagesComponent_Template_mat_radio_group_ngModelChange_65_listener($event) { return ctx.menuOption = $event; })("change", function PagesComponent_Template_mat_radio_group_change_65_listener($event) { return ctx.chooseMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PagesComponent_mat_radio_button_66_Template, 2, 2, "mat-radio-button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Choose menu type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-radio-group", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PagesComponent_Template_mat_radio_group_ngModelChange_70_listener($event) { return ctx.menuTypeOption = $event; })("change", function PagesComponent_Template_mat_radio_group_change_70_listener($event) { return ctx.chooseMenuType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, PagesComponent_mat_radio_button_71_Template, 2, 2, "mat-radio-button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Choose theme skin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_76_listener($event) { return ctx.changeTheme("indigo-light"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_78_listener($event) { return ctx.changeTheme("teal-light"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_80_listener($event) { return ctx.changeTheme("red-light"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_82_listener($event) { return ctx.changeTheme("gray-light"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_85_listener($event) { return ctx.changeTheme("blue-dark"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_87_listener($event) { return ctx.changeTheme("green-dark"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_89_listener($event) { return ctx.changeTheme("pink-dark"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_91_listener($event) { return ctx.changeTheme("gray-dark"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sidenav options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Opened sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-slide-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_99_listener($event) { return ctx.settings.sidenavIsOpened = !ctx.settings.sidenavIsOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Pinned sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-slide-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_103_listener($event) { return ctx.settings.sidenavIsPinned = !ctx.settings.sidenavIsPinned; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Fixed sidenav user content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-slide-toggle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_107_listener($event) { return ctx.settings.fixedSidenavUserContent = !ctx.settings.fixedSidenavUserContent; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_108_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r10.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_111_listener($event) { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "arrow_upward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-toolbar", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Purchase ANNULAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("over", ctx.showInfoContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showInfoContent", ctx.showInfoContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z2", ctx.settings.fixedHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotate", ctx.showSidenav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.menu == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.menu == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotate", ctx.showInfoContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.toggleSearchBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.menu == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.menu == "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.optionsPsConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.fixedHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.fixedSidenav)("disabled", ctx.menuOption == "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.fixedFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.rtl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.menuOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.menuTypeOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.sidenavIsOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.sidenavIsPinned);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.settings.fixedSidenavUserContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full-width", !ctx.showSidenav);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], _theme_components_top_info_content_top_info_content_component__WEBPACK_IMPORTED_MODULE_6__["TopInfoContentComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_13__["FavoritesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_15__["FlagsMenuComponent"], _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_16__["FullScreenComponent"], _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_17__["ApplicationsComponent"], _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_18__["MessagesComponent"], _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_19__["UserMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatDrawer"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggle"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_23__["SidenavComponent"], _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_24__["HorizontalMenuComponent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioButton"]], styles: [".top-toolbar[_ngcontent-%COMP%] {\n  position: relative;\n  height: 56px;\n  z-index: 1;\n}\n\n.pin[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 260px;\n  overflow: hidden;\n  border: none !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.header.over[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.show[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  width: 250px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  height: 56px;\n  position: relative;\n  z-index: 3;\n}\n\n.options[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 260px;\n  z-index: 999999;\n}\n\n.options[_ngcontent-%COMP%]   .op-header[_ngcontent-%COMP%] {\n  height: 56px;\n  padding: 0 14px;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 46px solid;\n  border-left: 46px solid transparent;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.indigo-light[_ngcontent-%COMP%] {\n  background-color: #3F51B5;\n  border: 1px solid #3F51B5;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.indigo-light[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #ececec;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.teal-light[_ngcontent-%COMP%] {\n  background-color: #009688;\n  border: 1px solid #009688;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.teal-light[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #ececec;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.red-light[_ngcontent-%COMP%] {\n  background-color: #F44336;\n  border: 1px solid #F44336;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.red-light[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #ececec;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.gray-light[_ngcontent-%COMP%] {\n  background-color: #757575;\n  border: 1px solid #757575;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.gray-light[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #ececec;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.blue-dark[_ngcontent-%COMP%] {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.blue-dark[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #262626;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.green-dark[_ngcontent-%COMP%] {\n  background-color: #388E3C;\n  border: 1px solid #388E3C;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.green-dark[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #262626;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.pink-dark[_ngcontent-%COMP%] {\n  background-color: #D81B60;\n  border: 1px solid #D81B60;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.pink-dark[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #262626;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.gray-dark[_ngcontent-%COMP%] {\n  background-color: #607D8B;\n  border: 1px solid #607D8B;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.gray-dark[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #262626;\n}\n\n.options[_ngcontent-%COMP%]   .mat-radio-group[_ngcontent-%COMP%] {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.options[_ngcontent-%COMP%]   .mat-radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 2px 0;\n}\n\n.options[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.options[_ngcontent-%COMP%]   .ps[_ngcontent-%COMP%] {\n  height: calc(100% - 56px);\n}\n\n.op-image[_ngcontent-%COMP%] {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\n.options-icon[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 120px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 99999;\n}\n\n.options-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  -webkit-animation: spin 8s linear infinite;\n  animation: spin 8s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.back-to-top[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRDpcXHBhcnJsZWwgcG9ydGZvbGlvXFx0aGVtZWZvcmVzdC0xWnZya0FOSy1hbm51bGFyLWFuZ3VsYXItbWF0ZXJpYWwtZGVzaWduLWFkbWluLXRlbXBsYXRlXFxhbm51bGFyXFxhbm51bGFyL3NyY1xcYXBwXFxwYWdlc1xccGFnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0Q6XFxwYXJybGVsIHBvcnRmb2xpb1xcdGhlbWVmb3Jlc3QtMVp2cmtBTkstYW5udWxhci1hbmd1bGFyLW1hdGVyaWFsLWRlc2lnbi1hZG1pbi10ZW1wbGF0ZVxcYW5udWxhclxcYW5udWxhci9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0VBQ0EsWUNIaUI7RURJakIsVUFBQTtBRUZKOztBRktBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUVGSjs7QUZLQTtFQUNJLFlDWFk7RURZWixnQkFBQTtFQUNBLHVCQUFBO0FFRko7O0FGS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FFRko7O0FGR0k7RUFDSSxXQUFBO0FFRFI7O0FGT1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBRUpaOztBRktZO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUVIZjs7QUZTQTtFQUNJLFlDaERvQjtFRGlEcEIsa0JBQUE7RUFDQSxVQUFBO0FFTko7O0FGVUE7RUFDSSxlQUFBO0VBQ0EsWUN0RFk7RUR1RFosZUFBQTtBRVBKOztBRlFJO0VBQ0ksWUM3RGE7RUQ4RGIsZUFBQTtBRU5SOztBRlFJO0VBQ0ksaUJBQUE7QUVOUjs7QUZPUTtFQUNJLGNBQUE7QUVMWjs7QUZPUTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7QUVMWjs7QUZPUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRUxaOztBRk1ZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBRUpoQjs7QUZNWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVKaEI7O0FGS2dCO0VBQ0ksNEJBQUE7QUVIcEI7O0FGTVk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFSmhCOztBRktnQjtFQUNJLDRCQUFBO0FFSHBCOztBRk1ZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRUpoQjs7QUZLZ0I7RUFDSSw0QkFBQTtBRUhwQjs7QUZNWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVKaEI7O0FGS2dCO0VBQ0ksNEJBQUE7QUVIcEI7O0FGTVk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFSmhCOztBRktnQjtFQUNJLDRCQUFBO0FFSHBCOztBRk1ZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRUpoQjs7QUZLZ0I7RUFDSSw0QkFBQTtBRUhwQjs7QUZNWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVKaEI7O0FGS2dCO0VBQ0ksNEJBQUE7QUVIcEI7O0FGTVk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFSmhCOztBRktnQjtFQUNJLDRCQUFBO0FFSHBCOztBRlFJO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBRU5SOztBRk9RO0VBQ0ksYUFBQTtBRUxaOztBRlFJO0VBQ0ksWUFBQTtBRU5SOztBRlFJO0VBQ0kseUJBQUE7QUVOUjs7QUZTQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FFTko7O0FGUUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FFTEo7O0FGTUk7RUFDSSwwQ0FBQTtFQUVBLGtDQUFBO0FFSlI7O0FGYUE7RUFDSTtJQUNJLGlDQUFBO0VFTE47QUFDRjs7QUZPQTtFQUNJO0lBQ0ksaUNBQUE7WUFBQSx5QkFBQTtFRUxOO0FBQ0Y7O0FGUUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBRU5KOztBRk9JO0VBQ0ksWUFBQTtBRUxSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi50b3AtdG9vbGJhcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogJHRvcC10b29sYmFyLWhlaWdodDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5waW57XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNpZGVuYXZ7XHJcbiAgICB3aWR0aDogJHNpZGVuYXYtd2lkdGg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICYub3ZlcntcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaC1iYXJ7XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAmLnNob3d7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9vdGVyeyAgICBcclxuICAgIGhlaWdodDogJGZvb3Rlci10b29sYmFyLWhlaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcblxyXG4ub3B0aW9uc3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAkc2lkZW5hdi13aWR0aDtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIC5vcC1oZWFkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAkdG9wLXRvb2xiYXItaGVpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICAgIH1cclxuICAgIC5jb250cm9se1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5za2luLXByaW1hcnl7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxyXG4gICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDsgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7IFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDQ2cHggc29saWQ7IFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDQ2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5pbmRpZ28tbGlnaHR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNGNTFCNTtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudGVhbC1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Njg4O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5yZWQtbGlnaHR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Y0NDMzNjtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZ3JheS1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzU3NTc1O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ibHVlLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAyNzdiZDtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZ3JlZW4tZGFya3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODhFM0M7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg4RTNDO1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5waW5rLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDgxQjYwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q4MUI2MDtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZ3JheS1kYXJre1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MDdEOEI7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtcmFkaW8tZ3JvdXB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAubWF0LXJhZGlvLWJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LXNsaWRlLXRvZ2dsZXtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAucHN7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyR0b3AtdG9vbGJhci1oZWlnaHR9KTtcclxuICAgIH1cclxufVxyXG4ub3AtaW1hZ2V7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNjY2M7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcbi5vcHRpb25zLWljb257XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEyMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcclxuICAgIH0gXHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxyXG4gICAgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFjay10by10b3B7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7ICAgIFxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9ICAgIFxyXG59IiwiJG1haW4tZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuJHRvcC10b29sYmFyLWhlaWdodDogNTZweDsgXHJcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiA2NHB4OyBcclxuJGZvb3Rlci10b29sYmFyLWhlaWdodDogNTZweDsgXHJcblxyXG4kc2lkZW5hdi13aWR0aDogMjYwcHg7XHJcbiRjb21wYWN0LXNpZGVuYXYtd2lkdGg6IDE3MHB4O1xyXG4kbWluaS1zaWRlbmF2LXdpZHRoOiA2NnB4OyIsIi50b3AtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1NnB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGluIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5oZWFkZXIub3ZlciB7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uc2VhcmNoLWJhciBmb3JtIGlucHV0IHtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjNDQ0O1xuICB3aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5zZWFyY2gtYmFyIGZvcm0gaW5wdXQuc2hvdyB7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5mb290ZXIge1xuICBoZWlnaHQ6IDU2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbn1cblxuLm9wdGlvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNjBweDtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuLm9wdGlvbnMgLm9wLWhlYWRlciB7XG4gIGhlaWdodDogNTZweDtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuLm9wdGlvbnMgLmNvbnRyb2wge1xuICBwYWRkaW5nOiA2cHggMTRweDtcbn1cbi5vcHRpb25zIC5jb250cm9sIGRpdiB7XG4gIHBhZGRpbmc6IDZweCAwO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgaDQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5IHtcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogNDZweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeSAuc2tpbi1zZWNvbmRhcnkge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiA0NnB4IHNvbGlkO1xuICBib3JkZXItbGVmdDogNDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuaW5kaWdvLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNGNTFCNTtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuaW5kaWdvLWxpZ2h0IC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnRlYWwtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Njg4O1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS50ZWFsLWxpZ2h0IC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnJlZC1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNDQzMzY7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnJlZC1saWdodCAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ncmF5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc1NzU3NTtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuZ3JheS1saWdodCAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ibHVlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI3N2JkO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ibHVlLWRhcmsgLnNraW4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuZ3JlZW4tZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODhFM0M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODhFM0M7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyZWVuLWRhcmsgLnNraW4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkucGluay1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4MUI2MDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q4MUI2MDtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkucGluay1kYXJrIC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyYXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MDdEOEI7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyYXktZGFyayAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xufVxuLm9wdGlvbnMgLm1hdC1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm9wdGlvbnMgLm1hdC1yYWRpby1ncm91cCAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDA7XG59XG4ub3B0aW9ucyAubWF0LXNsaWRlLXRvZ2dsZSB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5vcHRpb25zIC5wcyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XG59XG5cbi5vcC1pbWFnZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2NjYztcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLm9wdGlvbnMtaWNvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMjBweDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTk5OTk7XG59XG4ub3B0aW9ucy1pY29uIC5tYXQtaWNvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5iYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5iYWNrLXRvLXRvcDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbn0iXX0= */"], data: { animation: [_theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_4__["rotate"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                templateUrl: './pages.component.html',
                styleUrls: ['./pages.component.scss'],
                animations: [_theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_4__["rotate"]],
                providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]]
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav']
        }], backToTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['backToTop']
        }], pss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"]]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/content-header/content-header.component */ "./src/app/shared/content-header/content-header.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function SearchComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Search results for : ", ctx_r28.param, "");
} }
class SearchComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.title = 'Nothing Found';
        this.description = 'Sorry, but nothing matched your search terms. Please try again with some different keywords.';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params['name']) {
                this.param = params['name'];
                this.title = 'Search results';
                this.description = 'The following results were found for ' + params['name'];
            }
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 4, vars: 8, consts: [[3, "icon", "title", "desc", "hideBreadcrumb", "hasBgImage"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", 1, "p-2"], ["fxFlex", "100", 1, "p-2"], [4, "ngIf"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-content-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_p_3_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("pb-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "search")("title", ctx.title)("desc", ctx.description)("hideBreadcrumb", false)("hasBgImage", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.param);
    } }, directives: [_shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__["ContentHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













const _c0 = function (a0) { return [a0]; };
function BreadcrumbComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", i_r5 == ctx_r3.breadcrumbs.length - 1)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, breadcrumb_r4.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", i_r5 != ctx_r3.breadcrumbs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r4.name);
} }
class BreadcrumbComponent {
    constructor(appSettings, router, activatedRoute, title, menuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.menuService = menuService;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' > ' + breadcrumb.name;
                });
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        });
    }
    parseRoute(node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
    closeSubMenus() {
        if (this.settings.menu == "vertical")
            this.menuService.closeAllSubMenus();
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])], decls: 7, vars: 1, consts: [["fxLayout", "row", 1, "breadcrumb", "p-2"], ["routerLink", "/", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "breadcrumb-item", 3, "click"], [1, "breadcrumb-title"], ["class", "breadcrumb-item", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "breadcrumb-item"], [3, "hidden", "routerLink"], [1, "breadcrumb-title", "active", 3, "hidden"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreadcrumbComponent_Template_a_click_1_listener($event) { return ctx.closeSubMenus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BreadcrumbComponent_div_6_Template, 5, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".breadcrumb[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-title.active[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvRDpcXHBhcnJsZWwgcG9ydGZvbGlvXFx0aGVtZWZvcmVzdC0xWnZya0FOSy1hbm51bGFyLWFuZ3VsYXItbWF0ZXJpYWwtZGVzaWduLWFkbWluLXRlbXBsYXRlXFxhbm51bGFyXFxhbm51bGFyL3NyY1xcYXBwXFxzaGFyZWRcXGJyZWFkY3J1bWJcXGJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNFUjtBREFJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWJ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgfVxyXG4gICAgLmJyZWFkY3J1bWItdGl0bGUuYWN0aXZle1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLWl0ZW0rLmJyZWFkY3J1bWItaXRlbTpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgICAgICAgY29udGVudDogXCIvXCI7XHJcbiAgICB9XHJcbn0iLCIuYnJlYWRjcnVtYiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5icmVhZGNydW1iIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnJlYWRjcnVtYiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItdGl0bGUuYWN0aXZlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgY29udGVudDogXCIvXCI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.scss'],
                providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]]
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/content-header/content-header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/content-header/content-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function() { return ContentHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






function ContentHeaderComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.icon);
} }
function ContentHeaderComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
} }
function ContentHeaderComponent_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.desc);
} }
class ContentHeaderComponent {
    constructor() {
        this.hideBreadcrumb = false;
        this.hasBgImage = false;
    }
    ngOnInit() {
    }
}
ContentHeaderComponent.ɵfac = function ContentHeaderComponent_Factory(t) { return new (t || ContentHeaderComponent)(); };
ContentHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentHeaderComponent, selectors: [["app-content-header"]], inputs: { icon: "icon", title: "title", desc: "desc", hideBreadcrumb: "hideBreadcrumb", hasBgImage: "hasBgImage", class: "class" }, decls: 5, vars: 7, consts: [[1, "content-header", "bg-primary", 3, "ngClass"], [3, "hidden"], ["class", "mat-icon-xlg", 4, "ngIf"], [4, "ngIf"], ["class", "p-2", 4, "ngIf"], [1, "mat-icon-xlg"], [1, "p-2"]], template: function ContentHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentHeaderComponent_mat_icon_2_Template, 2, 1, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContentHeaderComponent_h1_3_Template, 2, 1, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContentHeaderComponent_h4_4_Template, 2, 1, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-image", ctx.hasBgImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideBreadcrumb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.desc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".content-header[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n}\n.content-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n}\n.content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 400;\n  margin: 0;\n}\n.content-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 580px;\n  text-align: center;\n  margin: 0 auto;\n}\n.content-header.bg-image[_ngcontent-%COMP%] {\n  background-image: url('header-bg.png');\n  background-blend-mode: overlay;\n  background-size: 300px;\n}\n@media screen and (min-width: 960px) {\n  .content-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n  .content-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .content-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .content-header.has-bg-image[_ngcontent-%COMP%] {\n    background-size: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRlbnQtaGVhZGVyL0Q6XFxwYXJybGVsIHBvcnRmb2xpb1xcdGhlbWVmb3Jlc3QtMVp2cmtBTkstYW5udWxhci1hbmd1bGFyLW1hdGVyaWFsLWRlc2lnbi1hZG1pbi10ZW1wbGF0ZVxcYW5udWxhclxcYW5udWxhci9zcmNcXGFwcFxcc2hhcmVkXFxjb250ZW50LWhlYWRlclxcY29udGVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb250ZW50LWhlYWRlci9jb250ZW50LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFUjtBREFJO0VBQ0ksc0NBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FDRVI7QURHQTtFQUVRO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNEVjtFREdNO0lBQ0ksZUFBQTtFQ0RWO0VER007SUFDSSxlQUFBO0VDRFY7RURHTTtJQUNJLHNCQUFBO0VDRFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250ZW50LWhlYWRlci9jb250ZW50LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWhlYWRlcntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH0gXHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDU4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgICYuYmctaW1hZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9hcHAvaGVhZGVyLWJnLnBuZ1wiKTsgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMHB4OyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7ICAgIFxyXG4gICAgLmNvbnRlbnQtaGVhZGVye1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5oYXMtYmctaW1hZ2V7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDgwcHg7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jb250ZW50LWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY29udGVudC1oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250ZW50LWhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWF4LXdpZHRoOiA1ODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250ZW50LWhlYWRlci5iZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYXBwL2hlYWRlci1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmNvbnRlbnQtaGVhZGVyIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbiAgLmNvbnRlbnQtaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gIH1cbiAgLmNvbnRlbnQtaGVhZGVyIGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmNvbnRlbnQtaGVhZGVyLmhhcy1iZy1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0ODBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-header',
                templateUrl: './content-header.component.html',
                styleUrls: ['./content-header.component.scss']
            }]
    }], function () { return []; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['icon']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['desc']
        }], hideBreadcrumb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hideBreadcrumb']
        }], hasBgImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hasBgImage']
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./content-header/content-header.component */ "./src/app/shared/content-header/content-header.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");





































class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"]
        ],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_34__["ContentHeaderComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_35__["BreadcrumbComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"]], exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
        _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_34__["ContentHeaderComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_35__["BreadcrumbComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"]
                ],
                exports: [
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
                    _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_34__["ContentHeaderComponent"],
                    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_35__["BreadcrumbComponent"]
                ],
                declarations: [
                    _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_34__["ContentHeaderComponent"],
                    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_35__["BreadcrumbComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");







class ApplicationsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ApplicationsComponent.ɵfac = function ApplicationsComponent_Factory(t) { return new (t || ApplicationsComponent)(); };
ApplicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationsComponent, selectors: [["app-applications"]], decls: 63, vars: 2, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["appsMenuTrigger", "matMenuTrigger"], [1, "toolbar-dropdown-menu", "applications", 3, "overlapTrigger"], ["appsMenu", "matMenu"], [3, "mouseleave"], ["cols", "3", "rowHeight", "1:1"], ["mat-button", ""], [1, "gradient-purple"], [1, "gradient-indigo"], [1, "gradient-blue"], [1, "gradient-orange"], [1, "gradient-green"], [1, "gradient-pink"], [1, "gradient-brown"], [1, "gradient-red"], [1, "gradient-gray"]], template: function ApplicationsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r511 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function ApplicationsComponent_Template_span_mouseleave_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r511); const _r509 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r509.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "My account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "library_books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r510 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r510);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"]], styles: [".applications {\n  width: 260px;\n}\n.applications .mat-card {\n  padding: 0;\n}\n.applications .mat-card .mat-button {\n  height: 100%;\n  line-height: 1.7;\n  font-weight: 400;\n  width: 100%;\n  border-radius: 0;\n}\n.applications .mat-card .mat-button .mat-button-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.applications .mat-card .mat-button .mat-button-wrapper .mat-icon {\n  padding: 8px;\n  color: #fff;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9hcHBsaWNhdGlvbnMvRDpcXHBhcnJsZWwgcG9ydGZvbGlvXFx0aGVtZWZvcmVzdC0xWnZya0FOSy1hbm51bGFyLWFuZ3VsYXItbWF0ZXJpYWwtZGVzaWduLWFkbWluLXRlbXBsYXRlXFxhbm51bGFyXFxhbm51bGFyL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcYXBwbGljYXRpb25zXFxhcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBREFJO0VBQ0ksVUFBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0daO0FERlk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSWhCO0FESGdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0twQiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBsaWNhdGlvbnN7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAubWF0LWNhcmR7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmFwcGxpY2F0aW9ucyB7XG4gIHdpZHRoOiAyNjBweDtcbn1cbi5hcHBsaWNhdGlvbnMgLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcbn1cbi5hcHBsaWNhdGlvbnMgLm1hdC1jYXJkIC5tYXQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5hcHBsaWNhdGlvbnMgLm1hdC1jYXJkIC5tYXQtYnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFwcGxpY2F0aW9ucyAubWF0LWNhcmQgLm1hdC1idXR0b24gLm1hdC1idXR0b24td3JhcHBlciAubWF0LWljb24ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-applications',
                templateUrl: './applications.component.html',
                styleUrls: ['./applications.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.ts ***!
  \*******************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");













function FavoritesComponent_div_1_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const favorite_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", favorite_r527.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", favorite_r527.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](favorite_r527.icon);
} }
const _c0 = function (a0) { return [a0]; };
function FavoritesComponent_div_1_div_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const favorite_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, favorite_r527.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](favorite_r527.icon);
} }
function FavoritesComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoritesComponent_div_1_div_1_a_1_Template, 3, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavoritesComponent_div_1_div_1_a_2_Template, 3, 4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const favorite_r527 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", favorite_r527.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", favorite_r527.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", favorite_r527.routerLink);
} }
function FavoritesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoritesComponent_div_1_div_1_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r524 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r524.favorites);
} }
function FavoritesComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r532 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r532);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r532.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r532.icon);
} }
class FavoritesComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems().filter(menu => menu.routerLink != null || menu.href != null);
    }
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"])); };
FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 5, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "favorites-container"], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "", 4, "ngIf"], ["matTooltip", "Click to add/remove shortcut", "matTooltipPosition", "below"], ["placeholder", "Select favorite", "multiple", "", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, ""], ["class", "mx-1", "matTooltipPosition", "below", 3, "matTooltip", 4, "ngFor", "ngForOf"], ["matTooltipPosition", "below", 1, "mx-1", 3, "matTooltip"], ["mat-icon-button", "", 4, "ngIf"], ["mat-icon-button", "", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", ""], ["mat-icon-button", "", 3, "routerLink"], [3, "value"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "secondary-text-color"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoritesComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FavoritesComponent_Template_mat_select_valueChange_3_listener($event) { return ctx.favorites = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavoritesComponent_mat_option_4_Template, 6, 3, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.favorites);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.favorites);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: ["@charset \"UTF-8\";\n.favorites-container[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n.favorites-container[_ngcontent-%COMP%]:after {\n  font-family: \"Material Icons\";\n  content: \"\uE87D\";\n  font-size: 24px;\n  position: absolute;\n  right: -14px;\n  top: 12px;\n  pointer-events: none;\n  cursor: pointer;\n}\n.favorites-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 0 !important;\n  margin: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2Zhdm9yaXRlcy9EOlxccGFycmxlbCBwb3J0Zm9saW9cXHRoZW1lZm9yZXN0LTFadnJrQU5LLWFubnVsYXItYW5ndWxhci1tYXRlcmlhbC1kZXNpZ24tYWRtaW4tdGVtcGxhdGVcXGFubnVsYXJcXGFubnVsYXIvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxmYXZvcml0ZXNcXGZhdm9yaXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QURFSjtBQ0RJO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QURHUjtBQ0RJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FER1IiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZmF2b3JpdGVzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZhdm9yaXRlcy1jb250YWluZXI6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBjb250ZW50OiBcIu6hvVwiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xNHB4O1xuICB0b3A6IDEycHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmF2b3JpdGVzLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgOHB4O1xufSIsIi5mYXZvcml0ZXMtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFxlODdkXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTE0cHg7XHJcbiAgICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgICAgICAgXHJcbiAgICB9XHJcbiAgICAubWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgd2lkdGg6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorites',
                templateUrl: './favorites.component.html',
                styleUrls: ['./favorites.component.scss']
            }]
    }], function () { return [{ type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlagsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function() { return FlagsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







class FlagsMenuComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
    }
}
FlagsMenuComponent.ɵfac = function FlagsMenuComponent_Factory(t) { return new (t || FlagsMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"])); };
FlagsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlagsMenuComponent, selectors: [["app-flags-menu"]], decls: 22, vars: 2, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["flagsMenuTrigger", "matMenuTrigger"], [1, "toolbar-dropdown-menu", "flags", 3, "overlapTrigger"], ["flagsMenu", "matMenu"], [3, "mouseleave"], ["mat-menu-item", ""], ["src", "assets/img/flags/gb.svg", "width", "20", "alt", "english"], ["src", "assets/img/flags/de.svg", "width", "20", "alt", "german"], ["src", "assets/img/flags/fr.svg", "width", "20", "alt", "french"], ["src", "assets/img/flags/ru.svg", "width", "20", "alt", "russian"], ["src", "assets/img/flags/tr.svg", "width", "20", "alt", "turkish"]], template: function FlagsMenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r504 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function FlagsMenuComponent_Template_span_mouseleave_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r504); const _r502 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r502.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " German ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " French ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Russian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Turkish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r503 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r503);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]], styles: [".flags img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L0Q6XFxwYXJybGVsIHBvcnRmb2xpb1xcdGhlbWVmb3Jlc3QtMVp2cmtBTkstYW5udWxhci1hbmd1bGFyLW1hdGVyaWFsLWRlc2lnbi1hZG1pbi10ZW1wbGF0ZVxcYW5udWxhclxcYW5udWxhci9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXGZsYWdzLW1lbnVcXGZsYWdzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvZmxhZ3MtbWVudS9mbGFncy1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2ZsYWdzLW1lbnUvZmxhZ3MtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGFnc3tcclxuICAgIGltZ3tcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1tZW51LWl0ZW17XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufSIsIi5mbGFncyBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5mbGFncyAubWF0LW1lbnUtaXRlbSB7XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlagsMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flags-menu',
                templateUrl: './flags-menu.component.html',
                styleUrls: ['./flags-menu.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/components/fullscreen/fullscreen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/fullscreen/fullscreen.component.ts ***!
  \*********************************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





const _c0 = ["expand"];
const _c1 = ["compress"];
function FullScreenComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FullScreenComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fullscreen_exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const document = window.document;
class FullScreenComponent {
    constructor() {
        this.toggle = false;
    }
    requestFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    }
    ;
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    }
    ;
    getFullscreen() {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    }
    onFullScreenChange() {
        let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    }
}
FullScreenComponent.ɵfac = function FullScreenComponent_Factory(t) { return new (t || FullScreenComponent)(); };
FullScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullScreenComponent, selectors: [["app-fullscreen"]], viewQuery: function FullScreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.expand = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.compress = _t.first);
    } }, hostBindings: function FullScreenComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullScreenComponent_click_HostBindingHandler($event) { return ctx.getFullscreen(); })("resize", function FullScreenComponent_resize_HostBindingHandler($event) { return ctx.onFullScreenChange(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 2, consts: [["mat-icon-button", "", 1, "full-screen"], [4, "ngIf"], ["expand", ""], ["compress", ""]], template: function FullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FullScreenComponent_mat_icon_1_Template, 3, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullScreenComponent_mat_icon_2_Template, 3, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggle);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fullscreen',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <button mat-icon-button class="full-screen">
        <mat-icon *ngIf="!toggle" #expand>fullscreen</mat-icon>
        <mat-icon *ngIf="toggle" #compress>fullscreen_exit</mat-icon>
    </button> 
  `
            }]
    }], null, { expand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expand']
        }], compress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['compress']
        }], getFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], onFullScreenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { exact: true }; };
function HorizontalMenuComponent_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("parent-item", ctx_r494.menuParentId == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, menu_r493.routerLink))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1))("matTooltip", menu_r493.title)("matTooltipDisabled", ctx_r494.settings.menuType == "mini" ? "false" : "true")("id", "horizontal-menu-item-" + menu_r493.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r493.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r493.title);
} }
function HorizontalMenuComponent_div_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("parent-item", ctx_r495.menuParentId == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayoutAlign", ctx_r495.menuParentId == 0 ? "center center" : "start center")("matTooltip", menu_r493.title)("matTooltipDisabled", ctx_r495.settings.menuType == "mini" ? "false" : "true")("id", "horizontal-menu-item-" + menu_r493.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", menu_r493.href || "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", menu_r493.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r493.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r493.title);
} }
function HorizontalMenuComponent_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("parent-item", ctx_r496.menuParentId == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayoutAlign", ctx_r496.menuParentId == 0 ? "center center" : "start center")("matTooltip", menu_r493.title)("matTooltipDisabled", ctx_r496.settings.menuType == "mini" ? "false" : "true")("id", "horizontal-menu-item-" + menu_r493.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r493.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r493.title);
} }
function HorizontalMenuComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-horizontal-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "horizontal-sub-menu-" + menu_r493.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuParentId", menu_r493.id);
} }
function HorizontalMenuComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalMenuComponent_div_1_a_1_Template, 5, 12, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalMenuComponent_div_1_a_2_Template, 5, 10, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HorizontalMenuComponent_div_1_a_3_Template, 5, 8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HorizontalMenuComponent_div_1_div_4_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r493 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r493.routerLink && !menu_r493.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r493.href && !menu_r493.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r493.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r493.hasSubMenu);
} }
class HorizontalMenuComponent {
    constructor(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.menuItems = this.menuService.getHorizontalMenuItems();
        this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
}
HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) { return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"])); };
HorizontalMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalMenuComponent, selectors: [["app-horizontal-menu"]], inputs: { menuParentId: "menuParentId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])], decls: 2, vars: 2, consts: [["fxLayoutAlign", "center center", 3, "fxLayout"], ["class", "horizontal-menu-item", 4, "ngFor", "ngForOf"], [1, "horizontal-menu-item"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "(menuParentId == 0) ? 'center center' : 'start center'", "routerLinkActive", "active-link", "matTooltipPosition", "above", 3, "parent-item", "routerLink", "routerLinkActiveOptions", "matTooltip", "matTooltipDisabled", "id", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "matTooltipPosition", "above", 3, "parent-item", "fxLayoutAlign", "matTooltip", "matTooltipDisabled", "id", 4, "ngIf"], ["class", "horizontal-sub-menu mat-elevation-z1", 3, "id", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "(menuParentId == 0) ? 'center center' : 'start center'", "routerLinkActive", "active-link", "matTooltipPosition", "above", 3, "routerLink", "routerLinkActiveOptions", "matTooltip", "matTooltipDisabled", "id"], [1, "horizontal-menu-icon"], [1, "horizontal-menu-title"], ["mat-button", "", "fxLayout", "row", "matTooltipPosition", "above", 3, "fxLayoutAlign", "matTooltip", "matTooltipDisabled", "id"], [1, "horizontal-sub-menu", "mat-elevation-z1", 3, "id"], [3, "menuParentId"]], template: function HorizontalMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalMenuComponent_div_1_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayout", ctx.menuParentId == 0 ? "row" : "column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], HorizontalMenuComponent], styles: [".horizontal-menu-item {\n  position: relative;\n  width: 100%;\n}\n.horizontal-menu-item .mat-button {\n  height: 64px;\n  font-weight: 400;\n  border-radius: 0;\n}\n.horizontal-menu-item .mat-button.parent-item .mat-button-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n}\n.horizontal-menu-item .mat-button.parent-item .horizontal-menu-icon {\n  padding: 7px;\n  border-radius: 50%;\n}\n.horizontal-menu-item .horizontal-menu-icon {\n  margin-right: 8px;\n}\n.horizontal-menu-item .horizontal-sub-menu {\n  position: absolute;\n  width: 190px;\n  max-height: 0;\n  overflow: hidden;\n  z-index: 2;\n  -webkit-transition: max-height 0.25s ease-out;\n  transition: max-height 0.25s ease-out;\n}\n.horizontal-menu-item .horizontal-sub-menu .mat-button {\n  width: 100%;\n  height: 36px;\n}\n.horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible;\n}\n.horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9EOlxccGFycmxlbCBwb3J0Zm9saW9cXHRoZW1lZm9yZXN0LTFadnJrQU5LLWFubnVsYXItYW5ndWxhci1tYXRlcmlhbC1kZXNpZ24tYWRtaW4tdGVtcGxhdGVcXGFubnVsYXJcXGFubnVsYXIvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxtZW51XFxob3Jpem9udGFsLW1lbnVcXGhvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9ob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS9ob3Jpem9udGFsLW1lbnUvRDpcXHBhcnJsZWwgcG9ydGZvbGlvXFx0aGVtZWZvcmVzdC0xWnZya0FOSy1hbm51bGFyLWFuZ3VsYXItbWF0ZXJpYWwtZGVzaWduLWFkbWluLXRlbXBsYXRlXFxhbm51bGFyXFxhbm51bGFyL3NyY1xcYXBwXFx0aGVtZVxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNBSjtBRENJO0VBQ0ksWUVGaUI7RUZHakIsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQ1k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NoQjtBRENZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ2hCO0FER0k7RUFDSSxpQkFBQTtBQ0RSO0FER0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkNBQUE7RUFFQSxxQ0FBQTtBQ0RSO0FERVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FaO0FESUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDREo7QURHQTtFQUNJLFVBQUE7RUFDQSxNQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvaG9yaXpvbnRhbC1tZW51L2hvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbi5ob3Jpem9udGFsLW1lbnUtaXRlbXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiAkaG9yaXpvbnRhbC1tZW51LWhlaWdodDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgJi5wYXJlbnQtaXRlbXsgICAgICAgIFxyXG4gICAgICAgICAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaG9yaXpvbnRhbC1tZW51LWljb257XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhvcml6b250YWwtbWVudS1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmhvcml6b250YWwtc3ViLW1lbnV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAgICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7IFxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuLmhvcml6b250YWwtbWVudS1pdGVtOmhvdmVyID4gLmhvcml6b250YWwtc3ViLW1lbnV7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbi5ob3Jpem9udGFsLXN1Yi1tZW51IC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogMDtcclxufSIsIi5ob3Jpem9udGFsLW1lbnUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9yaXpvbnRhbC1tZW51LWl0ZW0gLm1hdC1idXR0b24ge1xuICBoZWlnaHQ6IDY0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uaG9yaXpvbnRhbC1tZW51LWl0ZW0gLm1hdC1idXR0b24ucGFyZW50LWl0ZW0gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvcml6b250YWwtbWVudS1pdGVtIC5tYXQtYnV0dG9uLnBhcmVudC1pdGVtIC5ob3Jpem9udGFsLW1lbnUtaWNvbiB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmhvcml6b250YWwtbWVudS1pdGVtIC5ob3Jpem9udGFsLW1lbnUtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmhvcml6b250YWwtbWVudS1pdGVtIC5ob3Jpem9udGFsLXN1Yi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTkwcHg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xufVxuLmhvcml6b250YWwtbWVudS1pdGVtIC5ob3Jpem9udGFsLXN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzZweDtcbn1cblxuLmhvcml6b250YWwtbWVudS1pdGVtOmhvdmVyID4gLmhvcml6b250YWwtc3ViLW1lbnUge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5ob3Jpem9udGFsLXN1Yi1tZW51IC5ob3Jpem9udGFsLXN1Yi1tZW51IHtcbiAgbGVmdDogMTAwJTtcbiAgdG9wOiAwO1xufSIsIiRtYWluLWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiR0b3AtdG9vbGJhci1oZWlnaHQ6IDU2cHg7IFxyXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogNjRweDsgXHJcbiRmb290ZXItdG9vbGJhci1oZWlnaHQ6IDU2cHg7IFxyXG5cclxuJHNpZGVuYXYtd2lkdGg6IDI2MHB4O1xyXG4kY29tcGFjdC1zaWRlbmF2LXdpZHRoOiAxNzBweDtcclxuJG1pbmktc2lkZW5hdi13aWR0aDogNjZweDsiXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-horizontal-menu',
                templateUrl: './horizontal-menu.component.html',
                styleUrls: ['./horizontal-menu.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }, { type: _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }]; }, { menuParentId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['menuParentId']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/components/menu/menu.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
class Menu {
    constructor(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
}


/***/ }),

/***/ "./src/app/theme/components/menu/menu.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/app/theme/components/menu/menu.ts");







class MenuService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    getVerticalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"];
    }
    getHorizontalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["horizontalMenuItems"];
    }
    expandActiveSubMenu(menu) {
        let url = this.location.path();
        let routerLink = url; // url.substring(1, url.length);
        let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
            let menuItem = activeMenuItem[0];
            while (menuItem.parentId != 0) {
                let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
                menuItem = parentMenuItem;
                this.toggleMenuItem(menuItem.id);
            }
        }
    }
    toggleMenuItem(menuId) {
        let menuItem = document.getElementById('menu-item-' + menuId);
        let subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    }
    closeOtherSubMenus(menu, menuId) {
        let currentMenuItem = menu.filter(item => item.id == menuId)[0];
        if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach(item => {
                if (item.id != menuId) {
                    let subMenu = document.getElementById('sub-menu-' + item.id);
                    let menuItem = document.getElementById('menu-item-' + item.id);
                    if (subMenu) {
                        if (subMenu.classList.contains('show')) {
                            subMenu.classList.remove('show');
                            menuItem.classList.remove('expanded');
                        }
                    }
                }
            });
        }
    }
    closeAllSubMenus() {
        let menu = document.getElementById("vertical-menu");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/components/menu/menu.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/*! exports provided: verticalMenuItems, horizontalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function() { return verticalMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function() { return horizontalMenuItems; });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ "./src/app/theme/components/menu/menu.model.ts");

const verticalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'computer', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lists', '/ui/lists', null, 'list', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](15, 'Dynamic Menu', '/dynamic-menu', null, 'format_list_bulleted', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/mailbox', null, 'email', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](17, 'Chat', '/chat', null, 'chat', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Controls', null, null, 'dvr', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Input', '/form-controls/input', null, 'input', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Tables', null, null, 'view_module', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Error', '/error', null, 'warning', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Search', '/search', null, 'search', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](49, 'Landing', '/landing', null, 'filter', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Profile', null, null, 'person', null, true, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](51, 'Projects', '/profile/projects', null, 'note', null, false, 50),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](52, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 50),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](55, 'Schedule', '/schedule', null, 'event_note', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](66, 'Maps', null, null, 'map', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'multiline_chart', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](140, 'Level 1', null, null, 'more_horiz', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](141, 'Level 2', null, null, 'folder_open', null, true, 140),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](142, 'Level 3', null, null, 'folder_open', null, true, 141),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](143, 'Level 4', null, null, 'folder_open', null, true, 142),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](144, 'Level 5', null, 'http://themeseason.com', 'link', null, false, 143),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 0)
];
const horizontalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'computer', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lists', '/ui/lists', null, 'list', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/mailbox', null, 'email', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](17, 'Chat', '/chat', null, 'chat', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Controls', null, null, 'dvr', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Input', '/form-controls/input', null, 'input', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Tables', null, null, 'view_module', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'multiline_chart', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Error', '/error', null, 'warning', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Search', '/search', null, 'search', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](49, 'Landing', '/landing', null, 'filter', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Profile', null, null, 'person', null, true, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](51, 'Projects', '/profile/projects', null, 'note', null, false, 50),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](52, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 50),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](55, 'Schedule', '/schedule', null, 'event_note', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](66, 'Maps', null, null, 'map', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](67, 'Google', '/maps/googlemaps', null, 'location_on', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](68, 'Leaflet', '/maps/leafletmaps', null, 'my_location', null, false, 66),
];


/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: VerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function() { return VerticalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { exact: true }; };
function VerticalMenuComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const menu_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.onClick(menu_r101.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayoutAlign", ctx_r102.settings.menuType == "default" ? "start center" : "center center")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, menu_r101.routerLink))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("matTooltip", menu_r101.title)("matTooltipDisabled", ctx_r102.settings.menuType == "mini" ? "false" : "true")("id", "menu-item-" + menu_r101.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r101.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r101.title);
} }
function VerticalMenuComponent_div_0_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const menu_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.onClick(menu_r101.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayoutAlign", ctx_r103.settings.menuType == "default" ? "start center" : "center center")("matTooltip", menu_r101.title)("matTooltipDisabled", ctx_r103.settings.menuType == "mini" ? "false" : "true")("id", "menu-item-" + menu_r101.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", menu_r101.href || "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", menu_r101.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r101.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r101.title);
} }
function VerticalMenuComponent_div_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const menu_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.onClick(menu_r101.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayoutAlign", ctx_r104.settings.menuType == "default" ? "start center" : "center center")("matTooltip", menu_r101.title)("matTooltipDisabled", ctx_r104.settings.menuType == "mini" ? "false" : "true")("id", "menu-item-" + menu_r101.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r101.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r101.title);
} }
function VerticalMenuComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-vertical-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "sub-menu-" + menu_r101.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuItems", ctx_r105.menuItems)("menuParentId", menu_r101.id);
} }
function VerticalMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_div_0_a_1_Template, 5, 11, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalMenuComponent_div_0_a_2_Template, 5, 8, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerticalMenuComponent_div_0_a_3_Template, 7, 6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalMenuComponent_div_0_div_4_Template, 2, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r101.routerLink && !menu_r101.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r101.href && !menu_r101.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r101.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r101.hasSubMenu);
} }
class VerticalMenuComponent {
    constructor(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    onClick(menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuItems, menuId);
    }
}
VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) { return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"])); };
VerticalMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerticalMenuComponent, selectors: [["app-vertical-menu"]], inputs: { menuItems: "menuItems", menuParentId: "menuParentId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])], decls: 1, vars: 1, consts: [["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "menu-item"], ["mat-button", "", "fxLayout", "row", "routerLinkActive", "active-link", "matTooltipPosition", "after", 3, "fxLayoutAlign", "routerLink", "routerLinkActiveOptions", "matTooltip", "matTooltipDisabled", "id", "click", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "matTooltipPosition", "after", 3, "fxLayoutAlign", "matTooltip", "matTooltipDisabled", "id", "click", 4, "ngIf"], ["class", "sub-menu", 3, "id", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "routerLinkActive", "active-link", "matTooltipPosition", "after", 3, "fxLayoutAlign", "routerLink", "routerLinkActiveOptions", "matTooltip", "matTooltipDisabled", "id", "click"], [1, "menu-icon"], [1, "menu-title"], ["mat-button", "", "fxLayout", "row", "matTooltipPosition", "after", 3, "fxLayoutAlign", "matTooltip", "matTooltipDisabled", "id", "click"], [1, "menu-expand-icon", "transition-2"], [1, "sub-menu", 3, "id"], [3, "menuItems", "menuParentId"]], template: function VerticalMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parentMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], VerticalMenuComponent], styles: [".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 13px;\n}\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  width: 100%;\n  font-weight: 400;\n  border-radius: 0;\n}\n\n.menu-item .mat-button .menu-icon {\n  margin-right: 12px;\n  padding: 7px;\n  border-radius: 50%;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: max-height 0.25s ease-out;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 40px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 60px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 80px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 100px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 120px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 140px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 160px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 180px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 200px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 20px;\n}\n\n.sub-menu.show {\n  max-height: 900px;\n  -webkit-transition: max-height 0.25s ease-in;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvRDpcXHBhcnJsZWwgcG9ydGZvbGlvXFx0aGVtZWZvcmVzdC0xWnZya0FOSy1hbm51bGFyLWFuZ3VsYXItbWF0ZXJpYWwtZGVzaWduLWFkbWluLXRlbXBsYXRlXFxhbm51bGFyXFxhbm51bGFyL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcbWVudVxcdmVydGljYWwtbWVudVxcdmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvdmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvRDpcXHBhcnJsZWwgcG9ydGZvbGlvXFx0aGVtZWZvcmVzdC0xWnZya0FOSy1hbm51bGFyLWFuZ3VsYXItbWF0ZXJpYWwtZGVzaWduLWFkbWluLXRlbXBsYXRlXFxhbm51bGFyXFxhbm51bGFyL3NyY1xcYXBwXFx0aGVtZVxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDREo7O0FES0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRlI7O0FER1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RaOztBRElZO0VBQ0ksaUNBQUE7RUFFQSx5QkFBQTtBQ0ZoQjs7QURNSTtFQUNJLGtCQUFBO0FDSlI7O0FEUUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUVBLHFDQUFBO0FDTko7O0FDOUJRO0VBS1Esa0JBQUE7QUQ0QmhCOztBQ2pDUTtFQUtRLGtCQUFBO0FEK0JoQjs7QUNwQ1E7RUFLUSxrQkFBQTtBRGtDaEI7O0FDdkNRO0VBS1EsbUJBQUE7QURxQ2hCOztBQzFDUTtFQUtRLG1CQUFBO0FEd0NoQjs7QUM3Q1E7RUFLUSxtQkFBQTtBRDJDaEI7O0FDaERRO0VBS1EsbUJBQUE7QUQ4Q2hCOztBQ25EUTtFQUtRLG1CQUFBO0FEaURoQjs7QUN0RFE7RUFLUSxtQkFBQTtBRG9EaEI7O0FEcEJJO0VBQ0ksa0JBQUE7QUNzQlI7O0FEcEJJO0VBQ0ksaUJBQUE7RUFDQSw0Q0FBQTtFQUVBLG9DQUFBO0FDc0JSIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvdmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvbWl4aW5zXCI7XHJcblxyXG4ubWVudS1leHBhbmQtaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxM3B4O1xyXG59XHJcblxyXG4ubWVudS1pdGVteyAgICBcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDA7ICAgIFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIC5tZW51LWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAubWVudS1leHBhbmQtaWNvbntcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi5zdWItbWVudXtcclxuICAgIEBpbmNsdWRlIG1lbnUtbGV2ZWwtcGFkZGluZygnbHRyJyk7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgICBcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDsgICAgICBcclxuICAgIH0gXHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTAwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgfSAgICBcclxufSIsIi5tZW51LWV4cGFuZC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxM3B4O1xufVxuXG4ubWVudS1pdGVtIC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubWVudS1pdGVtIC5tYXQtYnV0dG9uIC5tZW51LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1lbnUtaXRlbSAubWF0LWJ1dHRvbi5leHBhbmRlZCAubWVudS1leHBhbmQtaWNvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLm1lbnUtaXRlbSAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4uc3ViLW1lbnUge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNDBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDE2MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDE4MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbn1cbi5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5zdWItbWVudS5zaG93IHtcbiAgbWF4LWhlaWdodDogOTAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xufSIsIkBtaXhpbiBtZW51LWxldmVsLXBhZGRpbmcoJGRpcmVjdGlvbil7XHJcbiAgICAkZWxlbTogJyc7XHJcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoIDEwIHtcclxuICAgICAgICAkZWxlbTogaWYoJGkgPT0gMiwgXCIuc3ViLW1lbnVcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuc3ViLW1lbnVcIikpOyAgICAgIFxyXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtYnV0dG9uJ30geyBcclxuICAgICAgICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJydGxcIiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICogJGk7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBAZWxzZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vertical-menu',
                templateUrl: './vertical-menu.component.html',
                styleUrls: ['./vertical-menu.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }, { type: _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }]; }, { menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['menuItems']
        }], menuParentId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['menuParentId']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.service */ "./src/app/theme/components/messages/messages.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _pipes_profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/profilePicture/profilePicture.pipe */ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts");
















function MessagesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "profilePicture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r519 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r519.image || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, message_r519.name), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r519.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r519.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r519.text);
} }
function MessagesComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-progress-bar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r520 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r520.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r520.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", file_r520.color)("value", file_r520.value);
} }
function MessagesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meeting_r521 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", meeting_r521.bgColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meeting_r521.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meeting_r521.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meeting_r521.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meeting_r521.text);
} }
class MessagesComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.selectedTab = 1;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    ngOnInit() {
    }
    openMessagesMenu() {
        this.trigger.openMenu();
        this.selectedTab = 0;
    }
    onMouseLeave() {
        this.trigger.closeMenu();
    }
    stopClickPropagate(event) {
        event.stopPropagation();
        event.preventDefault();
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], viewQuery: function MessagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])], decls: 21, vars: 6, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor", "click"], [1, "toolbar-dropdown-menu", "messages", 3, "overlapTrigger"], ["messagesMenu", "matMenu"], [3, "selectedIndex", "click"], ["mat-tab-label", ""], ["perfectScrollbar", "", 1, "content"], ["fxLayout", "column", "fxLayoutAlign", "none"], ["mat-button", "", 4, "ngFor", "ngForOf"], ["mat-button", ""], ["width", "50", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "none", 1, "w-100"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "name"], [1, "info"], [1, "text", "secondary-text-color"], ["mode", "indeterminate", 1, "example-margin", 3, "color", "value"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "row-1", 3, "ngClass"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_Template_button_click_0_listener($event) { return ctx.openMessagesMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_Template_mat_tab_group_click_5_listener($event) { return ctx.stopClickPropagate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MessagesComponent_ng_template_7_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MessagesComponent_button_10_Template, 13, 6, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MessagesComponent_ng_template_12_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MessagesComponent_button_15_Template, 8, 4, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MessagesComponent_ng_template_17_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MessagesComponent_button_20_Template, 11, 5, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r512 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r512);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meetings);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabLabel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"]], pipes: [_pipes_profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_12__["ProfilePicturePipe"]], styles: [".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px;\n}\n.messages .content {\n  padding: 0;\n  height: 260px;\n}\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px;\n  border-radius: 50%;\n}\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px;\n}\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px;\n}\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left;\n}\n.messages .mat-button {\n  padding: 8px;\n}\n.messages .mat-button .mat-button-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.messages .mat-button .mat-icon {\n  height: 16px;\n  font-size: 12px;\n  width: 12px;\n  vertical-align: middle;\n}\n.messages .row-1 {\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZXNzYWdlcy9EOlxccGFycmxlbCBwb3J0Zm9saW9cXHRoZW1lZm9yZXN0LTFadnJrQU5LLWFubnVsYXItYW5ndWxhci1tYXRlcmlhbC1kZXNpZ24tYWRtaW4tdGVtcGxhdGVcXGFubnVsYXJcXGFubnVsYXIvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNBUjtBREVJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNBUjtBREVJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFSTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVI7QURFSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSxZQUFBO0FDQVI7QURDUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDWjtBRENRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDWjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlc3tcclxuICAgIC5tYXQtdGFiLWxhYmVse1xyXG4gICAgICAgIG1pbi13aWR0aDogOTMuM3B4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgc3Bhbi5uYW1le1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIH1cclxuICAgIHNwYW4uaW5mb3tcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfSAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3ctMXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDEzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn0iLCIubWVzc2FnZXMgLm1hdC10YWItbGFiZWwge1xuICBtaW4td2lkdGg6IDkzLjNweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm1lc3NhZ2VzIC5jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAyNjBweDtcbn1cbi5tZXNzYWdlcyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWVzc2FnZXMgc3Bhbi5uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG4ubWVzc2FnZXMgc3Bhbi5pbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLm1lc3NhZ2VzIHNwYW4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1lc3NhZ2VzIC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLm1lc3NhZ2VzIC5tYXQtYnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5tZXNzYWdlcyAubWF0LWJ1dHRvbiAubWF0LWljb24ge1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubWVzc2FnZXMgLnJvdy0xIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAycHggMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                providers: [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]]
            }]
    }], function () { return [{ type: _messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }]; }, { trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/components/messages/messages.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.service.ts ***!
  \***************************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MessagesService {
    constructor() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'annular.zip',
                size: '~6.2 MB',
                value: '47',
                color: 'primary'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33',
                color: 'accent'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60',
                color: 'warn'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80',
                color: 'primary'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55',
                color: 'warn'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75',
                color: 'accent'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                bgColor: 'gradient-purple'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                bgColor: 'gradient-indigo'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                bgColor: 'gradient-teal'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                bgColor: 'gradient-red'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                bgColor: 'gradient-orange'
            }
        ];
    }
    getMessages() {
        return this.messages;
    }
    getFiles() {
        return this.files;
    }
    getMeetings() {
        return this.meetings;
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(); };
MessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessagesService, factory: MessagesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/components/sidenav/sidenav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidenav/sidenav.component.ts ***!
  \***************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/vertical-menu/vertical-menu.component */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");











function SidenavComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Emilio Verdines");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "emilio.verdines@company.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SidenavComponent {
    constructor(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.psConfig = {
            wheelPropagation: true
        };
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems();
    }
    ngDoCheck() {
        if (this.settings.fixedSidenav) {
            if (this.psConfig.wheelPropagation == true) {
                this.psConfig.wheelPropagation = false;
            }
        }
        else {
            if (this.psConfig.wheelPropagation == false) {
                this.psConfig.wheelPropagation = true;
            }
        }
    }
    closeSubMenus() {
        let menu = document.getElementById("vertical-menu");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])], decls: 8, vars: 12, consts: [[1, "sidenav-menu-outer", 3, "perfectScrollbar", "disabled"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "user-block"], ["src", "assets/img/users/user.jpg", "alt", "user-image"], ["class", "mt-2", 4, "ngIf"], ["class", "secondary-text-color", 4, "ngIf"], ["id", "vertical-menu", 3, "perfectScrollbar", "disabled"], [3, "menuItems", "menuParentId"], [1, "mt-2"], [1, "secondary-text-color"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_h2_3_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavComponent_p_4_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-vertical-menu", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.psConfig)("disabled", ctx.settings.fixedSidenavUserContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("py-3", ctx.settings.menuType != "mini")("py-2", ctx.settings.menuType == "mini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.menuType != "mini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.menuType == "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.psConfig)("disabled", !ctx.settings.fixedSidenavUserContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuItems", ctx.menuItems)("menuParentId", 0);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_7__["VerticalMenuComponent"]], styles: [".user-block img {\n  border-radius: 50%;\n  width: 95px;\n  height: 95px;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.user-block h2 {\n  font-size: 16px;\n  font-weight: 400;\n}\n.user-block p {\n  font-size: 13px;\n}\n.sidenav-menu-outer {\n  height: 100%;\n}\n#vertical-menu.ps {\n  height: calc(100% - 180px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2L0Q6XFxwYXJybGVsIHBvcnRmb2xpb1xcdGhlbWVmb3Jlc3QtMVp2cmtBTkstYW5udWxhci1hbmd1bGFyLW1hdGVyaWFsLWRlc2lnbi1hZG1pbi10ZW1wbGF0ZVxcYW5udWxhclxcYW5udWxhci9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXHNpZGVuYXZcXHNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDQVI7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0FDQVI7QURHQTtFQUNJLFlBQUE7QUNBSjtBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItYmxvY2t7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgICAgIGhlaWdodDogOTVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59XHJcbi5zaWRlbmF2LW1lbnUtb3V0ZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG59XHJcbiN2ZXJ0aWNhbC1tZW51LnBze1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxODBweCk7XHJcbn0iLCIudXNlci1ibG9jayBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDk1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4udXNlci1ibG9jayBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi51c2VyLWJsb2NrIHAge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zaWRlbmF2LW1lbnUtb3V0ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiN2ZXJ0aWNhbC1tZW51LnBzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxODBweCk7XG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }, { type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/components/top-info-content/top-info-content.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/components/top-info-content/top-info-content.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TopInfoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopInfoContentComponent", function() { return TopInfoContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");














function TopInfoContentComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopInfoContentComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopInfoContentComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subject is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopInfoContentComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopInfoContentComponent_mat_checkbox_46_Template(rf, ctx) { if (rf & 1) {
    const _r489 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TopInfoContentComponent_mat_checkbox_46_Template_mat_checkbox_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r489); const control_r487 = ctx.$implicit; return control_r487.checked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r487 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", control_r487.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", control_r487.name, " ");
} }
class TopInfoContentComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.showInfoContent = false;
        this.onCloseInfoContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.controls = [
            { name: 'Notifications', checked: true },
            { name: 'Tasks', checked: true },
            { name: 'Events', checked: false },
            { name: 'Downloads', checked: true },
            { name: 'Messages', checked: true },
            { name: 'Updates', checked: false },
            { name: 'Settings', checked: true }
        ];
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]])],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            console.log(values);
        }
    }
    closeInfoContent(event) {
        this.onCloseInfoContent.emit(event);
    }
}
TopInfoContentComponent.ɵfac = function TopInfoContentComponent_Factory(t) { return new (t || TopInfoContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
TopInfoContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopInfoContentComponent, selectors: [["app-top-info-content"]], inputs: { showInfoContent: "showInfoContent" }, outputs: { onCloseInfoContent: "onCloseInfoContent" }, decls: 47, vars: 8, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "info-content", "has-bg-image"], ["mat-mini-fab", "", "color", "warn", 1, "close-btn", 3, "click"], ["fxFlex", "100", "fxFlex.gt-sm", "40", 1, "py-3", "col"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["src", "assets/img/users/user.jpg", "alt", "", 1, "mat-elevation-z2"], [1, "user-details", "px-4"], [1, "secondary-text-color"], [1, "secondary-text-color", "mt-1"], ["mat-icon-button", "", "matTooltip", "Facebook", 1, "mx-1"], ["viewBox", "0 0 24 24", 1, "mat-icon"], ["d", "M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"], ["mat-icon-button", "", "matTooltip", "Twitter", 1, "mx-1"], ["d", "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"], ["mat-icon-button", "", "matTooltip", "Google", 1, "mx-1"], ["d", "M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"], ["fxFlex", "100", "fxFlex.gt-sm", "35", "fxFlex.sm", "50", "ngClass.xs", "pb-4", 1, "top-contact-form", "col"], ["fxLayout", "row wrap", 1, "px-2", 3, "formGroup", "ngSubmit"], ["fxFlex", "100", 1, ""], [1, "w-100"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Subject", "formControlName", "subject", "required", ""], ["matInput", "", "placeholder", "Message", "formControlName", "message", "required", ""], [1, "w-100", "mt-1", "text-center"], ["mat-raised-button", "", "color", "accent", "type", "submit"], [1, "mr-2"], ["fxFlex", "50", "fxFlex.gt-sm", "25", "fxShow", "false", "fxShow.gt-xs", "", 1, "py-3", "col"], ["fxLayout", "column", "fxLayoutAlign", "center start", 1, "controls", "secondary-text-color"], ["class", "my-1", "labelPosition", "after", 3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], ["labelPosition", "after", 1, "my-1", 3, "ngModel", "ngModelChange"]], template: function TopInfoContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopInfoContentComponent_Template_button_click_1_listener($event) { return ctx.closeInfoContent(ctx.showInfoContent); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Emilio Verdines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Web developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Member since May. 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TopInfoContentComponent_Template_form_ngSubmit_25_listener($event) { return ctx.onContactFormSubmit(ctx.contactForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TopInfoContentComponent_mat_error_29_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TopInfoContentComponent_mat_error_30_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TopInfoContentComponent_mat_error_34_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TopInfoContentComponent_mat_error_38_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TopInfoContentComponent_mat_checkbox_46_Template, 2, 2, "mat-checkbox", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showInfoContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls.email.errors == null ? null : ctx.contactForm.controls.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls.email.hasError("invalidEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls.subject.errors == null ? null : ctx.contactForm.controls.subject.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls.message.errors == null ? null : ctx.contactForm.controls.message.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controls);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".info-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  max-height: 0px !important;\n  text-align: center;\n  overflow: hidden;\n  -webkit-transition: max-height 0.2s ease-out;\n  transition: max-height 0.2s ease-out;\n}\n.info-content[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n.info-content[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n.info-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .info-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.info-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.info-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 130px;\n  height: 130px;\n}\n.info-content.show[_ngcontent-%COMP%] {\n  max-height: 500px !important;\n  -webkit-transition: max-height 0.2s ease-in;\n  transition: max-height 0.2s ease-in;\n}\n.info-content.show[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.info-content.show[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .info-content.show[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  -webkit-animation: scale 0.6s ease-out;\n  animation: scale 0.6s ease-out;\n}\n.info-content.has-bg-image[_ngcontent-%COMP%] {\n  background-image: url('header-bg.png');\n  background-blend-mode: overlay;\n  background-size: 300px;\n}\n.info-content[_ngcontent-%COMP%]   .top-contact-form[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 0 1px;\n}\n.info-content[_ngcontent-%COMP%]   .top-contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 280px;\n  margin: 0 auto;\n}\n.info-content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  width: 120px;\n  margin: 0 auto;\n}\n@-webkit-keyframes scale {\n  5% {\n    -webkit-transform: scale(0.5);\n  }\n  50% {\n    -webkit-transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes scale {\n  5% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@media screen and (min-width: 960px) {\n  .info-content.has-bg-image[_ngcontent-%COMP%] {\n    background-size: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy90b3AtaW5mby1jb250ZW50L0Q6XFxwYXJybGVsIHBvcnRmb2xpb1xcdGhlbWVmb3Jlc3QtMVp2cmtBTkstYW5udWxhci1hbmd1bGFyLW1hdGVyaWFsLWRlc2lnbi1hZG1pbi10ZW1wbGF0ZVxcYW5udWxhclxcYW5udWxhci9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXHRvcC1pbmZvLWNvbnRlbnRcXHRvcC1pbmZvLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvdG9wLWluZm8tY29udGVudC90b3AtaW5mby1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQUEsb0NBQUE7QUNDSjtBREFJO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0VBQUEsY0FBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDRVI7QURDUTtFQUNJLGdCQUFBO0FDQ1o7QURDUTtFQUNJLGVBQUE7QUNDWjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FSO0FERUk7RUFDSSw0QkFBQTtFQUNBLDJDQUFBO0VBQUEsbUNBQUE7QUNBUjtBRENRO0VBQ0ksVUFBQTtBQ0NaO0FEQ1E7RUFDSSxzQ0FBQTtFQUVBLDhCQUFBO0FDQ1o7QURFSTtFQUNJLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0FSO0FERUk7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0NaO0FERUk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0FSO0FEaUJBO0VBQ0k7SUFDSSw2QkFBQTtFQ0hOO0VES0U7SUFDSSw2QkFBQTtFQ0hOO0VES0U7SUFDSSwyQkFBQTtFQ0hOO0FBQ0Y7QURLQTtFQUNJO0lBQ0ksNkJBQUE7WUFBQSxxQkFBQTtFQ0hOO0VES0U7SUFDSSw2QkFBQTtZQUFBLHFCQUFBO0VDSE47RURLRTtJQUNJLDJCQUFBO1lBQUEsbUJBQUE7RUNITjtBQUNGO0FET0E7RUFDSTtJQUNJLHNCQUFBO0VDTE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvdG9wLWluZm8tY29udGVudC90b3AtaW5mby1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1heC1oZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICAgIC5jb2x7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIH1cclxuICAgIC5jbG9zZS1idG57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1kZXRhaWxze1xyXG4gICAgICAgIGgyLCBoM3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1pbjtcclxuICAgICAgICAuY29se1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcsIC5jbG9zZS1idG57XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZSAwLjZzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogc2NhbGUgMC42cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzY2FsZSAwLjZzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuaGFzLWJnLWltYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXBwL2hlYWRlci1iZy5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAwcHg7IFxyXG4gICAgfVxyXG4gICAgLnRvcC1jb250YWN0LWZvcm17ICAgICAgICBcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMCAxcHg7XHJcbiAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRyb2xze1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNjYWxlIHsgXHJcbiAgICA1JSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfSBcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGUgeyBcclxuICAgIDUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9IFxyXG59XHJcbkBrZXlmcmFtZXMgc2NhbGUgeyBcclxuICAgIDUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgeyAgICBcclxuICAgIC5pbmZvLWNvbnRlbnQuaGFzLWJnLWltYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDgwcHg7ICAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIuaW5mby1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXgtaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG59XG4uaW5mby1jb250ZW50IC5jb2wge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAxcztcbn1cbi5pbmZvLWNvbnRlbnQgLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG59XG4uaW5mby1jb250ZW50IC51c2VyLWRldGFpbHMgaDIsIC5pbmZvLWNvbnRlbnQgLnVzZXItZGV0YWlscyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uaW5mby1jb250ZW50IC51c2VyLWRldGFpbHMgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5pbmZvLWNvbnRlbnQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG59XG4uaW5mby1jb250ZW50LnNob3cge1xuICBtYXgtaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1pbjtcbn1cbi5pbmZvLWNvbnRlbnQuc2hvdyAuY29sIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5pbmZvLWNvbnRlbnQuc2hvdyBpbWcsIC5pbmZvLWNvbnRlbnQuc2hvdyAuY2xvc2UtYnRuIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlIDAuNnMgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiBzY2FsZSAwLjZzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IHNjYWxlIDAuNnMgZWFzZS1vdXQ7XG59XG4uaW5mby1jb250ZW50Lmhhcy1iZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXBwL2hlYWRlci1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDBweDtcbn1cbi5pbmZvLWNvbnRlbnQgLnRvcC1jb250YWN0LWZvcm0ge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMXB4O1xufVxuLmluZm8tY29udGVudCAudG9wLWNvbnRhY3QtZm9ybSBmb3JtIHtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaW5mby1jb250ZW50IC5jb250cm9scyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkAtbW96LWtleWZyYW1lcyBzY2FsZSB7XG4gIDUlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgfVxuICA1MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlIHtcbiAgNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNjYWxlIHtcbiAgNSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAuaW5mby1jb250ZW50Lmhhcy1iZy1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0ODBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopInfoContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-info-content',
                templateUrl: './top-info-content.component.html',
                styleUrls: ['./top-info-content.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { showInfoContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['showInfoContent']
        }], onCloseInfoContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class UserMenuComponent {
    constructor() {
        this.userImage = "assets/img/users/user.jpg";
    }
    ngOnInit() {
    }
}
UserMenuComponent.ɵfac = function UserMenuComponent_Factory(t) { return new (t || UserMenuComponent)(); };
UserMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserMenuComponent, selectors: [["app-user-menu"]], decls: 47, vars: 3, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["userMenuTrigger", "matMenuTrigger"], [1, "toolbar-dropdown-menu", "user-menu", 3, "overlapTrigger"], ["userMenu", "matMenu"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "user-info", "p-0"], ["alt", "user-image", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "secondary-text-color"], ["mat-menu-item", "", "routerLink", "/profile/projects"], ["mat-menu-item", "", "routerLink", "/profile/user-info"], ["mat-menu-item", "", "routerLink", "settings"], ["mat-menu-item", "", "routerLink", "/"], ["mat-menu-item", "", "routerLink", "help"], ["mat-menu-item", "", "routerLink", "/login"]], template: function UserMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Emilio Verdines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Web developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Member since May. 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lock screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r523 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r523);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"]], styles: [".user-menu .user-info {\n  height: 100px;\n  width: 250px;\n  box-shadow: none !important;\n}\n.user-menu .user-info img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.user-menu .user-info h2 {\n  font-size: 16px;\n  font-weight: 400;\n}\n.user-menu .user-info h3 {\n  font-size: 14px;\n  font-weight: 400;\n}\n.user-menu .user-info p {\n  font-size: 12px;\n}\n.user-menu .mat-menu-item {\n  font-size: 14px;\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvRDpcXHBhcnJsZWwgcG9ydGZvbGlvXFx0aGVtZWZvcmVzdC0xWnZya0FOSy1hbm51bGFyLWFuZ3VsYXItbWF0ZXJpYWwtZGVzaWduLWFkbWluLXRlbXBsYXRlXFxhbm51bGFyXFxhbm51bGFyL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcdXNlci1tZW51XFx1c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNBUjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDQ1o7QURDUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBRENRO0VBQ0ksZUFBQTtBQ0NaO0FERUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1tZW51e1xyXG4gICAgLnVzZXItaW5mb3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7ICAgICAgICBcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LW1lbnUtaXRlbXtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG59IiwiLnVzZXItbWVudSAudXNlci1pbmZvIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4udXNlci1tZW51IC51c2VyLWluZm8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLnVzZXItbWVudSAudXNlci1pbmZvIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnVzZXItbWVudSAudXNlci1pbmZvIGgzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnVzZXItbWVudSAudXNlci1pbmZvIHAge1xuICBmb250LXNpemU6IDEycHg7XG59XG4udXNlci1tZW51IC5tYXQtbWVudS1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-menu',
                templateUrl: './user-menu.component.html',
                styleUrls: ['./user-menu.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/pipes/pagination/pagination.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/pipes/pagination/pagination.pipe.ts ***!
  \***********************************************************/
/*! exports provided: PaginationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPipe", function() { return PaginationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PaginationPipe {
    transform(data, args) {
        if (!args) {
            args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
            };
        }
        return this.paginate(data, args.pageSize, args.pageIndex);
    }
    paginate(array, page_size, page_number) {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }
}
PaginationPipe.ɵfac = function PaginationPipe_Factory(t) { return new (t || PaginationPipe)(); };
PaginationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pagination", type: PaginationPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'pagination'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination/pagination.pipe */ "./src/app/theme/pipes/pagination/pagination.pipe.ts");
/* harmony import */ var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profilePicture/profilePicture.pipe */ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts");
/* harmony import */ var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/chat-person-search.pipe */ "./src/app/theme/pipes/search/chat-person-search.pipe.ts");
/* harmony import */ var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/user-search.pipe */ "./src/app/theme/pipes/search/user-search.pipe.ts");
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truncate/truncate.pipe */ "./src/app/theme/pipes/truncate/truncate.pipe.ts");
/* harmony import */ var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/mail-search.pipe */ "./src/app/theme/pipes/search/mail-search.pipe.ts");









class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
        _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
        _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
        _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
        _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
        _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
        _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
        _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
        _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
        _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
        _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
                    _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
                    _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
                    _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
                    _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                    _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]
                ],
                exports: [
                    _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
                    _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
                    _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
                    _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
                    _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                    _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function() { return ProfilePicturePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProfilePicturePipe {
    transform(input, ext = 'jpg') {
        return '../assets/img/profile/' + input + '.' + ext;
    }
}
ProfilePicturePipe.ɵfac = function ProfilePicturePipe_Factory(t) { return new (t || ProfilePicturePipe)(); };
ProfilePicturePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "profilePicture", type: ProfilePicturePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePicturePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'profilePicture' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/pipes/search/chat-person-search.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/pipes/search/chat-person-search.pipe.ts ***!
  \***************************************************************/
/*! exports provided: ChatPersonSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function() { return ChatPersonSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChatPersonSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(message => {
                if (message.author) {
                    return message.author.search(searchText) !== -1;
                }
            });
        }
    }
}
ChatPersonSearchPipe.ɵfac = function ChatPersonSearchPipe_Factory(t) { return new (t || ChatPersonSearchPipe)(); };
ChatPersonSearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ChatPersonSearchPipe", type: ChatPersonSearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatPersonSearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ChatPersonSearchPipe' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/pipes/search/mail-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MailSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(mail => {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    }
}
MailSearchPipe.ɵfac = function MailSearchPipe_Factory(t) { return new (t || MailSearchPipe)(); };
MailSearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "MailSearch", type: MailSearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailSearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'MailSearch'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/pipes/search/user-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/user-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: UserSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function() { return UserSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UserSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(user => {
                if (user.profile.name) {
                    return user.profile.name.search(searchText) !== -1;
                }
                else {
                    return user.username.search(searchText) !== -1;
                }
            });
        }
    }
}
UserSearchPipe.ɵfac = function UserSearchPipe_Factory(t) { return new (t || UserSearchPipe)(); };
UserSearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "UserSearchPipe", type: UserSearchPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'UserSearchPipe', pure: false }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/pipes/truncate/truncate.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/pipes/truncate/truncate.pipe.ts ***!
  \*******************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TruncatePipe {
    transform(value, args) {
        let limit = args > 0 ? parseInt(args) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utils/app-animation.ts":
/*!**********************************************!*\
  !*** ./src/app/theme/utils/app-animation.ts ***!
  \**********************************************/
/*! exports provided: blockTransition, listTransition, rotate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockTransition", function() { return blockTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listTransition", function() { return listTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const blockTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('blockTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(150, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0px)', opacity: 1 })),
        ]), { optional: true }),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0px)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100px)', opacity: 0 })),
        ]), { optional: true }),
    ])
]);
const listTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.list', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.list', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0, transform: 'translateY(-75px)', offset: 0
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: .5, transform: 'translateY(35px)', offset: 0.3
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1, transform: 'translateY(0)', offset: 1
                })
            ]))
        ]), { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.list', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1, transform: 'translateY(0)', offset: 0
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: .5, transform: 'translateY(35px)', offset: 0.3
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0, transform: 'translateY(-75px)', offset: 1
                })
            ]))
        ]), { optional: true })
    ])
]);
const rotate = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotate', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(180deg)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
]);


/***/ }),

/***/ "./src/app/theme/utils/app-validators.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/utils/app-validators.ts ***!
  \***********************************************/
/*! exports provided: emailValidator, matchingPasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingPasswords", function() { return matchingPasswords; });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return (group) => {
        let password = group.controls[passwordKey];
        let passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}


/***/ }),

/***/ "./src/app/theme/utils/custom-overlay-container.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/*! exports provided: CustomOverlayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function() { return CustomOverlayContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");



class CustomOverlayContainer extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"] {
    _createContainer() {
        let container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    }
}
CustomOverlayContainer.ɵfac = function CustomOverlayContainer_Factory(t) { return ɵCustomOverlayContainer_BaseFactory(t || CustomOverlayContainer); };
CustomOverlayContainer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomOverlayContainer, factory: CustomOverlayContainer.ɵfac });
const ɵCustomOverlayContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomOverlayContainer);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomOverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\parrlel portfolio\themeforest-1ZvrkANK-annular-angular-material-design-admin-template\annular\annular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map