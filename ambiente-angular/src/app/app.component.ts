import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'Bruno Costa e Silva';
  text: string = '';

  pessoas = [
    {
      nome: 'Bruno',
      sobrenome: 'Costa',
    },
    {
      nome: 'Maria',
      sobrenome: 'Silva',
    },
    {
      nome: 'Joao',
      sobrenome: 'Pereira',
    },
    {
      nome: 'Marcio',
      sobrenome: 'Santos',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou(nome: string): void {
    console.log('Clicou em mim', nome);
  }
}
