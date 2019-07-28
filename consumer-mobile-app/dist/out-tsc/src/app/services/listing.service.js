import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.get = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(environment.BaseURL + "/api/listing/")
                .subscribe(function (response) {
                resolve(response);
            }, function (err) { return reject(err); });
        });
    };
    ListingService.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(environment.BaseURL + "/api/listing/" + id)
                .subscribe(function (response) {
                resolve(response);
            }, function (err) { return reject(err); });
        });
    };
    ListingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ListingService);
    return ListingService;
}());
export { ListingService };
//# sourceMappingURL=listing.service.js.map