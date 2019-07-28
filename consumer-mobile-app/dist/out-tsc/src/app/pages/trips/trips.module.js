import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tripsPage } from './trips.page';
var tripsPageModule = /** @class */ (function () {
    function tripsPageModule() {
    }
    tripsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: '', component: tripsPage }])
            ],
            declarations: [tripsPage]
        })
    ], tripsPageModule);
    return tripsPageModule;
}());
export { tripsPageModule };
//# sourceMappingURL=trips.module.js.map