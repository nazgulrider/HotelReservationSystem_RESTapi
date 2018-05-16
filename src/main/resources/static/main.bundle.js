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

module.exports = "\r\n<app-navbar *ngIf =\"auth.isAuthenticated()\"></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("./src/app/shared/user.service.ts");
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
    function AppComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
        this.title = 'perfect';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mydaterangepicker__ = __webpack_require__("./node_modules/mydaterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hotel_hotel_component__ = __webpack_require__("./src/app/hotel/hotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hotel_hotel_details_hotel_details_component__ = __webpack_require__("./src/app/hotel/hotel-details/hotel-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hotel_hotel_service__ = __webpack_require__("./src/app/hotel/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_auth_service__ = __webpack_require__("./src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__interceptor__ = __webpack_require__("./src/app/interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_login_home_login_component__ = __webpack_require__("./src/app/home/home-login/home-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_auth_guard_service__ = __webpack_require__("./src/app/shared/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_user_service__ = __webpack_require__("./src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__hotel_room_list_room_list_component__ = __webpack_require__("./src/app/hotel/room-list/room-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_reservation_service__ = __webpack_require__("./src/app/shared/reservation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */], children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__home_home_login_home_login_component__["a" /* HomeLoginComponent */] }
        ] },
    { path: 'hotels', component: __WEBPACK_IMPORTED_MODULE_8__hotel_hotel_component__["a" /* HotelComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__shared_auth_guard_service__["a" /* AuthGuard */]], children: [
            { path: ':id/detail', component: __WEBPACK_IMPORTED_MODULE_9__hotel_hotel_details_hotel_details_component__["a" /* HotelDetailsComponent */] },
            { path: ':id/rooms', component: __WEBPACK_IMPORTED_MODULE_20__hotel_room_list_room_list_component__["a" /* RoomListComponent */] }
        ] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__["a" /* ProfileComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__hotel_hotel_component__["a" /* HotelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__hotel_hotel_details_hotel_details_component__["a" /* HotelDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_home_login_home_login_component__["a" /* HomeLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__hotel_room_list_room_list_component__["a" /* RoomListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__["a" /* ProfileComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_mydaterangepicker__["MyDateRangePickerModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__shared_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_11__hotel_hotel_service__["a" /* HotelService */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_15__interceptor__["a" /* XhrInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_19__shared_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_reservation_service__["a" /* ReservationService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home-login/home-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\">\r\n\r\n  <div class=\"popup__content col-md-8 col-lg-6\">\r\n\r\n\r\n    <div class=\"alert alert-danger\" [hidden]=\"!error\">\r\n      There was a problem logging in. Please try again.\r\n    </div>\r\n    <button type=\"button close\" class=\"close\" (click)=\"onCloseHandled()\">&times;</button>\r\n\r\n    <form class=\"form offset-md-1 col-md-10\" (ngSubmit)=\"login()\">\r\n      <div class=\"form__group\">\r\n        <label class=\"form__label\" for=\"username\">Username</label>\r\n        <input type=\"text\" class=\"form__input\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"credentials.username\" required/>\r\n      </div>\r\n\r\n      <div class=\"form__group\">\r\n        <label class=\"form__label\" for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form__input\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"credentials.password\" required/>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn form-control btn-text\">Submit</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home-login/home-login.component.scss":
/***/ (function(module, exports) {

module.exports = ".popup__content {\n  height: auto;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding-top: 3rem;\n  padding-bottom: 3rem; }\n\n.alert {\n  text-align: center; }\n\n.close {\n  padding-right: 1rem;\n  font-size: 3rem; }\n\n.form {\n  margin-top: 3rem;\n  margin-bottom: 5rem; }\n\n.form__group {\n    margin-bottom: 2rem; }\n\n.form__input {\n    width: 100%;\n    font-size: 1.5rem;\n    padding: 1rem 2rem;\n    border-radius: 2px;\n    border: none;\n    border-bottom: 3px solid transparent; }\n\n.form__input:focus {\n      outline: none;\n      -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n              box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n      border-bottom: 3px solid #55c57a; }\n\n.form__input:focus:invalid {\n      border-bottom: 3px solid #d36e48; }\n\n.form__label {\n    display: block;\n    font-size: 2rem;\n    text-transform: uppercase; }\n\n.btn {\n  background-color: #d36e48;\n  color: #fff;\n  font-size: 1.3rem;\n  margin-top: 2rem;\n  padding: 1rem;\n  border-radius: 3px; }\n\n.btn-text {\n    padding: 1rem; }\n"

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
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.credentials = { username: '', password: '' };
    }
    HomeLoginComponent.prototype.ngOnInit = function () {
    };
    HomeLoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.authenticate(this.credentials, function () { _this.router.navigate(['hotels']); }, function () { _this.error = _this.auth.error; });
    };
    HomeLoginComponent.prototype.onCloseHandled = function () {
        this.error = null;
        this.router.navigate(['home']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], HomeLoginComponent.prototype, "close", void 0);
    HomeLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-login',
            template: __webpack_require__("./src/app/home/home-login/home-login.component.html"),
            styles: [__webpack_require__("./src/app/home/home-login/home-login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeLoginComponent);
    return HomeLoginComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\r\n  <div class=\"home\">\r\n  </div>\r\n</div>\r\n<div class=\"home-description container\">\r\n\r\n  <h1 class=\"home-heading\">\r\n    <span class=\"home-heading-main\">Comfort</span>\r\n    <span class=\"home-heading-sub\">find a good night's sleep</span>\r\n  </h1>\r\n  <p class=\"home-para\">Find the luxurious getaway that you've always dreamed of. Login with user1 as username and admin as password destination Lorem ipsum\r\n    dolor sit amet consectetur, adipisicing elit. Deleniti eveniet error culpa sit eius rerum minima.\r\n  </p>\r\n  <a routerLink=\"/home/login\" class=\"btn btn--white\">Find your getaway</a>\r\n  \r\n</div>\r\n<router-outlet></router-outlet>"

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
    HomeComponent.prototype.onCloseHandled = function () {
        this.hide = true;
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

module.exports = "<div class=\"popup\" (click)=\"onCloseHandled()\">\r\n\r\n  <div class=\"popup__content col-lg-12\">\r\n    <div class=\"card col-lg-3 offset-lg-1\" (click)=\"onCardClicked($event)\">\r\n      <div>\r\n        <img src=\"https://s3.us-east-2.amazonaws.com/hotel-reservation-system/room-1.jpg\" alt=\"Room\" class=\"card__img\">\r\n      </div>\r\n      <div class=\"card__description\" [hidden]=\"showDatePicker1\">\r\n        <div class=\"card__description--title\">\r\n          <h1>Royal</h1>\r\n        </div>\r\n        <div class=\"card__description--content\">\r\n          <ul>\r\n            <hr>\r\n            <li>King size bed</li>\r\n            <hr>\r\n            <li>24 hour room service</li>\r\n            <hr>\r\n            <li>Royal perks</li>\r\n            <hr>\r\n            <li>In-room swimming pool</li>\r\n            <hr>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"card__date\" [hidden]=\"!showDatePicker1\">\r\n        <form #f=\"ngForm\" novalidate>\r\n          <my-date-range-picker name=\"mydaterange\" (dateRangeChanged)=\"onDateRangeChanged($event, 'ROYAL')\" [options]=\"myDateRangePickerOptions\"\r\n            [(ngModel)]=\"model\" required></my-date-range-picker>\r\n        </form>\r\n\r\n      </div>\r\n      <div class=\"card__button\">\r\n        <button (click)=\"onCheckAvailable(1)\" class=\"btn\" [hidden]=\"showDatePicker1\">Book Now</button>\r\n        <button (click)=\"findAvailableRooms(1)\" class=\"btn\" [hidden]=\"!showDatePicker1\" [disabled]=\"!f.valid\">Check Availability</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ------------------------------------------------------------------------------------------------------------------------ -->\r\n\r\n    <div class=\"card col-lg-3\" (click)=\"onCardClicked($event)\">\r\n      <div>\r\n        <img src=\"https://s3.us-east-2.amazonaws.com/hotel-reservation-system/royal1.jpg\" alt=\"Room\" class=\"card__img\">\r\n      </div>\r\n      <div class=\"card__description\" [hidden]=\"showDatePicker2\">\r\n        <div class=\"card__description--title\">\r\n          <h1>Presidential</h1>\r\n        </div>\r\n        <div class=\"card__description--content\">\r\n          <ul>\r\n            <hr>\r\n            <li>Queen size bed</li>\r\n            <hr>\r\n            <li>24 hour room service</li>\r\n            <hr>\r\n            <li>Presidential perks</li>\r\n            <hr>\r\n            <li>In-room jacuzzi</li>\r\n            <hr>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"card__date\" [hidden]=\"!showDatePicker2\">\r\n        <form #f=\"ngForm\" novalidate>\r\n          <my-date-range-picker name=\"mydaterange\" (dateRangeChanged)=\"onDateRangeChanged($event, 'PRESIDENTIAL')\" [options]=\"myDateRangePickerOptions\"\r\n            [(ngModel)]=\"model\" required></my-date-range-picker>\r\n        </form>\r\n      \r\n      </div>\r\n      <div class=\"card__button\">\r\n        <button (click)=\"onCheckAvailable(2)\" class=\"btn\" [hidden]=\"showDatePicker2\">Book Now</button>\r\n        <button (click)=\"findAvailableRooms(2)\" class=\"btn\" [hidden]=\"!showDatePicker2\" [disabled]=\"!f.valid\">Check Availability</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- -------------------------------------------------------------------------------------------------------------------------- -->\r\n\r\n    <div class=\"card col-lg-3\" (click)=\"onCardClicked($event)\">\r\n      <div>\r\n        <img src=\"https://s3.us-east-2.amazonaws.com/hotel-reservation-system/room-3.jpg\" alt=\"Room\" class=\"card__img\">\r\n      </div>\r\n      <div class=\"card__description\" [hidden]=\"showDatePicker3\">\r\n        <div class=\"card__description--title\">\r\n          <h1>Deluxe</h1>\r\n        </div>\r\n        <div class=\"card__description--content\">\r\n          <ul>\r\n            <hr>\r\n            <li>Twin size bed</li>\r\n            <hr>\r\n            <li>Complimentary breakfast</li>\r\n            <hr>\r\n            <li>Deluxe perks</li>\r\n            <hr>\r\n            <li>In-room bathtub</li>\r\n            <hr>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"card__date\" [hidden]=\"!showDatePicker3\">\r\n        <form #f=\"ngForm\" novalidate>\r\n          <my-date-range-picker name=\"mydaterange\" (dateRangeChanged)=\"onDateRangeChanged($event, 'DELUXE')\" [options]=\"myDateRangePickerOptions\"\r\n            [(ngModel)]=\"model\" required></my-date-range-picker>\r\n        </form>\r\n      \r\n      </div>\r\n      <div class=\"card__button\">\r\n        <button (click)=\"onCheckAvailable(3)\" class=\"btn\" [hidden]=\"showDatePicker3\">Book Now</button>\r\n        <button (click)=\"findAvailableRooms(3)\" class=\"btn\" [hidden]=\"!showDatePicker3\" [disabled]=\"!f.valid\">Check Availability</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hotel/hotel-details/hotel-details.component.scss":
/***/ (function(module, exports) {

module.exports = ".card {\n  display: inline-block;\n  padding: 0;\n  border: none;\n  border-radius: .5rem;\n  z-index: 50;\n  height: 58rem; }\n  .card:not(:last-of-type) {\n    margin-right: 6rem; }\n  .card__img {\n    width: 100%;\n    height: 25rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    overflow: hidden;\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem; }\n  .card__description {\n    padding: 1rem;\n    margin-bottom: 1rem; }\n  .card__description--title {\n      margin-top: 1rem;\n      margin-bottom: 2rem;\n      text-transform: uppercase;\n      text-align: center;\n      letter-spacing: .5rem; }\n  .card__description--content ul {\n      font-size: 1.3rem;\n      font-weight: 600;\n      list-style-type: none; }\n  .card__description--content ul li {\n        text-transform: uppercase;\n        text-align: center; }\n  .card__date {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n    text-align: center;\n    font-size: 1.5rem;\n    text-transform: uppercase; }\n  .card__date input {\n      width: 100%;\n      display: block;\n      text-align: center;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n      border: none;\n      font-size: 1.5rem; }\n  .card__date input:last-of-type {\n        margin-bottom: 6rem; }\n  .card__button {\n    padding: 0 2rem 2rem 2rem; }\n  .btn {\n  background-color: #d36e48;\n  width: 100%;\n  border-radius: 50px;\n  text-transform: uppercase;\n  font-weight: 600;\n  padding: 1rem 0rem;\n  font-size: 1.5rem;\n  text-align: center; }\n  .popup {\n  overflow: auto; }\n  .popup__content {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    background-color: transparent; }\n  @media screen and (max-width: 800px) {\n  .popup__content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n  .card {\n    margin-top: 2rem; }\n    .card:last-child {\n      margin-bottom: 2rem; } }\n"

/***/ }),

/***/ "./src/app/hotel/hotel-details/hotel-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hotel_model__ = __webpack_require__("./src/app/hotel/hotel.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotel_service__ = __webpack_require__("./src/app/hotel/hotel.service.ts");
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




var HotelDetailsComponent = /** @class */ (function () {
    function HotelDetailsComponent(hotelService, router, route) {
        this.hotelService = hotelService;
        this.router = router;
        this.route = route;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.showDatePicker1 = false;
        this.showDatePicker2 = false;
        this.showDatePicker3 = false;
        this.filteredRooms = [];
        this.myDateRangePickerOptions = {
            dateFormat: 'dd/mm/yyyy',
            inline: true,
            indicateInvalidDateRange: true,
            markCurrentDay: true,
        };
        this.model = null;
    }
    HotelDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.hotelService.getRooms(id).subscribe(function (rooms) {
            _this.hotelService.rooms = rooms;
            console.log("In hotel-details component initialization step getting rooms");
            console.log(rooms);
        }, function (error) { return console.log(error); });
    };
    HotelDetailsComponent.prototype.onDateRangeChanged = function (event, roomType) {
        console.log('jsdate: ' + event.beginEpoc + " - " + event.endJsDate);
        this.hotelService.selectedCheckinDate = event.beginEpoc;
        this.hotelService.selectedCheckoutDate = event.endEpoc;
        this.filterByDates(this.hotelService.rooms, event);
        this.hotelService.filteredRooms = this.filteredRooms.filter(function (room) { return room.type === roomType; });
        console.log(this.hotelService.filteredRooms);
    };
    HotelDetailsComponent.prototype.filterByDates = function (rooms, event) {
        // this.filteredRooms=[];
        var available = true;
        //check all rooms
        for (var i = 0; i < rooms.length; i++) {
            //if room has no reservation add to available rooms(filteredRooms)
            if (rooms[i].reservations.length === 0) {
                this.filteredRooms.push(rooms[i]);
                //if room has reservations check all reservations
            }
            else {
                for (var j = 0; j < rooms[i].reservations.length; j++) {
                    var checkIn = rooms[i].reservations[j].checkIn;
                    var checkOut = rooms[i].reservations[j].checkOut;
                    //if selected range falls within any one of the reservations set available to false and stop checking the rest
                    if ((event.beginEpoc >= checkIn && event.beginEpoc <= checkOut) ||
                        (event.endEpoc >= checkIn && event.endEpoc <= checkOut) ||
                        (checkIn >= event.beginEpoc && checkIn <= event.endEpoc)) {
                        available = false;
                        break;
                    }
                }
                //if loop is done and room was available add room to available rooms
                if (available) {
                    this.filteredRooms.push(rooms[i]);
                }
            }
        }
    };
    /**
     * navigates out of the child component that displays the room types
     *
     */
    HotelDetailsComponent.prototype.onCloseHandled = function () {
        this.router.navigate(['hotels']);
        this.showDatePicker1 = false;
        this.showDatePicker2 = false;
        this.showDatePicker3 = false;
    };
    HotelDetailsComponent.prototype.onCheckAvailable = function (id) {
        switch (id) {
            case 1:
                this.showDatePicker1 = true;
                break;
            case 2:
                this.showDatePicker2 = true;
                break;
            case 3:
                this.showDatePicker3 = true;
                break;
            default:
                break;
        }
    };
    HotelDetailsComponent.prototype.findAvailableRooms = function (id) {
        this.router.navigate(['hotels/' + id + '/rooms']);
    };
    //cancel the click event from propagating to the parent div which triggers close event on the window
    HotelDetailsComponent.prototype.onCardClicked = function (e) {
        if (e) {
            e.stopPropagation();
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__hotel_model__["a" /* Hotel */])
    ], HotelDetailsComponent.prototype, "hotel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], HotelDetailsComponent.prototype, "close", void 0);
    HotelDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hotel-details',
            template: __webpack_require__("./src/app/hotel/hotel-details/hotel-details.component.html"),
            styles: [__webpack_require__("./src/app/hotel/hotel-details/hotel-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], HotelDetailsComponent);
    return HotelDetailsComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel col-lg-8  offset-lg-2\" [@listAnimation]=\"hotels.length\">\r\n  <ul>\r\n    <div class=\"hotel-card\" *ngFor=\"let hotel of hotels\" (click)=\"select(hotel)\">\r\n      <img class=\"hotel-card--img\" src=\"{{hotel.url}}\">\r\n      <div class=\"hotel-card--text col-md-8 col-xs-12\">\r\n        <span class=\"hotel-card--text__heading\">\r\n          {{hotel.name}}\r\n        </span>\r\n        <span class=\"hotel-card--text__info\">\r\n          Hotel Rating: {{hotel.rating}} {{hotel.address}}\r\n        </span>\r\n        <span class=\"hotel-card--text__description\">\r\n          {{hotel.description}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in praesentium, mollitia eius tempore\r\n          culpa ab modi reiciendis eveniet sapiente quaerat commodi incidunt architecto consequatur dolorem eos, perspiciatis\r\n          earum quae?\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </ul>\r\n</div>  \r\n<!-- <app-hotel-details [hotel]=\"selectedHotel\" (close)=\"onClose()\"> </app-hotel-details> -->\r\n<router-outlet> </router-outlet>"

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




var HotelComponent = /** @class */ (function () {
    function HotelComponent(hotelService, route) {
        this.hotelService = hotelService;
        this.route = route;
        this.hotels = [];
        this.links = [];
        this.rooms = [];
    }
    HotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        //check to see whether already fetched hotels exist
        if (this.hotelService.hotels.length === 0) {
            this.hotelService.getHotels().subscribe(function (hotels) {
                //assign hotels from fetched data to service 
                _this.hotelService.hotels = hotels;
                _this.hotels = _this.hotelService.hotels;
                console.log(_this.hotels);
            }, function (error) { return console.log(error); });
        }
        else {
            this.hotels = this.hotelService.hotels;
        }
    };
    HotelComponent.prototype.select = function (hotel) {
        this.hotelService.selectedHotel = hotel;
        this.route.navigate(['hotels/' + hotel.id + '/detail']);
    };
    HotelComponent.prototype.onClose = function () {
        this.selectedHotel = null;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotel; });
var Hotel = /** @class */ (function () {
    function Hotel() {
    }
    return Hotel;
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
        this.hotels = [];
        this.rooms = [];
        this.filteredRooms = [];
    }
    HotelService.prototype.getHotels = function () {
        return this.http.get('/api/hotels').map(function (result) {
            return result.content.map(function (content) { return content.hotel; });
        });
    };
    HotelService.prototype.getRooms = function (hotelId) {
        return this.http.get('/api/hotels/' + hotelId + '/rooms').map(function (result) {
            return result.content.map(function (content) { return content.room; });
        });
    };
    HotelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HotelService);
    return HotelService;
}());



/***/ }),

/***/ "./src/app/hotel/room-list/room-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\">\n  <div class=\"popup__content col-sm-6\" >\n    <ul>\n      <div *ngFor=\"let room of rooms\">\n        <div>\n          Room Number: {{room.roomNumber}} Type: {{room.type}} Price: {{room.price}} Available: {{room.available}}\n          <input type=\"checkbox\" id=\"roomCheckbox\" (change)=\"addToCart($event, room)\">\n        </div>\n      </div>\n    </ul>\n    <div>\n      <button class=\"btn\" (click) = \"makeReservation(content)\">Reserve</button>\n    </div>\n  </div>\n</div>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Reservation Summary</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Room list and price summary goes here</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Confirm</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"d()\">Cancel</button>\n  </div>\n</ng-template>\n<ng-template #confirmation let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Confirmation</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"c()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Your Reservation has been confirmed</p>\n  </div>\n  <div class=\"modal-footer\">\n     <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c()\">Dismiss</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/hotel/room-list/room-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".popup__content {\n  background-color: white;\n  padding: 3rem 3rem;\n  font-size: 1.5rem; }\n"

/***/ }),

/***/ "./src/app/hotel/room-list/room-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hotel_service__ = __webpack_require__("./src/app/hotel/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("./src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_reservation_model__ = __webpack_require__("./src/app/shared/reservation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RoomListComponent = /** @class */ (function () {
    function RoomListComponent(hotelService, router, http, userService, modalService) {
        this.hotelService = hotelService;
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.modalService = modalService;
        this.rooms = [];
        this.cart = [];
        this.rooms = hotelService.filteredRooms;
    }
    RoomListComponent.prototype.ngOnInit = function () {
        console.log(this.cart);
        this.getUser();
        console.log("getting user");
        this.user = this.userService.loggedInUser;
    };
    RoomListComponent.prototype.addToCart = function (event, room) {
        if (event.target.checked) {
            this.cart.push(room);
            console.log(this.cart);
        }
        else if (!event.target.checked) {
            if (this.cart.includes(room)) {
                this.cart = this.cart.filter(function (content) { return content !== room; });
                console.log(this.cart);
            }
        }
    };
    RoomListComponent.prototype.getUser = function () {
        var _this = this;
        this.http.get('api/auth').subscribe(function (response) {
            if (response['name']) {
                _this.userService.getUserByUsername(response['name']);
            }
        }, function (error) { return console.log(error); });
    };
    RoomListComponent.prototype.makeReservation = function (content) {
        var _this = this;
        console.log("making reservation");
        //collected when selected in hotel-details component
        var hotel = this.hotelService.selectedHotel;
        //collected when selecting date in hotel-details component
        var checkIn = this.hotelService.selectedCheckinDate;
        var checkOut = this.hotelService.selectedCheckoutDate;
        var reservation = new __WEBPACK_IMPORTED_MODULE_3__shared_reservation_model__["a" /* Reservation */](checkIn, checkOut, false, this.user, hotel, this.cart);
        this.modalService.open(content, { centered: true }).result.then(function () {
            console.log("making post request to reservations for user " + _this.user);
            _this.http.post('/api/reservations', reservation).subscribe(function (response) {
                console.log(response);
                _this.modalService.open(_this.confirmation, { centered: true }).result.then(function () {
                    _this.router.navigate(['profile']);
                }, function () { return console.log("ok"); });
            }, function (error) {
                console.log(error);
            });
        }, function () {
            console.log("Cancelled the reservation");
        });
    };
    RoomListComponent.prototype.onCloseHandled = function () {
        this.router.navigate(['hotels']);
    };
    //cancel the click event from propagating to the parent div which triggers close event on the window
    RoomListComponent.prototype.onCardClicked = function (e) {
        if (e) {
            e.stopPropagation();
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('confirmation'),
        __metadata("design:type", Object)
    ], RoomListComponent.prototype, "confirmation", void 0);
    RoomListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-room-list',
            template: __webpack_require__("./src/app/hotel/room-list/room-list.component.html"),
            styles: [__webpack_require__("./src/app/hotel/room-list/room-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hotel_service__["a" /* HotelService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], RoomListComponent);
    return RoomListComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transparent col-lg-12\">\r\n  <nav class=\"container\">\r\n\r\n    <ul>\r\n      \r\n      <li>\r\n        <a routerLink=\"/hotels\">Hotels</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n      <a routerLink=\"/profile\">\r\n      <li>\r\n        \r\n        <img [src]=\"(userProfileImgUrl | async)\" class=\"img-thumbnail\" alt=\"profile picture\">\r\n\r\n      </li>\r\n      </a>\r\n\r\n      <li>\r\n        <a (click)=\"logout()\">Logout</a>\r\n      </li>      \r\n    </ul>\r\n  </nav>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ".transparent {\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding-top: .6rem;\n  z-index: 12;\n  height: 6rem;\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), to(rgba(0, 0, 0, 0.4)));\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4)); }\n  .transparent li {\n    color: #fff;\n    font-size: 1.5rem;\n    list-style: none;\n    display: inline;\n    text-transform: uppercase;\n    font-weight: 600; }\n  .transparent li:not(:first-child) {\n      margin-left: 2rem; }\n  .transparent li a {\n      display: inline-block;\n      text-align: center;\n      text-decoration: none;\n      padding-top: .8rem;\n      color: white; }\n  .transparent li:last-child {\n      cursor: pointer;\n      float: right; }\n  .img-thumbnail {\n  margin-left: 2rem;\n  height: 4rem;\n  width: 4rem;\n  float: right;\n  border-radius: 20rem;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__ = __webpack_require__("./src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("./src/app/shared/user.service.ts");
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
    function NavbarComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.userProfileImgUrl = this.userService.getUserProfileImageUrlObservable();
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row  profile\">\n    <div class=\"profile__about col-sm-5\">\n      <div class=\"profile__card\">\n        <div>\n          <img class=\"profile__card--image\" [src]=\"(user.profileImgUrl)\" alt=\"Profile Image\">\n        </div>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium accusamus nulla, at numquam modi rerum!\n          Numquam rem modi provident inventore dolore, alias, eum et nihil corporis, eligendi molestiae vel?</p>\n      </div>\n    </div>\n    <div class=\"profile__reservation col\">\n      <div *ngIf=\"reservations.length > 0; else infoText\">\n        <ul>\n          <div class=\"profile__reservation--card\" *ngFor=\"let res of reservations\">\n            {{res.id}} Checkin: {{res.checkIn * 1000 | date:'shortDate'}} Checkout: {{res.checkOut * 1000 | date:'shortDate'}}\n          </div>\n        </ul>\n      </div>\n      <ng-template #infoText>\n        <p>Your Reservations Listed Here</p>\n      </ng-template>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".profile {\n  margin-top: 6rem;\n  text-align: center;\n  overflow: hidden; }\n  .profile__card {\n    padding: 3rem 3rem;\n    -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);\n            box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2); }\n  .profile__card--image {\n      height: 20rem;\n      width: 20rem;\n      border-radius: 100rem;\n      margin-bottom: 3rem;\n      overflow: hidden; }\n  .profile__reservation {\n    overflow-y: auto;\n    height: 90vh; }\n  .profile__reservation--card {\n      height: 10rem;\n      padding: 3rem 3rem;\n      -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);\n              box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1); }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_service__ = __webpack_require__("./src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_reservation_service__ = __webpack_require__("./src/app/shared/reservation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, reservationService, http) {
        this.userService = userService;
        this.reservationService = reservationService;
        this.http = http;
        this.reservations = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.initializeUser();
    };
    ProfileComponent.prototype.initializeUser = function () {
        var _this = this;
        this.http.get('api/auth').subscribe(function (response) {
            if (response['name']) {
                _this.userService.getUserByUsername(response['name']);
                _this.user = _this.userService.loggedInUser;
                _this.fetchReservtions();
            }
        }, function (error) { return console.log(error); });
    };
    ProfileComponent.prototype.fetchReservtions = function () {
        var _this = this;
        this.reservationService.getReservationForUserId(this.user.id).subscribe(function (reservations) {
            _this.reservations = reservations;
        }, function (error) { return console.log(error); });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_reservation_service__["a" /* ReservationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], ProfileComponent);
    return ProfileComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/shared/user.service.ts");
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
    function AuthService(http, authCookie, router, userService) {
        this.http = http;
        this.authCookie = authCookie;
        this.router = router;
        this.userService = userService;
    }
    AuthService.prototype.authenticate = function (credentials, callback, callback2) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */](credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        this.http.get('api/auth', { headers: headers }).subscribe(function (response) {
            console.log(response);
            if (response['name']) {
                _this.authCookie.set('authenticated', 'true', .2);
                _this.userService.getUserByUsername(response['name']);
            }
            return callback && callback();
        }, function (error) {
            _this.error = error;
            return callback2 && callback2();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/reservation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reservation; });
var Reservation = /** @class */ (function () {
    function Reservation(checkIn, checkOut, paid, user, hotel, rooms) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.paid = paid;
        this.user = user;
        this.hotel = hotel;
        this.rooms = rooms;
    }
    return Reservation;
}());



/***/ }),

/***/ "./src/app/shared/reservation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReservationService = /** @class */ (function () {
    function ReservationService(http) {
        this.http = http;
    }
    ReservationService.prototype.getReservationForUserId = function (userId) {
        return this.http.get('api/users/' + userId + '/reservations').map(function (result) {
            return result.content.map(function (content) { return content.reservation; });
        });
    };
    ReservationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ReservationService);
    return ReservationService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.imgUrl = '../../assets/images/profile.png';
        this.imgUrlSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](this.imgUrl);
    }
    UserService.prototype.getUserProfileImageUrlObservable = function () {
        return this.imgUrlSubject.asObservable();
    };
    /**
     * fetches user by its username
     * updates the variable loggedInUser with the fetched user
     * updates the image url for navigation bar profile picture
     * @param username username
     *
     */
    UserService.prototype.getUserByUsername = function (username) {
        var _this = this;
        return this.http.get('/api/users/user/' + username).subscribe(function (result) {
            _this.updateProfileImageUrl(result.user.profileImgUrl);
            _this.loggedInUser = result.user;
            return result.user;
        }, function (error) {
            console.log(error);
        });
    };
    UserService.prototype.updateProfileImageUrl = function (profileImageUrl) {
        this.imgUrlSubject.next(profileImageUrl);
    };
    UserService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], UserService);
    return UserService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
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