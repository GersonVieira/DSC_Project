import { Contribuidor } from '../contribuidor/contribuidor.model';

export class Contribuidores{
    contribuidores: Contribuidor[] = new Array();

    constructor(){
        //this.contribuidores = [
        //new Contribuidor('Gefferson Pires', 'Graduando em LCC', "https://github.com/geffpires", "/assets/images/gefffoto.jpg", 'GitHub'),
        //new Contribuidor('Gerson Pires', 'Graduando em LCC', "https://github.com/gersonvieira", "/assets/images/gersonft.jpg", 'GitHub'),
        //new Contribuidor('Douglas Cardins', 'Graduando em SI', "https://github.com/DouglasTex", "https://avatars1.githubusercontent.com/u/20545738?s=460&v=4", 'GitHub')
    //];
    }

    addContribuidor(c: Contribuidor){
        this.contribuidores.push(c);
    }
    getContribuidores(): Contribuidor[]{
        return this.contribuidores;
    }
}