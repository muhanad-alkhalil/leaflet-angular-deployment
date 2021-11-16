(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\mohanad\Software Projects\leaflet-master\src\main.ts */"zUnb");


/***/ }),

/***/ "4yQo":
/*!**************************************************************!*\
  !*** ./src/app/toggled-sidenav/toggled-sidenav.component.ts ***!
  \**************************************************************/
/*! exports provided: ToggledSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggledSidenavComponent", function() { return ToggledSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ToggledSidenavComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lorem, ipsum dolor sit amet consectetur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ToggledSidenavComponent {
    constructor() {
        this.showFiller = false;
    }
    ngOnInit() {
    }
}
ToggledSidenavComponent.ɵfac = function ToggledSidenavComponent_Factory(t) { return new (t || ToggledSidenavComponent)(); };
ToggledSidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggledSidenavComponent, selectors: [["app-toggled-sidenav"]], decls: 11, vars: 1, consts: [["autosize", "", 1, "example-container"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], [4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "example-sidenav-content"], ["type", "button", "mat-button", "", 3, "click"]], template: function ToggledSidenavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Auto-resizing sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToggledSidenavComponent_p_5_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggledSidenavComponent_Template_button_click_6_listener() { return ctx.showFiller = !ctx.showFiller; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Toggle extra text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggledSidenavComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Toggle sidenav ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFiller);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvZ2dsZWQtc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6InRvZ2dsZWQtc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EZtS":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_geoJsonConf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/geoJsonConf.service */ "Hs+c");




class MapComponent {
    constructor(geoJsonConf) {
        this.geoJsonConf = geoJsonConf;
        this.centroid = [24.657616686228846, 46.79783142089844]; //
        this.selectAnArea = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toolTipOptions = { permanent: true, opacity: 0.7 };
    }
    getStyle(feature) {
        let getColor = (d) => {
            return d > 8 ? '#800026' :
                d > 7 ? '#BD0026' :
                    d > 6 ? '#E31A1C' :
                        d > 5 ? '#FC4E2A' :
                            d > 4 ? '#FD8D3C' :
                                d > 3 ? '#FEB24C' :
                                    d > 2 ? '#FED976' :
                                        '#FFEDA0';
        };
        let color = getColor(feature.properties.population / feature.properties.numberOfHouses);
        return {
            fillColor: color,
            weight: 3,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }
    toolTipTogle() {
        this.geojson.getLayers().forEach((layer) => {
            layer.toggleTooltip();
        });
    }
    initMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', {
            center: this.centroid,
            zoom: 16
        });
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 10,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        // create 5 random jitteries and add them to map
        // const jittery = Array(5).fill(this.centroid).map(
        //   x => [x[0] + (Math.random() - .5) / 10, x[1] + (Math.random() - .5) / 10]
        // ).map(
        //   x => L.marker(x as L.LatLngExpression)
        // ).forEach(
        //   x => x.addTo(this.map)
        // );
        tiles.addTo(this.map);
        let onEachFeature = (feature, layer) => {
            layer.bindTooltip(feature.properties.areaName, this.toolTipOptions);
            let highlightFeature = (e) => {
                var layer = e.target;
                if (this.selected !== layer) {
                    layer.setStyle({
                        weight: 5,
                        color: '#666',
                        dashArray: '',
                        fillOpacity: 0.9
                    });
                }
            };
            let resetHighlight = (e) => {
                if (this.selected !== e.target) {
                    this.geojson.resetStyle(e.target);
                }
                // e.target.toggleTooltip();
                // console.log();
            };
            let clickOnFeature = (e) => {
                this.map.fitBounds(e.target.getBounds());
                var layer = e.target;
                this.geojson.resetStyle(this.selected);
                this.selected = e.target;
                layer.setStyle({
                    weight: 5,
                    color: '#2f2f2f',
                    dashArray: '',
                    fillOpacity: 1
                });
                sendToParent(e);
            };
            let sendToParent = (e) => {
                this.selectAnArea.emit(e.target.feature.properties.id);
                // console.log(e.target.feature);
            };
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: clickOnFeature,
            });
        };
        this.geojson = leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](this.geoJsonFeatures, { style: this.getStyle, onEachFeature: onEachFeature }).addTo(this.map);
    }
    resetStyle() {
        this.geojson.resetStyle(this.selected);
        this.selected = {};
    }
    ngOnInit() {
        // console.log(geo1, { style: this.style });
    }
    ngAfterViewInit() {
        this.initMap();
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_geoJsonConf_service__WEBPACK_IMPORTED_MODULE_2__["GeoJsonConfService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], inputs: { geoJsonFeatures: "geoJsonFeatures" }, outputs: { selectAnArea: "selectAnArea" }, decls: 9, vars: 0, consts: [[2, "position", "absolute", "right", "15px"], [3, "click"], [1, "map-container"], [1, "map-frame"], ["id", "map"], [2, "position", "absolute", "bottom", "0px", "right", "5px"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_Template_button_click_1_listener() { return ctx.toolTipTogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Toggle area titles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All Copy rights to abo ahmad 2021 - \u221E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".map-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0px;\n  z-index: -30;\n}\n\n.map-frame[_ngcontent-%COMP%] {\n  border: 0px solid black;\n  height: 100%;\n}\n\n#map[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #af4c4c;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #a04545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRiIsImZpbGUiOiJtYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDBweDtcbiAgei1pbmRleDogLTMwO1xufVxuXG4ubWFwLWZyYW1lIHtcbiAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZjRjNGM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTA0NTQ1O1xufVxuIl19 */"] });


/***/ }),

