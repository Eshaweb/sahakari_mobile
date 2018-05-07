webpackJsonp([0],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteTestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UIHelperClasses_UIHelperService__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompleteTestService = /** @class */ (function () {
    function CompleteTestService(http, httpclient, uihelper) {
        this.http = http;
        this.httpclient = httpclient;
        this.uihelper = uihelper;
        this.labelAttribute = "name";
    }
    CompleteTestService.prototype.getResults = function (keyword) {
        return this.http.get("https://restcountries.eu/rest/v1/name/" + keyword)
            .map(function (result) {
            return result.json()
                .filter(function (item) { return item.name.toLowerCase().startsWith(keyword.toLowerCase()); });
        });
    };
    CompleteTestService.prototype.GetOperators = function (OSReq) {
        var osr = {
            Starts: OSReq.Starts,
            PerentId: OSReq.PerentId,
            TenantId: OSReq.TenantId
        };
        return this.httpclient.post(this.uihelper.CallWebAPIUrlNew("/Operator/GetOperators"), osr);
        //return this.httpclient.get<OS[]>(this.uihelper.CallWebAPIUrlNew("/Operator/GetOperators"));
    };
    CompleteTestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__UIHelperClasses_UIHelperService__["a" /* UIHelperService */]])
    ], CompleteTestService);
    return CompleteTestService;
}());

//# sourceMappingURL=CompleteTestService.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UIHelperService = /** @class */ (function () {
    function UIHelperService() {
        //readonly rootUrl = 'http://localhost:55394';
        this.rootUrl = 'https://sahakari.azurewebsites.net';
        //readonly baseUrl='http://localhost:55394/api';
        this.baseUrl = 'https://sahakari.azurewebsites.net/api';
        //readonly rootUrl1 = 'http://localhost:55394/token';
        this.rootUrl1 = 'https://sahakari.azurewebsites.net/token';
    }
    UIHelperService.prototype.CallWebAPIUrl = function (api_action_name) {
        return this.rootUrl + api_action_name;
    };
    UIHelperService.prototype.CallWebAPIUrlNew = function (api_action) {
        return this.baseUrl + api_action;
    };
    UIHelperService.prototype.CallWebAPIUrl1 = function () {
        return this.rootUrl;
    };
    UIHelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], UIHelperService);
    return UIHelperService;
}());

//# sourceMappingURL=UIHelperService.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__banking_banking__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recharge_recharge__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagePage = /** @class */ (function () {
    function PagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagePage.prototype.ngOnInit = function () {
        this.ActiveBankName = this.navParams.get('ActiveBankName');
    };
    PagePage.prototype.OnBanking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__banking_banking__["a" /* BankingPage */]);
    };
    PagePage.prototype.OnRecharge = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recharge_recharge__["a" /* RechargePage */]);
    };
    PagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-page',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\page\page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Page    {{ActiveBankName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <ion-list id="page-list6">\n    <ion-item color="assertive" id="page-list-item21" (click)="OnBanking()">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Banking\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="page-list-item22" (click)="OnRecharge()">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Recharge/Payments\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="page-list-item23">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Reports\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="page-list-item24">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Settings\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="page-list-item25">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Help\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="page-list-item26">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Products\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\page\page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PagePage);
    return PagePage;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mobile_recharge_mobile_recharge__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banking_banking__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_register_vm__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_Constants__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { BankListPage } from '../bank-list/bank-list';













var RegisterPage = /** @class */ (function () {
    //public loading = Loading.create();
    function RegisterPage(constant, loadingController, formbuilder, platform, toastCtrl, toast, toastr, regService, navCtrl) {
        this.constant = constant;
        this.loadingController = loadingController;
        this.formbuilder = formbuilder;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.toast = toast;
        this.toastr = toastr;
        this.regService = regService;
        this.navCtrl = navCtrl;
        this.isLoginError = false;
        this.messages = [];
        this.formgroup = formbuilder.group({
            mobilenum: ['', [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["f" /* Validators */].minLength(10)]]
        });
        this.mobilenum = this.formgroup.controls['mobilenum'];
        var loader = this.loadingController.create({
            content: "Page Loading....."
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
        }, 2000);
    }
    RegisterPage.prototype.OnSubmit = function (mobno) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        this.mobno = mobno;
        this.userClaims = null;
        this.regService.sendMobileNo(mobno).subscribe(function (data) {
            _this.userClaims = data; //got tenantlist from server
            _this.userClaims.Id = data[0].Id;
            //this.navCtrl.push(HomePage);
            setTimeout(function () {
                loading.dismiss();
            }, 4000);
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    RegisterPage.prototype.OnPress = function (Id) {
        var _this = this;
        this.TenantIdActive = Id;
        this.OTPreq = {
            TenantId: this.TenantIdActive,
            MobileNo: this.mobno
        };
        this.regService.requestingOTP(this.OTPreq).subscribe(function (data) {
            _this.store = data;
            _this.DigiParty = {
                Id: data.DigiPartyId,
                DigiPartyId: data.DigiPartyId,
                PartyMastId: data.PartyMastId,
                MobileNo: data.MobileNo,
                TenantId: data.TenantId,
                Name: data.Name
            };
            _this.store.OTPRef = data.OTPRef;
            //this.toastr.success('You are awesome!'+data._body, 'Success!');
            //ADDED toastr.css in the path "node_modules/ngx-toastr/toastr.css" from https://github.com/scttcper/ngx-toastr/blob/master/src/lib/toastr.css
            _this.toastr.success('OTP Sent to ' + _this.store.MobileNo + ' with Reference No. ' + _this.store.OTPRef, 'Success!');
            __WEBPACK_IMPORTED_MODULE_11__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.DB.DigiParty, JSON.stringify(_this.DigiParty)); //Works, But not as of reqment
            //alert('You are awesome!'+ this.store.OTPRef+data._body);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__["a" /* EnterOTPPage */]);
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    RegisterPage.prototype.handleErrors = function (errors) {
        this.messages = [];
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var msg = errors_1[_i];
            this.messages.push(msg);
        }
    };
    RegisterPage.prototype.ngOnInit = function () {
        this.registervm = new __WEBPACK_IMPORTED_MODULE_7__services_register_vm__["a" /* Registervm */]();
    };
    RegisterPage.prototype.goToBankList = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.goToEnterOTP = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__["a" /* EnterOTPPage */]);
    };
    RegisterPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    RegisterPage.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__banking_banking__["a" /* BankingPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Register\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <form [formGroup]="formgroup" id="register-form3" #registrationForm="ngForm" (ngSubmit)="OnSubmit(MobileNo.value)">\n    <!-- <form id="register-form3" #registrationForm="ngForm" (ngSubmit)="OnSubmit(MobileNo.value)"> -->\n   \n     <ion-list id="register-list11">\n      <ion-item id="register-input8">\n        <ion-label>\n          Phone Number\n        </ion-label>\n        <ion-input formControlName="mobilenum" type="text" #MobileNo ngModel name="MobileNo" placeholder=""></ion-input>\n        <!-- <ion-input type="number" placeholder="" name="MobileNo" #MobileNo="ngModel" [(ngModel)]="order.Id"></ion-input> -->\n      </ion-item>\n      <ion-item *ngIf="mobilenum.hasError(\'required\') && mobilenum.touched">\n        <p style="color:red;"> *MobileNumber is required</p>\n      </ion-item>\n    </ion-list>   \n    <button [disabled]="registrationForm.invalid"  id="register-button7" ion-button color="positive" block>\n      Search Bank\n    </button>\n    \n  </form>\n  <div class="row" *ngIf="userClaims">\n    <div class="col s12 m7">\n      <div class="card">\n          <!--interpolation-->\n        <div class="card-content">     \n        <div *ngFor="let order of userClaims" (click)="OnPress(order.Id)" style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;">\n        \n        <span>Name : {{ order.Name | json }}</span> <br>\n        <!-- <ion-item id="register-input9">\n          <ion-label>\n            Name\n          </ion-label>\n          <ion-input type="text" placeholder="" name="Name" #Name="ngModel" [(ngModel)]="order.Name"></ion-input>\n        </ion-item> -->\n        <span>Address : {{ order.Address }}</span> <br>\n        <!-- <ion-item id="register-input9">\n          <ion-label>\n            Address\n          </ion-label>\n          <ion-input type="text" placeholder="" name="Address" #Address="ngModel" [(ngModel)]="order.Address"></ion-input>\n        </ion-item> -->\n      </div> \n  \n        </div>       \n      </div>\n    </div>\n    <!-- <button id="register-button8" ion-button color="positive" type="button" (click)="OnPress()" block>\n      Request OTP\n    </button> -->\n  </div>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_6__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterOTPPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mobile_recharge_mobile_recharge__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__banking_banking__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_Constants__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var EnterOTPPage = /** @class */ (function () {
    function EnterOTPPage(constant, loadingController, fb, navCtrl, regService) {
        this.constant = constant;
        this.loadingController = loadingController;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.regService = regService;
        this.formgroup = this.fb.group({
            otp: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(4)]]
        });
        this.otp = this.formgroup.controls['otp'];
        this.SavePasswordForm = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(4)]],
            confirmpwd: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(4)]]
        }, { validator: this.matchingPasswords });
        this.password = this.SavePasswordForm.controls['password'];
        this.confirmpwd = this.SavePasswordForm.controls['confirmpwd'];
    }
    EnterOTPPage.prototype.matchingPasswords = function (group) {
        var password = group.controls.password.value;
        var confirmpwd = group.controls.confirmpwd.value;
        return password === confirmpwd ? null : { notSame: true };
    };
    EnterOTPPage.prototype.OnSubmit = function (otpno) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        this.otpno = otpno;
        this.postingotp = {
            TenantId: this.regService.store.TenantId,
            PartyMastId: this.regService.store.PartyMastId,
            OTPRef: this.regService.store.OTPRef,
            OTP: this.otpno
        };
        this.regService.ValidatingOTP(this.postingotp).subscribe(function (data) {
            _this.storeboolean = data;
            _this.showHide = true;
        });
        setTimeout(function () {
            loading.dismiss();
        }, 4000);
    };
    EnterOTPPage.prototype.OnPress = function (pin) {
        var _this = this;
        this.pin = pin;
        this.userpost = {
            DigiPartyId: this.regService.store.DigiPartyId,
            TenantId: this.regService.store.TenantId,
            PIN: this.pin,
            PartyMastId: this.regService.store.PartyMastId,
            //UniqueId:userposting.UniqueId,
            //UniqueId:this.guid.str,
            UniqueId: this.guid(),
            OTPRef: this.regService.store.OTPRef,
            OTP: this.otpno,
            MobileNo: this.regService.store.MobileNo
        };
        var loading = this.loadingController.create({
            content: 'Please wait for a minute......'
        });
        loading.present();
        this.regService.SaveMPin(this.userpost).subscribe(function (data) {
            _this.userresult = data;
            _this.User = {
                ActiveTenantId: _this.regService.store.TenantId,
                //ActiveTenantId:data.TenantId,
                ActiveTenantName: data.TenantName,
                UserId: data.UserId,
                UserName: data.UserName,
                UniqueKey: data.UniqueKey
            };
            _this.Tenant = {
                Id: data.UserId,
                TenantId: data.TenantId,
                Name: data.TenantName,
                Address: data.TenantAddress,
                Logo: _this.regService.Logo
            };
            //StorageService.SetItem(this.constant.UserKey,User);
            //StorageService.SetItem("UserKey",JSON.stringify(this.User));  //Works, But not as of reqment
            __WEBPACK_IMPORTED_MODULE_9__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.DB.User, JSON.stringify(_this.User)); //Works, But not as of reqment
            __WEBPACK_IMPORTED_MODULE_9__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.DB.Tenant, JSON.stringify([_this.Tenant])); //Works, But not as of reqment
            //StorageService.SetItem(this.constant.UserKey,this.User);  //Not Works 
            //StorageService.RemoveItem(this.constant.UserKey);  //Not Works 
            setTimeout(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
            }, 1000);
            setTimeout(function () {
                loading.dismiss();
            }, 4000);
        });
    };
    //below code is from here https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/105074#105074
    EnterOTPPage.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    EnterOTPPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    EnterOTPPage.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    EnterOTPPage.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__banking_banking__["a" /* BankingPage */]);
    };
    EnterOTPPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-enter-otp',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\enter-otp\enter-otp.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Enter OTP\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page15">\n  <form [formGroup]="formgroup" id="enterOTP-form4" #enterOTPForm="ngForm" (ngSubmit)="OnSubmit(OTPNo.value)">\n    <ion-list id="enterOTP-list18">\n      <ion-item id="enterOTP-input12">\n        <ion-label>\n          OTP\n        </ion-label>\n        <ion-input formControlName="otp" type="number" #OTPNo ngModel name="OTPNo" placeholder=""></ion-input>\n        <!-- <ion-input type="number" placeholder="" name="OTPNo" #OTPNo="ngModel" [(ngModel)]="order.Id"></ion-input> -->\n     \n      </ion-item>\n      <ion-item *ngIf="otp.hasError(\'required\') && otp.touched">\n        <p style="color:red;"> *OTP is required</p>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="enterOTP-spacer8"></div>\n    <button [disabled]="enterOTPForm.invalid" id="enterOTP-button8" ion-button color="positive" block>\n      Submit\n    </button>\n  </form>\n  <div *ngIf="showHide">\n  <form id="enterOTP-form2" [formGroup]="SavePasswordForm"  #NewPasswordEntryForm="ngForm" (ngSubmit)="OnPress(CPassword.value)">\n          <ion-item id="enterOTP-input3">\n      <ion-label>\n        New Password\n      </ion-label>\n      <!-- <ion-input type="text" placeholder="" name="NPassword" #NPassword="ngModel" [(ngModel)]="npef.NPassword"></ion-input> -->\n      <ion-input formControlName="password" type="text" required #NPassword ngModel name="NPassword" placeholder=""></ion-input>      \n    </ion-item>\n    <ion-item *ngIf="password.hasError(\'required\') && password.touched">\n      <p style="color:red;"> *Password with minimum 8 characters is required</p>\n    </ion-item>\n    <ion-item id="enterOTP-input5">\n      <ion-label>\n        Confirm Password\n      </ion-label>\n      <!-- <ion-input type="text" placeholder="" name="CPassword" #CPassword="ngModel" [(ngModel)]="npef.CPassword"></ion-input> -->\n      <ion-input formControlName="confirmpwd" type="password" required Equalvalidate="password" #CPassword ngModel name="CPassword" placeholder=""></ion-input>\n      <div [hidden]="CPassword.valid || CPassword.pristine" class="alert alert-danger">\n        Password mismatch\n    </div>\n    </ion-item>\n    <ion-item *ngIf="confirmpwd.hasError(\'required\') && confirmpwd.touched">\n      <p style="color:red;"> *Confirmation is required</p>\n    </ion-item>\n    <button [disabled]="NewPasswordEntryForm.invalid" id="enterOTP-button9" ion-button color="positive" block>\n      Save Password\n    </button>\n  </form>\n  <!-- <span *ngIf="!NewPasswordEntryForm.SavePasswordForm.valid" class="help-block text-danger">\n    <div *ngIf="NewPasswordEntryForm.SavePasswordForm?.errors?.notSame">\n      The two passwords aren\'t the same\n    </div>\n  </span> -->\n  <div style="color:red;" *ngIf="NewPasswordEntryForm.errors?.notSame"><span>Passwords do not match</span></div>\n</div>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\enter-otp\enter-otp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_app_data_service__["a" /* RegisterService */]])
    ], EnterOTPPage);
    return EnterOTPPage;
}());

