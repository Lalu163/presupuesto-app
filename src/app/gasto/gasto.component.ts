import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from './gasto.model';
import { GastoServicio } from './gasto.servicio';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {

  gastos:Gasto[]=[];
  @Input() ingresoTotal:number;

  constructor(private gastoServicio:GastoServicio) { }

  ngOnInit() {
    this.gastos = this.gastoServicio.gastos;
  }

  eliminarGasto(gasto:Gasto){
    this.gastoServicio.eliminar(gasto);
  }

  calcularPorcentaje(gasto:Gasto){
    return gasto.valor/this.ingresoTotal;
  }

}
