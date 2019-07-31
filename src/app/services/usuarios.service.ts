import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuariosService{
    usuarios: Usuario[] = [
        new Usuario(1,"Gefferson","geffpires","123456",[1,2],[2],[2]),
        new Usuario(2,"Gerson","gerson","123456",[1,2],[1],[1])
    ]
}