import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesComponent } from './filmes/filmes.component';
import { LoginComponent } from './login/login.component';


const APP_ROUTE: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: FilmesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
