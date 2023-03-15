import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {

  cronometroIniciado : boolean = false;
  tempoTotal: number = 0;
  minutos: number = 0;
  segundos: number = 0;
  intervalo: any;

  constructor(){
    this.cronometroIniciado = false;
  }

  iniciarPararCronometro() {
    if(this.cronometroIniciado){
      console.log('Cronometro parado')
      this.pausarCronometro();
    } else{
      console.log('Cronometro iniciado')
      this.iniciarCronometro();
    }
    this.cronometroIniciado = !this.cronometroIniciado;
  }

  iniciarCronometro(){
    this.intervalo = setInterval(()=>
      this.somarTempo()
    , 1000);
  }

  somarTempo(){
    this.tempoTotal++;
    this.minutos = Math.floor(this.tempoTotal / 60);
    this.segundos = this.tempoTotal % 60;
  }

  pausarCronometro(){
    clearInterval(this.intervalo);
  }

  zerarCronometro(){
    this.tempoTotal = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.cronometroIniciado = false;
    clearInterval(this.intervalo);
  }

  formatarMinutos():string{
    return this.minutos < 10 ? "0"+this.minutos : this.minutos.toString() 
  }

  formatarSegundos(){
    return this.segundos < 10 ? "0"+this.segundos : this.segundos.toString() 
  }
}
