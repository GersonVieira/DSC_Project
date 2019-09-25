import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { ActivatedRoute } from '@angular/router';
import { Filme } from '../filme/filme';
import { ComentariosService } from '../services/comentarios.service'
import { Comentarios } from '../models/comentarios';
import { User } from '../models/user';
import { UsuariosService } from '../services/usuarios.service';
import { log } from 'util';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.css']
})
export class DetalheFilmeComponent implements OnInit {
  filme:Filme;
  comentario:string="";
  id:string;
  index:number=0;
  relacionados:string[]=['https://saga.art.br//wp-content/uploads/2016/09/Pacote-de-Vetores-da-Turma-do-Chaves-Corel-Draw-03-500x600.jpg','http://post-press.com/wp-content/uploads/250x300.gif','https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/Twilight_Poster.jpg/250px-Twilight_Poster.jpg']
  constructor(protected service: FilmesService,private router:ActivatedRoute, protected service2:ComentariosService,private service3:UsuariosService ) {
        this.id=router.snapshot.params['id'];
        
        this.filme=this.service.getFilmes()[Number(this.id)];
        this.setStorage()
        
        
        
        
   }
   setStorage(){
    localStorage.setItem("header","Detalhe Filme")
   }
   isLoggedIn():boolean{
     if(localStorage.getItem("username")===null){
        return false;
     }
     return true;
   }
  setIndex():void{
    
    
    this.service.setIndex(Number(this.id));
  }
  getNomeFilme():string{
    return this.filme.nome;
  }
  getImagemFilme():string{
    return this.filme.imagem;
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
  getComentarios():Array<Comentarios>{
    return this.service2.getComentarios(Number(this.id));
  }
  asd:number[]
  setComentario(){
    this.service2.getComentarios(Number(this.id)).push(new Comentarios(this.comentario,this.service3.getUsuariologado()))
   
    
    this.comentario="";
  }




}