//# sourceMappingURL=enter-otp.js.map

/***/ }),

/***/ 182:
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
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.SetAuthorizationData = function (auth) {
        localStorage.setItem('userToken', JSON.stringify(auth));
    };
    StorageService.GetValueFromLocalStorage = function () {
        var tokendata = JSON.parse(localStorage.getItem('userToken'));
        return tokendata == null ? null : tokendata;
    };
    StorageService.SetItem = function (param1, param2) {
        localStorage.setItem(param1, param2);
    };
    StorageService.GetItem = function (param) {
        return localStorage.getItem(param);
    };
    StorageService.RemoveItem = function (param) {
        localStorage.removeItem(param);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=Storage_Service.js.map

/***/ }),

/***/ 230:
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
webpackEmptyAsyncContext.id = 230;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundTransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_data_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FundTransferPage = /** @class */ (function () {
    // constructor(private regService : RegisterService, public formbuilder:FormBuilder,public constant:ConstantService,private autoLogoutService: AutoLogoutService,public navCtrl: NavController) {
    function FundTransferPage(regService, formbuilder, constant, navCtrl) {
        this.regService = regService;
        this.formbuilder = formbuilder;
        this.constant = constant;
        this.navCtrl = navCtrl;
        this.ActiveTenantId = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.DigiParty)).TenantId;
        this.DigiPartyId = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.DigiParty)).DigiPartyId;
        this.AcHeadId = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.SelfCareAc))[0].AcHeadId;
        this.AcSubId = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.SelfCareAc))[0].AcSubId;
        this.LocId = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.SelfCareAc))[0].LocId;
        //StorageService.SetItem('lastAction', Date.now().toString());
        this.formgroup1 = formbuilder.group({
            mobilenum: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10)]]
        });
        this.mobilenum = this.formgroup1.controls['mobilenum'];
        this.formgroup2 = formbuilder.group({
            amount: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(1)]]
        });
        this.amount = this.formgroup2.controls['amount'];
    }
    FundTransferPage.prototype.ngOnInit = function () {
        this.ShowHide = true;
        this.ActiveBankName = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.User)).ActiveTenantName;
        this.HeadName = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.SelfCareAc))[0].HeadName;
        this.AcNo = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.SelfCareAc))[0].AcNo;
    };
    FundTransferPage.prototype.OnSubmit = function (mobno) {
        var _this = this;
        this.FTRequest = {
            TenantId: this.ActiveTenantId,
            MobileNo: mobno
        };
        this.regService.SearchReceiverAccount(this.FTRequest).subscribe(function (data) {
            _this.fundTransferResponse = data;
        });
    };
    FundTransferPage.prototype.OnClick = function (amnt) {
        this.confirm = this.fundTransferResponse;
        this.Rs = amnt;
        this.ShowHide = false;
    };
    FundTransferPage.prototype.OnPress = function () {
        var _this = this;
        this.transfer = {
            TenantId: this.ActiveTenantId,
            DigiPartyId: this.DigiPartyId,
            FromAcMastId: this.AcHeadId,
            FromAcSubId: this.AcSubId,
            FromLocId: this.LocId,
            ToAcMastId: this.fundTransferResponse.AcHeadId,
            ToAcSubId: this.fundTransferResponse.AcSubId,
            ToLocId: this.fundTransferResponse.LocId,
            Amount: this.Rs,
            ToAcNo: this.fundTransferResponse.AcNo
        };
        this.regService.FundTransfer(this.transfer).subscribe(function (data) {
            _this.ftd = data;
        });
    };
    FundTransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-fund-transfer',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\fund-transfer\fund-transfer.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Fund-Transfer  {{ActiveBankName}}\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding id="page3">\n\n    <div *ngIf="ShowHide">\n\n          <ion-card>\n\n\n\n            <ion-card-header style="background-color:red">\n\n              From Account\n\n            </ion-card-header>\n\n          \n\n            <ion-card-content>\n\n              Bank Name: {{HeadName}}\n\n              <br/>\n\n              Acount No: {{AcNo}}\n\n            </ion-card-content>\n\n          \n\n          </ion-card>\n\n          <br/>\n\n          <ion-card>\n\n\n\n            <ion-card-header style="background-color:red">\n\n              To Account\n\n            </ion-card-header>\n\n          <br/>\n\n            <ion-card-content>\n\n                <form [formGroup]="formgroup1" id="register-form3" #fundtransferForm1="ngForm" (ngSubmit)="OnSubmit(MobileNo.value)">\n\n\n\n              <ion-list id="register-list11">\n\n                <ion-item id="register-input8">\n\n                  <ion-label>\n\n                    Phone Number\n\n                  </ion-label>\n\n                  <ion-input formControlName="mobilenum" type="text" #MobileNo ngModel name="MobileNo" placeholder=""></ion-input>\n\n                  <!-- <ion-input type="text" placeholder="" name="MobileNo" #MobileNo="ngModel" [(ngModel)]="rechargeitem.MobileNo"></ion-input> -->\n\n                </ion-item>\n\n                <ion-item *ngIf="mobilenum.hasError(\'required\') && mobilenum.touched">\n\n                    <p style="color:red;"> *MobileNumber is required</p>\n\n                  </ion-item>\n\n              </ion-list> \n\n              <button [disabled]="fundtransferForm1.invalid" id="register-button7" ion-button color="positive" block>\n\n                  Search\n\n                </button>\n\n                </form>          \n\n            </ion-card-content>\n\n              <div *ngIf="fundTransferResponse">\n\n                <ion-card-content>\n\n                  Name: {{fundTransferResponse.Name}}\n\n                  <br/>\n\n                  Acount No: {{fundTransferResponse.AcNo}}\n\n                </ion-card-content>\n\n              </div>\n\n              <br/>\n\n        </ion-card>\n\n        <br/>\n\n        <ion-card>\n\n\n\n          <ion-card-content>\n\n              <form [formGroup]="formgroup2" id="register-form4" #fundtransferForm2="ngForm" (ngSubmit)="OnClick(Amount.value)">\n\n            <ion-list id="register-list11">\n\n              <ion-item id="register-input8">\n\n                <ion-label>\n\n                  Amount\n\n                </ion-label>\n\n                <ion-input formControlName="amount" type="text" #Amount ngModel name="Amount" placeholder=""></ion-input>\n\n              </ion-item>\n\n            \n\n            </ion-list>\n\n            <button [disabled]="fundtransferForm2.invalid" id="register-button8" ion-button color="positive" block>\n\n                Next\n\n              </button>\n\n            </form>               \n\n          </ion-card-content>\n\n            \n\n        </ion-card>\n\n      </div>\n\n        <div *ngIf="confirm">\n\n          <ion-card>\n\n      \n\n            <ion-card-header style="background-color:red">\n\n              From Account\n\n            </ion-card-header>\n\n          \n\n            <ion-card-content>\n\n              Bank Name: {{HeadName}}\n\n              <br/>\n\n              Acount No: {{AcNo}}\n\n            </ion-card-content>\n\n          \n\n          </ion-card>\n\n          <br/>\n\n          <ion-card>\n\n      \n\n            <ion-card-header style="background-color:red">\n\n              To Account\n\n            </ion-card-header>\n\n          <br/>\n\n          <ion-card-content>\n\n            Name: {{confirm.Name}}\n\n            <br/>\n\n            Acount No: {{confirm.AcNo}}\n\n            <br/>\n\n            Amount: {{Rs}}\n\n          </ion-card-content>\n\n            <button id="register-button9" (click)="OnPress()" ion-button color="positive" block>\n\n              Confirm\n\n            </button>\n\n        </ion-card>\n\n        </div>\n\n  </ion-content>\n\n  <!-- <ion-content padding id="page4">\n\n      <div *ngIf="confirm">\n\n    <ion-card>\n\n\n\n      <ion-card-header style="background-color:red">\n\n        From Account\n\n      </ion-card-header>\n\n    \n\n      <ion-card-content>\n\n        Bank Name: {{HeadName}}\n\n        <br/>\n\n        Acount No: {{AcNo}}\n\n      </ion-card-content>\n\n    \n\n    </ion-card>\n\n    <br/>\n\n    <ion-card>\n\n\n\n      <ion-card-header style="background-color:red">\n\n        To Account\n\n      </ion-card-header>\n\n    <br/>\n\n    <ion-card-content>\n\n      Name: {{confirm.Name}}\n\n      <br/>\n\n      Acount No: {{confirm.AcNo}}\n\n      <br/>\n\n      Amount: {{Amount}}\n\n    </ion-card-content>\n\n      <button id="register-button9" ion-button color="positive" block>\n\n        Confirm\n\n      </button>\n\n  </ion-card>\n\n  </div>\n\n</ion-content> -->\n\n'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\fund-transfer\fund-transfer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FundTransferPage);
    return FundTransferPage;
}());

//# sourceMappingURL=fund-transfer.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\setting\setting.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Setting\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2"></ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\setting\setting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeBankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_idlejs_dist__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var idle = new __WEBPACK_IMPORTED_MODULE_5_idlejs_dist__["a" /* Idle */]()
    .whenNotInteractive()
    .within(5, 1000)
    .do(function () { return __WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]; }) //Need to call LoginPage
    .start();
