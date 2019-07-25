import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import {PerfilComponent} from 'src/app/perfil/perfil.component'
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';


const APP_ROUTE: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PrincipalComponent },
  { path: 'perfil',component:PerfilComponent},{path:'perfil/edit',component: EditPerfilComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
