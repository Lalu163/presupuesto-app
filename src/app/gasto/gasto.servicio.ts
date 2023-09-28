import { Gasto } from "./gasto.model";

export class GastoServicio{
    gastos: Gasto[]=[
        new Gasto("Alquiler piso", 700),
        new Gasto("Ropa", 150)
    ];

eliminar(gasto:Gasto){
    const indice:number=this.gastos.indexOf(gasto);
    this.gastos.splice(indice,1);
}

}