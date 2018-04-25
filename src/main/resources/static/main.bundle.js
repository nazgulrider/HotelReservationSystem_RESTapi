webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__ = __webpack_require__("./src/app/shared/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hotel_hotel_component__ = __webpack_require__("./src/app/hotel/hotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hotel_hotel_list_hotel_list_component__ = __webpack_require__("./src/app/hotel/hotel-list/hotel-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hotel_hotel_details_hotel_details_component__ = __webpack_require__("./src/app/hotel/hotel-details/hotel-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hotel_hotel_service__ = __webpack_require__("./src/app/hotel/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_auth_service__ = __webpack_require__("./src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__interceptor__ = __webpack_require__("./src/app/interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_login_home_login_component__ = __webpack_require__("./src/app/home/home-login/home-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_auth_guard_service__ = __webpack_require__("./src/app/shared/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'hotels', component: __WEBPACK_IMPORTED_MODULE_6__hotel_hotel_component__["a" /* HotelComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__shared_auth_guard_service__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__hotel_hotel_component__["a" /* HotelComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hotel_hotel_list_hotel_list_component__["a" /* HotelListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__hotel_hotel_details_hotel_details_component__["a" /* HotelDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_home_login_home_login_component__["a" /* HomeLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__shared_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__hotel_hotel_service__["a" /* HotelService */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_14__interceptor__["a" /* XhrInterceptor */], multi: true }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home-login/home-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\">\r\n  <div class=\"popup__content col-md-8 col-lg-6\">\r\n    <!-- <div class=\"alert alert-danger\" [hidden]=\"!error\">\r\n      There was a problem logging in. Please try again.\r\n    </div> -->\r\n    <form class=\"form offset-md-1 col-md-10\" (ngSubmit)=\"login()\">\r\n      <div class=\"form__group\">\r\n        <label class=\"form__label\" for=\"username\">Username</label>\r\n        <input type=\"text\" class=\"form__input\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"credentials.username\" required/>\r\n      </div>\r\n\r\n      <div class=\"form__group\">\r\n        <label class=\"form__label\" for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form__input\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"credentials.password\" required/>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn form-control btn-text\">Submit</button>\r\n    </form>  \r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home-login/home-login.component.scss":
/***/ (function(module, exports) {

module.exports = ".popup__content {\n  height: auto;\n  background-color: rgba(255, 255, 255, 0.9); }\n\n.form {\n  margin-top: 3rem;\n  margin-bottom: 5rem; }\n\n.form__group {\n    margin-bottom: 2rem; }\n\n.form__input {\n    width: 100%;\n    font-size: 1.5rem;\n    padding: 1rem 2rem;\n    border-radius: 2px;\n    border: none;\n    border-bottom: 3px solid transparent; }\n\n.form__input:focus {\n      outline: none;\n      -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n              box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n      border-bottom: 3px solid #55c57a; }\n\n.form__input:focus:invalid {\n      border-bottom: 3px solid #d36e48; }\n\n.form__label {\n    display: block;\n    font-size: 2rem;\n    text-transform: uppercase; }\n\n.btn {\n  background-color: #d36e48;\n  color: #fff;\n  font-size: 1.3rem;\n  margin-top: 2rem;\n  padding: 1rem;\n  border-radius: 3px; }\n\n.btn-text {\n    padding: 1rem; }\n"

/***/ }),

/***/ "./src/app/home/home-login/home-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__ = __webpack_require__("./src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeLoginComponent = /** @class */ (function () {
    function HomeLoginComponent(auth, http, router) {
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.credentials = { username: '', password: '' };
    }
    HomeLoginComponent.prototype.ngOnInit = function () {
    };
    HomeLoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.authenticate(this.credentials, function () {
            _this.router.navigate(['hotels']);
        });
        return false;
    };
    HomeLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-login',
            template: __webpack_require__("./src/app/home/home-login/home-login.component.html"),
            styles: [__webpack_require__("./src/app/home/home-login/home-login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], HomeLoginComponent);
    return HomeLoginComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\r\n  <div class=\"home\">\r\n  </div>\r\n</div>\r\n<div class=\"home-description container\">\r\n\r\n  <h1 class=\"home-heading\">\r\n    <span class=\"home-heading-main\">Comfort</span>\r\n    <span class=\"home-heading-sub\">find a good night's sleep</span>\r\n  </h1>\r\n  <p class=\"home-para\">Find the luxurious getaway that you've always dreamed of. Login with user1 as username and admin as password destination Lorem ipsum\r\n    dolor sit amet consectetur, adipisicing elit. Deleniti eveniet error culpa sit eius rerum minima.\r\n  </p>\r\n  <a routerLink=\"\" (click)=\"hide=false\" class=\"btn btn--white\">Find your getaway</a>\r\n</div>\r\n<app-home-login [hidden]=\"hide\"></app-home-login>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".cont {\n  overflow: hidden; }\n\n.home {\n  height: 100vh;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(rgba(0, 0, 0, 0.2))), url('home-img.f83b30199937d6767c63.jpg');\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('home-img.f83b30199937d6767c63.jpg');\n  background-size: cover;\n  background-position: top;\n  -webkit-filter: blur(0.4rem);\n  -moz-filter: blur(0.4rem);\n  -o-filter: blur(0.4rem);\n  -ms-filter: blur(0.4rem);\n  filter: blur(0.4rem);\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03); }\n\n.home-description {\n    color: #eee;\n    position: absolute;\n    text-align: center;\n    font-size: 1.2rem;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n.home-heading {\n    color: #eee;\n    text-transform: uppercase;\n    text-align: center; }\n\n.home-heading-main {\n    display: block;\n    font-size: 5rem;\n    letter-spacing: 1.6rem;\n    -webkit-animation-name: moveInLeft;\n            animation-name: moveInLeft;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s; }\n\n.home-heading-sub {\n    display: block;\n    -webkit-animation-name: moveInRight;\n            animation-name: moveInRight;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s; }\n\n.home-para {\n    font-size: 1.5rem;\n    -webkit-animation-name: moveInBottom;\n            animation-name: moveInBottom;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    margin-top: 2rem;\n    margin-bottom: 2rem; }\n\n.btn {\n  background-color: #d36e48;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.hide = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel-details/hotel-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  hotel-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/hotel/hotel-details/hotel-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hotel/hotel-details/hotel-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotelDetailsComponent = /** @class */ (function () {
    function HotelDetailsComponent() {
    }
    HotelDetailsComponent.prototype.ngOnInit = function () {
    };
    HotelDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hotel-details',
            template: __webpack_require__("./src/app/hotel/hotel-details/hotel-details.component.html"),
            styles: [__webpack_require__("./src/app/hotel/hotel-details/hotel-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HotelDetailsComponent);
    return HotelDetailsComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel-list/hotel-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  hotel-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/hotel/hotel-list/hotel-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hotel/hotel-list/hotel-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotelListComponent = /** @class */ (function () {
    function HotelListComponent() {
    }
    HotelListComponent.prototype.ngOnInit = function () {
    };
    HotelListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hotel-list',
            template: __webpack_require__("./src/app/hotel/hotel-list/hotel-list.component.html"),
            styles: [__webpack_require__("./src/app/hotel/hotel-list/hotel-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HotelListComponent);
    return HotelListComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel col-lg-8  offset-lg-2\" [@listAnimation]=\"hotels.length\">\r\n  <ul>\r\n    <div class=\"hotel-card\" *ngFor=\"let hotel of hotels\" (click)=\"openModal()\">\r\n      <img class=\"hotel-card--img\" src=\"{{hotel.url}}\">\r\n      <div class=\"hotel-card--text col-md-8 col-xs-12\">\r\n        <span class=\"hotel-card--text__heading\">\r\n          {{hotel.name}}\r\n        </span>\r\n        <span class=\"hotel-card--text__info\">\r\n          Hotel Rating: {{hotel.rating}} {{hotel.address}}\r\n        </span>\r\n        <span class=\"hotel-card--text__description\">\r\n          {{hotel.description}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in praesentium, mollitia eius tempore\r\n          culpa ab modi reiciendis eveniet sapiente quaerat commodi incidunt architecto consequatur dolorem eos, perspiciatis\r\n          earum quae?\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </ul>\r\n</div>  \r\n<div class=\"popup\" [ngStyle]=\"{'opacity':opacity,'visibility':visibility}\">\r\n  <div class=\"popup__content\" [ngStyle]=\"{'opacity':opacity,'visibility':visibility}\">\r\n    <div class=\"popup__left\">\r\n      <img src=\"../../assets/images/room-1.jpg\" alt=\"Room\" class=\"popup__img\">\r\n      <img src=\"../../assets/images/room-2.jpg\" alt=\"Room\" class=\"popup__img\">\r\n      <img src=\"../../assets/images/room-3.jpg\" alt=\"Room\" class=\"popup__img\">\r\n    </div>\r\n    <div class=\"popup__right\">\r\n      <button type=\"button\" class=\"close\" (click)=\"onCloseHandled()\">&times;</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/hotel/hotel.component.scss":
/***/ (function(module, exports) {

module.exports = ".hotel {\n  margin-top: 5.7rem; }\n  .hotel-card {\n    height: auto;\n    text-align: center;\n    position: relative;\n    color: white;\n    margin-top: 1.5rem;\n    border-radius: 1rem;\n    cursor: pointer;\n    margin-bottom: 1rem;\n    -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);\n            box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4); }\n  .hotel-card--img {\n      width: 100%;\n      height: 40rem;\n      -o-object-fit: cover;\n         object-fit: cover;\n      border-radius: .5rem; }\n  .hotel-card--text {\n      position: absolute;\n      bottom: 0rem;\n      left: 0rem;\n      font-size: 1.5rem;\n      text-align: left;\n      padding: 2rem 2rem; }\n  .hotel-card--text__heading {\n        display: block;\n        text-transform: uppercase;\n        font-size: 2.5rem;\n        font-weight: 400;\n        letter-spacing: 1rem;\n        padding-bottom: 2rem; }\n  .hotel-card--text__info {\n        display: block; }\n  .hotel-card--text__description {\n        display: block; }\n  .close {\n  font-size: 3rem;\n  line-height: 0.5; }\n"

/***/ }),

/***/ "./src/app/hotel/hotel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hotel_service__ = __webpack_require__("./src/app/hotel/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelComponent = /** @class */ (function () {
    function HotelComponent(hotelService) {
        this.hotelService = hotelService;
        this.hotels = [];
        this.links = [];
        this.opacity = 0;
        this.visibility = 'hidden';
    }
    HotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.hotels.length === 0) {
            this.hotelService.getHotels().subscribe(function (hotels) {
                _this.hotels = hotels; //takes result and extracts hotel objects from it
                console.log(_this.hotels);
            }, function (error) { return console.log(error); });
        }
    };
    HotelComponent.prototype.slect = function (hotel) {
        this.selectedHotel = hotel;
    };
    HotelComponent.prototype.openModal = function () {
        this.opacity = 1;
        this.visibility = 'visible';
    };
    HotelComponent.prototype.onCloseHandled = function () {
        this.opacity = 0;
        this.visibility = 'hidden';
    };
    HotelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hotel',
            template: __webpack_require__("./src/app/hotel/hotel.component.html"),
            styles: [__webpack_require__("./src/app/hotel/hotel.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hotel_service__["a" /* HotelService */]])
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotelService = /** @class */ (function () {
    function HotelService(http) {
        this.http = http;
        this.hotels = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* BehaviorSubject */]([]);
    }
    HotelService.prototype.getHotels = function () {
        return this.http.get('/api/hotels')
            .map(function (result) {
            return result.content.map(function (content) { return content.hotel; });
        });
    };
    HotelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HotelService);
    return HotelService;
}());



/***/ }),

/***/ "./src/app/interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XhrInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var XhrInterceptor = /** @class */ (function () {
    function XhrInterceptor() {
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    };
    XhrInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"auth.isAuthenticated()\">\r\n<div class=\"transparent col-lg-12\">\r\n  <nav class=\"col-lg-8 offset-lg-2\">\r\n\r\n    <ul>\r\n      <li>\r\n        <a routerLink=\"/home\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/hotels\">Hotels</a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"logout()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ".transparent {\n  position: fixed;\n  top: 0;\n  z-index: 12;\n  height: 6rem;\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), to(rgba(0, 0, 0, 0.4)));\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4)); }\n  .transparent li {\n    color: #fff;\n    font-size: 1.5rem;\n    list-style: none;\n    display: inline;\n    text-transform: uppercase;\n    font-weight: 600; }\n  .transparent li:not(:first-child) {\n      margin-left: 2rem; }\n  .transparent li a {\n      display: inline-block;\n      text-align: center;\n      text-decoration: none;\n      padding-top: .8rem;\n      color: white; }\n  .transparent li:last-child {\n      cursor: pointer;\n      float: right; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__ = __webpack_require__("./src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, http, router) {
        this.auth = auth;
        this.http = http;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/shared/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (state.url !== '/home' && !this.auth.isAuthenticated()) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, authCookie, router) {
        this.http = http;
        this.authCookie = authCookie;
        this.router = router;
    }
    AuthService.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */](credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        this.http.get('api/auth', { headers: headers }).subscribe(function (response) {
            console.log(response);
            if (response['name']) {
                _this.authCookie.set('authenticated', 'true');
            }
            return callback && callback();
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.authCookie.get('authenticated') === 'true';
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.http.post('/api/logout', {}).finally(function () {
            _this.authCookie.set('authenticated', 'false');
            _this.router.navigate(['home']);
        }).subscribe();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map