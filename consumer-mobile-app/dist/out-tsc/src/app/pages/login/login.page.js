import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../services/index';
import { NavController, AlertController } from '@ionic/angular';
import { User } from '../../models/user.model';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.authUser = new User();
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.presentAlert = function (source, err) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert',
                            subHeader: 'Problem with ' + source,
                            message: err,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.navTo = function (dest) {
        console.log(dest);
        this.navCtrl.navigateForward(dest);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authService.login(this.authUser).then(function (res) {
            var testId = localStorage.getItem('userid');
            console.log(testId);
            _this.navCtrl.navigateForward('main/explore');
        }).catch(function (err) {
            _this.presentAlert("Login", err.error);
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AuthService,
            AlertController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map