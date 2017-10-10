webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color='red' data-image=\"\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(location) {
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        $.material.options.autofill = true;
        $.material.init();
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__organisation_organisation_module__ = __webpack_require__("../../../../../src/app/organisation/organisation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_users_module__ = __webpack_require__("../../../../../src/app/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__organisation_organisation_module__["a" /* OrganisationModule */],
            __WEBPACK_IMPORTED_MODULE_7__users_users_module__["a" /* UsersModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Company\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Portfolio\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Mike John responded to your email</a></li>\r\n                        <li><a href=\"#\">You have 5 new tasks</a></li>\r\n                        <li><a href=\"#\">You're now friend with Andrew</a></li>\r\n                        <li><a href=\"#\">Another Notification</a></li>\r\n                        <li><a href=\"#\">Another One</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                       <i class=\"material-icons\">person</i>\r\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Logout</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n\r\n            <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                <div class=\"form-group form-black is-empty\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    <span class=\"material-input\"></span>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                </button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, element) {
        this.element = element;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"/assets/img/angular2-logo-red.png\"/>\r\n        </div>\r\n        Creative Tim\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\r\n        <div class=\"form-group form-black is-empty\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n            <span class=\"material-input\"></span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n        </button>\r\n    </form>\r\n\r\n    <ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">\r\n        <li>\r\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"material-icons\">dashboard</i>\r\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n            </a>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"material-icons\">notifications</i>\r\n                <span class=\"notification\">5</span>\r\n                <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\">Mike John responded to your email</a></li>\r\n                <li><a href=\"#\">You have 5 new tasks</a></li>\r\n                <li><a href=\"#\">You're now friend with Andrew</a></li>\r\n                <li><a href=\"#\">Another Notification</a></li>\r\n                <li><a href=\"#\">Another One</a></li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n               <i class=\"material-icons\">person</i>\r\n               <p class=\"hidden-lg hidden-md\">Profile</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\r\n                <a  [routerLink]=\"[menuItem.path]\">\r\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                    <p>{{menuItem.title}}</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'organisations', title: 'Organisation', icon: 'location_city', class: '' },
    { path: 'users', title: 'User', icon: 'person', class: '' },
    { path: 'agent', title: 'Agent', icon: 'group_add', class: '' },
    { path: 'company', title: 'Company', icon: 'business', class: '' },
    { path: 'orgbranch', title: 'Org_Branch', icon: 'device_hub', class: '' },
    { path: 'transaction', title: 'Transaction', icon: 'monetization_on', class: '' },
    { path: 'vehicle', title: 'Vehicle', icon: 'directions_bus', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"orange\">\r\n                            <i class=\"material-icons\">content_copy</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Used Space</p>\r\n                            <h3 class=\"title\">49/50<small>GB</small></h3>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons text-danger\">warning</i> <a href=\"#pablo\">Get More Space...</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"green\">\r\n                            <i class=\"material-icons\">store</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Revenue</p>\r\n                            <h3 class=\"title\">$34,245</h3>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"red\">\r\n                            <i class=\"material-icons\">info_outline</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Fixed Issues</p>\r\n                            <h3 class=\"title\">75</h3>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">local_offer</i> Tracked from Github\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"blue\">\r\n                            <i class=\"fa fa-twitter\"></i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Followers</p>\r\n                            <h3 class=\"title\">+245</h3>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">update</i> Just Updated\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card\" >\r\n                        <div class=\"card-header card-chart\" data-background-color=\"green\">\r\n                            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"title\">Daily Sales</h4>\r\n                            <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55%  </span> increase in today sales.</p>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">access_time</i> updated 4 minutes ago\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card\" >\r\n                        <div class=\"card-header card-chart\" data-background-color=\"orange\">\r\n                            <div class=\"ct-chart\" id=\"emailsSubscriptionChart\"></div>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"title\">Email Subscriptions</h4>\r\n                            <p class=\"category\">Last Campaign Performance</p>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card\" >\r\n                        <div class=\"card-header card-chart\" data-background-color=\"red\">\r\n                            <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"title\">Completed Tasks</h4>\r\n                            <p class=\"category\">Last Campaign Performance</p>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-12\">\r\n                    <div class=\"card card-nav-tabs\" >\r\n                        <div class=\"card-header\" data-background-color=\"purple\">\r\n                            <div class=\"nav-tabs-navigation\">\r\n                                <div class=\"nav-tabs-wrapper\">\r\n                                    <span class=\"nav-tabs-title\">Tasks:</span>\r\n                                    <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                                        <li class=\"active\">\r\n                                            <a href=\"#profile\" data-toggle=\"tab\">\r\n                                                <i class=\"material-icons\">bug_report</i>\r\n                                                Bugs\r\n                                            <div class=\"ripple-container\"></div></a>\r\n                                        </li>\r\n                                        <li class=\"\">\r\n                                            <a href=\"#messages\" data-toggle=\"tab\">\r\n                                                <i class=\"material-icons\">code</i>\r\n                                                Website\r\n                                            <div class=\"ripple-container\"></div></a>\r\n                                        </li>\r\n                                        <li class=\"\">\r\n                                            <a href=\"#settings\" data-toggle=\"tab\">\r\n                                                <i class=\"material-icons\">cloud</i>\r\n                                                Server\r\n                                            <div class=\"ripple-container\"></div></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-content\">\r\n                            <div class=\"tab-content\">\r\n                                <div class=\"tab-pane active\" id=\"profile\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                                </td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Create 4 Invisible User Experiences you Never Knew About</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"tab-pane\" id=\"messages\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                                </td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"tab-pane\" id=\"settings\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                                </td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-6 col-md-12\">\r\n                    <div class=\"card\" >\r\n                        <div class=\"card-header\" data-background-color=\"orange\">\r\n                            <h4 class=\"title\">Employees Stats</h4>\r\n                            <p class=\"category\">New employees on 15th September, 2016</p>\r\n                        </div>\r\n                        <div class=\"card-content table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead class=\"text-warning\">\r\n                                    <tr>\r\n                                        <th>ID</th>\r\n                                        <th>Name</th>\r\n                                        <th>Salary</th>\r\n                                        <th>Country</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>1</td>\r\n                                        <td>Dakota Rice</td>\r\n                                        <td>$36,738</td>\r\n                                        <td>Niger</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>2</td>\r\n                                        <td>Minerva Hooper</td>\r\n                                        <td>$23,789</td>\r\n                                        <td>Curaçao</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3</td>\r\n                                        <td>Sage Rodriguez</td>\r\n                                        <td>$56,142</td>\r\n                                        <td>Netherlands</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>4</td>\r\n                                        <td>Philip Chaney</td>\r\n                                        <td>$38,735</td>\r\n                                        <td>Korea, South</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var emailsSubscriptionChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(emailsSubscriptionChart);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/organisation/organisation-add/organisation-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <h4 class=\"title\">Add Organisation <a class=\"pull-right\" [routerLink]=\"['/organisations']\">Back</a></h4>\r\n                    <p class=\"category\">Complete your profile</p>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <form (ngSubmit)=\"onSubmit(organisationForm.value)\" #userForm=\"ngForm\">\r\n                        <div class=\"row\">\r\n                             <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Org Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"orgName\" [(ngModel)]=\"organisation.orgName\" name=\"orgName\" required #orgName=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Org Person Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"orgcontactperson\" [(ngModel)]=\"organisation.orgcontactperson\" name=\"orgcontactperson\" required #orgcontactperson=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Mobile Number</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"mobile\" [(ngModel)]=\"organisation.mobile\" name=\"mobile\" required #mobile=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"organisation.email\" name=\"email\" required #email=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                             <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Address</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"organisation.address\" name=\"address\" required #address=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label class=\"control-label\">Role</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"role\" [(ngModel)]=\"organisation.role\" name=\"role\" required #role=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\">Submit</button>\r\n                        <div class=\"clearfix\"></div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/organisation/organisation-add/organisation-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organisation_service__ = __webpack_require__("../../../../../src/app/organisation/organisation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganisationAddComponent = (function () {
    function OrganisationAddComponent(orgService, router) {
        this.orgService = orgService;
        this.router = router;
        this.organisation = {};
    }
    OrganisationAddComponent.prototype.ngOnInit = function () {
    };
    OrganisationAddComponent.prototype.onsubmit = function (organisation) {
        var _this = this;
        organisation.orgId = null;
        this.orgService.addOrganisation(organisation).subscribe(function (new_organisation) {
            _this.organisation = new_organisation;
            _this.gotoOrganisationsList();
        }, function (error) { return _this.errorMessage = error; });
    };
    OrganisationAddComponent.prototype.gotoOrganisationsList = function () {
        this.router.navigate(['/users']);
    };
    return OrganisationAddComponent;
}());
OrganisationAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-organisation-add',
        template: __webpack_require__("../../../../../src/app/organisation/organisation-add/organisation-add.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__organisation_service__["a" /* OrganisationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__organisation_service__["a" /* OrganisationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], OrganisationAddComponent);

var _a, _b;
//# sourceMappingURL=organisation-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/organisation/organisation-details/organisation-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <h4 class=\"title\">Organisation Details</h4>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <table class=\"table table responsive\">\r\n                        <tr>\r\n                            <td>Organisation Name:</td>\r\n                            <td>{{organisation.orgName}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Email:</td>\r\n                            <td>{{organisation.orgcontactperson}}</td>\r\n                        </tr>  \r\n                        <tr>\r\n                            <td>Mobile:</td>\r\n                            <td>{{organisation.mobile}}</td>\r\n                        </tr> \r\n                        <tr>\r\n                            <td>Email:</td>\r\n                            <td>{{organisation.email}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Address:</td>\r\n                            <td>{{organisation.address}}</td>\r\n                        </tr>   \r\n                        <tr>\r\n                            <td>Role:</td>\r\n                            <td>{{organisation.role}}</td>\r\n                        </tr>        \r\n                    </table>\r\n                    <button class=\"btn btn-danger pull-right\" (click)=\"gotoOrganisationsList()\"> Back</button>\r\n                    <button class=\"btn btn-danger pull-right\" (click)=\"editOrganisation()\">Edit Organisation</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/organisation/organisation-details/organisation-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__organisation_service__ = __webpack_require__("../../../../../src/app/organisation/organisation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganisationDetailComponent = (function () {
    function OrganisationDetailComponent(route, router, organisationService) {
        this.route = route;
        this.router = router;
        this.organisationService = organisationService;
        this.organisation = {};
    }
    OrganisationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var orgId = this.route.snapshot.params['id'];
        this.organisationService.getOrganisationById(orgId).subscribe(function (organisation) { return _this.organisation = organisation; }, function (error) { return _this.errorMessage = error; });
    };
    OrganisationDetailComponent.prototype.gotoOrganisationsList = function () {
        this.router.navigate(['/organisations']);
    };
    OrganisationDetailComponent.prototype.editOrganisation = function () {
        this.router.navigate(['/organisations', this.organisation.orgId, 'edit']);
    };
    return OrganisationDetailComponent;
}());
OrganisationDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-organisation-detail',
        template: __webpack_require__("../../../../../src/app/organisation/organisation-details/organisation-details.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__organisation_service__["a" /* OrganisationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__organisation_service__["a" /* OrganisationService */]) === "function" && _c || Object])
], OrganisationDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=organisation-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/organisation/organisation-edit/organisation-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <h4 class=\"title\">Edit Organisation</h4>\r\n                    <p class=\"category\">Complete your profile</p>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <form (ngSubmit)=\"onSubmit(organisationForm.value)\" #userForm=\"ngForm\">\r\n                        <div class=\"row\">\r\n                             <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Org Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"orgName\" [(ngModel)]=\"organisation.orgName\" name=\"orgName\" required #orgName=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Org Person Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"orgcontactperson\" [(ngModel)]=\"organisation.orgcontactperson\" name=\"orgcontactperson\" required #orgcontactperson=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Mobile Number</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"mobile\" [(ngModel)]=\"organisation.mobile\" name=\"mobile\" required #mobile=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"organisation.email\" name=\"email\" required #email=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                             <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Address</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"organisation.address\" name=\"address\" required #address=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Role</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"role\" [(ngModel)]=\"organisation.role\" name=\"role\" required #role=\"ngModel\"/>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <button class=\"btn btn-danger pull-right\" (click)=\"gotoOrganisationDetail(organisation)\">Back</button>\r\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\">Submit</button>\r\n                        <div class=\"clearfix\"></div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/organisation/organisation-edit/organisation-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organisation_service__ = __webpack_require__("../../../../../src/app/organisation/organisation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganisationEditComponent = (function () {
    function OrganisationEditComponent(orgService, route, router) {
        this.orgService = orgService;
        this.route = route;
        this.router = router;
        this.organisation = {};
    }
    OrganisationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var orgId = this.route.snapshot.params['orgId'];
        this.orgService.getOrganisationById(orgId).subscribe(function (organisation) { return _this.organisation = organisation; }, function (error) { return _this.errorMessage = error; });
    };
    OrganisationEditComponent.prototype.onSubmit = function (organisation) {
        var org_id = this.organisation.orgId;
        //console.log("on subm"+organisation.pincode + "user_id"+user_id);
        var that = this;
        this.orgService.updateOrganisation(org_id, organisation).subscribe(get_result, get_error);
        function get_error(error) {
            console.log(error);
            console.log('error catched');
            return this.errorMessage = error;
        }
        function get_result(update_status) {
            console.log(update_status);
            if (update_status.status === 204) {
                console.log('update success');
            }
            else {
                return console.log('update failed');
            }
        }
    };
    ;
    OrganisationEditComponent.prototype.gotoOrganisationDetail = function (organisation) {
        this.router.navigate(['/organisations', organisation.orgId]);
    };
    return OrganisationEditComponent;
}());
OrganisationEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-organisation-edit',
        template: __webpack_require__("../../../../../src/app/organisation/organisation-edit/organisation-edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__organisation_service__["a" /* OrganisationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__organisation_service__["a" /* OrganisationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], OrganisationEditComponent);

var _a, _b, _c;
//# sourceMappingURL=organisation-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/organisation/organisation-list/organisation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Organisations List</h4>\r\n                    </div>\r\n                    <div class=\"card-content table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-danger\">\r\n                                <tr>\r\n                                    <th>UserName</th>\r\n                                    <th>Email</th>\r\n                                    <th>Phone</th>\r\n                                    <th>Address</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let organisation of organisations\">\r\n                                    \r\n                                    <td><a routerLink=\"/organisations/{{organisation.orgId}}\" routerLinkActive=\"active\"\r\n                                       (click)=\"onSelect(user)\">{{organisation.username}}</a></td>\r\n                                    <td>{{organisation.email}}</td>\r\n                                    <td>{{organisation.phone}}</td>\r\n                                    <td>{{organisation.address}}</td>\r\n                                </tr>     \r\n                            </tbody>\r\n                        </table>\r\n                        <div>\r\n                            <button class=\"btn btn-danger pull-right\" (click)=\"addOrganisation()\">Add User</button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/organisation/organisation-list/organisation-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__organisation_service__ = __webpack_require__("../../../../../src/app/organisation/organisation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganisationListComponent = (function () {
    function OrganisationListComponent(router, organisationService) {
        this.router = router;
        this.organisationService = organisationService;
    }
    OrganisationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.organisationService.getOrganisations().subscribe(function (organisations) { return _this.organisations = organisations; }, function (error) { return _this.errorMessage = error; });
    };
    OrganisationListComponent.prototype.onSelect = function (organisation) {
        this.router.navigate(['/organisations', organisation.orgId]);
    };
    OrganisationListComponent.prototype.addOrganisation = function () {
        this.router.navigate(['/organisations/add']);
    };
    return OrganisationListComponent;
}());
OrganisationListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-organisation-list',
        template: __webpack_require__("../../../../../src/app/organisation/organisation-list/organisation-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__organisation_service__["a" /* OrganisationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__organisation_service__["a" /* OrganisationService */]) === "function" && _b || Object])
], OrganisationListComponent);

