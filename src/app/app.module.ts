import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContribuidoresComponent } from './contribuidores/contribuidores.component';
import { ContribuidorComponent } from './contribuidor/contribuidor.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FilmesComponent } from './filmes/filmes.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ContribuidoresComponent,
    ContribuidorComponent,
    ComentarioComponent,
    RodapeComponent,
    CategoriasComponent,
    FilmesComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
