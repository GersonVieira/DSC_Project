import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesComponent } from './filmes/filmes.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelaDetalheComponent } from './tela-detalhe/tela-detalhe.component';


const APP_ROUTE: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: FilmesComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'detalhe', component: TelaDetalheComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
