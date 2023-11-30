import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  template: `
    <h2>Componente Filho</h2>
    <ul>
      <li *ngFor="let item of itens">{{ item }}</li>
    </ul>
  `,
})
export class ComponenteFilhoComponent {
  @Input() itens: string[] = [];
}
