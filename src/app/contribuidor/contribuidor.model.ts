export class Contribuidor{
    nome: string;
    about: string;
    link: string;
    imagem: string;
    siteNome: string;

    constructor(nome:string, about:string, link:string, imagem:string, siteNome:string){
        this.nome = nome;
        this.about = about;
        this.link = link;
        this.imagem = imagem;
        this.siteNome = siteNome;
    }
}