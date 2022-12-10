import { Component } from '@angular/core';
import { Exercicio } from 'src/app/models/Exercicio';
import { Ficha } from 'src/app/models/Ficha';
import { Treino } from 'src/app/models/Treino';
import dataJson from '../../data/ficha.json';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent {

  treinoSelecionado: Treino;
  ficha: Ficha;
  
  constructor(){
    this.ficha = new Ficha(dataJson.ficha.id); 
    dataJson.ficha.treinos.forEach(rawTreino =>{
      
      let treino = new Treino();
      treino.nome = rawTreino.nome;
      treino.id = rawTreino.id;
      rawTreino.exercicios.forEach(e =>{
        treino.addExercicio(new Exercicio(e.nome, e.series, e.repeticoes));
      });

      this.ficha.treinos.push(treino);
      console.log(this.ficha);
    })

    this.treinoSelecionado = this.ficha.treinos[0]; 
  }

  selecionarTreinoPorId(idTreino: string): void{
    var treinoAtual: Treino = this.treinoSelecionado;
    this.treinoSelecionado = this.ficha.treinos.find(t => t.id === idTreino) || treinoAtual;
    console.log('Novo treino selecionado: ', this.treinoSelecionado);
  }
}
