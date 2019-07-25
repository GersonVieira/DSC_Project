import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import {PerfilComponent} from 'src/app/perfil/perfil.component'
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';

import { CadastroComponent } from './cadastro/cadastro.component';

/*
* O path diz qual vai ser o caminho e logo depois
* coloca o componente que esse caminho vai buscar
*/
const APP_ROUTE: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PrincipalComponent },
  { path: 'perfil',component:PerfilComponent},{path:'perfil/edit',component: EditPerfilComponent},
  { path: '', component: FilmesComponent },
  { path: 'cadastro', component: CadastroComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
