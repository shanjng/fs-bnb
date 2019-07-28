import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from "../../models/user.model";
var ProfilePage = /** @class */ (function () {
    function ProfilePage(userService) {
        var _this = this;
        this.userService = userService;
        this.user = new User();
        this.user.id = localStorage.getItem("userid");
        this.userService.getById(this.user.id)
            .then(function (res) {
            _this.user = res;
        })
            .catch(function (err) {
            console.log("err: ", err);
        });
    }
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: 'profile.page.html',
            styleUrls: ['profile.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map