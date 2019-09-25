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
import { FormsModule } from '@angular/forms';
import { TelaDetalheComponent } from './tela-detalhe/tela-detalhe.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { FilmeComponent } from './filme/filme.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { FilmesService} from './services/filmes.service';
import { UsuariosService } from './services/usuarios.service';
import { SeguidoresComponent } from './seguidores/seguidores.component';
import { CategoriaService } from './services/categoria.service';
import { ComentariosService } from './services/comentarios.service';
import { AutenticadorService } from './services/autenticador.service';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';

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
    TelaDetalheComponent,
    PerfilComponent,
    EditarPerfilComponent,
    FilmeComponent,
    PrincipalComponent,
    DetalheFilmeComponent,
    CategoriaComponent,
    CabecalhoComponent,
    MenuComponent,
    SeguidoresComponent,
    CadastroFilmeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [FilmesService,UsuariosService,CategoriaService,ComentariosService,AutenticadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
