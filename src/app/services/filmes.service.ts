import { Filme } from '../filme/filme';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Test } from "../models/teste"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take} from 'rxjs/operators';
@Injectable({providedIn:'root'})
export class FilmesService {
   
    index:number = -1;
    categoriaDefalt:string="Todos";
    list:Array<Filme>=[];
    filmes:Array<Filme>=[];
    filme:Filme
    setFilmeArray(){
        this.filme=new Filme();
    }
        
    getIndex():number{
        return this.index;
    }
    setIndex(index:number):void{
        this.index=index;
    }
    getFilmes():Filme[]{
        return this.filmes;
    }
    getNomeFilme():string{
        return this.filmes[this.getIndex()].getNome();
    }
    getFilmeAtual():Filme{
        return this.filmes[this.index]
    }
    getFilmesPorCategoria():Filme[]{
        this.list=[];
        this.categoriaDefalt=this.categoriaDefalt;
        if(this.categoriaDefalt=="Todos"){
            return this.filmes;
        }
        let array=this.filmes;
        for(let item of array){
            let catego=item.categorias;
            
                if(catego==this.categoriaDefalt){
                    this.list.push(item);
                   
              }
        }
        return this.list;
    }
    setCategoriaDefaut(categoria:string):void{
        this.categoriaDefalt=categoria;
    }
    getFavoritos(idFilmes:number[]): Filme[]{
        let array = [];
        for(let filme of this.filmes){
            for(let id of idFilmes)
                if (filme.id==id) {
                    array.push(filme);
                }
        }
        return array;
    }
    constructor(private http:HttpClient){

    }
    url='http://localhost:8080/filmes'; 
    getTestbd(){
        return this.http.get<Test[]>(this.url);
    }
    getAll(){
        this.http.get('http://localhost:8080/filmes').subscribe(data=>
        this.filmes=<Filme[]>data);
    }
    test:Test=new Test();
    adicionarTeste(){
        this.setFilmeArray();
        
        this.filme.id=1; 
        this.filme.nome="O REI LEÃO";
        this.filme.categorias="Animação";
        this.filme.imagem="http://br.web.img3.acsta.net/r_1920_1080/pictures/19/05/07/20/54/2901026.jpg";
        this.filme.sinopse="Simba (Donald Glover) é um jovem leão cujo destino é se tornar o rei da selva";
        this.http.post(this.url,this.filme).subscribe();
        this.filme.id=2; 
        this.filme.nome="HOMEM-ARANHA: LONGE DE CASA";
        this.filme.categorias="Ação";
        this.filme.imagem="http://br.web.img2.acsta.net/r_1920_1080/pictures/19/07/05/17/30/5167951.jpg";
        this.filme.sinopse="Peter Parker (Tom Holland) está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio";
        this.http.post(this.url,this.filme).subscribe();
    

    }
    adicionarFilme(nome:string,imagem:string,categoria:string){
        this.filme=new Filme();
        this.filme.setImagem(imagem);
        this.filme.setNome(nome);
        this.filme.setCategorias(categoria);
        this.http.post(this.url,this.filme).subscribe();
        
    }
    adicionarTeste2():Observable<any>{
        
        this.test.id=1; 
        this.test.nome="1asda4864";
        
        return this.http.delete('http://localhost:8080/filmes/2');
        
    }
}