var _a, _b;
//# sourceMappingURL=organisation-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/organisation/organisation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organisation_service__ = __webpack_require__("../../../../../src/app/organisation/organisation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organisation_routing__ = __webpack_require__("../../../../../src/app/organisation/organisation.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organisation_list_organisation_list_component__ = __webpack_require__("../../../../../src/app/organisation/organisation-list/organisation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__organisation_details_organisation_details_component__ = __webpack_require__("../../../../../src/app/organisation/organisation-details/organisation-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__organisation_add_organisation_add_component__ = __webpack_require__("../../../../../src/app/organisation/organisation-add/organisation-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__organisation_edit_organisation_edit_component__ = __webpack_require__("../../../../../src/app/organisation/organisation-edit/organisation-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OrganisationModule = (function () {
    function OrganisationModule() {
    }
    return OrganisationModule;
}());
OrganisationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__organisation_routing__["a" /* OrganisationRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__organisation_list_organisation_list_component__["a" /* OrganisationListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__organisation_details_organisation_details_component__["a" /* OrganisationDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__organisation_edit_organisation_edit_component__["a" /* OrganisationEditComponent */],
            __WEBPACK_IMPORTED_MODULE_7__organisation_add_organisation_add_component__["a" /* OrganisationAddComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__organisation_service__["a" /* OrganisationService */]]
    })
], OrganisationModule);

