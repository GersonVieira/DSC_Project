import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

/*
* O path diz qual vai ser o caminho e logo depois
* coloca o componente que esse caminho vai buscar
*/
const APP_ROUTE: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: FilmesComponent },
  { path: 'cadastro', component: CadastroComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
