import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'main', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' },
  { path: 'property', loadChildren: './pages/property/property.module#PropertyPageModule' },
] 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
