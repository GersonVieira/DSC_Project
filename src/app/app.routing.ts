import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesComponent } from './filmes/filmes.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelaDetalheComponent } from './tela-detalhe/tela-detalhe.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';


const APP_ROUTE: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: FilmesComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'detalhe', component: TelaDetalheComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'perfil/editar', component: EditarPerfilComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
