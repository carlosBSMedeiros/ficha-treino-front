import { Exercicio } from "./Exercicio";

export class Treino{
    id:string;
    nome: string;
    exercicios: Exercicio[];

    constructor(){
        this.id = "";
        this.nome = "Treino";
        this.exercicios = [];
    }

    addExercicio(exercicio: Exercicio): void{
        this.exercicios.push(exercicio);
    }
}