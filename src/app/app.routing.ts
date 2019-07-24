import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';


const APP_ROUTE: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PrincipalComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