var ChangeBankPage = /** @class */ (function () {
    // constructor(private autoLogoutService: AutoLogoutService,private regService : RegisterService,public constant:ConstantService,public navCtrl: NavController) {
    function ChangeBankPage(regService, constant, navCtrl) {
        this.regService = regService;
        this.constant = constant;
        this.navCtrl = navCtrl;
    }
    ChangeBankPage.prototype.ngOnInit = function () {
        this.resetForm();
        var ActiveTenantId = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.DigiParty)).TenantId;
        this.Active = +ActiveTenantId;
        this.ActiveBankName = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.User)).ActiveTenantName;
        var mobno = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.DigiParty)).MobileNo;
        //StorageService.SetItem('lastAction', Date.now().toString());
        //   this.regService.sendMobileNo(mobno).subscribe((data : any)=>{
        //     this.userClaims = data;
        //      //this.userClaims=this.userClaims.filter((data)=>data[0].Id===ActiveTenantId);
        //     this.userClaims.Id=data[1].Id;
        //     if(this.userClaims.Id==ActiveTenantId){
        //       this.showIcon=true;
        //     }
        // });
        this.Tenants = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.Tenant));
        //var Tenantlist=JSON.stringify(this.Tenants);
        //  if(){
        //   Tenantlist.push()
        //  }
        // this.regService.sendMobileNo(mobno).map(function(obj){
        //   this.userClaims = obj;
        //   return this.userClaims.filter(e => {e.Id==ActiveTenantId});
        //  //return this.userClaims.Id==ActiveTenantId;
        // });
    };
    ChangeBankPage.prototype.filterByString = function (userClaims, ActiveTenantId) {
        return userClaims.filter(function (e) { return e.Id == ActiveTenantId; });
    };
    ChangeBankPage.prototype.OnClick = function () {
        var _this = this;
        this.mobno = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.User)).UserName;
        this.showHide = true;
        this.regService.sendMobileNo(this.mobno).subscribe(function (data) {
            _this.userClaims = data; //got tenantlist from server
            _this.userClaims.Id = data[0].Id;
            // for(var i = 0; i <data.length; i++){
            //   for(var j = 0; j <this.Tenants.length; j++){
            //     if (data[i].Id === this.Tenants[i].TenantId) {
            //       this.userClaims =null;
            //   }
            // }}
            _this.userClaims.filter(function (o) { return _this.Tenants.find(function (o2) { return o.Id === o2.TenantId; }); });
            //this.userClaims.filter(function(obj){ return obj.Id === this.Tenants.TenantId; });
            // if(this.Tenants.TenantId==data.Id){
            //   this.userClaims =null;
            // }
            // else{
            //   this.userClaims = data;    //got tenantlist from server
            //   this.userClaims.Id=data[0].Id;
            // }
        });
    };
    // OnSubmit(MobileRecharegeform){
    //   this.mobno=JSON.parse(StorageService.GetItem(this.constant.DB.User)).UserName;
    //   this.OTPreq={
    //     TenantId:this.OTPreq.TenantId,
    //     MobileNo:this.mobno
    //   }
    //   this.tenant={
    //     Id:'',
    //     TenantId:this.tenant.TenantId,
    //     Name:this.tenant.Name,
    //     Address:this.tenant.Address,
    //     Logo:this.tenant.Logo
    //   }
    //   var existing=JSON.parse(StorageService.GetItem(this.constant.DB.Tenant));
    //   this.tenant=existing.push(this.tenant);
    //   StorageService.SetItem(this.constant.DB.Tenant,JSON.stringify(this.tenant));  //Works, But not as of reqment
    // }
    ChangeBankPage.prototype.OnSubmit = function (Id) {
        this.mobno = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.User)).UserName;
        this.userClaim = this.userClaims.filter(function (obj) { return obj.Id === Id; });
        this.tenant = {
            Id: '',
            TenantId: Id,
            Name: this.userClaim[0].Name,
            Address: this.userClaim[0].Address,
            Logo: this.userClaim[0].IconHtml
        };
        var existing = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.Tenant));
        this.existingentries = existing.filter(function (obj) { return obj.TenantId === Id; });
        if (this.existingentries[0] == null) {
            existing.push(this.tenant);
            __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.DB.Tenant, JSON.stringify(existing));
        }
        else if (this.existingentries[0].TenantId == Id) {
            __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.DB.Tenant, JSON.stringify(existing));
        }
        this.Tenants = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.Tenant));
    };
    ChangeBankPage.prototype.OnPress = function (order) {
        var _this = this;
        this.reqForDigiParty = {
            TenantId: order.TenantId,
            MobileNo: this.mobno
        };
        this.regService.requestingDigiParty(this.reqForDigiParty).subscribe(function (data) {
            _this.digiParty = {
                Id: data.DigiPartyId,
                DigiPartyId: data.DigiPartyId,
                PartyMastId: data.PartyMastId,
                MobileNo: data.MobileNo,
                TenantId: data.TenantId,
                Name: data.Name
            };
        });
    };
    ChangeBankPage.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.reqForDigiParty = {
            TenantId: '',
            MobileNo: ''
        };
        this.tenant = {
            Id: '',
            TenantId: '',
            Name: '',
            Address: '',
            Logo: ''
        };
    };
    ChangeBankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-bank',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\change-bank\change-bank.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Change Bank  {{ActiveBankName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <div style="background-color:red" class="col s12 m7">\n    <div class="card">\n      <div class="card-content">\n    <h2 style="text-align:center">\n      My Banks\n    </h2>\n      </div>\n    </div>\n        </div>\n        <ion-list>\n            <!-- <div class="row" *ngIf="userClaims">\n                <ion-item *ngFor="let order of userClaims" (click)="OnPress()">\n                    <ion-thumbnail item-start>\n                        <img src="assets/imgs/thumbnail-totoro.png">\n                      </ion-thumbnail>\n                  <h2>{{ order.Name }}</h2>\n                  <span>{{ order.Address }}</span>\n         <div *ngIf="(order.Id!=Active)">\n          <button ion-button clear item-end (click)="OnSubmit(order)">Select</button>       </div>\n         <div *ngIf="(order.Id==Active)">\n          <ion-icon name=\'rose\' item-end color="secondary"></ion-icon>\n         </div>\n        </ion-item>\n        </div> -->\n              <ion-item *ngFor="let order of Tenants" (click)="OnPress()">\n                  <ion-thumbnail item-start>\n                      <img src="assets/imgs/thumbnail-totoro.png">\n                    </ion-thumbnail>\n                <h2>{{ order.Name }}</h2>\n                <span>{{ order.Address }}</span>\n        <!-- <button ion-button clear item-end (click)="OnSubmit(order)">Delete</button> -->\n       <!-- <div *ngIf="showIcon">\n        <ion-icon name=\'rose\' item-end color="secondary"></ion-icon>\n       </div> -->\n       <div *ngIf="(order.TenantId!=Active)">\n        <button ion-button clear item-end (click)="OnPress(order)">Select</button>       \n       </div>\n       <div *ngIf="(order.TenantId==Active)">\n        <ion-icon name=\'rose\' item-end color="secondary"></ion-icon>\n       </div>\n      </ion-item>\n      </ion-list>\n      <button  id="register-button7" ion-button color="positive" (click)="OnClick()" block>\n        Add Bank Account\n      </button>\n      <div *ngIf="showHide">\n        <form id="mobileRecharge-form2" (ngSubmit)="OnSubmit(MobileRecharegeform)" #MobileRechargeform="ngForm">\n              <ion-item id="mobileRecharge-select1">\n                <ion-label>Select Your Bank</ion-label>\n                  <ion-select id="mobileRecharge-input3" interface="popover" name="OperatorId" #OperatorId="ngModel" [(ngModel)]="tenant.TenantId" (ionChange)="OnSubmit(tenant.TenantId)">\n                    <ion-option *ngFor="let order of userClaims" [value]="order.Id">\n                      {{order.Name}}\n                      <!-- {{order.Address}} -->\n                    </ion-option>\n                </ion-select> \n            </ion-item>         \n          </form>\n      </div>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\change-bank\change-bank.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_3__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ChangeBankPage);
    return ChangeBankPage;
}());

//# sourceMappingURL=change-bank.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstantService = /** @class */ (function () {
    function ConstantService() {
        this.Favourite_S1 = "Favourite(S1)";
        this.Favourite_S2 = "Favourite(S2)";
        this.Favourite_S3 = "Favourite(S3)";
        this.Favourite_S4 = "Favourite(S4)";
        this.Favourite_S5 = "Favourite(S5)";
        this.Favourite_S6 = "Favourite(S6)";
        this.Favourite_S7 = "Favourite(S7)";
        this.OS_S1 = "OS(S1)";
        this.OS_S2 = "OS(S2)";
        this.OS_S3 = "OS(S3)";
        this.OS_S4 = "OS(S4)";
        this.OS_S5 = "OS(S5)";
        this.OS_S6 = "OS(S6)";
        this.OS_S7 = "OS(S7)";
        this.SetUser = "User";
        //GetUserKey=JSON.parse(localStorage.getItem("UserKey"));
        this.UserId = "UserId";
        this.ActiveTenant = "ActiveTenant";
        this.UserName = "UserName";
        this.UniqueKey = "UniqueKey";
        this.SetTenant = "Tenant";
        this.TId = "Id";
        this.TenantId = "TenantId";
        this.Name = "Name";
        this.Address = "Address";
        this.Logo = "Logo";
        this.SetDigiParty = "DigiParty";
        this.DId = "Id";
        this.DigiPartyId = "DigiPartyId";
        this.PartyMastId = "PartyMastId";
        this.MobileNo = "MobileNo";
        this.DTenantId = "TenantId";
        this.DName = "Name";
        this.SetOS = "OS";
        this.OId = "Id";
        this.Operator = "Operator";
        this.Type = "Type";
        this.ParentId = "ParentId";
        this.Remarks = "Remarks";
        this.SetFavourite = "Favourite";
        this.FId = "Id";
        this.NickName = "NickName";
        this.OperatorId = "OperatorId";
        this.FParentId = "ParentId";
        this.SubscriptionId = "SubscriptionId";
        this.SetSelfCareAc = "SelfCareAc";
        this.SCId = "Id";
        this.AcActId = "AcActId";
        this.HeadName = "HeadName";
        this.AcHeadId = "AcHeadId";
        this.AcSubId = "AcSubId";
        this.AcNo = "AcNo";
        this.LocId = "LocId";
        this.SCTenantId = "TenantId";
        this.favouriteBasedOnParentId = {
            Favourite_S1: this.Favourite_S1,
            Favourite_S2: this.Favourite_S2,
            Favourite_S3: this.Favourite_S3,
            Favourite_S4: this.Favourite_S4,
            Favourite_S5: this.Favourite_S5,
            Favourite_S6: this.Favourite_S6,
            Favourite_S7: this.Favourite_S7
        };
        this.osBasedOnParentId = {
            OS_S1: this.OS_S1,
            OS_S2: this.OS_S2,
            OS_S3: this.OS_S3,
            OS_S4: this.OS_S4,
            OS_S5: this.OS_S5,
            OS_S6: this.OS_S6,
            OS_S7: this.OS_S7
        };
        this.DB = {
            User: this.SetUser,
            Tenant: this.SetTenant,
            DigiParty: this.SetDigiParty,
            OS: this.SetOS,
            Favourite: this.SetFavourite,
            SelfCareAc: this.SetSelfCareAc
        };
        // this.GetUserKey={
        //     UserId:localStorage.,
        //     ActiveTenant:this.ActiveTenant,
        //     UserName:this.UserName,
        //     UniqueKey:this.UniqueKey
        //   }
        this.GetUser = JSON.parse(localStorage.getItem("User"));
        var TenantKey = {
            Id: this.TId,
            TenantId: this.TenantId,
            Name: this.Name,
            Address: this.Address,
            Logo: this.Logo
        };
        this.DigiParty = {
            Id: this.DId,
            DigiPartyId: this.DigiPartyId,
            PartyMastId: this.PartyMastId,
            MobileNo: this.MobileNo,
            TenantId: this.DTenantId,
            Name: this.DName
        };
        this.GetOS = {
            Id: this.OId,
            Operator: this.Operator,
            Type: this.Type,
            ParentId: this.ParentId,
            Remarks: this.Remarks
        };
        this.Favourite = {
            Id: this.FId,
            NickName: this.NickName,
            OperatorId: this.OperatorId,
            ParentId: this.FParentId,
            SubscriptionId: this.SubscriptionId
        };
        this.GetSelfCareAc = {
            Id: this.SCId,
            AcActId: this.AcActId,
            HeadName: this.HeadName,
            AcHeadId: this.AcHeadId,
            AcSubId: this.AcSubId,
            AcNo: this.AcNo,
            LocId: this.LocId,
            TenantId: this.SCTenantId
        };
    }
    ConstantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConstantService);
    return ConstantService;
}());

//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favourites_favourites__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Constants__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RechargePage = /** @class */ (function () {
    function RechargePage(constant, navCtrl) {
        this.constant = constant;
        this.navCtrl = navCtrl;
        this.categories = [];
    }
    RechargePage.prototype.ngOnInit = function () {
        this.categories = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.OS));
        this.ActiveBankName = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.User)).ActiveTenantName;
    };
    RechargePage.prototype.OnOperatorSelection = function (ParentId) {
        this.ParentId = ParentId;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__favourites_favourites__["a" /* FavouritesPage */], { 'ParentId': this.ParentId });
    };
    RechargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recharge',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\recharge\recharge.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Recharge   {{ActiveBankName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <!-- <ion-list id="recharge-list6" >\n    <ion-item color="assertive" id="recharge-list-item21">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Pre-Paid\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="recharge-list-item22">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Post-Paid\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="recharge-list-item23">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        DTH\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="recharge-list-item24">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Data Card\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="recharge-list-item25">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Electricity Bill\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="recharge-list-item26">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Land Line\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="recharge-list-item27">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Water Bill\n      </h2>\n    </ion-item>\n  </ion-list> -->\n\n\n\n  <ion-list id="recharge-list6" *ngFor="let row of categories">\n    <ion-item color="assertive" id="recharge-list-item21" (click)="OnOperatorSelection(row.Id)">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        {{row.Operator}}\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\recharge\recharge.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RechargePage);
    return RechargePage;
}());