//# sourceMappingURL=organisation.module.js.map

/***/ }),

/***/ "../../../../../src/app/organisation/organisation.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organisation_list_organisation_list_component__ = __webpack_require__("../../../../../src/app/organisation/organisation-list/organisation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organisation_details_organisation_details_component__ = __webpack_require__("../../../../../src/app/organisation/organisation-details/organisation-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organisation_add_organisation_add_component__ = __webpack_require__("../../../../../src/app/organisation/organisation-add/organisation-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organisation_edit_organisation_edit_component__ = __webpack_require__("../../../../../src/app/organisation/organisation-edit/organisation-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var organisationRoutes = [
    { path: 'organisations', component: __WEBPACK_IMPORTED_MODULE_2__organisation_list_organisation_list_component__["a" /* OrganisationListComponent */] },
    { path: 'organisations/add', component: __WEBPACK_IMPORTED_MODULE_4__organisation_add_organisation_add_component__["a" /* OrganisationAddComponent */] },
    { path: 'organisations/:id', component: __WEBPACK_IMPORTED_MODULE_3__organisation_details_organisation_details_component__["a" /* OrganisationDetailComponent */] },
    { path: 'organisations/:id/edit', component: __WEBPACK_IMPORTED_MODULE_5__organisation_edit_organisation_edit_component__["a" /* OrganisationEditComponent */] }
];
var OrganisationRoutingModule = (function () {
    function OrganisationRoutingModule() {
    }
    return OrganisationRoutingModule;
}());
OrganisationRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(organisationRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], OrganisationRoutingModule);