/***/ "Hs+c":
/*!*************************************************!*\
  !*** ./src/app/services/geoJsonConf.service.ts ***!
  \*************************************************/
/*! exports provided: GeoJsonConfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoJsonConfService", function() { return GeoJsonConfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GeoJsonConfService {
    constructor() { }
    getColor(d) {
        return d > 8 ? '#800026' :
            d > 7 ? '#BD0026' :
                d > 6 ? '#E31A1C' :
                    d > 5 ? '#FC4E2A' :
                        d > 4 ? '#FD8D3C' :
                            d > 3 ? '#FEB24C' :
                                d > 2 ? '#FED976' :
                                    '#FFEDA0';
    }
}
GeoJsonConfService.ɵfac = function GeoJsonConfService_Factory(t) { return new (t || GeoJsonConfService)(); };
GeoJsonConfService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeoJsonConfService, factory: GeoJsonConfService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/map/map.component */ "EZtS");
/* harmony import */ var _geojson_nigbor1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geojson/nigbor1 */ "mING");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const _c0 = ["drawer"];
class AppComponent {
    constructor() {
        this.geoFeatures = _geojson_nigbor1__WEBPACK_IMPORTED_MODULE_1__["geo1"];
        this.title = 'leaflet';
        this.selectedArea = {};
        this.population = 0;
        this.numberOfHouses = 0;
        this.areaName = '';
        this.ratio = 0;
    }
    reviewDate(id) {
        this.selectedArea = this.geoFeatures.features.find(f => f.properties.id === id);
        this.sidenav.open();
        this.areaName = this.selectedArea.properties.areaName;
        this.population = this.selectedArea.properties.population;
        this.numberOfHouses = this.selectedArea.properties.numberOfHouses;
        this.ratio = this.population / this.numberOfHouses;
        console.log(this.selectedArea);
    }
    closeSidnav() {
        this.sidenav.close();
    }
    saveData() {
        this.selectedArea.properties.population = this.population;
        this.selectedArea.properties.numberOfHouses = this.numberOfHouses;
        this.map.resetStyle();
        this.closeSidnav();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_components_map_map_component__WEBPACK_IMPORTED_MODULE_0__["MapComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
    } }, decls: 24, vars: 5, consts: [["autosize", "", 1, "example-container"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], [2, "text-align", "right", 3, "click"], [1, "area-header"], ["for", "population"], ["type", "text", "name", "population", 3, "ngModel", "keyup", "ngModelChange"], ["for", "number"], ["type", "text", "name", "number", 3, "ngModel", "keyup", "ngModelChange"], [1, ""], [1, "save", 3, "click"], [1, "example-sidenav-content"], [1, "map"], [3, "geoJsonFeatures", "geoJsonFeaturesChange", "selectAnArea"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_div_click_3_listener() { return ctx.closeSidnav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Data Viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Population");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function AppComponent_Template_input_keyup_12_listener($event) { return $event.keyCode == 13 ? ctx.saveData() : null; })("ngModelChange", function AppComponent_Template_input_ngModelChange_12_listener($event) { return ctx.population = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Number of houses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function AppComponent_Template_input_keyup_15_listener($event) { return $event.keyCode == 13 ? ctx.saveData() : null; })("ngModelChange", function AppComponent_Template_input_ngModelChange_15_listener($event) { return ctx.numberOfHouses = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() { return ctx.saveData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Save the new data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "app-map", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("geoJsonFeaturesChange", function AppComponent_Template_app_map_geoJsonFeaturesChange_22_listener($event) { return ctx.geoFeatures = $event; })("selectAnArea", function AppComponent_Template_app_map_selectAnArea_22_listener($event) { return ctx.reviewDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.areaName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.population);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.numberOfHouses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ratio: ", ctx.ratio, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("geoJsonFeatures", ctx.geoFeatures);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_0__["MapComponent"]], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 0px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  width: 350px;\n  min-width: 250px;\n  max-width: 50%;\n  background: #891638;\n  background: linear-gradient(100deg, #891638 19%, #89164e 70%, #89165c 100%);\n  padding: 25px;\n  color: white;\n}\n\n.area-header[_ngcontent-%COMP%] {\n  color: #ffacc5;\n}\n\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\nbutton.save[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #4caf50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton.save[_ngcontent-%COMP%]:hover {\n  background-color: #45a049;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #af4c4c;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #a04545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDJFQUFBO0VBTUEsYUFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7QUFKRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2IHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTM3LCAyMiwgNTYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDEwMGRlZyxcclxuICAgIHJnYmEoMTM3LCAyMiwgNTYsIDEpIDE5JSxcclxuICAgIHJnYmEoMTM3LCAyMiwgNzgsIDEpIDcwJSxcclxuICAgIHJnYmEoMTM3LCAyMiwgOTIsIDEpIDEwMCVcclxuICApO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYXJlYS1oZWFkZXIge1xyXG4gIGNvbG9yOiAjZmZhY2M1O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uLnNhdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b24uc2F2ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY0YzRjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTA0NTQ1O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_map_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/map/toolbar/toolbar.component */ "zJsj");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/map/map.component */ "EZtS");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _toggled_sidenav_toggled_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggled-sidenav/toggled-sidenav.component */ "4yQo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        _components_map_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["ToolbarComponent"],
        _toggled_sidenav_toggled_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["ToggledSidenavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();


/***/ }),

/***/ "mING":
/*!************************************!*\
  !*** ./src/app/geojson/nigbor1.ts ***!
  \************************************/
/*! exports provided: geo1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geo1", function() { return geo1; });
var geo1 = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": 1,
                "numberOfHouses": 70,
                "population": 370,
                "areaName": "Area 1",
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            46.795049607753754,
                            24.658725579401306
                        ],
                        [
                            46.79701030254364,
                            24.656261125706912
                        ],
                        [
                            46.800363063812256,
                            24.65847450474277
                        ],
                        [
                            46.798405051231384,
                            24.66095719652389
                        ],
                        [
                            46.795049607753754,
                            24.658725579401306
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 2,
                "numberOfHouses": 70,
                "population": 260,
                "areaName": "Area 2",
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            46.79484844207764,
                            24.65459862797633
                        ],
                        [
                            46.79654896259308,
                            24.652429059514365
                        ],
                        [
                            46.80104970932007,
                            24.655388439043236
                        ],
                        [
                            46.79934382438659,
                            24.65753357968457
                        ],
                        [
                            46.79484844207764,
                            24.65459862797633
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 3,
                "numberOfHouses": 70,
                "population": 170,
                "areaName": "Area 3",
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            46.79938942193985,
                            24.657572581900453
                        ],
                        [
                            46.80108189582825,
                            24.655432317289307
                        ],
                        [
                            46.802149415016174,
                            24.656119741130883
                        ],
                        [
                            46.80045157670975,
                            24.65829412069573
                        ],
                        [
                            46.79938942193985,
                            24.657572581900453
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 4,
                "numberOfHouses": 40,
                "population": 270,
                "areaName": "Area 4",
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            46.796607971191406,
                            24.65236080281616
                        ],
                        [
                            46.797208786010735,
                            24.65153196850281
                        ],
                        [
                            46.802852153778076,
                            24.65522755200898
                        ],
                        [
                            46.80220641195774,
                            24.65610816221452
                        ],
                        [
                            46.796607971191406,
                            24.65236080281616
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 5,
                "numberOfHouses": 40,
                "population": 220,
                "areaName": "Area 5",
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            46.800636649131775,
                            24.65840625135023
                        ],
                        [
                            46.802363991737366,
                            24.656246499723697
                        ],
                        [
                            46.80506229400635,
                            24.658006480730023
                        ],
                        [
                            46.80427908897399,
                            24.658942527000463
                        ],
                        [
                            46.80268049240112,
                            24.657923601294854
                        ],
                        [
                            46.80172562599182,
                            24.659122910110387
                        ],
                        [
                            46.800636649131775,
                            24.65840625135023
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 6,
                "numberOfHouses": 20,
                "population": 70,
                "areaName": "Area 6",
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            46.80178463459015,
                            24.659159474222484
                        ],
                        [
                            46.80243372917175,
                            24.658323372180522
                        ],
                        [
                            46.80533051490784,
                            24.660190577773843
                        ],
                        [
                            46.8046760559082,
                            24.66107785627977
                        ],
                        [
                            46.80178463459015,
                            24.659159474222484
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 7,
                "numberOfHouses": 1,
                "population": 0,
                "areaName": "Area 7",
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            46.792863607406616,
                            24.65727518969661
                        ],
                        [
                            46.794741153717034,
                            24.654818020440622
                        ],
                        [
                            46.79696470499039,
                            24.656234311403058
                        ],
                        [
                            46.79500401020049,
                            24.658703640859052
                        ],
                        [
                            46.792863607406616,
                            24.65727518969661
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 8,
                "numberOfHouses": 90,
                "population": 770,
                "areaName": "Area 8",
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            46.79080367088317,
                            24.659654307486406
                        ],
                        [
                            46.79277777671813,
                            24.657333693136966
                        ],
                        [
                            46.79839298129082,
                            24.660977915884192
                        ],
                        [
                            46.796919107437134,
                            24.662803643656748
                        ],
                        [
                            46.793421506881714,
                            24.660765846974833
                        ],
                        [
                            46.793121099472046,
                            24.66121436010536
                        ],
                        [
                            46.79080367088317,
                            24.659654307486406
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 9,
                "numberOfHouses": 50,
                "population": 360,
                "areaName": "Area 9",
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            46.79700493812561,
                            24.66323752429919
                        ],
                        [
                            46.79729461669922,
                            24.662725642482382
                        ],
                        [
                            46.80051326751708,
                            24.658679264696485
                        ],
                        [
                            46.80268049240112,
                            24.660054072828395
                        ],
                        [
                            46.80076003074646,
                            24.662569639987396
                        ],
                        [
                            46.799633502960205,
                            24.66181887525252
                        ],
                        [
                            46.798421144485474,
                            24.66331065010159
                        ],
                        [
                            46.79811537265777,
                            24.663193648797176
                        ],
                        [
                            46.79700493812561,
                            24.66323752429919
                        ]
                    ]
                ]
            }
        }
    ]
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/map/map.component */ "EZtS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_0__["MapComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "zJsj":
/*!*************************************************************!*\
  !*** ./src/app/components/map/toolbar/toolbar.component.ts ***!
  \*************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 9, vars: 0, consts: [[1, "topnav"], ["href", "#home", 1, "active"], ["href", "#news"], ["href", "#contact"], ["href", "#about"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".topnav[_ngcontent-%COMP%] {\n  background-color: #333;\n  overflow: hidden;\n}\n\n\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n\n\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #04aa6d;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQSw4Q0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBLHVDQUFBOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUEsMkNBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcG5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xyXG4udG9wbmF2IGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLyogQ2hhbmdlIHRoZSBjb2xvciBvZiBsaW5rcyBvbiBob3ZlciAqL1xyXG4udG9wbmF2IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xyXG4udG9wbmF2IGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRhYTZkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map