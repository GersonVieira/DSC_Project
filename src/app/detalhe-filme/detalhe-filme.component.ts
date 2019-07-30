import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { ActivatedRoute } from '@angular/router';
import { Filme } from '../filme/filme';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.css']
})
export class DetalheFilmeComponent implements OnInit {
  filme:Filme;
  id:string;
  index:number=0;
  relacionados:string[]=['https://saga.art.br//wp-content/uploads/2016/09/Pacote-de-Vetores-da-Turma-do-Chaves-Corel-Draw-03-500x600.jpg','http://post-press.com/wp-content/uploads/250x300.gif','https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/Twilight_Poster.jpg/250px-Twilight_Poster.jpg']
  constructor(protected service: FilmesService,private router:ActivatedRoute) {
        this.id=router.snapshot.params['id'];
        this.setIndex();
        this.filme=this.getFilme();
   }
  setIndex():void{
    this.service.setIndex(Number(this.id));
  }
  getNomeFilme():string{
    return this.filme.getNome();
  }
  getImagemFilme():string{
    return this.filme.getImagem();
  }
  getFilme():Filme{
    return this.service.getFilmeAtual();
  }
  ngOnInit() {
  }
  passarRecomendado():void{
    this.index=1;
  }
  voltarRecomendado():void{
    this.index=0;
  }
  getRecomendado1():string{
    return this.relacionados[this.index]
  }
  getRecomendado2():string{
    return this.relacionados[this.index+1]
  }



}
