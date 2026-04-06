import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})
export class Tab3Page {

  senhas: string[] = ['SP1', 'SG2', 'SE3'];
  ultimas: string[] = [];

  constructor() {}

  chamarSenha() {
    if (this.senhas.length > 0) {
      const chamada = this.senhas.shift();
      this.ultimas.unshift(chamada!);

      if (this.ultimas.length > 5) {
        this.ultimas.pop();
      }
    }
  }

}