//# sourceMappingURL=recharge.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobile_recharge_mobile_recharge__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Constants__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavouritesPage = /** @class */ (function () {
    function FavouritesPage(constant, navCtrl, navParams) {
        this.constant = constant;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavouritesPage.prototype.ngOnInit = function () {
        this.ParentId = this.navParams.get('ParentId');
        this.ActiveBankName = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.User)).ActiveTenant;
        switch (this.ParentId) {
            case "S1":
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S1));
                break;
            case "S2":
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S2));
                break;
            case "S3":
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S3));
                break;
            case "S4":
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S4));
                break;
            case "S5":
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S5));
                break;
            case "S6":
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S6));
                break;
            default:
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S7));
        }
        //this.nkname=JSON.parse(StorageService.GetItem("FavouriteKey")).NickName;
        if (__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem("Favourite") != null) {
            this.nkname = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem("Favourite")).NickName;
        }
    };
    FavouritesPage.prototype.OnClick = function (ParentId) {
        // this.navCtrl.push(SelectOperatorPage,{ 'Id': this.Id });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */], { 'ParentId': this.ParentId });
    };
    // OnClick(form:NgForm){
    //   this.navCtrl.push(MobileRechargePage,{ 'Id': this.Id, 'nkname':this.nkname });
    // }
    // OnPress(Id,nkname){
    //   // this.navCtrl.push(SelectOperatorPage,{ 'Id': this.Id });
    //    this.navCtrl.push(MobileRechargePage,{ 'Id': this.Id, 'nkname':this.nkname });
    //  }
    FavouritesPage.prototype.OnPress = function (order) {
        // this.navCtrl.push(SelectOperatorPage,{ 'Id': this.Id });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */], { 'ParentId': order.ParentId, 'Id': order.Id });
    };
    FavouritesPage.prototype.OnSubmit = function (order) {
        var PId = order.Id;
        // var index = this.favourites.indexOf(PId);
        // if (index > -1) {
        // this.favourites.splice(PId,1);
        // }
        //removeByKey(this.favourites, order);
        //delete this.favourites[PId];
        this.favourites = this.favourites.filter(function (obj) {
            return obj.Id !== PId;
        });
        switch (this.ParentId) {
            case "S1":
                __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S1, JSON.stringify(this.favourites));
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S1));
                break;
            case "S2":
                __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S2, JSON.stringify(this.favourites));
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S2));
                break;
            case "S3":
                __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S3, JSON.stringify(this.favourites));
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S3));
                break;
            case "S4":
                __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S4, JSON.stringify(this.favourites));
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S4));
                break;
            case "S5":
                __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S5, JSON.stringify(this.favourites));
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S5));
                break;
            case "S6":
                __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S6, JSON.stringify(this.favourites));
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S6));
                break;
            default:
                __WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S7, JSON.stringify(this.favourites));
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_3__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S7));
        }
        // StorageService.SetItem(this.constant.favouriteBasedOnParentId.Favourite_S1,JSON.stringify(this.favourites));
        // this.favourites=JSON.parse(StorageService.GetItem(this.constant.favouriteBasedOnParentId.Favourite_S1));
    };
    FavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\favourites\favourites.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Favourites  {{ActiveBankName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n      <ion-item color="assertive" id="favourites-list-item28" (click)="OnClick(Id)">\n          <ion-thumbnail item-start>\n              <img src="assets/imgs/thumbnail-totoro.png">\n            </ion-thumbnail>\n        <h2>New Recharge</h2>\n        </ion-item>\n        <div class="row" *ngIf="favourites">\n          <ion-item *ngFor="let order of favourites">\n    <button ion-item  (click)="OnPress(order)">\n      {{ order.NickName }}\n    </button>\n    <button ion-button clear item-end (click)="OnSubmit(order)">Delete</button>\n  </ion-item>\n  </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\favourites\favourites.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

function removeByKey(array, params) {
    array.some(function (item, index) {
        return (array[index][params.key] === params.value) ? !!(array.splice(index, 1)) : false;
    });
    return array;
}
//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/Observable';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('userToken') != null)
            return true;
        this.router.navigateByUrl('/login');
        //this.navCtrl.push(LoginPage);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UIHelperClasses_UIHelperService__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Storage_Service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { NavController } from 'ionic-angular';



//import { RegisterPage } from '../pages/register/register';
//import { LoginPage } from '../pages/login/login';


//import { RequestOptions } from '@angular/http';



//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
var RegisterService = /** @class */ (function () {
    //constructor(private sqlite: SQLite,private httpclient:HttpClient,private locals:StorageService,private uihelper: UIHelperService,private http: Http) {
    function RegisterService(httpclient, locals, uihelper, http) {
        this.httpclient = httpclient;
        this.locals = locals;
        this.uihelper = uihelper;
        this.http = http;
    }
    RegisterService.prototype.sendMobileNo = function (mobno) {
        var _this = this;
        var data = "MobileNo=" + mobno;
        var url = this.uihelper.CallWebAPIUrlNew("/Tenant/GetTenantsByMobile") + "?" + data;
        return this.http.get(url).map(function (response) {
            var datanew = response.json();
            _this.Logo = datanew[0].IconHtml;
            _this.userClaims = datanew;
            return response.json();
        }).catch(this.handleErrors);
    };
    RegisterService.prototype.requestingOTP = function (user) {
        var _this = this;
        // this.user={
        //     TenantId:this.userClaims.Id,
        //     MobileNo:this.mobno
        //   } 
        var body = {
            TenantId: user.TenantId,
            MobileNo: user.MobileNo
        };
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'No-Auth': 'True' });
        //return this.http.post(this.rootUrl + '/api/User/Register', body,{headers : reqHeader});
        return this.http.post(this.uihelper.CallWebAPIUrlNew("/User/RequestOTP"), body, { headers: reqHeader }).map(function (response) {
            var datanew = response.json();
            _this.store = datanew;
            return response.json();
        });
        //this.navCtrl.push(HomeComponent,{item:user});
    };
    RegisterService.prototype.requestingDigiParty = function (reqForDigiParty) {
        var body = {
            TenantId: reqForDigiParty.TenantId,
            MobileNo: reqForDigiParty.MobileNo
        };
        return this.httpclient.post(this.uihelper.CallWebAPIUrlNew("/xxxxxx/xxxxxxxxx"), body);
    };
    RegisterService.prototype.ValidatingOTP = function (postingOTP) {
        var post = {
            TenantId: postingOTP.TenantId,
            PartyMastId: postingOTP.PartyMastId,
            OTPRef: postingOTP.OTPRef,
            OTP: postingOTP.OTP
        };
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'No-Auth': 'True' });
        return this.http.post(this.uihelper.CallWebAPIUrlNew("/User/ValidateOTP"), post, { headers: reqHeader });
    };
    RegisterService.prototype.SaveMPin = function (userposting) {
        var _this = this;
        var userpost = {
            DigiPartyId: userposting.DigiPartyId,
            TenantId: userposting.TenantId,
            PIN: userposting.PIN,
            PartyMastId: userposting.PartyMastId,
            UniqueId: userposting.UniqueId,
            OTPRef: userposting.OTPRef,
            OTP: userposting.OTP,
            MobileNo: userposting.MobileNo
        };
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'No-Auth': 'True' });
        return this.http.post(this.uihelper.CallWebAPIUrlNew("/User/SaveMPin"), userpost, { headers: reqHeader }).map(function (response) {
            var resultdata = response.json();
            _this.userresult = resultdata;
            return response.json();
        });
    };
    //   userAuthentication(userName,password,unique){   
    //     var data = "username=" + userName + "&password=" + password +"&unique="+unique+ "&grant_type=password";
    //     var reqHeader = new Headers({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    //     return this.http.post(this.uihelper.CallWebAPIUrl("/token"), data, { headers: reqHeader }).map((response: Response) =>{
    //         var tokendata=response.json();
    //         var param1="userToken";
    //         LocalStorageService.SetItem(param1,tokendata.access_token);
    //         response.json();
    //     }); 
    // }
    RegisterService.prototype.userAuthentication = function (userName, password, unique) {
        var data = "username=" + userName + "&password=" + password + "&unique=" + unique + "&grant_type=password";
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post(this.uihelper.CallWebAPIUrl("/token"), data, { headers: reqHeader }).map((function (res) { return res.json(); }));
    };
    RegisterService.prototype.loginbyHttpClient = function (userName, password, unique) {
        var data = "username=" + userName + "&password=" + password + "&unique=" + unique + "&grant_type=password";
        return this.httpclient.post(this.uihelper.CallWebAPIUrl("/token"), data);
        // this.sqlite.create({
        //     name: 'data.db',
        //     location: 'default'
        //   })
        //     .then((db: SQLiteObject) => {
        //       db.executeSql('create table danceMoves(name VARCHAR(32))', {})
        //         .then(() => console.log('Executed SQL'))
        //         .catch(e => console.log(e));
        //     })
        //     .catch(e => console.log(e));
    };
    RegisterService.prototype.getUserClaims = function () {
        return this.http.get(this.uihelper.CallWebAPIUrl("/api/GetUserClaims"));
        //return this.http.get(this.uihelper.CallWebAPIUrlNew("/Tenant/GetTenantsByMobile?MobileNo=8129750780"));
    };
    RegisterService.prototype.getservicesByHttpclient = function () {
        return this.httpclient.get(this.uihelper.CallWebAPIUrlNew("/Operator/GetServices"));
    };
    RegisterService.prototype.getservices = function () {
        return this.http.get(this.uihelper.CallWebAPIUrlNew("/Operator/GetServices")).map(function (response) {
            return response.json();
        });
    };
    RegisterService.prototype.getAccountsbyHttpClient = function (SCReq) {
        var scr = {
            PartyMastId: SCReq.PartyMastId,
            TenantId: SCReq.TenantId
        };
        return this.httpclient.post(this.uihelper.CallWebAPIUrlNew("/Banking/GetAccounts"), scr);
    };
    RegisterService.prototype.getAccounts = function (SCReq) {
        var scr = {
            PartyMastId: SCReq.PartyMastId,
            TenantId: SCReq.TenantId
        };
        return this.http.post(this.uihelper.CallWebAPIUrlNew("/Banking/GetAccounts"), scr).map(function (response) {
            return response.json();
        });
    };
    RegisterService.prototype.GetOperators = function (OSReq) {
        var osr = {
            Starts: OSReq.Starts,
            PerentId: OSReq.PerentId,
            TenantId: OSReq.TenantId
        };
        return this.httpclient.post(this.uihelper.CallWebAPIUrlNew("/Operator/GetOperators"), osr);
        //return this.httpclient.get<OS[]>(this.uihelper.CallWebAPIUrlNew("/Operator/GetOperators"));
    };
    RegisterService.prototype.PostRecharge = function (Recharge) {
        var rech = {
            TenantId: Recharge.TenantId,
            DigiPartyId: Recharge.DigiPartyId,
            PartyMastId: Recharge.PartyMastId,
            AcMastId: Recharge.AcMastId,
            AcSubId: Recharge.AcSubId,
            Amount: Recharge.Amount,
            OperatorId: Recharge.OperatorId,
            SubscriptionId: Recharge.SubscriptionId,
            LocId: Recharge.LocId
        };
        return this.httpclient.post(this.uihelper.CallWebAPIUrlNew("/Recharge/PostRecharge"), rech);
    };
    RegisterService.prototype.SearchReceiverAccount = function (fundTransferRequest) {
        var FTReq = {
            TenantId: fundTransferRequest.TenantId,
            MobileNo: fundTransferRequest.MobileNo
        };
        return this.httpclient.post(this.uihelper.CallWebAPIUrlNew("/Banking/GetFTAccount"), FTReq);
    };
    RegisterService.prototype.FundTransfer = function (doFundTransfer) {
        var DFT = {
            TenantId: doFundTransfer.TenantId,
            DigiPartyId: doFundTransfer.DigiPartyId,
            FromAcMastId: doFundTransfer.FromAcMastId,
            FromAcSubId: doFundTransfer.FromAcSubId,
            FromLocId: doFundTransfer.FromLocId,
            ToAcMastId: doFundTransfer.ToAcMastId,
            ToAcSubId: doFundTransfer.ToAcSubId,
            ToLocId: doFundTransfer.ToLocId,
            Amount: doFundTransfer.Amount,
            ToAcNo: doFundTransfer.ToAcNo
        };
        return this.httpclient.post(this.uihelper.CallWebAPIUrlNew("/Banking/FundTransfer"), DFT);
    };
    RegisterService.prototype.ExtractData = function (res) {
        var body = res.json();
        return body || [];
    };
    RegisterService.prototype.handleErrors = function (error) {
        var errors = [];
        switch (error.status) {
            case 400:
                var err = error.json();
                if (err.modelState) {
                    var valErrors = error.json.modelStae;
                    for (var key in valErrors) {
                        for (var i = 0; i < valErrors[key].length; i++) {
                            errors.push(valErrors[key][i]);
                        }
                    }
                }
                else if (err.message) {
                    error.push(err.message);
                }
                else {
                    error.push("an unknown error occured");
                }
                break;
            case 404:
                error.push("No Product data is available");
                break;
            case 500:
                error.push(error.json().exceptionMessage);
                break;
            default:
                error.push("status:", +error.status + "" + error.statusText);
                break;
        }
        ;
        console.error("an error occured", errors);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errors);
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__Storage_Service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3__UIHelperClasses_UIHelperService__["a" /* UIHelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], RegisterService);
    return RegisterService;
}());

//# sourceMappingURL=app-data.service.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(383);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_change_bank_change_bank__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_banking_banking__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_page__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_recharge_recharge__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_favourites_favourites__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mini_statement_mini_statement__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mobile_recharge_mobile_recharge__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_confirm_page_confirm_page__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_recharge_successful_recharge_successful__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_bank_list_bank_list__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_enter_otp_enter_otp__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_select_operator_select_operator__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_auth_auth_guard__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic2_auto_complete__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_services_app_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_services_CompleteTestService__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_UIHelperClasses_UIHelperService__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_auth_auth_interceptor__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__routes__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_services_Constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_services_AutoLogOutService__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_fund_transfer_fund_transfer__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_change_bank_change_bank__["a" /* ChangeBankPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_banking_banking__["a" /* BankingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page_page__["a" /* PagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_recharge_recharge__["a" /* RechargePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mini_statement_mini_statement__["a" /* MiniStatementPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_confirm_page_confirm_page__["a" /* ConfirmPagePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recharge_successful_recharge_successful__["a" /* RechargeSuccessfulPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_bank_list_bank_list__["a" /* BankListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_enter_otp_enter_otp__["a" /* EnterOTPPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_select_operator_select_operator__["a" /* SelectOperatorPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_fund_transfer_fund_transfer__["a" /* FundTransferPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_24__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["c" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_26_ionic2_auto_complete__["a" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    timeOut: 10000,
                    //positionClass: 'toast-bottom-center',
                    positionClass: 'toast-center-center',
                    preventDuplicates: true,
                }),
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_33__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_34__routes__["a" /* appRoutes */]),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_change_bank_change_bank__["a" /* ChangeBankPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_banking_banking__["a" /* BankingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page_page__["a" /* PagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_recharge_recharge__["a" /* RechargePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mini_statement_mini_statement__["a" /* MiniStatementPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_confirm_page_confirm_page__["a" /* ConfirmPagePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recharge_successful_recharge_successful__["a" /* RechargeSuccessfulPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_bank_list_bank_list__["a" /* BankListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_enter_otp_enter_otp__["a" /* EnterOTPPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_select_operator_select_operator__["a" /* SelectOperatorPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_fund_transfer_fund_transfer__["a" /* FundTransferPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_25__pages_auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */], {
                    provide: __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_32__pages_auth_auth_interceptor__["a" /* AuthInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_29__pages_services_app_data_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_31__pages_UIHelperClasses_UIHelperService__["a" /* UIHelperService */],
                __WEBPACK_IMPORTED_MODULE_35__pages_services_Storage_Service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_36__pages_services_Constants__["a" /* ConstantService */],
                __WEBPACK_IMPORTED_MODULE_30__pages_services_CompleteTestService__["a" /* CompleteTestService */],
                __WEBPACK_IMPORTED_MODULE_37__pages_services_AutoLogOutService__["a" /* AutoLogoutService */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_mobile_recharge_mobile_recharge__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_banking_banking__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_setting_setting__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_change_bank_change_bank__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_services_app_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page_page__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_services_Constants__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { NavController } from 'ionic-angular';










var MyApp = /** @class */ (function () {
    // constructor(platform: Platform, statusBar: StatusBar, private reg:RegisterPage, log:LoginPage, splashScreen: SplashScreen) {
    function MyApp(event, constant, platform, statusBar, splashScreen, regService) {
        var _this = this;
        this.event = event;
        this.constant = constant;
        this.regService = regService;
        this.event.subscribe('UNAUTHORIZED', function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //if(localStorage["UserName"]||localStorage["TenantName"]==null){
            //if(localStorage.getItem('TenantName')==null||localStorage.getItem('UserName')==null){
            //localStorage.removeItem(this.constant.GetUserKey.UniqueKey);
            //  localStorage.removeItem("User");
            //  StorageService.RemoveItem(this.constant.SetUser);
            //  StorageService.RemoveItem("Tenant");
            //  StorageService.RemoveItem("DigiParty");
            //  StorageService.RemoveItem("OS");
            //  StorageService.RemoveItem("SelfCareAc");
            //  StorageService.RemoveItem("userToken");
            //  StorageService.RemoveItem("entry");
            //  this.RemoveOSes();
            //  this.RemoveFavourites();
            //  StorageService.RemoveItem("lastAction");
            localStorage.clear();
            //if(StorageService.GetItem(param1)==null||StorageService.GetItem(param2)==null){
            if (__WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].GetItem(_this.constant.DB.User) == null || __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].GetItem(_this.constant.DB.Tenant) == null) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_page_page__["a" /* PagePage */];
            }
        });
    }
    MyApp.prototype.RemoveOSes = function () {
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.osBasedOnParentId.OS_S1);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.osBasedOnParentId.OS_S2);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.osBasedOnParentId.OS_S3);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.osBasedOnParentId.OS_S4);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.osBasedOnParentId.OS_S5);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.osBasedOnParentId.OS_S6);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.osBasedOnParentId.OS_S7);
    };
    MyApp.prototype.RemoveFavourites = function () {
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S1);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S2);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S3);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S4);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S5);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S6);
        __WEBPACK_IMPORTED_MODULE_10__pages_services_Storage_Service__["a" /* StorageService */].RemoveItem(this.constant.favouriteBasedOnParentId.Favourite_S7);
    };
    MyApp.prototype.goToPage = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_page_page__["a" /* PagePage */]);
    };
    MyApp.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    MyApp.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_banking_banking__["a" /* BankingPage */]);
    };
    MyApp.prototype.goToSetting = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_setting_setting__["a" /* SettingPage */]);
    };
    MyApp.prototype.goToChangeBank = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_change_bank_change_bank__["a" /* ChangeBankPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToPage()" id="menu-list-item1">\n        Home\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToSetting()" id="menu-list-item2">\n        Settings\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToChangeBank()" id="menu-list-item3">\n        Change Bank\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>\n<!-- <ion-nav #mainContent></ion-nav> -->\n\n'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_13__pages_services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__pages_services_app_data_service__["a" /* RegisterService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registervm; });
var Registervm = /** @class */ (function () {
    function Registervm() {
    }
    return Registervm;
}());

//# sourceMappingURL=register.vm.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniStatementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiniStatementPage = /** @class */ (function () {
    function MiniStatementPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MiniStatementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mini-statement',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\mini-statement\mini-statement.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Mini Statement\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9" style="background-color:#F3F3F3;">\n  <ion-list id="miniStatement-list8">\n    <ion-item color="assertive" id="miniStatement-list-item35">\n      Kavalapadur Demo\n    </ion-item>\n    <ion-item color="none" id="miniStatement-list-item36">\n      Branch:\n    </ion-item>\n    <ion-item color="none" id="miniStatement-list-item37">\n      Account Type:\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:21px;" id="miniStatement-spacer3"></div>\n  <ion-list id="miniStatement-list9">\n    <ion-item color="none" id="miniStatement-list-item40">\n      Account Type:\n    </ion-item>\n    <ion-item color="none" id="miniStatement-list-item41">\n      Customer ID :\n    </ion-item>\n    <ion-item color="none" id="miniStatement-list-item42">\n      Account Balance\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:21px;" id="miniStatement-spacer4"></div>\n  <ion-list id="miniStatement-list10">\n    <ion-item color="assertive" id="miniStatement-list-item38">\n      Statement\n    </ion-item>\n  </ion-list>\n  <ion-card id="miniStatement-card22">\n    <ion-list>\n      <ion-item color="none" id="miniStatement-list-item45">\n        30-04-2019\n      </ion-item>\n      <ion-item color="assertive" id="miniStatement-list-item46">\n        Credited :30.00\n      </ion-item>\n      <ion-item id="miniStatement-list-item-container5">\n        <div id="miniStatement-markdown6" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            Opening Balance\n          </p>\n        </div>\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\mini-statement\mini-statement.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MiniStatementPage);
    return MiniStatementPage;
}());

