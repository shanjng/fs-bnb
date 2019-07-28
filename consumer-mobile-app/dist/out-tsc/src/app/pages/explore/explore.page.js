import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListingService } from '../../services/index';
import { NavController, AlertController } from '@ionic/angular';
var ExplorePage = /** @class */ (function () {
    function ExplorePage(listingService, alertCtrl, navCtrl) {
        this.listingService = listingService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    ExplorePage.prototype.ngOnInit = function () {
        this.get();
    };
    ExplorePage.prototype.navToListing = function (id) {
        this.navCtrl.navigateForward(['listing'], { queryParams: { listingId: id }
        });
    };
    ExplorePage.prototype.presentAlert = function (source, err) {
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
    ExplorePage.prototype.get = function () {
        var _this = this;
        this.listingService.get()
            .then(function (res) {
            console.log(res);
            _this.listings = res;
        })
            .catch(function (err) {
            return _this.presentAlert("Explore", err.error);
        });
    };
    ExplorePage = tslib_1.__decorate([
        Component({
            selector: 'app-explore',
            templateUrl: 'explore.page.html',
            styleUrls: ['explore.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ListingService,
            AlertController,
            NavController])
    ], ExplorePage);
    return ExplorePage;
}());
export { ExplorePage };
//# sourceMappingURL=explore.page.js.map