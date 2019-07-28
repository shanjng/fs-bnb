import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationPage } from './registration.page';
var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: '', component: RegistrationPage }])
            ],
            declarations: [RegistrationPage]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());
export { RegistrationPageModule };
//# sourceMappingURL=registration.module.js.map