//# sourceMappingURL=mini-statement.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmPagePage = /** @class */ (function () {
    function ConfirmPagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConfirmPagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-confirm-page',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\confirm-page\confirm-page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Confirm Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <ion-list id="confirmPage-list12">\n    <ion-item color="none" id="confirmPage-list-item20">\n      Operator\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="confirmPage-list-item29">\n      Mobile No:\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="confirmPage-list-item30">\n      Amount\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="none" id="confirmPage-list-item31">\n      Nick Name\n      <ion-note item-right></ion-note>\n    </ion-item>\n  </ion-list>\n  <button id="confirmPage-button5" ion-button color="positive">\n    <ion-icon name="arrow-dropleft"></ion-icon>\n    Cancel\n  </button>\n  <button id="confirmPage-button6" ion-button color="positive" icon-right>\n    Submit\n    <ion-icon name="arrow-dropright"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\confirm-page\confirm-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ConfirmPagePage);
    return ConfirmPagePage;
}());

//# sourceMappingURL=confirm-page.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileRechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_CompleteTestService__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_Constants__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MobileRechargePage = /** @class */ (function () {
    function MobileRechargePage(constant, regService, loadingController, completeTestService, navParams, navCtrl, formbuilder) {
        this.constant = constant;
        this.regService = regService;
        this.loadingController = loadingController;
        this.completeTestService = completeTestService;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.formbuilder = formbuilder;
        this.ActiveTenantId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("DigiParty")).TenantId;
        this.formgroup = formbuilder.group({
            selectoperator: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(2)]],
            mobno: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(10)]],
            amount: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(1)]],
            nickname: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(2)]]
        });
        this.gender = 'f';
        this.selectoperator = this.formgroup.controls['selectoperator'];
        this.mobno = this.formgroup.controls['selectoperator'];
        this.amount = this.formgroup.controls['selectoperator'];
        this.nickname = this.formgroup.controls['selectoperator'];
    }
    MobileRechargePage.prototype.ngOnInit = function () {
        var _this = this;
        this.ActiveBankName = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("User")).ActiveTenantName;
        this.resetForm();
        this.Id = this.navParams.get('Id');
        this.ParentId = this.navParams.get('ParentId');
        if (this.ParentId == "S3") {
            this.favouriteNewOfDTH = this.ParentId;
        }
        //Below is for page, based on NickName..But HTML is not working..
        if (this.ParentId == "S1") {
            if ((__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S1) != null) && this.Id != null) {
                var PId = this.Id;
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S1));
                this.rechargeitem = this.favourites.find(function (obj) { return obj.Id === PId; });
                this.mobile = this.rechargeitem.SubscriptionId;
            }
            else {
                this.mobile = "Enter";
            }
        }
        else if (this.ParentId == "S2") {
            if ((__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S2) != null) && this.Id != null) {
                var PId = this.Id;
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S2));
                this.rechargeitem = this.favourites.find(function (obj) { return obj.Id === PId; });
                this.mobile = this.rechargeitem.SubscriptionId;
            }
            else {
                this.mobile = "Enter";
            }
        }
        else if (this.ParentId == "S3") {
            this.mobile = null;
            var PId = this.Id;
            if (__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S3) != null && this.Id != null) {
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S3));
                this.rechargeitem = this.favourites.find(function (obj) { return obj.Id === PId; });
                this.DTHNo = this.rechargeitem.SubscriptionId;
            }
            else {
                this.DTHNo = "Enter";
            }
        }
        else if (this.ParentId == "S5") {
            this.mobile = null;
            this.DTHNo = null;
            var PId = this.Id;
            if (__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S5) != null && this.Id != null) {
                this.favourites = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S5));
                this.rechargeitem = this.favourites.find(function (obj) { return obj.Id === PId; });
                this.ElectricityConsumerNo = this.rechargeitem.SubscriptionId;
            }
            else {
                this.ElectricityConsumerNo = "Enter";
            }
        }
        // else{
        // }
        if (__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("OSResponse") == null) {
            this.OldOSResponseInString = "";
        }
        else {
            this.OldOSResponseInString = __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("OSResponse");
        }
        //this.OSResponseNew=JSON.parse(StorageService.GetItem("OSResponse"));
        this.osreq = {
            Starts: "",
            //PerentId:localStorage.getItem('OS.Id'),
            PerentId: this.ParentId,
            TenantId: this.ActiveTenantId,
        };
        this.regService.GetOperators(this.osreq).subscribe(function (data) {
            _this.OSResponseNew = data;
            // if(this.OSResponseNew[0].ParentId=="S1"){
            //   StorageService.SetItem("OS(S1)",JSON.stringify(this.OSResponseNew))
            // }
            // else if(this.OSResponseNew[0].ParentId=="S2"){
            //   StorageService.SetItem("OS(S2)",JSON.stringify(this.OSResponseNew))
            // }
            // else if(this.OSResponseNew[0].ParentId=="S3"){
            //   StorageService.SetItem("OS(S3)",JSON.stringify(this.OSResponseNew))
            // }
            switch (_this.OSResponseNew[0].ParentId) {
                case "S1":
                    __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.osBasedOnParentId.OS_S1, JSON.stringify(_this.OSResponseNew));
                    break;
                case "S2":
                    __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.osBasedOnParentId.OS_S2, JSON.stringify(_this.OSResponseNew));
                    break;
                case "S3":
                    __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.osBasedOnParentId.OS_S3, JSON.stringify(_this.OSResponseNew));
                    break;
                case "S4":
                    __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.osBasedOnParentId.OS_S4, JSON.stringify(_this.OSResponseNew));
                    break;
                case "S5":
                    __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.osBasedOnParentId.OS_S5, JSON.stringify(_this.OSResponseNew));
                    break;
                case "S6":
                    __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.osBasedOnParentId.OS_S6, JSON.stringify(_this.OSResponseNew));
                    break;
                default:
                    __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.osBasedOnParentId.OS_S7, JSON.stringify(_this.OSResponseNew));
            }
        });
        //this.completeTestService=
    };
    MobileRechargePage.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.favouriteitem = {
            Id: '',
            NickName: '',
            OperatorId: '',
            ParentId: '',
            SubscriptionId: ''
        };
        this.rechargeitem = {
            Id: '',
            NickName: '',
            OperatorId: '',
            ParentId: '',
            SubscriptionId: '',
            Amount: ''
        };
    };
    MobileRechargePage.prototype.OnClick = function (form) {
        //   OnClick(id,mob,amnt,nkname){
        //    this.AmountForRecharge=amnt;
        //this.AmountForRecharge=form.value.amount;
        // this.OId=id;
        // this.MobileNo=mob;
        // this.Nickname1=nkname;
        if (this.Id == null) {
            this.rechargeitem = {
                Id: this.guid(),
                //OperatorId:this.OId,
                OperatorId: this.rechargeitem.OperatorId,
                //SubscriptionId:this.MobileNo,
                SubscriptionId: this.rechargeitem.SubscriptionId,
                ParentId: this.OSResponseNew[0].ParentId,
                //NickName:this.Nickname1
                NickName: this.rechargeitem.NickName,
                Amount: this.rechargeitem.Amount
            };
            this.favouriteitem = {
                Id: this.guid(),
                OperatorId: this.rechargeitem.OperatorId,
                SubscriptionId: this.rechargeitem.SubscriptionId,
                ParentId: this.OSResponseNew[0].ParentId,
                NickName: this.rechargeitem.NickName
            };
            switch (this.OSResponseNew[0].ParentId) {
                case "S1":
                    var existingEntries = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S1));
                    break;
                case "S2":
                    var existingEntries = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S2));
                    break;
                case "S3":
                    var existingEntries = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S3));
                    break;
                case "S4":
                    var existingEntries = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S4));
                    break;
                case "S5":
                    var existingEntries = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S5));
                    break;
                case "S6":
                    var existingEntries = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S6));
                    break;
                default:
                    var existingEntries = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S7));
            }
            //var existingEntries = JSON.parse(StorageService.GetItem("Favourite"));
            if (existingEntries == null) {
                switch (this.OSResponseNew[0].ParentId) {
                    case "S1":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S1, JSON.stringify([this.favouriteitem]));
                        break;
                    case "S2":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S2, JSON.stringify([this.favouriteitem]));
                        break;
                    case "S3":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S3, JSON.stringify([this.favouriteitem]));
                        break;
                    case "S4":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S4, JSON.stringify([this.favouriteitem]));
                        break;
                    case "S5":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S5, JSON.stringify([this.favouriteitem]));
                        break;
                    case "S6":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S6, JSON.stringify([this.favouriteitem]));
                        break;
                    default:
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S7, JSON.stringify([this.favouriteitem]));
                }
                //localStorage.setItem(this.constant.DB.Favourite, JSON.stringify([this.favouriteitem]));
            }
            else {
                existingEntries.push(this.favouriteitem);
                switch (this.OSResponseNew[0].ParentId) {
                    case "S1":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S1, JSON.stringify(existingEntries));
                        break;
                    case "S2":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S2, JSON.stringify(existingEntries));
                        break;
                    case "S3":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S3, JSON.stringify(existingEntries));
                        break;
                    case "S4":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S4, JSON.stringify(existingEntries));
                        break;
                    case "S5":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S5, JSON.stringify(existingEntries));
                        break;
                    case "S6":
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S6, JSON.stringify(existingEntries));
                        break;
                    default:
                        __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem(this.constant.favouriteBasedOnParentId.Favourite_S7, JSON.stringify(existingEntries));
                }
                //StorageService.SetItem(this.constant.DB.Favourite,JSON.stringify(existingEntries));  
            }
        }
        //above code is for updating or adding row for FavouriteKey local storage.
        //StorageService.SetItem(this.constant.DB.FavouriteKey,JSON.stringify([this.favourite]));  
        switch (this.OSResponseNew[0].ParentId) {
            case "S1":
                this.favouriteNew = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S1));
                break;
            case "S2":
                this.favouriteNew = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S2));
                break;
            case "S3":
                this.favouriteNew = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S3));
                break;
            case "S4":
                this.favouriteNew = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S4));
                break;
            case "S5":
                this.favouriteNew = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S5));
                break;
            case "S6":
                this.favouriteNew = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S6));
                break;
            default:
                this.favouriteNew = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S7));
        }
        //this.favouriteNew=JSON.parse(StorageService.GetItem("Favourite"));
        switch (this.rechargeitem.OperatorId) {
            case "O1":
                this.operator = "Airtel";
                break;
            case "O2":
                this.operator = "BSNL";
                break;
            case "O3":
                this.operator = "Vodafone";
                break;
            case "O4":
                this.operator = "Idea";
                break;
            case "O5":
                this.operator = "Jio";
                break;
            case "O6":
                this.operator = "Reliance GSM";
                break;
            case "O7":
                this.operator = "Reliance CDMA";
                break;
            case "O8":
                this.operator = "Tata Indicom";
                break;
            case "O9":
                this.operator = "Tata Docomo";
                break;
            case "O10":
                this.operator = "Telenor";
                break;
            case "O11":
                this.operator = "MTNL";
                break;
            case "O12":
                this.operator = "Aircel";
                break;
            case "O13":
                this.operator = "Videocon";
                break;
            case "O14":
                this.operator = "MTS";
                break;
            case "O15":
                this.operator = "BSNL STV";
                break;
            case "O16":
                this.operator = "Tata Docomo STV";
                break;
            case "O17":
                this.operator = "Telenor STV";
                break;
            case "O18":
                this.operator = "VIDEOCON STV";
                break;
            case "O19":
                this.operator = "MTNL STV";
                break;
            case "O20":
                this.operator = "Airtel";
                break;
            case "O21":
                this.operator = "Idea";
                break;
            case "O22":
                this.operator = "Vodafone";
                break;
            case "O23":
                this.operator = "Reliance GSM";
                break;
            case "O24":
                this.operator = "Reliance CDMA";
                break;
            case "O25":
                this.operator = "Tata Docomo";
                break;
            case "O26":
                this.operator = "Aircel";
                break;
            case "O27":
                this.operator = "MTS";
                break;
            case "O28":
                this.operator = "BSNL";
                break;
            case "O29":
                this.operator = "Dish TV";
                break;
            case "O30":
                this.operator = "TATA Sky";
                break;
            case "O31":
                this.operator = "Sun TV";
                break;
            case "O32":
                this.operator = "Videocon D2H TV";
                break;
            case "O33":
                this.operator = "Reliance Big TV";
                break;
            case "O34":
                this.operator = "Airtel Digital TV";
                break;
            default:
                this.operator = "BESCOM";
        }
    };
    MobileRechargePage.prototype.OnPress = function () {
        // var param=JSON.parse(localStorage.getItem("SelfCareAcKey"));
        // this.AcMastId=param[0].AcHeadId;
        var DigiPartyId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("DigiParty")).DigiPartyId;
        var PartyMastId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("DigiParty")).PartyMastId;
        this.AcMastId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("SelfCareAc"))[0].AcHeadId;
        this.AcSubId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("SelfCareAc"))[0].AcSubId;
        this.LocId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("SelfCareAc"))[0].LocId;
        switch (this.OSResponseNew[0].ParentId) {
            case "S1":
                this.OperatorId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S1)).OperatorId;
                break;
            case "S2":
                this.OperatorId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S2)).OperatorId;
                break;
            case "S3":
                this.OperatorId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S3)).OperatorId;
                break;
            case "S4":
                this.OperatorId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S4)).OperatorId;
                break;
            case "S5":
                this.OperatorId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S5)).OperatorId;
                break;
            case "S6":
                this.OperatorId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S6)).OperatorId;
                break;
            default:
                this.OperatorId = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.favouriteBasedOnParentId.Favourite_S7)).OperatorId;
        }
        //this.OperatorId=JSON.parse(StorageService.GetItem("Favourite")).OperatorId;
        this.recharge = {
            TenantId: this.ActiveTenantId,
            DigiPartyId: DigiPartyId,
            PartyMastId: PartyMastId,
            AcMastId: this.AcMastId,
            AcSubId: this.AcSubId,
            Amount: this.rechargeitem.Amount,
            OperatorId: this.rechargeitem.OperatorId,
            //OperatorId:this.OId,
            SubscriptionId: this.rechargeitem.SubscriptionId,
            LocId: this.LocId
        };
        this.regService.PostRecharge(this.recharge).subscribe(function (data) {
        });
    };
    MobileRechargePage.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    MobileRechargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mobile-recharge',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\mobile-recharge\mobile-recharge.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Mobile Recharge  {{ActiveBankName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n    <form id="mobileRecharge-form2" (ngSubmit)="OnClick(MobileRecharegeform)" #MobileRechargeform="ngForm">\n  <!-- <form [formGroup]="formgroup" id="mobileRecharge-form2" (ngSubmit)="OnClick(MobileRecharegeform)" #MobileRechargeform="ngForm"> -->\n    <!-- <form [formGroup]="formgroup" id="mobileRecharge-form2" (ngSubmit)="OnClick(OperatorId.value,MobileNo.value,Amount.value,NickName.value)" #MobileRechargeform="ngForm"> -->\n      <ion-item id="mobileRecharge-select1">\n        <ion-label>Operator</ion-label>\n        <!-- <ion-select [(ngModel)]="pets"> -->\n        <!-- <ion-select id="mobileRecharge-input3" formControlName="selectoperator" #pets ngModel name="pets" interface="popover"> -->\n        <!-- <ion-select id="mobileRecharge-input3" placeholder="Select Operator" formControlName="selectoperator" interface="popover" #OperatorId ngModel name="OperatorId"> -->\n          <ion-select id="mobileRecharge-input3" interface="popover" name="OperatorId" #OperatorId="ngModel" [(ngModel)]="rechargeitem.OperatorId">\n            <ion-option *ngFor="let order of OSResponseNew" [value]="order.Id">{{order.Operator}}</ion-option>\n        </ion-select> \n    </ion-item>\n    <div *ngIf="mobile">\n    <ion-item id="mobileRecharge-input4">\n      <ion-label>\n        Mobile No\n      </ion-label>\n      <!-- <ion-input type="number" placeholder="" name="SubscriptionId" #SubscriptionId="ngModel" [(ngModel)]="favourite.SubscriptionId"></ion-input> -->\n      <ion-input type="text" placeholder="" name="SubscriptionId" #SubscriptionId="ngModel" [(ngModel)]="rechargeitem.SubscriptionId"></ion-input>\n      <!-- <ion-input type="number" placeholder="Enter Mobile No" formControlName="mobno" #MobileNo ngModel name="MobileNo"></ion-input> -->\n    </ion-item>\n  </div>\n    <div *ngIf="DTHNo">\n      <ion-item id="mobileRecharge-input4">\n        <ion-label>\n          Subscriber ID\n        </ion-label>\n        <ion-input type="text" placeholder="" name="SubscriptionId" #SubscriptionId="ngModel" [(ngModel)]="rechargeitem.SubscriptionId"></ion-input>\n      </ion-item>\n    </div>\n    <div *ngIf="ElectricityConsumerNo">\n        <ion-item id="mobileRecharge-input4">\n          <ion-label>\n            Consumer Number\n          </ion-label>\n          <ion-input type="text" placeholder="" name="SubscriptionId" #SubscriptionId="ngModel" [(ngModel)]="rechargeitem.SubscriptionId"></ion-input>\n        </ion-item>\n      </div>\n    <ion-item id="mobileRecharge-input6">\n      <ion-label>\n        Amount\n      </ion-label>\n      <ion-input type="number" placeholder="" name="Amount" #Amount="ngModel" [(ngModel)]="rechargeitem.Amount"></ion-input>\n      <!-- <ion-input type="number" placeholder="Enter Amount" formControlName="amount" #Amount ngModel name="Amount"></ion-input> -->\n    </ion-item>\n    <ion-item id="mobileRecharge-input7">\n      <ion-label>\n        Nick Name\n      </ion-label>\n      <ion-input type="text" placeholder="" name="NickName" #NickName="ngModel" [(ngModel)]="rechargeitem.NickName"></ion-input>\n      <!-- <ion-input type="text" placeholder="Enter NickName for future transaction" formControlName="nickname" #NickName ngModel name="NickName">{{nkname}}</ion-input> -->\n    </ion-item>\n    <div class="spacer" style="width:300px;height:21px;" id="mobileRecharge-spacer5"></div>\n    <div id="mobileRecharge-markdown7" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        <strong>\n          Disclaimer\n        </strong>\n        : While we support most recharges, we request you to verify with your operator once before proceding\n      </p>\n    </div>\n    <!-- <button [disabled]="MobileRecharegeform.invalid" id="mobileRecharge-button3" ion-button color="positive" block> -->\n    <button id="mobileRecharge-button3" ion-button color="positive" block>\n      Next\n    </button>\n  </form>\n  <div class="row" *ngIf="favouriteNew">\n  <div class="col s12 m7">\n    <div class="card">\n        <!--interpolation-->\n      <div class="card-content">     \n      <!-- <div *ngFor="let order of favouriteNew" (click)="OnPress()" style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;"> -->   \n      <span>Selected Operator : {{ operator }}</span> <br>\n      <!-- <ion-item id="register-input9">\n        <ion-label>\n          Name\n        </ion-label>\n        <ion-input type="text" placeholder="" name="Name" #Name="ngModel" [(ngModel)]="order.Name"></ion-input>\n      </ion-item> -->\n      <span>Mobile No : {{ rechargeitem.SubscriptionId }}</span> <br>\n      <span>Recharge Amount : {{ rechargeitem.Amount }}</span> <br>\n      <!-- <ion-item id="register-input9">\n        <ion-label>\n          Address\n        </ion-label>\n        <ion-input type="text" placeholder="" name="Address" #Address="ngModel" [(ngModel)]="order.Address"></ion-input>\n      </ion-item> -->\n    <!-- </div>  -->\n\n      </div>       \n    </div>\n  </div>\n  <button id="register-button8" ion-button color="positive" type="button" (click)="OnPress()" block>\n    Confirm\n  </button>\n</div>\n\n  <!-- <ion-item>\n    <ion-label>Pets</ion-label>\n    <ion-select [(ngModel)]="pets" interface="popover">\n      <ion-option *ngFor="let order of OSResponseNew" [value]="order.Id">{{order.Operator}}</ion-option>\n    </ion-select>\n  </ion-item> -->\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\mobile-recharge\mobile-recharge.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__services_CompleteTestService__["a" /* CompleteTestService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], MobileRechargePage);
    return MobileRechargePage;
}());

