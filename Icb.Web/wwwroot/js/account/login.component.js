System.register(['angular2/core', 'angular2/router', './login.model', './../services/account'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_model_1, account_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_model_1_1) {
                login_model_1 = login_model_1_1;
            },
            function (account_1_1) {
                account_1 = account_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, accountService) {
                    this.router = router;
                    this.accountService = accountService;
                    if (accountService.hasToken()) {
                        router.navigate(['Dashboard']);
                        return;
                    }
                    this.model = new login_model_1.LoginModel();
                }
                LoginComponent.prototype.onSubmit = function (form) {
                    console.log('ok', $(form).valid());
                };
                LoginComponent = __decorate([
                    core_1.View({
                        templateUrl: "/templates/account/login"
                    }),
                    core_1.Component({
                        providers: [account_1.AccountService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, account_1.AccountService])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map