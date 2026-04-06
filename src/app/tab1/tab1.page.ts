import { Component } from '@angular/core';
import { SenhasService } from '../servic  es/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})
export class Tab1Page {

  constructor(private senhasService: SenhasService) {}

  gerarSenha(tipo: string) {
    const numero = Math.floor(Math.random() * 1000);
    const senha = tipo + numero;
    this.senhasService.adicionarSenha(senha);
  }

}

