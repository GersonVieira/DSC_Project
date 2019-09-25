
export class Usuario{
    constructor(
        private idUsuario: number,
        private nome: string,
        private login: string,
        private senha: string,
        private favoritos: number[],
        private idSeguidores: number[],
        private idSeguindo: number[],
        private imagem: string){}

    getIdUsuario(): number{
        return this.idUsuario;
    }
    getIdSeguindo(): number[]{
        return this.idSeguindo;
    }
    addSeguindo(idUsuario: number){
        this.idSeguindo.push(idUsuario);
    }
    deixarDeSeguir(idUsuario: number){
        let array = this.idSeguindo;
        for (let item of array){
            if(item == idUsuario){
                this.idSeguindo.splice(item, 1);
                break;
            }
        }
    }
    getIdSeguidores(): number[]{
        return this.idSeguidores;
    }
    addSeguidor(idUsuario: number){
        this.idSeguidores.push(idUsuario);
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
    getFavoritos(): number[]{
        return this.favoritos;
    }
    addFavorito(idFilme: number){
        this.favoritos.push(idFilme);
    }
    removerFavorito(idFilme: number){
        let array = this.favoritos;
        for (let item of array){
            if(item == idFilme){
                this.favoritos.splice(item, 1);
                break;
            }
        }
    }
    getImagem(): string{
        return this.imagem;
    }
    setImagem(novaImagem: string){
        this.imagem = novaImagem;
    }

}