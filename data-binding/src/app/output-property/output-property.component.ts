import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  increment() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrement() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
