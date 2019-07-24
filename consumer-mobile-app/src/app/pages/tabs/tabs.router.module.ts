import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
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
            loadChildren: '../profile/profile.module#profilePageModule'
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

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
