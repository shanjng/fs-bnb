import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController, NavController } from '@ionic/angular';
import { User } from '../../models/user.model';
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.authUser = new User();
    }
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage.prototype.presentAlert = function (source, err) {
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
    RegistrationPage.prototype.register = function () {
        var _this = this;
        this.authService.register(this.authUser).then(function (res) {
            var testId = localStorage.getItem('userid');
            console.log(testId);
            _this.navCtrl.navigateForward('main/explore', {
                queryParams: {
                    // puts id (res-ponse) in the URL ?user=userid
                    user: res
                }
            });
        }).catch(function (err) {
            console.log(err);
            _this.presentAlert("Registration", err.error);
        });
    };
    RegistrationPage = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.page.html',
            styleUrls: ['./registration.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AuthService,
            AlertController])
    ], RegistrationPage);
    return RegistrationPage;
}());
export { RegistrationPage };
//# sourceMappingURL=registration.page.js.map