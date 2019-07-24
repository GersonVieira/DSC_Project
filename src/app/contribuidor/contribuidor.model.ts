export class Contribuidor{
    private nome: string;
    private about: string;
    private link: string;
    private imagem: string;
    private siteNome: string;

    constructor(nome:string, about:string, link:string, imagem:string, siteNome:string){
        this.nome = nome;
        this.about = about;
        this.link = link;
        this.imagem = imagem;
        this.siteNome = siteNome;
    }

    public getNome(): string{
        return this.nome;
    }
    public getAbout(): string{
        return this.about;
    }
    public getLink(): string{
        return this.link;
    }
    public getImagem(): string{
        return this.imagem;
    }
    public getSiteNome(): string{
        return this.siteNome;
    }
}