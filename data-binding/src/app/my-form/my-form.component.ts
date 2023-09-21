import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  nome: string = 'abc';

  pessoa: any = {
    nome: 'sas',
    idade: 20,
  };
}
