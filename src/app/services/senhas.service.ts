import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  senhas: string[] = [];

  adicionarSenha(s: string) {
    this.senhas.push(s);
  }

}