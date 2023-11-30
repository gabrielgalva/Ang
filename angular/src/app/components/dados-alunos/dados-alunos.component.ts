import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../aluno.service';

@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css'],
})
export class DadosAlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe((data: any[]) => {
      this.alunos = data;
    });
  }

  calcularMediaGlobal(rendimentoEscolar: any): number {
    const notas = Object.values(rendimentoEscolar) as number[]; 
    const mediaGlobal = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    return parseFloat(mediaGlobal.toFixed(2));
  }
}