//# sourceMappingURL=organisation.routing.js.map

/***/ }),

/***/ "../../../../../src/app/organisation/organisation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganisationService = (function () {
    function OrganisationService(_http) {
        this._http = _http;
        this.entity_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].REST_API_URL + 'organisations';
    }
    OrganisationService.prototype.getOrganisations = function () {
        return this._http.get(this.entity_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrganisationService.prototype.getOrganisationById = function (organisation_id) {
        return this._http.get((this.entity_url + '/' + organisation_id))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrganisationService.prototype.addOrganisation = function (organisation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return this._http.post(this.entity_url, JSON.stringify(organisation), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrganisationService.prototype.updateOrganisation = function (organisation_id, organisation) {
        var body = JSON.stringify(organisation);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': ' application/json;charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put((this.entity_url + '/' + organisation_id), body, options)
            .map(function (response) { return response; })
            .catch(this.handleError); // TODO parse response header when error ?
    };
    OrganisationService.prototype.deleteOrganisation = function (organisation_id) {
        return this._http.delete((this.entity_url + '/' + organisation_id))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrganisationService.prototype.handleError = function (error) {
        console.log('handleError log: ');
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            if (!(error.text() === '')) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                console.log('binding errors header not empty');
                errMsg = error.headers.get('errors').toString();
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    return OrganisationService;
}());
OrganisationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OrganisationService);

var _a;
//# sourceMappingURL=organisation.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-add/user-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <h4 class=\"title\">Add User Details <a class=\"pull-right\" [routerLink]=\"['/users']\">Back</a></h4>\r\n                    <p class=\"category\">Complete your profile</p>\r\n                    <a href=\"\"></a>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <form (ngSubmit)=\"onSubmit(userForm.value)\" #userForm=\"ngForm\">\r\n                        <div class=\"row\">\r\n                            \r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                \r\n                                    <label class=\"control-label\">Email address</label>\r\n                                    <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\"\r\n                                     required name=\"email\" #email=\"ngModel\"/>\r\n                                </div>\r\n                              <!--  <small *ngIf=\"!userForm.controls.username.valid && userForm.controls.username.touched\">\r\n                                    Username is Required.\r\n                                </small>-->\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">UserName</label>\r\n                                    <input type=\"text\" class=\"form-control\" value=\"avf\" id=\"username\" [(ngModel)]=\"user.username\" required name=\"username\" #username=\"ngModel\"/>\r\n                                </div>\r\n                                <!-- <small class=\"error-message\" \r\n                                     *ngIf=\"!userForm.controls.email.valid  && userForm.controls.email.dirty\">\r\n                                     <p>Please Enter a Valid Email.</p>\r\n                                </small>-->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Phone</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"user.phone\" required name=\"phone\" #phone=\"ngModel\"/>\r\n                                </div>\r\n                               <!-- <small *ngIf=\"userForm.controls.phone.valid && userForm.controls.phone.dirty\">Please Enter a Valid Phone Number</small>-->\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Branch</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"branch\" [(ngModel)]=\"user.branch\" required name=\"branch\" #branch=\"ngModel\"/>\r\n                                </div>\r\n                               <!-- <small *ngIf=\"!userForm.controls.branch.valid && userForm.controls.branch.touched\">\r\n                                    Branch is Required.\r\n                                </small>-->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Adress</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"user.address\" required name=\"address\" #address=\"ngModel\"/>\r\n                                </div>\r\n                               <!-- <small *ngIf=\"!userForm.controls.address.valid && userForm.controls.address.touched\">\r\n                                    Address is Required.\r\n                                </small>-->\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Postal Code</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"pincode\" [(ngModel)]=\"user.pincode\" required name=\"pincode\" #pincode=\"ngModel\"/>\r\n                                </div>\r\n                                <!--<small *ngIf=\"!userForm.controls.pincode.valid && userForm.controls.pincode.touched\">\r\n                                   Pin Code is Required.\r\n                                </small>-->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\">Submit</button>\r\n                        <div class=\"clearfix\"></div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/users/user-add/user-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Observable} from 'rxjs';


var UserAddComponent = (function () {
    function UserAddComponent(userService, router, fb) {
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.user = {};
    }
    UserAddComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/material-dashboard.js');
        // this.userForm.patchValue(this.user);
    };
    UserAddComponent.prototype.onSubmit = function (user) {
        var _this = this;
        console.log(user.username);
        //user.id = null;
        this.userService.addUser(user).subscribe(function (new_user) {
            _this.user = new_user;
            _this.gotoUsersList();
        }, function (error) { return _this.errorMessage = error; });
    };
    UserAddComponent.prototype.gotoUsersList = function () {
        this.router.navigate(['/users']);
    };
    return UserAddComponent;
}());
UserAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-add',
        template: __webpack_require__("../../../../../src/app/users/user-add/user-add.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], UserAddComponent);

var _a, _b, _c;
//# sourceMappingURL=user-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <h4 class=\"title\">User Details</h4>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <table class=\"table table responsive\">\r\n                        <tr>\r\n                            <td>UserName:</td>\r\n                            <td>{{user.username}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Email:</td>\r\n                            <td>{{user.email}}</td>\r\n                        </tr>  \r\n                        <tr>\r\n                            <td>Phone:</td>\r\n                            <td>{{user.phone}}</td>\r\n                        </tr> \r\n                        <tr>\r\n                            <td>Address:</td>\r\n                            <td>{{user.address}}</td>\r\n                        </tr>           \r\n                    </table>\r\n                    <button class=\"btn btn-danger pull-right\" (click)=\"gotoUsersList()\"> Back</button>\r\n                    <button class=\"btn btn-danger pull-right\" (click)=\"editUser()\">Edit User</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/users/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Observable} from 'rxjs';
var UserDetailComponent = (function () {
    /*user = {
    id : 1,
    firstName : 'ABC',
    lastName : 'BCD'
    }*/
    function UserDetailComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = {};
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.route.snapshot.params['id'];
        this.userService.getUserById(userId).subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
    };
    UserDetailComponent.prototype.gotoUsersList = function () {
        this.router.navigate(['/users']);
    };
    UserDetailComponent.prototype.editUser = function () {
        var userId = this.route.snapshot.params['id'];
        this.router.navigate(['/users', userId, 'edit']);
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-detail',
        template: __webpack_require__("../../../../../src/app/users/user-details/user-details.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _c || Object])
], UserDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=user-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <h4 class=\"title\">Edit User Details</h4>\r\n                    <p class=\"category\">Complete your profile</p>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <form (ngSubmit)=\"onSubmit(userForm.value)\" #userForm=\"ngForm\">\r\n                        \r\n                        <div class=\"row\">    \r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black \">\r\n                                \r\n                                    <label class=\"control-label\">Email address</label>\r\n                                    <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\" \r\n                                     required name=\"email\" #email=\"ngModel\"/>\r\n                                </div>\r\n                              <!--  <small *ngIf=\"!userForm.controls.username.valid && userForm.controls.username.touched\">\r\n                                    Username is Required.\r\n                                </small>-->\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black \">\r\n                                    <label class=\"control-label\">UserName</label>\r\n                                    <input type=\"text\" class=\"form-control\" value=\"avf\" id=\"username\" [(ngModel)]=\"user.username\" required name=\"username\" #username=\"ngModel\"/>\r\n                                </div>\r\n                                <!-- <small class=\"error-message\" \r\n                                     *ngIf=\"!userForm.controls.email.valid  && userForm.controls.email.dirty\">\r\n                                     <p>Please Enter a Valid Email.</p>\r\n                                </small>-->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black \">\r\n                                    <label class=\"control-label\">Phone</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"user.phone\" required name=\"phone\" #phone=\"ngModel\"/>\r\n                                </div>\r\n                               <!-- <small *ngIf=\"userForm.controls.phone.valid && userForm.controls.phone.dirty\">Please Enter a Valid Phone Number</small>-->\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black \">\r\n                                    <label class=\"control-label\">Branch</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"branch\" [(ngModel)]=\"user.branch\" required name=\"branch\" #branch=\"ngModel\"/>\r\n                                </div>\r\n                               <!-- <small *ngIf=\"!userForm.controls.branch.valid && userForm.controls.branch.touched\">\r\n                                    Branch is Required.\r\n                                </small>-->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black \">\r\n                                    <label class=\"control-label\">Adress</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"user.address\" required name=\"address\" #address=\"ngModel\"/>\r\n                                </div>\r\n                               <!-- <small *ngIf=\"!userForm.controls.address.valid && userForm.controls.address.touched\">\r\n                                    Address is Required.\r\n                                </small>-->\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\">Postal Code</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"pincode\" [(ngModel)]=\"user.pincode\" required name=\"pincode\" #pincode=\"ngModel\"/>\r\n                                </div>\r\n                                <!--<small *ngIf=\"!userForm.controls.pincode.valid && userForm.controls.pincode.touched\">\r\n                                   Pin Code is Required.\r\n                                </small>-->\r\n                            </div>\r\n                        </div>\r\n\r\n                         <button class=\"btn btn-danger pull-right\" (click)=\"gotoUserDetail(user)\">Back</button>\r\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\">Submit</button>\r\n                        <div class=\"clearfix\"></div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/users/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Observable} from 'rxjs';

var UserEditComponent = (function () {
    function UserEditComponent(userService, route, router, fb) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.user = {};
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.route.snapshot.params['id'];
        this.userService.getUserById(userId).subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
    };
    UserEditComponent.prototype.onSubmit = function (user) {
        var user_id = this.user._id;
        console.log("on subm" + user.pincode + "user_id" + user_id);
        var that = this;
        this.userService.updateUser(user_id, user).subscribe(get_result, get_error);
        function get_error(error) {
            console.log(error);
            console.log('error catched');
            return this.errorMessage = error;
        }
        function get_result(update_status) {
            console.log(update_status);
            if (update_status.status === 204) {
                console.log('update failed');
            }
            else {
                return console.log('update success');
            }
        }
    };
    ;
    UserEditComponent.prototype.gotoUserDetail = function (user) {
        var userId = this.route.snapshot.params['id'];
        this.router.navigate(['/users', userId]);
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-edit',
        template: __webpack_require__("../../../../../src/app/users/user-edit/user-edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], UserEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                       <!-- <h4 class=\"title\">User List  <a class=\"pull-right\" [routerLink]=\"['/user']\">Back</a></h4>-->\r\n                       <h4 class=\"title\">Users List</h4>\r\n                        \r\n                    </div>\r\n                    <div class=\"card-content table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-danger\">\r\n                                <tr>\r\n                                    <th>UserName</th>\r\n                                    <th>Email</th>\r\n                                    <th>Phone</th>\r\n                                    <th>Address</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user of users\">\r\n                                    \r\n                                    <td><a routerLink=\"/users/{{user._id}}\" routerLinkActive=\"active\"\r\n                                       (click)=\"onSelect(user)\">{{user.username}}</a></td>\r\n                                    <td>{{user.email}}</td>\r\n                                    <td>{{user.phone}}</td>\r\n                                    <td>{{user.address}}</td>\r\n                                </tr>     \r\n                            </tbody>\r\n                        </table>\r\n                        <div>\r\n                            <button class=\"btn btn-danger pull-right\" (click)=\"addUser()\">Add User</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>    "

/***/ }),

/***/ "../../../../../src/app/users/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.userList = [
            { id: '1', userName: 'John', email: 'John@gmail.com', phone: '8907654321', address: 'Super Market Gulbarga' },
            { id: '2', userName: 'Joe', email: 'Joe@gmail.com', phone: '8907654781', address: 'Market  Gulbarga' },
            { id: '3', userName: 'Anu', email: 'Anu@gmail.com', phone: '8907654790', address: 'SB Temple  Gulbarga' }
        ];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    UserListComponent.prototype.onSelect = function (user) {
        this.router.navigate(['/users', user.id]);
    };
    UserListComponent.prototype.addUser = function () {
        this.router.navigate(['/users/add']);
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/users/user-list/user-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _b || Object])
], UserListComponent);

var _a, _b;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/users/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    // private entity_url = environment.REST_API_URL + 'users';
    function UserService(_http) {
        this._http = _http;
        this._getUrl = "/api/users";
        this._postUrl = "/api/user";
        this._putUrl = "/api/user";
        this._deleteUrl = "/api/user";
    }
    UserService.prototype.getUsers = function () {
        console.log("in user service");
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUserById = function (user_id) {
        return this._http.get((this._getUrl + '/' + user_id))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (user) {
        console.log("in addUser service");
        console.log(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        //Access-Control-Allow-Methods: POST, GET, OPTIONS
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
        return this._http.post(this._postUrl, JSON.stringify(user), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (user_id, user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': ' application/json;charset=UTF-8' });
        headers.append('Access-Control-Allow-Origin', '*');
        //Access-Control-Allow-Methods: POST, GET, OPTIONS
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put((this._putUrl + '/' + user_id), body, options)
            .map(function (response) { return response; })
            .catch(this.handleError); // TODO parse response header when error ?
    };
    UserService.prototype.deleteUser = function (user_id) {
        return this._http.delete((this._deleteUrl + '/' + user_id))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.log('handleError log: ');
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            if (!(error.text() === '')) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                console.log('binding errors header not empty');
                errMsg = error.headers.get('errors').toString();
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_details_user_details_component__ = __webpack_require__("../../../../../src/app/users/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/users/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/users/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_add_user_add_component__ = __webpack_require__("../../../../../src/app/users/user-add/user-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var userRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__["a" /* UserListComponent */] },
    { path: 'users/add', component: __WEBPACK_IMPORTED_MODULE_5__user_add_user_add_component__["a" /* UserAddComponent */] },
    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_2__user_details_user_details_component__["a" /* UserDetailComponent */] },
    { path: 'users/:id/edit', component: __WEBPACK_IMPORTED_MODULE_4__user_edit_user_edit_component__["a" /* UserEditComponent */] },
]);
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    return UsersRoutingModule;
}());
UsersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        //imports: [RouterModule.forChild(userRoutes)],
        imports: [
            userRouting
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], UsersRoutingModule);

//# sourceMappingURL=users-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/users/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_details_user_details_component__ = __webpack_require__("../../../../../src/app/users/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_add_user_add_component__ = __webpack_require__("../../../../../src/app/users/user-add/user-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/users/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_routing_module__ = __webpack_require__("../../../../../src/app/users/users-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__users_routing_module__["a" /* UsersRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_3__user_details_user_details_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__user_edit_user_edit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_add_user_add_component__["a" /* UserAddComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    REST_API_URL: 'http://localhost:9966/petclinic/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map