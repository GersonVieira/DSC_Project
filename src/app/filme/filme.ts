import { Router } from '@angular/router';

export class Filme {
    private router: Router;
    constructor(private nome: string,private imagem: string, private id: number ){
        
    }

    public getNome(): string{
        return this.nome;
    }
    public getId(): number{
        return this.id;
    }
    public getImagem(): string{
        return this.imagem;
    }
    
}