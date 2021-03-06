System.register(['angular2/core', 'angular2/router', './app.directives', './components/account/login.component', './components/dashboard/dashboard.component', './components/dashboard/user.component', './services/account'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_directives_1, login_component_1, dashboard_component_1, user_component_1, account_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_directives_1_1) {
                app_directives_1 = app_directives_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (account_1_1) {
                account_1 = account_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _accountService) {
                    this._router = _router;
                    this._accountService = _accountService;
                    this.logoff = function () {
                        this._accountService.logoff();
                        this._router.navigate(['Login']);
                    };
                    var publicPaths = ["login"];
                    _router.subscribe(function (url) {
                        if (!_accountService.isLogged() && publicPaths.indexOf(url) < 0) {
                            return;
                        }
                        var form = $("#app-content-body form");
                        if (form.size() == 0) {
                            return;
                        }
                        form.removeData("validator");
                        form.removeData("unobtrusiveValidation");
                        $.validator.unobtrusive.parse(form);
                    });
                    if (!_accountService.isLogged()) {
                        _router.navigate(['Login']);
                    }
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/layout',
                        directives: [router_1.ROUTER_DIRECTIVES, app_directives_1.APP_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/', name: 'Dashboard', component: dashboard_component_1.DashboardComponent },
                        { path: '/users', name: 'Users', component: user_component_1.UserComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, account_1.AccountService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map