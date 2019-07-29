import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'existing',
        children: [
          {
            path: '',
            loadChildren: '../existing/existing.module#existingPageModule'
          }
        ]
      },
      {
        path: 'new',
        children: [
          {
            path: '',
            loadChildren: '../new/new.module#newPageModule'
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
        redirectTo: '/main/existing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/existing',
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
