
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface TodoItem {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  items: TodoItem[] = [
    { text: 'Tarefa 1', completed: false },
    { text: 'Tarefa 2', completed: false },
    { text: 'Tarefa 3', completed: false }
  ];

  newItem: string = '';

  constructor(private formBuilder: FormBuilder) {}

  addItem() {
    const text = this.newItem.trim();
    if (text !== '') {
      if (this.items.length < 10) { 
        this.items.push({ text, completed: false });
        this.newItem = '';
      } else {
        alert('Você atingiu o limite máximo de tarefas.');
      }
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  completeItem(index: number) {
    this.items[index].completed = !this.items[index].completed;
  }
}
