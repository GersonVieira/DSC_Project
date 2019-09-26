
export class Usuario{
    idUsuario: number;
    nome: string;
    login: string;
    senha: string;
    imagem: string;
    constructor(idUsuario: number, nome: string,login: string,senha: string,imagem: string){
             this.idUsuario=idUsuario;
             this.imagem=imagem;
             this.login=login;
             this.senha=senha;
             this.nome=nome;
         }

    getIdUsuario(): number{
        return this.idUsuario;
    }
    
   
    
    
    getNome(): string{
        return this.nome;
    }
    setNome(novoNome: string){
        this.nome = novoNome;
    }
    getLogin(): string{
        return this.login;
    }
    setLogin(novoLogin: string){
        this.login = novoLogin;
    }
    getSenha(): string{
        return this.senha;
    }
    setSenha(novaSenha: string){
        this.senha = novaSenha;
    }
    
    getImagem(): string{
        return this.imagem;
    }
    setImagem(novaImagem: string){
        this.imagem = novaImagem;
    }

}