//# sourceMappingURL=mobile-recharge.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargeSuccessfulPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RechargeSuccessfulPage = /** @class */ (function () {
    function RechargeSuccessfulPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RechargeSuccessfulPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recharge-successful',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\recharge-successful\recharge-successful.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Recharge Successful\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <ion-list id="rechargeSuccessful-list16">\n    <ion-item color="balanced" id="rechargeSuccessful-list-item52">\n      <ion-icon name="information" item-left></ion-icon>\n      Recharge Succesfull\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="rechargeSuccessful-spacer6"></div>\n  <ion-list id="rechargeSuccessful-list15">\n    <ion-item color="none" id="rechargeSuccessful-list-item48">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Idea\n      </h2>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="rechargeSuccessful-spacer7"></div>\n  <ion-list id="rechargeSuccessful-list17">\n    <ion-item color="none" id="rechargeSuccessful-list-item49">\n      <ion-icon name="help" item-left></ion-icon>\n      Issue with this transaction\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\recharge-successful\recharge-successful.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RechargeSuccessfulPage);
    return RechargeSuccessfulPage;
}());

//# sourceMappingURL=recharge-successful.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mobile_recharge_mobile_recharge__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banking_banking__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BankListPage = /** @class */ (function () {
    function BankListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BankListPage.prototype.goToEnterOTP = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enter_otp_enter_otp__["a" /* EnterOTPPage */]);
    };
    BankListPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    BankListPage.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    BankListPage.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__banking_banking__["a" /* BankingPage */]);
    };
    BankListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bank-list',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\bank-list\bank-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Bank List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page14">\n  <ion-list id="bankList-list14">\n    <ion-item color="none" on-click="goToEnterOTP()" id="bankList-list-item17">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        1. Co-Operative Bank\n      </h2>\n    </ion-item>\n    <ion-item color="none" on-click="goToEnterOTP()" id="bankList-list-item19">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        2. Co-Operative Bank\n      </h2>\n    </ion-item>\n    <ion-item color="none" on-click="goToEnterOTP()" id="bankList-list-item32">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        3.Co-Operative Bank\n      </h2>\n    </ion-item>\n    <ion-item color="none" on-click="goToEnterOTP()" id="bankList-list-item18">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        4. Co-Operative Bank\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\bank-list\bank-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], BankListPage);
    return BankListPage;
}());

