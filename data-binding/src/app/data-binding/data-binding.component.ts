import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `,
  ],
})
export class DataBindingComponent {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200/nature';

  valorAtual = '';
  valorSalvo = '';

  isMouseOver = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onClick() {
    alert('teste');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(value: any) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    console.log(!this.isMouseOver);
    this.isMouseOver = !this.isMouseOver;
  }

  onChangeValue(evento: any) {
    console.log(evento.novoValor);
  }
}
