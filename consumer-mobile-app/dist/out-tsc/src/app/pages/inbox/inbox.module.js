import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { inboxPage } from './inbox.page';
var inboxPageModule = /** @class */ (function () {
    function inboxPageModule() {
    }
    inboxPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: '', component: inboxPage }])
            ],
            declarations: [inboxPage]
        })
    ], inboxPageModule);
    return inboxPageModule;
}());
export { inboxPageModule };
//# sourceMappingURL=inbox.module.js.map