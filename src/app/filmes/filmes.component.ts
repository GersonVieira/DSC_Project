import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme/filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes:Filme[];
  constructor() {
    this.filmes=[
      new Filme('O Exterminador','https://saga.art.br//wp-content/uploads/2016/09/Pacote-de-Vetores-da-Turma-do-Chaves-Corel-Draw-03-500x600.jpg',1),
      new Filme('Dora Avemtireira','http://post-press.com/wp-content/uploads/250x300.gif',2),
      new Filme('Crepusculo','https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/Twilight_Poster.jpg/250px-Twilight_Poster.jpg',3),
      new Filme('Chaves','https://f.i.uol.com.br/fotografia/2018/01/30/15173364995a70b7b394851_1517336499_3x2_md.jpg',4),
      new Filme('Vingadores','https://conteudo.imguol.com.br/c/entretenimento/90/2019/04/23/poster-brasileiro-de-vingadores-ultimato-1556045801213_v2_1225x1800.jpg',5),
      new Filme('xmen','https://cdn.vox-cdn.com/thumbor/wZS_FjlphD-N1vYvbyd-Q7ISiXw=/0x0:1988x3056/1200x0/filters:focal(0x0:1988x3056):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/18323554/XMEN2019001_DC11.jpg',6),
      new Filme('Homem-Aranha','https://ingresso-a.akamaihd.net/img/cinema/cartaz/21308-cartaz.jpg',7),
      new Filme('Jovens Titans','https://cdnv2.moovin.com.br/marbig/imagens/produtos/original/caderno-brochura-capa-dura-universitario-teen-titans-go-80-folhas-img-49130.jpg',8),
      new Filme('Alto da compadecida','https://upload.wikimedia.org/wikipedia/pt/thumb/b/bf/O_auto_da_compadecida.jpg/200px-O_auto_da_compadecida.jpg',9)]
    }
  getFilmes(): Filme[]{
    return this.filmes;
  }

  ngOnInit() {
  }

}