//# sourceMappingURL=bank-list.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectOperatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_is_subset_module__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_CompleteTestService__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SelectOperatorPage = /** @class */ (function () {
    function SelectOperatorPage(completeTestService, navParams, regService, loadingController, navCtrl, formbuilder) {
        this.completeTestService = completeTestService;
        this.navParams = navParams;
        this.regService = regService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.formbuilder = formbuilder;
        this.formgroup = formbuilder.group({
            selectoperator: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)]]
        });
        this.gender = 'f';
        this.selectoperator = this.formgroup.controls['selectoperator'];
    }
    SelectOperatorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Id = this.navParams.get('Id');
        if (__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("OSResponse") == null) {
            this.OldOSResponseInString = "";
        }
        else {
            this.OldOSResponseInString = __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("OSResponse");
        }
        //this.OSResponseNew=JSON.parse(StorageService.GetItem("OSResponse"));
        this.osreq = {
            Starts: "",
            //PerentId:localStorage.getItem('OS.Id'),
            PerentId: this.Id,
            TenantId: localStorage.getItem('ActiveTenantId'),
        };
        this.regService.GetOperators(this.osreq).subscribe(function (data) {
            _this.OSResponseNew = data;
        });
        //this.completeTestService=
    };
    SelectOperatorPage.prototype.OnSubmit = function (operator) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        this.starts = operator;
        var param = JSON.parse(localStorage.getItem('OS'));
        var par = param.Id;
        this.osreq = {
            Starts: "",
            //PerentId:localStorage.getItem('OS.Id'),
            PerentId: this.Id,
            TenantId: localStorage.getItem('ActiveTenantId'),
        };
        this.regService.GetOperators(this.osreq).subscribe(function (data) {
            _this.OSResponseOld = data;
            _this.OSResponseNew = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("OSResponse"));
            _this.OldOSResponseInString = __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].GetItem("OSResponse");
            _this.NewOSResponseInString = JSON.stringify(_this.OSResponseOld);
            if (_this.OldOSResponseInString == null) {
                _this.CombinedResponse = _this.NewOSResponseInString;
            }
            else if (_this.OldOSResponseInString.includes(_this.NewOSResponseInString)) {
                //else if(this.OldOSResponseInString.includes{
                //else if(this.OSResponseOld.Id==this.OSResponseNew.Id){
                _this.CombinedResponse = _this.OldOSResponseInString;
            }
            else {
                _this.CombinedResponse = JSON.stringify(JSON.parse(_this.OldOSResponseInString).concat(JSON.parse(_this.NewOSResponseInString)));
            }
            _this.completeTestService.GetOperators(_this.osreq).subscribe(function (data) {
                //this.OSResponseOld = data;
                _this.completeTestService = data;
            });
            Object(__WEBPACK_IMPORTED_MODULE_5_is_subset_module__["default"])(_this.OldOSResponseInString, _this.NewOSResponseInString);
            //   for (this.i=0,this.j=0; this.i<this.OldOSResponseInString.length && this.j<this.NewOSResponseInString.length;) {
            //     if(this.OldOSResponseInString==null){
            //       this.CombinedResponse=this.NewOSResponseInString;
            //     }else if (this.OldOSResponseInString[this.i] == this.NewOSResponseInString[this.j]) {   
            //       this.CombinedResponse=this.OldOSResponseInString;
            //     } 
            //     else{
            //       this.CombinedResponse=JSON.stringify(JSON.parse(this.OldOSResponseInString).concat(JSON.parse(this.NewOSResponseInString)));
            //     }
            // }
            _this.OSResponseNew = JSON.parse(_this.CombinedResponse);
            __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */].SetItem("OSResponse", _this.CombinedResponse);
            setTimeout(function () {
                loading.dismiss();
            }, 3000);
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    SelectOperatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select-operator',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\select-operator\select-operator.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Select Operator\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding id="page13">\n\n    <form [formGroup]="formgroup" id="register-form3" #selectoperatorForm="ngForm" (ngSubmit)="OnSubmit(Operator.value)">     \n\n       <ion-list id="register-list11">\n\n        <ion-item id="register-input8">\n\n          <ion-label>\n\n            Select Operator\n\n          </ion-label>\n\n          <!-- <ion-input formControlName="selectoperator" type="text" #Operator ngModel name="Operator" placeholder=""></ion-input> -->\n\n          <!-- <ion-auto-complete [dataProvider]="completeTestService"></ion-auto-complete> -->\n\n          <!-- <ion-searchbar [(ngModel)]="OSResponseOld"\n\n          [showCancelButton]="shouldShowCancel">\n\n        </ion-searchbar> -->\n\n        <ion-select  formControlName="selectoperator" #gender ngModel name="gender" interface="popover">\n\n          <ion-option value="f">Female</ion-option>\n\n          <ion-option value="m">Male</ion-option>\n\n        </ion-select>\n\n        \n\n        <!-- <ion-select  formControlName="selectoperator" #OSResponseNew ngModel name="OSResponseNew" interface="popover">\n\n          <ion-option *ngFor="let order of OSResponseNew">{{order.Operator}}</ion-option>\n\n          <ion-option *ngFor="let order of OSResponseNew" [value]="order.Id">{{order.Operator}}</ion-option>\n\n        </ion-select> -->\n\n        </ion-item>\n\n        <!-- <ion-item *ngIf="mobilenum.hasError(\'required\') && mobilenum.touched">\n\n          <p style="color:red;"> *MobileNumber is required</p>\n\n        </ion-item> -->\n\n      </ion-list>   \n\n      <button [disabled]="selectoperatorForm.invalid"  id="register-button7" ion-button color="positive" block>\n\n        Search Operator\n\n      </button> \n\n    </form>\n\n    <br/><br/>\n\n    <!-- <div class="row" *ngIf="OSResponseNew"> -->\n\n        <div style="background-color:red" class="col s12 m7">\n\n            <div class="card">\n\n              <div class="card-content">\n\n            <h2 style="text-align:center">\n\n              Favourite Operators\n\n            </h2>\n\n              </div>\n\n            </div>\n\n                </div>\n\n        <div class="col s12 m7">\n\n          <div class="card">\n\n              <!--interpolation-->\n\n            <div class="card-content">     \n\n            <div *ngFor="let order of OSResponseNew" (click)="OnPress()" style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;">\n\n            \n\n            <span>Operator : {{ order.Operator | json }}</span> <br>\n\n            <!-- <ion-item id="register-input9">\n\n              <ion-label>\n\n                Name\n\n              </ion-label>\n\n              <ion-input type="text" placeholder="" name="Name" #Name="ngModel" [(ngModel)]="order.Name"></ion-input>\n\n            </ion-item> -->\n\n            <span>Address : {{ order.Id }}</span> <br>\n\n            <!-- <ion-item id="register-input9">\n\n              <ion-label>\n\n                Address\n\n              </ion-label>\n\n              <ion-input type="text" placeholder="" name="Address" #Address="ngModel" [(ngModel)]="order.Address"></ion-input>\n\n            </ion-item> -->\n\n          </div> \n\n      \n\n            </div>       \n\n          </div>\n\n        </div>\n\n        <!-- <button id="register-button8" ion-button color="positive" type="button" (click)="OnPress()" block>\n\n          Request OTP\n\n        </button> -->\n\n      <!-- </div> -->\n\n    \n\n\n\n    <ion-item>\n\n      <ion-label>Pets</ion-label>\n\n      <ion-select [(ngModel)]="pets" interface="popover">\n\n        <ion-option *ngFor="let order of OSResponseNew" [value]="order.Id">{{order.Operator}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\select-operator\select-operator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_CompleteTestService__["a" /* CompleteTestService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], SelectOperatorPage);
    return SelectOperatorPage;
}());

