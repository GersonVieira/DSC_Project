import { Filme } from '../filme/filme';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';

@Injectable()
export class FilmesService {
    index:number = -1;
    categoriaDefalt:string="Todos";
    list:Array<Filme>=[];
    filmes:Filme[] = [
            new Filme("O REI LEÃO",
            "Simba (Donald Glover) é um jovem leão cujo destino é se tornar o rei da selva. Entretanto, uma armadilha elaborada por seu tio Scar (Chiwetel Ejiofor) faz com que Mufasa (James Earl Jones), o atual rei, morra ao tentar salvar o filhote. Consumido pela culpa, Simba deixa o reino rumo a um local distante, onde encontra amigos que o ensinam a mais uma vez ter prazer pela vida.",
            [new Categoria("Aventura"),new Categoria("Animação")],
            "http://br.web.img3.acsta.net/r_1920_1080/pictures/19/05/07/20/54/2901026.jpg",0),

            new Filme ("HOMEM-ARANHA: LONGE DE CASA",
            "Peter Parker (Tom Holland) está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury (Samuel L. Jackson). Precisando de ajuda para enfrentar monstros nomeados como Elementais, Fury o convoca para lutar ao lado de Mysterio (Jake Gyllenhaal), um novo herói que afirma ter vindo de uma Terra paralela. Além da nova ameaça, Peter precisa lidar com a lacuna deixada por Tony Stark, que deixou para si seu óculos pessoal, com acesso a um sistema de inteligência artificial associado à Stark Industries.",
            [new Categoria("Ação"),new Categoria("Aventura")],
            "http://br.web.img2.acsta.net/r_1920_1080/pictures/19/07/05/17/30/5167951.jpg",1),

            new Filme("TURMA DA MÔNICA - LAÇOS",
            "Floquinho, o cachorro do Cebolinha (Kevin Vechiatto), desapareceu. O menino desenvolve então um plano infalível para resgatar o cãozinho, mas para isso vai precisar da ajuda de seus fiéis amigos Mônica (Giulia Benite), Magali (Laura Rauseo) e Cascão (Gabriel Moreira). Juntos, eles irão enfrentar grandes desafios e viver grandes aventuras para levar o cão de volta para casa.",
            [new Categoria("Aventura")],
            "http://br.web.img3.acsta.net/r_1920_1080/pictures/19/04/03/18/25/1334771.jpg",2),

            new Filme("ANNABELLE 3: DE VOLTA PARA CASA",
            "Quando Ed (Patrick Wilson) e Lorraine Warren (Vera Farmiga) deixam sua casa durante um fim de semana, a filha do casal, a pequena Judy Warren (McKenna Grace), é deixada aos cuidados de sua babá (Madison Iseman). Mas as duas entram em perigo quando a maligna boneca Annabelle, aproveitando que os investigadores paranormais estão fora de jogo, anima os letais e aterrorizantes objetos contidos na Sala dos Artefatos dos Warren.",
            [new Categoria("Terror")],
            "http://br.web.img3.acsta.net/r_1920_1080/pictures/19/06/24/09/16/0917082.jpg",3),
            
            new Filme("AS TRAPACEIRAS",
            "Beaumont-sur-mer, Riviera Francesa. Josephine (Anne Hathaway) e Penny (Rebel Wilson) são duas manipuladoras, conhecidas pela arte de extorquir milionários. No entanto, enquanto a primeira é sofisticada, a segunda tem métodos muito menos elegantes. De início Josephine aceita Penny como sua pupila, mas logo se percebe que na verdade a intenção era usá-la para um golpe específico e, logo em seguida, descartá-la. Surge então uma disputa entre elas, sobre quem conseguirá antes a quantia de US$ 500 mil de Thomas Westerburg (Alex Sharp), um prodígio da tecnologia, que está hospedado na cidade.",
            [new Categoria("Comédia")],
            "http://br.web.img2.acsta.net/r_1920_1080/pictures/19/02/16/19/26/1280625.jpg",4),

            new Filme("Ted Bundy: A Irresistível Face do Mal",
            "Cinebiografia de Ted Bundy (Zac Efron), serial killer que matou, pelo menos, 30 mulheres em sete estados norte-americanos durante a década de 1970. Bundy se tornou famoso em todo o país, em parte por causa da fama de sedutor, que levou a conquistar várias fãs, e em parte por ter efetuado sua própria defesa nos tribunais. A trajetória do psicopata é contada pelo ponto das mulheres que amou: Liz Kendall (Lily Collins), com quem se casou, e Carole Ann Boone (Kaya Scodelario), amante que o apoiou durante o longo julgamento nos tribunais.",
            [new Categoria("Suspense"), new Categoria("Drama")],
            "http://br.web.img3.acsta.net/r_1920_1080/pictures/19/07/03/22/58/2550143.jpg",5),
            
            new Filme("AS RAINHAS DA TORCIDA",
            "Diagnosticada com câncer terminal, a solitária Martha (Diane Keaton) decide se livrar de todos os seus pertences pessoais e se mudar para uma comunidade de idosos com o intuito de esperar a morte chegar. Em seus últimos meses, ela quer uma vida tranquila, lendo livros e interagindo com poucas pessoas, mas ao conhecer sua nova vizinha, Sheryl (Jacki Weaver), uma mulher ativa e barulhenta, Martha vê seus planos indo por água abaixo, já que a nova companhia faz questão de se manter constantemente presente. A medida que a relação das duas se desenvolve, uma forte amizade surge e Sheryl incentiva Martha a treinar os passos de líder de torcida novamente, como fazia na época da escola. Resistente, a protagonista topa a ideia e juntas elas montam um clube para empoderar diversas mulheres acima dos 60 anos. Para fazer isso, elas precisam enfrentar o preconceito de todos e treinar para uma importante competição.",
            [new Categoria("Comédia")],
            "http://br.web.img2.acsta.net/r_1920_1080/pictures/19/05/27/16/09/0821376.jpg",6),

            new Filme("Toy Story 4",
            "Agora morando na casa da pequena Bonnie, Woody apresenta aos amigos o novo brinquedo construído por ela: Forky, baseado em um garfo de verdade. O novo posto de brinquedo não o agrada nem um pouco, o que faz com que Forky fuja de casa. Decidido a trazer de volta o atual brinquedo favorito de Bonnie, Woody parte em seu encalço e, no caminho, reencontra Bo Peep, que agora vive em um parque de diversões.",
            [new Categoria("Animação"), new Categoria("Aventura"), new Categoria("Família")],
            "http://br.web.img3.acsta.net/r_1920_1080/pictures/19/03/27/21/03/0464387.jpg",7),

            new Filme("Atentado ao Hotel Taj Mahal",
            "Mumbai, Índia, 2008. Um grupo de terroristas chega à cidade de barco, disposto a promover uma série de ataques em locais icônicos da cidade. Um deles é o luxuoso hotel Taj Mahal, bastante conhecido pela quantidade de estrangeiros e artistas que nele se hospeda. Quando os ataques começam, o humilde funcionário Arjun (Dev Patel) tenta ajudar todos a se protegerem, enquanto David (Armie Hammer) e Zahra (Nazanin Boniadi) buscam algum meio de retornar ao quarto em que estão hospedados, já que nele está seu bebê e Sally (Tilda Cobham-Hervey), sua babá.",
            [new Categoria("Drama")],"http://br.web.img3.acsta.net/r_1920_1080/pictures/19/03/26/15/24/1620387.jpg",8),

            new Filme("O Mistério do Gato Chinês",
            "Durante a dinastia Tang, na China, um gato misterioso começa a atacar altos membros da Corte Imperial, deixando uma série de mortos. Dois homens muito diferentes, o poeta chinês Bai Letian (Huang Xuan) e o monge japonês Kûkai (Shôta Sometani) decidem unir forças para descobrir o que existe por trás do animal místico. Aos poucos, eles descobrem segredos na história da nobreza, envolvendo uma bela concubina amada pelo Imperador, mas atacada pelo povo. O gato constituiria, na verdade, o acerto de contas por um crime jamais solucionado.",
            [new Categoria("Drama"),new Categoria("Fantasia"),new Categoria("Suspense")],
            "http://br.web.img3.acsta.net/r_1920_1080/pictures/18/08/15/00/06/4479703.jpg",9)
        ];
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
            let catego=item.getCategorias();
            for(let item2 of catego){
                if(item2.getNome()==this.categoriaDefalt){
                    this.list.push(item);
                    break;
                }
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
                if (filme.getId()==id) {
                    array.push(filme);
                }
        }
        return array;
    }
}