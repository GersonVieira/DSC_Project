export class Filme {
    private nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    public getNome(): string{
        return this.nome;
    }
}