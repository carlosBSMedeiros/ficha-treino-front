import { Component, Input } from '@angular/core';
import { Treino } from 'src/app/models/Treino';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css']
})
export class TreinoComponent {

  @Input() treino: Treino;

  constructor(){
    this.treino = new Treino();
  }

}