//# sourceMappingURL=select-operator.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fund_transfer_fund_transfer__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BankingPage = /** @class */ (function () {
    // constructor(public constant:ConstantService,private autoLogoutService: AutoLogoutService,public navCtrl: NavController) {
    function BankingPage(constant, navCtrl) {
        //StorageService.SetItem('lastAction', Date.now().toString());
        this.constant = constant;
        this.navCtrl = navCtrl;
    }
    BankingPage.prototype.ngOnInit = function () {
        this.ActiveBankName = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.User)).ActiveTenantName;
    };
    BankingPage.prototype.OnBanking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fund_transfer_fund_transfer__["a" /* FundTransferPage */]);
    };
    BankingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-banking',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\banking\banking.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Banking {{ActiveBankName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-list id="banking-list4">\n    <ion-item color="assertive" id="banking-list-item13" (click)="OnBanking()">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Fund Transfer\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="banking-list-item15">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Balance Inquiry\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="banking-list-item16">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Mini Statement\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="banking-list-item14">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Stop Cheque\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\banking\banking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], BankingPage);
    return BankingPage;
}());

//# sourceMappingURL=banking.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mobile_recharge_mobile_recharge__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__banking_banking__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_page__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_Constants__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = /** @class */ (function () {
    //userName=this.regService.userresult.UserName;
    function LoginPage(constant, loadingController, formbuilder, regService, navCtrl) {
        this.constant = constant;
        this.loadingController = loadingController;
        this.formbuilder = formbuilder;
        this.regService = regService;
        this.navCtrl = navCtrl;
        this.username = JSON.parse(localStorage.getItem(this.constant.DB.User)).UserName;
        this.uniqueKey = JSON.parse(__WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.User)).UniqueKey;
        this.ActiveBankName = JSON.parse(__WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.User)).ActiveTenantName;
        this.formgroup = formbuilder.group({
            pword: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(4)]]
        });
        this.pword = this.formgroup.controls['pword'];
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.OnSubmit = function (password) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait till the screen loads'
        });
        loading.present();
        var param1 = JSON.parse(localStorage.getItem(this.constant.DB.OS));
        var param2 = JSON.parse(localStorage.getItem(this.constant.DB.SelfCareAc));
        //var param3="UserName";
        //var param4="unique";
        //this.regService.loginbyHttpClient(StorageService.GetItem(param3), password,StorageService.GetItem(param4)).subscribe((data : any)=>{       
        //this.regService.loginbyHttpClient(StorageService.GetItem(this.constant.GetUserKey.UserName), password,StorageService.GetItem(this.constant.GetUserKey.UniqueKey)).subscribe((data : any)=>{        
        //this.regService.loginbyHttpClient(this.constant.GetUserKey.UserName, password,this.constant.GetUserKey.UniqueKey).subscribe((data : any)=>{        
        //this.regService.loginbyHttpClient(this.user.UserName, password,this.user.UniqueKey).subscribe((data : any)=>{        
        this.regService.loginbyHttpClient(this.username, password, this.uniqueKey).subscribe(function (data) {
            _this.userTokenData = data;
            _this.regService.userToken = _this.userTokenData.access_token;
            localStorage.setItem('userToken', _this.userTokenData.access_token);
            // LocalStorageService.SetAuthorizationData(data.access_token);
            //if(localStorage.getItem("OSKey")==null||localStorage.getItem("SelfCareAcKey")==null)
            if (param1 == null || param2 == null) {
                _this.callservices();
            }
            setTimeout(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page_page__["a" /* PagePage */], { 'ActiveBankName': _this.ActiveBankName });
            }, 1000);
            setTimeout(function () {
                loading.dismiss();
            }, 2000);
        });
    };
    LoginPage.prototype.callservices = function () {
        var _this = this;
        this.regService.getservicesByHttpclient().subscribe(function (data) {
            _this.OS = JSON.stringify(data);
            __WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.DB.OS, _this.OS);
        });
        this.PartyMastId = JSON.parse(__WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.DigiParty)).PartyMastId;
        this.TenantId = JSON.parse(__WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__["a" /* StorageService */].GetItem(this.constant.DB.DigiParty)).TenantId;
        this.scr = {
            // PartyMastId:localStorage.getItem('PartyMastId'),
            PartyMastId: this.PartyMastId,
            TenantId: this.TenantId
        };
        this.regService.getAccountsbyHttpClient(this.scr).subscribe(function (data) {
            _this.SCReq = JSON.stringify(data);
            __WEBPACK_IMPORTED_MODULE_8__services_Storage_Service__["a" /* StorageService */].SetItem(_this.constant.DB.SelfCareAc, _this.SCReq);
        });
    };
    LoginPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    LoginPage.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__banking_banking__["a" /* BankingPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <div class="spacer" style="width:300px;height:46px;" id="login-spacer2"></div>\n  <form [formGroup]="formgroup" id="login-form1" #loginForm="ngForm" (ngSubmit)="OnSubmit(Password.value)">\n    <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n      <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n    </div>\n    <ion-list id="login-list5">\n      <ion-item id="login-input2">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input formControlName="pword" type="password" #Password ngModel name="Password" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item *ngIf="pword.hasError(\'required\') && pword.touched">\n        <p style="color:red;"> *Please Enter Password</p>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <button [disabled]="loginForm.invalid" id="login-button1" ion-button color="assertive" block on-click="goToHome()">\n      Log in\n    </button>\n    <button id="login-button2" ion-button clear color="assertive" block href-inappbrowser="/signup">\n      Reset Password\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__services_Constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__services_app_data_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobile_recharge_mobile_recharge__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banking_banking__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    //constructor(public navCtrl: NavController, public navParams: NavParams, private userService: RegisterService, private details:RegisterPage) {
    function HomePage(navCtrl, route, userService) {
        //constructor(public navCtrl: NavController, private userService: RegisterService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.userService = userService;
        //constructor(public navCtrl: NavController) {
    }
    HomePage.prototype.ngOnInit = function () {
        //this.resetForm();
        // this.userService.getUserClaims().subscribe((data: any) => {
        //   this.userClaims = data;
        //    //this.details.userClaims;
        // });
        //this.userClaims= this.details.userClaims;
        //this.userClaims= this.navParams.get('data.userClaims');
        this.userClaims = this.userService.userClaims;
        // this.userClaims = Array.of(this.userService.userClaims); 
        //  onSu this.foundBooks = Array.of(this.foundBooks); bmit(mobno:any){
        //  this.userService.sendMobileNo(mobno).subscribe(response=>{
        //   this.userClaims= response});
        //  }
    };
    // resetForm(form?: NgForm) {
    //   if (form != null)
    //     form.reset();
    //   this.person = {
    //     FirstName: '',
    //     LastName: ''
    //   }
    // }
    HomePage.prototype.goToMobileRecharge = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mobile_recharge_mobile_recharge__["a" /* MobileRechargePage */]);
    };
    HomePage.prototype.goToBanking = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__banking_banking__["a" /* BankingPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic\sahakari\sahakari_mobile\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n<!-- <ion-content padding id="page1">\n  <ion-list id="home-list2">\n    <ion-item color="assertive" on-click="goToBanking()" id="home-list-item6">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Banking\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" on-click="goToMobileRecharge()" id="home-list-item9">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Recharge/Payment\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="home-list-item8">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Reports\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="home-list-item7">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Settings\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="home-list-item10">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Help\n      </h2>\n    </ion-item>\n    <ion-item color="assertive" id="home-list-item11">\n      <ion-avatar item-left>\n        <img />\n      </ion-avatar>\n      <h2>\n        Products\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<div class="row" *ngIf="userClaims">\n  <div class="col s12 m7">\n    <div class="card"> -->\n      <!-- <div class="card-content">\n        <span>Username :{{userClaims.UserName}}</span>\n        <br>\n        <span>Email : {{userClaims.Email}}</span>\n        <br>\n        <span>Full Name : {{userClaims.FirstName}} {{userClaims.LastName}}</span>\n        <br>\n        <span>Logged On : {{userClaims.LoggedOn}}</span>\n      </div> -->\n      \n      <!-- <div class="card-content"> -->\n        <!-- <span>Username :{{userClaims.Name}}</span>\n        <br>\n        <span>Email : {{userClaims.Address}}</span>\n        <br> -->\n        <!-- <div *ngFor="let order of userClaims" style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;">\n          <span> OrderNumber : {{ order }}</span> <br>\n          <span>P_O_Number : {{ order}}</span> <br>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>  -->\n\n<!-- <form id="home-form2" (ngSubmit)="OnSubmit(userForm)" #userForm="ngForm">\n  <ion-item id="home-input7">\n    <ion-label>\n      First Name\n    </ion-label>\n    <ion-input type="text" placeholder="" name="FirstName" #FirstName="ngModel" [(ngModel)]="person.FirstName" ></ion-input>\n  </ion-item>\n  <ion-item id="home-input4">\n    <ion-label>\n      Last Name\n    </ion-label>\n    <ion-input type="text" placeholder="" name="LastName" #LastName="ngModel" [(ngModel)]="person.LastName"></ion-input>\n  </ion-item>\n  <button id="home-button1" ion-button color="positive" block>\n    Submit\n  </button>\n</form> -->\n\n<div class="row" *ngIf="userClaims">\n  <div class="col s12 m7">\n    <div class="card">\n        <!--interpolation-->\n      <div class="card-content">     \n           <div *ngFor="let order of userClaims" style="border: 1px solid lightgrey; padding: 15px; margin: 5px 0;">\n      <span> Id : {{ order.Id |json }}</span> <br>\n      <span>Name : {{ order.Name | json }}</span> <br>\n      <span>Address : {{ order.Address }}</span> <br>\n\n    </div> \n\n      </div>       \n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"E:\ionic\sahakari\sahakari_mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_app_data_service__["a" /* RegisterService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { UserService } from "../shared/user.service";





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(event, router, localstorageService) {
        this.event = event;
        this.router = router;
        this.localstorageService = localstorageService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        console.log("Hi, I'm interceptor");
        console.log(req);
        // if (req.headers.get('No-Auth') == "True"){
        //     return next.handle(req.clone());
        // }
        if (req.url.indexOf("/token") > 0) {
            var headersforTokenAPI = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-urlencoded' });
            return next.handle(req);
        }
        // if(req.method=="POST"){
        // }
        // if(req.method=="GET"){
        // }
        if (localStorage.getItem('userToken') != null) {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
                .do(function (succ) { }, function (err) {
                if (err.status === 401)
                    //this.router.navigateByUrl('/login');
                    // this.navCtrl.push(LoginPage);  
                    _this.event.publish('UNAUTHORIZED');
            });
        }
        else {
            this.router.navigateByUrl('/login');
            // this.navCtrl.push(LoginPage); 
        }
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_Storage_Service__["a" /* StorageService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* unused harmony export routing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_guard__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(52);

//import {ListPage } from '../pages/list/list';


//import { SignInComponent } from './user/sign-in/sign-in.component';


var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_0__pages_register_register__["a" /* RegisterPage */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth_guard__["a" /* AuthGuard */]] },
];
var routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoLogoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Storage_Service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MINUTES_UNITL_AUTO_LOGOUT = 5; // in mins
var CHECK_INTERVAL = 15000; // in ms
var STORE_KEY = 'lastAction';
var AutoLogoutService = /** @class */ (function () {
    function AutoLogoutService(router, app) {
        this.router = router;
        this.app = app;
        this.navCtrl = app.getActiveNav();
        console.log('object created');
        this.check();
        this.initListener();
        this.initInterval();
    }
    AutoLogoutService.prototype.getLastAction = function () {
        return parseInt(__WEBPACK_IMPORTED_MODULE_4__Storage_Service__["a" /* StorageService */].GetItem(STORE_KEY));
    };
    AutoLogoutService.prototype.setLastAction = function (lastAction) {
        __WEBPACK_IMPORTED_MODULE_4__Storage_Service__["a" /* StorageService */].SetItem(STORE_KEY, lastAction.toString());
    };
    AutoLogoutService.prototype.initListener = function () {
        var _this = this;
        document.body.addEventListener('click', function () { return _this.reset(); });
        document.body.addEventListener('mouseover', function () { return _this.reset(); });
        document.body.addEventListener('mouseout', function () { return _this.reset(); });
        document.body.addEventListener('keydown', function () { return _this.reset(); });
        document.body.addEventListener('keyup', function () { return _this.reset(); });
        document.body.addEventListener('keypress', function () { return _this.reset(); });
    };
    AutoLogoutService.prototype.reset = function () {
        this.setLastAction(Date.now());
    };
    AutoLogoutService.prototype.initInterval = function () {
        var _this = this;
        setInterval(function () {
            _this.check();
        }, CHECK_INTERVAL);
    };
    AutoLogoutService.prototype.check = function () {
        var now = Date.now();
        var timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
        var diff = timeleft - now;
        var isTimeout = diff < 0;
        if (isTimeout) {
            __WEBPACK_IMPORTED_MODULE_4__Storage_Service__["a" /* StorageService */].RemoveItem("lastAction");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
    };
    AutoLogoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]])
    ], AutoLogoutService);
    return AutoLogoutService;
}());

//# sourceMappingURL=AutoLogOutService.js.map

/***/ })

},[378]);
//# sourceMappingURL=main.js.map