import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ListingService } from '../../services/index';
import { Listing } from 'src/app/models';
var ListingPage = /** @class */ (function () {
    function ListingPage(route, listingService) {
        this.route = route;
        this.listingService = listingService;
        this.listing = new Listing();
    }
    ListingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.pipe(filter(function (params) { return params.listingId; }))
            .subscribe(function (params) {
            _this.listing.id = params.listingId;
        });
        this.getById();
    };
    ListingPage.prototype.getById = function () {
        var _this = this;
        console.log(this.listing.id);
        this.listingService.getById(this.listing.id)
            .then(function (res) { return (_this.listing = res); })
            .catch(function (err) { return console.log(err); });
    };
    ListingPage = tslib_1.__decorate([
        Component({
            selector: 'app-listing',
            templateUrl: './listing.page.html',
            styleUrls: ['./listing.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            ListingService])
    ], ListingPage);
    return ListingPage;
}());
export { ListingPage };
//# sourceMappingURL=listing.page.js.map