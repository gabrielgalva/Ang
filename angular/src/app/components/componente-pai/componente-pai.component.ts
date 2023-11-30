import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  template: `
    <h2>Componente Pai</h2>
    <div class="container">
      <input [(ngModel)]="novoItem" placeholder="Digite um item" />
      <button (click)="adicionarItem()">Adicionar Item</button>
    </div>
    <app-componente-filho [itens]="listaDeItens"></app-componente-filho>
  `,
  styleUrls: ['./componente-pai.component.css'],
})
export class ComponentePaiComponent {
  listaDeItens: string[] = [];
  novoItem = '';

  adicionarItem() {
    if (this.novoItem.trim() !== '') {
      this.listaDeItens.push(this.novoItem);
      this.novoItem = '';
    }
  }
}
