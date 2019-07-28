import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
var UserService = /** @class */ (function () {
    function UserService(
    // Dependency Injection!!???
    httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get(environment.BaseURL + "/api/user/")
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserService.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get(environment.BaseURL + "/api/user/" + id)
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map