import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[]=[
        new Ingreso("Salario",2400),
        new Ingreso("Venta coche", 3000)
    ];

eliminar(ingreso:Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
}

}