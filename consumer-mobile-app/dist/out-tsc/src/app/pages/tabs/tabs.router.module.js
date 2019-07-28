import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'explore',
                children: [
                    {
                        path: '',
                        loadChildren: '../explore/explore.module#ExplorePageModule'
                    }
                ]
            },
            {
                path: 'saved',
                children: [
                    {
                        path: '',
                        loadChildren: '../saved/saved.module#SavedPageModule'
                    }
                ]
            },
            {
                path: 'trips',
                children: [
                    {
                        path: '',
                        loadChildren: '../trips/trips.module#tripsPageModule'
                    }
                ]
            },
            {
                path: 'inbox',
                children: [
                    {
                        path: '',
                        loadChildren: '../inbox/inbox.module#inboxPageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/explore',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/explore',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map