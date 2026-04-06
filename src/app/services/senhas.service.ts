import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  filaSP: string[] = [];
  filaSG: string[] = [];
  filaSE: string[] = [];

  painel: { senha: string, guiche: number }[] = [];

  ultimaSenha: string = '';

  guicheAtual = 1;

  contador: Record<'SP' | 'SG' | 'SE', number> = {
    SP: 0,
    SG: 0,
    SE: 0
  };

  gerarSenha(tipo: 'SP' | 'SG' | 'SE') {
    this.contador[tipo]++;
    const senha = tipo + this.contador[tipo];

    if (tipo === 'SP') this.filaSP.push(senha);
    if (tipo === 'SG') this.filaSG.push(senha);
    if (tipo === 'SE') this.filaSE.push(senha);
  }

  chamarSenha() {
    let senha = '';
    let guiche = this.guicheAtual;

    if (this.ultimaSenha !== 'SP') {
      if (this.filaSP.length > 0) {
        senha = this.filaSP.shift()!;
        this.ultimaSenha = 'SP';
      }
    }

    if (!senha) {
      if (this.ultimaSenha === 'SP') {
        if (this.filaSE.length > 0) {
          senha = this.filaSE.shift()!;
          this.ultimaSenha = 'SE';
        } else if (this.filaSG.length > 0) {
          senha = this.filaSG.shift()!;
          this.ultimaSenha = 'SG';
        }
      }
    }

    if (!senha) {
      if (this.filaSE.length > 0) {
        senha = this.filaSE.shift()!;
        this.ultimaSenha = 'SE';
      } else if (this.filaSG.length > 0) {
        senha = this.filaSG.shift()!;
        this.ultimaSenha = 'SG';
      }
    }

    if (senha) {
      this.painel.unshift({
        senha: senha,
        guiche: guiche
      });

      if (this.painel.length > 5) {
        this.painel.pop();
      }

      this.guicheAtual++;
      if (this.guicheAtual > 3) {
        this.guicheAtual = 1;
      }
    }

    return senha;
  }

}