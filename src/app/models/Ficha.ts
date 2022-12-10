import { Treino } from "./Treino";

export class Ficha{
    public id: string;
    public treinos: Treino[];

    constructor(id: string){
        this.id = id;
        this.treinos = [];
    }

}