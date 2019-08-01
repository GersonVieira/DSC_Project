export class User{
    nome:string;
    sobrenome:string;
    imagemURL:string;
    descricao:string;
    seguidores:Array<number>;
    seguindo:Array<number>;
    login:string;
    senha:string;
    constructor(nome:string,sobrenome:string,imagemURL:string, descricao:string,
        seguidores:Array<number>,seguindo:Array<number>,login:string,
        senha:string){
        this.nome=nome;
        this.imagemURL=imagemURL;
        this.descricao=descricao;
        this.seguidores=seguidores;
        this.seguindo=seguindo;
        this.login=login;
        this.senha=senha;
    }
    getNome():string{
        return this.nome;
    }
    getImagem():string{
        return this.imagemURL;
    }

}