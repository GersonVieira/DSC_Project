export class Test{
    id:number;
    nome:string;
    getId():number{
        return this.id;
    }

    setId(id:number){
        this.id=id;
    }

    getNome():string{
        return this.nome;
    }

    setNome(nome:string){
        this.nome=nome;
    }
}