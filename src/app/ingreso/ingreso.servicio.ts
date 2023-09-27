import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[]=[
        new Ingreso("Salario",2400),
        new Ingreso("Venta coche", 3000)
    ];
}